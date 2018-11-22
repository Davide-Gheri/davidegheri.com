import React from 'react';
import Layout from '../components/Layout';
import { PortfolioGrid } from '../components/Portfolio/PortfolioGrid';
import { graphql } from 'gatsby';

const TagTemplate = ({ data, location}: {data: any, location: any}) => {
  console.log(data);
  return (
    <Layout>
      <PortfolioGrid data={data}/>
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
        }
      }
    }
  }
`;
