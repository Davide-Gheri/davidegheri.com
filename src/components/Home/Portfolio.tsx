import React, { PureComponent } from 'react';
import styled from 'styled-components';
import { StaticQuery, graphql } from 'gatsby';
import { media } from '../../utils/styled';
import { Section, SectionTitle, SectionPadding } from '../Styled';
import Card from '../Portfolio/Card';
import { PortfolioQuery } from '../../interfaces';
import { PortfolioGrid } from '../Portfolio/PortfolioGrid';

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
    `} render={(data: PortfolioQuery) => <PortfolioGrid data={data}/>}/>
  </Section>
);
