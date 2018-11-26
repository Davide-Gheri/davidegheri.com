import React from 'react';
import Layout from '../components/Layout';
import { PortfolioBackground, PortfolioWrapper, MainSection } from '../components/Styled';
import styled from 'styled-components';
import { media } from '../utils/styled';

const NotFoundContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  text-align: center;
  height: calc(100vh - 48px - 3rem);
  width: 100%;
  color: #fff;
  h1 {
    font-size: 3rem;
    font-style: italic;
    font-family: Georgia, serif;
    font-weight: bold;
    margin: 0;
    line-height: 1;
    ${media.md`
      font-size: 5rem;
    `}
  }
`;

const NotFoundPage = () => (
  <Layout headerTransparent={false}>
    <PortfolioBackground background="#4dc0b5">
      <PortfolioWrapper>
        <MainSection background="transparent">
          <NotFoundContent>
            <h1>Oops!</h1>
            <h1>Nothing to see here!</h1>
          </NotFoundContent>
        </MainSection>
      </PortfolioWrapper>
    </PortfolioBackground>
  </Layout>
);

export default NotFoundPage;
