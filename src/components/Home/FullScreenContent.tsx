import React from 'react';
import { graphql, StaticQuery } from 'gatsby';
import styled from '@styled-components';
import Stars from '@components/Canvas/Stars';
import Skills from './Skills';
import { AboutNode, AboutQuery } from '@interfaces';

const Wrapper = styled.div`
  position: relative;
  height: 100vh;
  background: darkslateblue;
`;

const Title = styled.div`
  position: absolute;
  color: white;
  text-align: center;
  font-size: 1.5rem;
  z-index: 100;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

export const FullScreenContent = ({siteTitle}: any) => (
  <Wrapper className="transparent-checker">
    <Title>
      <h1>{siteTitle}</h1>
      <StaticQuery query={graphql`
        query SkillsQuery {
          datoCmsAbout {
            homepageSkills {
              skill
            }
          }
        }
      `} render={(data: AboutQuery<Required<Pick<AboutNode, 'homepageSkills'>>>) => {
        return (
          <Skills skills={data.datoCmsAbout.homepageSkills.map(s => s.skill)}/>
        );
      }}/>
    </Title>
    <Stars/>
  </Wrapper>
);
