import React from 'react';
import Layout from '../components/Layout';
import { PortfolioGrid } from '../components/Portfolio/PortfolioGrid';
import { HelmetDatoCms } from 'gatsby-source-datocms';
import { PortfolioHeader, PortfolioTitle, MainSection } from '../components/Styled';
import { graphql } from 'gatsby';
import { Pick2, PortfolioQuery, SiteQuery, TagQuery } from '../interfaces';
import { portfolioUrl, tagUrl } from '../utils';
import { ImageFluid } from '../interfaces/common';
import { SeoQuery } from '../interfaces/seo';

type TagTemplateQuery = PortfolioQuery & TagQuery & Pick2<SeoQuery, 'datoCmsSite', 'name' | 'globalSeo'> & SiteQuery;

const TagTemplate = ({ data }: {data: TagTemplateQuery, location: any}) => {
  return (
    <Layout headerTransparent={false}>
      <HelmetDatoCms seo={data.datoCmsTag.seoMetaTags}>
        <script type="application/ld+json">
          {`
              {
                "@context": "http://schema.org",
                "@type": "ItemList",
                "name": "${data.datoCmsTag.title}",
                "url": "${data.site.siteMetadata.baseUrl}${tagUrl(data.datoCmsTag)}",
                "description": "${data.datoCmsTag.description}",
                "itemListOrder": "unordered",
                "numberOfItems": "${data.allDatoCmsPortfolio.edges.length}",
                "itemListElement": ${data.allDatoCmsPortfolio.edges.map(({node}, k) => (
                  `{
                    "@type": "ListItem",
                    "position": "${k + 1}",
                    "url": "${data.site.siteMetadata.baseUrl}${portfolioUrl(node)}",
                    "name": "${node.title}",
                    "image": "${node.image ? (node.image.fluid as ImageFluid).src : 'https://www.datocms-assets.com/8298/1542709217-sample-5.jpg'}"
                  }`
                ))}
              }
            `}
        </script>
      </HelmetDatoCms>
      <div style={{background: '#4dc0b5'}}>
        <PortfolioHeader>
          <PortfolioTitle color="#fff">{data.datoCmsTag.title}</PortfolioTitle>
        </PortfolioHeader>
        <MainSection background="#2f365f">
          <PortfolioGrid data={data}/>
        </MainSection>
      </div>
    </Layout>
  );
};

export default TagTemplate;

export const query = graphql`
  query TagTemplate($id: String!) {
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
    datoCmsTag(id: { eq: $id }) {
      title
      slug
      description
      updatedAt(formatString: "LL")
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
    allDatoCmsPortfolio(
      filter: {tags: {elemMatch: {id: {eq: $id}}}}
    ) {
      edges {
        node {
          title
          slug
          id
          contentNode {
            childMarkdownRemark {
              excerpt
              timeToRead
            }
          }
          image {
            fluid(maxWidth: 600, imgixParams: {auto: "compress"}) {
              ...GatsbyDatoCmsFluid
            }
          }
        }
      }
    }
  }
`;
