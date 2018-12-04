import React from 'react';
import { StaticQuery, graphql } from 'gatsby';
import { PortfoliosQuery } from '@interfaces';
import { Section, SectionTitle, SectionPadding } from '@components/Styled';
import { PortfolioGrid } from '@components/Portfolio/PortfolioGrid';

export const Portfolio = () => (
  <Section background="#2f365f">
    <SectionPadding>
      <SectionTitle title="Portfolio" subTitle="Works" subtitleColor="#4dc0b5"/>
    </SectionPadding>
    <StaticQuery query={graphql`
      query {
        allDatoCmsPortfolio {
          edges {
            node {
              id
              title
              slug
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
              tags {
                title
                slug
              }
            }
          }
        }
      }
    `} render={(data: PortfoliosQuery) => <PortfolioGrid data={data}/>}/>
  </Section>
);
