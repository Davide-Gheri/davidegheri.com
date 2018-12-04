import React from 'react';
import styled from 'styled-components';
import { media } from '../../utils';
import { Section, SectionTitle, SectionPadding } from '../Styled';
import { graphql, Link, StaticQuery } from 'gatsby';
import { AboutNode, AboutQuery } from '../../interfaces';

const Wrapper = styled(SectionPadding)`
  ${media.md`
    width: 75%;
  `}
`;

const AboutQuoteContent = styled.p`
  line-height: 1.5;
  a {
    text-decoration: none;
    color: inherit;
    font-weight: 600;
    :hover {
      text-decoration: underline;
    }
  }
`;

export const About = () => (
  <Section background="#4dc0b5">
    <Wrapper>
      <SectionTitle title="Davide Gheri" subTitle="WhoAmI"/>
      <StaticQuery query={graphql`
        query AboutHomeQuery {
            datoCmsAbout {
                homepageAbout
            }
        }
      `} render={(data: AboutQuery<Required<Pick<AboutNode, 'homepageAbout'>>>) => (
        <AboutQuoteContent>
          {data.datoCmsAbout.homepageAbout}
          <span><br/><Link to="/about">More...</Link></span>
        </AboutQuoteContent>
      )}/>
    </Wrapper>
  </Section>
);
