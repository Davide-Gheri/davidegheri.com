import React from 'react';
import { graphql, Link } from 'gatsby';
import Img from 'gatsby-image';
import { HelmetDatoCms } from 'gatsby-source-datocms';
import Layout from '../components/Layout';
import { Content, FeaturedSection, FeaturedImage, MainSection, ArticleContent } from '../components/Styled';
import { SinglePortfolioQuery } from '../interfaces';
import { SeoQuery } from '../interfaces/seo';
import { ImageFluid } from '../interfaces/common';
import styled from 'styled-components';
import { media } from '../utils/styled';

const PortfolioBackground = styled.div`
  width: 100%;
  height: 100%;
  background: #fff;
`;

const PortfolioWrapper = styled.article`
  max-width: 1040px;
  margin: 0 auto;
  position: relative;
  z-index: 50;
`;

const PortfolioHeader = styled.header`
  margin: 0 auto;
  max-width: 1040px;
  text-align: center;
  padding: 14vw 3vw 10vw;
  ${media.sm`
    padding: 10vw 3vw 3vw;
  `};
`;

const PortfolioMeta = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  color: #738a94;
  font-weight: 600;
  text-transform: uppercase;
  font-size: 1.2rem;
  line-height: 1.3em;
  ${media.sm`
    font-size: 1.4rem;
    line-height: inherit;
  `};
`;

export const PortfolioMetaDate = styled.time`
  color: #3eb0ef;
`;

export const DateDivider = styled.span`
  display: inline-block;
  margin: 0 6px 1px;
`;

export const CategoryLink = styled(Link)`
  color: #26a6ed;
  text-decoration: none;
  :hover {
    text-decoration: underline;
  }
`;

const PortfolioTitle = styled.h1`
  margin: 0;
  color: rgb(11, 12, 14);
  font-size: 2.5rem;
  line-height: 1.15;
  ${media.sm`
    font-size: 3rem;
  `}
`;

const PortfolioImage = styled.figure`
  background: #c5d2d9 center center;
  margin: 0 -11vw -165px;
  height: 800px;
  background-size: cover;
  border-radius: 5px;
  @media (max-width: 1170px) {
    margin: 0 -4vw -100px;
    height: 600px;
    border-radius: 0;
  }
  @media (max-width: 800px) {
    height: 400px;
  }
  @media (max-width: 500px) {
    margin-bottom: 4vw;
    height: 350px;
  }
`;

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
      updatedAt
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
