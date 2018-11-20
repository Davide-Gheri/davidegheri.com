import React from 'react';
import Layout from '../components/layout';
import styled from 'styled-components';

const Wrapper = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  height: 100vh;
`;

const NotFoundPage = () => (
  <Layout>
    <Wrapper>
      <h1>NOT FOUND</h1>
      <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
    </Wrapper>
  </Layout>
);

export default NotFoundPage;
