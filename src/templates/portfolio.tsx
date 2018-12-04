import React from 'react';
import { graphql } from 'gatsby';
import Img from 'gatsby-image';
import { HelmetDatoCms } from 'gatsby-source-datocms';
import Layout from '../components/Layout';
import {
  Content,
  MainSection,
  ArticleContent,
  PortfolioBackground,
  PortfolioWrapper,
  PortfolioHeader,
  PortfolioMeta,
  PortfolioTitle,
  PortfolioMetaDate,
  DateDivider,
  CategoryLink,
  PortfolioImage,
} from '../components/Styled';
import { Pick2, PortfolioNode, PortfolioQuery, SiteNode, SiteQuery } from '../interfaces';
import { SeoNode, SeoQuery } from '../interfaces/seo';
import { ImageFluid } from '../interfaces/common';
import { author, portfolioUrl, publisher, tagUrl } from '../utils';

type PortfolioTemplateQuery = PortfolioQuery<Required<PortfolioNode>> & SeoQuery<Required<Pick<SeoNode, 'name' | 'globalSeo'>>> & SiteQuery<Pick2<SiteNode, 'siteMetadata', 'baseUrl'>>;

const PortfolioTemplate = ({ data }: {data: PortfolioTemplateQuery, location: any}) => {
  return (
    <Layout headerTransparent={false}>
      {data.datoCmsPortfolio.seoMetaTags && (
        <HelmetDatoCms seo={data.datoCmsPortfolio.seoMetaTags}>
          <script type="application/ld+json">
            {`
              {
                "@context": "http://schema.org",
                "@type": "Article",
                "headline": "${data.datoCmsPortfolio.title}",
                "author": ${author(data.datoCmsSite.name as string)},
                "publisher": ${publisher(data.datoCmsSite.globalSeo.siteName as string)},
                "datePublished": "${data.datoCmsPortfolio.updatedAt}",
                "image": "${data.datoCmsPortfolio.image ? (data.datoCmsPortfolio.image.fluid as ImageFluid).src : 'https://www.datocms-assets.com/8298/1542709217-sample-5.jpg'}",
                "mainEntityOfpage": {
                  "@type": "WebPage",
                  "url": "${data.site.siteMetadata.baseUrl}${portfolioUrl(data.datoCmsPortfolio)}"
                }
              }
            `}
          </script>
        </HelmetDatoCms>
      )}
      <PortfolioBackground>
        <PortfolioWrapper>
          <PortfolioHeader>
            <PortfolioMeta>
              <PortfolioMetaDate>{data.datoCmsPortfolio.updatedAt}</PortfolioMetaDate>
              {data.datoCmsPortfolio.tags && (
                <>
                  <DateDivider>/</DateDivider>
                  <CategoryLink to={tagUrl(data.datoCmsPortfolio.tags[0])}>{data.datoCmsPortfolio.tags[0].title}</CategoryLink>
                </>
              )}
            </PortfolioMeta>
            <PortfolioTitle>{data.datoCmsPortfolio.title}</PortfolioTitle>
          </PortfolioHeader>
          {data.datoCmsPortfolio.image && (
            <PortfolioImage className="transparent-checker">
              <Img style={{height: '100%'}} fluid={data.datoCmsPortfolio.image.fluid}/>
            </PortfolioImage>
          )}
          <MainSection>
            {(data.datoCmsPortfolio.contentNode && data.datoCmsPortfolio.contentNode.childMarkdownRemark) && (
              <ArticleContent>
                <Content dangerouslySetInnerHTML={{__html: data.datoCmsPortfolio.contentNode.childMarkdownRemark.html as string}}/>
              </ArticleContent>
            )}
          </MainSection>
        </PortfolioWrapper>
      </PortfolioBackground>
    </Layout>
  );
};

export default PortfolioTemplate;

export const query = graphql`
  query ArticleTemplate($id: String!) {
    site {
      siteMetadata {
        baseUrl
      }
    }
    datoCmsSite {
      name
      globalSeo {
        siteName
      }
    }
    datoCmsPortfolio(id: { eq: $id }) {
      title
      slug
      updatedAt(formatString: "LL")
      contentNode {
        childMarkdownRemark {
          html
          timeToRead
        }
      }
      image {
        fluid(maxWidth: 1440, imgixParams: {auto: "compress"}) {
          ...GatsbyDatoCmsFluid
        }
      }
      tags {
        title
        slug
      }
      seoMetaTags {
        tags {
          attributes {
            name
            content
            property
          }
          tagName
          content
        }
      }
    }
  }
`;
