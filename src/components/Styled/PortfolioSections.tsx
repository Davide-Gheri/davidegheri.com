import styled from 'styled-components';
import { media } from '../../utils/styled';

export const PortfolioBackground = styled.div`
  width: 100%;
  background: #fff;
  padding: 0 4vw;
`;

export const PortfolioWrapper = styled.article`
  max-width: 1040px;
  margin: 0 auto;
  position: relative;
  z-index: 50;
`;

export const PortfolioHeader = styled.header`
  margin: 0 auto;
  max-width: 1040px;
  text-align: center;
  padding: 18vw 3vw 10vw;
  ${media.sm`
    padding: 10vw 3vw 3vw;
  `};
`;

export const PortfolioMeta = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  color: #738a94;
  font-weight: 600;
  text-transform: uppercase;
  font-size: .9rem;
  line-height: 1.3em;
  ${media.sm`
    font-size: 1.1rem;
    line-height: inherit;
  `};
`;

export const PortfolioMetaDate = styled.time`
  color: #3eb0ef;
`;

export const PortfolioTitle = styled.h1`
  margin: 0;
  color: rgb(11, 12, 14);
  font-size: 2.5rem;
  line-height: 1.15;
  ${media.sm`
    font-size: 3rem;
  `}
`;

export const PortfolioImage = styled.figure`
  background: #c5d2d9 center center;
  margin: 0 -10vw -165px;
  height: 800px;
  background-size: cover;
  border-radius: 5px;
  @media (max-width: 1170px) {
    margin: 0 -4vw -100px;
    height: 600px;
    border-radius: 0;
  }
  @media (max-width: 800px) {
    height: 400px;
  }
  @media (max-width: 500px) {
    margin-bottom: 4vw;
    height: 350px;
  }
`;