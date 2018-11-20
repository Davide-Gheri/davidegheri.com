import styled from 'styled-components';
import { media } from '../../utils/styled';
import Img from 'gatsby-image';

export const FeaturedSection = styled.section`
  width: 100%;
  overflow: hidden;
  position: relative;
  height: 50vh;
  ${media.md`height: 100vh`};
  ${media.xl`height: 80vh`};
`;

export const FeaturedImage = styled(Img)`
  min-width: 100%;
  min-height: 100%;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  z-index: -1;
`;

export const MainSection = styled.section`
  min-height: 500px;
  background: #fff;
  line-height: 2;
  font-size: 1.125rem;
  padding: 1.5rem 0;
`;

export const ArticleContent = styled.article`
  width: 100%;
  padding: 0 1.5rem;
  margin: 0 auto;
  ${media.lg`
    padding: 0;
    width: 60%;
  `};
`;