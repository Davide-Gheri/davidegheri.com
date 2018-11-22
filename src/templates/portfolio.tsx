import React from 'react';
import { graphql } from 'gatsby';
import { HelmetDatoCms } from 'gatsby-source-datocms';
import Layout from '../components/Layout';
import { Content, FeaturedSection, FeaturedImage, MainSection, ArticleContent } from '../components/Styled';
import { SinglePortfolioQuery } from '../interfaces';
import { SeoQuery } from '../interfaces/seo';
import { ImageFluid } from '../interfaces/common';

const PortfolioTemplate = ({ data, location }: {data: SinglePortfolioQuery & SeoQuery, location: any}) => {
  return (
    <Layout headerTransparent={true}>
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
      {data.datoCmsPortfolio.image && (
        <FeaturedSection className="transparent-checker">
          <figure>
            <FeaturedImage fluid={data.datoCmsPortfolio.image.fluid}/>
          </figure>
        </FeaturedSection>
      )}
      <MainSection>
        {(data.datoCmsPortfolio.contentNode && data.datoCmsPortfolio.contentNode.childMarkdownRemark) && (
          <ArticleContent>
            <Content dangerouslySetInnerHTML={{__html: data.datoCmsPortfolio.contentNode.childMarkdownRemark.html as string}}/>
          </ArticleContent>
        )}
      </MainSection>
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
      updatedAt
      contentNode {
        childMarkdownRemark {
          html
          timeToRead
        }
      }
      image {
        fluid(imgixParams: {auto: "compress"}) {
          ...GatsbyDatoCmsFluid
        }
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
