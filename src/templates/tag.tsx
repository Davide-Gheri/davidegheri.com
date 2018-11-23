import React from 'react';
import Layout from '../components/Layout';
import { PortfolioGrid } from '../components/Portfolio/PortfolioGrid';
import { PortfolioHeader, PortfolioTitle, MainSection } from '../components/Styled';
import { graphql } from 'gatsby';
import { PortfolioQuery, TagQuery } from '../interfaces';

const TagTemplate = ({ data, location}: {data: PortfolioQuery & TagQuery, location: any}) => {
  console.log(data);
  return (
    <Layout headerTransparent={false}>
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
    datoCmsTag(id: { eq: $id }) {
      title
      slug
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
