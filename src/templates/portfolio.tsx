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
import { SinglePortfolioQuery } from '../interfaces';
import { SeoQuery } from '../interfaces/seo';
import { ImageFluid } from '../interfaces/common';

const PortfolioTemplate = ({ data, location }: {data: SinglePortfolioQuery & SeoQuery, location: any}) => {
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
                "author": {"@id": "/#me"},
                "publisher": {"@id": "/#org"},
                "datePublished": "${data.datoCmsPortfolio.updatedAt}",
                "image": "${data.datoCmsPortfolio.image ? (data.datoCmsPortfolio.image.fluid as ImageFluid).src : 'https://www.datocms-assets.com/8298/1542709217-sample-5.jpg'}",
                "mainEntityOfpage": {
                  "@type": "WebPage",
                  "url": "${location.href}"
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
                  <CategoryLink to={`/${data.datoCmsPortfolio.tags[0].slug}`}>{data.datoCmsPortfolio.tags[0].title}</CategoryLink>
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
    datoCmsSite {
      globalSeo {
        siteName
      }
    }
    datoCmsPortfolio(id: { eq: $id }) {
      title
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
