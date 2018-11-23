import React from 'react';
import Layout from '../components/Layout';
import { PortfolioBackground, PortfolioWrapper, MainSection } from '../components/Styled';
import styled from 'styled-components';

const NotFoundContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  text-align: center;
  height: calc(100vh - 48px - 3rem);
  width: 100%;
`;

const NotFoundPage = () => (
  <Layout headerTransparent={false}>
    <PortfolioBackground>
      <PortfolioWrapper>
        <MainSection>
          <NotFoundContent>
            <h1>NOT FOUND</h1>
            <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
          </NotFoundContent>
        </MainSection>
      </PortfolioWrapper>
    </PortfolioBackground>
  </Layout>
);

export default NotFoundPage;
