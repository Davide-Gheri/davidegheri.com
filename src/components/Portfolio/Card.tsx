import React from 'react';
import { Link } from 'gatsby';
import Img from 'gatsby-image';
import styled from '@styled-components';
import { PortfolioNode } from '@interfaces';
import { portfolioUrl } from '@utils';

const CardWrapper = styled.article`
  width: auto;
  max-width: none;
  overflow: hidden;
  margin: .5rem;
  background: #38a89d;
  color: #ffffff;
  opacity: 1;
  border-radius: 3px;
  visibility: visible;
  box-shadow: rgba(39, 44, 49, 0.06) 8px 14px 38px, rgba(39, 44, 49, 0.03) 1px 3px 8px;
  transition: all .5s ease;
  :hover {
    box-shadow: rgba(39, 44, 49, 0.07) 8px 28px 50px, rgba(39, 44, 49, 0.04) 1px 6px 12px;
    transition: all 0.4s ease;
    transform: translate3D(0, -1px, 0) scale(1.02);
  }
`;

const CardContent = styled.main`
  padding: 1rem 1.5rem;
`;

const CardHeader = styled.header`
`;

const CardTag = styled.span`
  display: block;
  margin-bottom: 4px;
  color: #2f365f;
  font-size: .75rem;
  line-height: 1.15em;
  font-weight: 500;
  letter-spacing: 0.5px;
  text-transform: uppercase;
`;

const CardTitle = styled.h4`
  font-size: 1.5rem;
  margin: 0 0 0.5em 0;
  font-weight: 700;
`;

const CardBlockLink = styled(Link)`
  text-decoration: none;
  color: inherit;
  display: block;
`;

const CardExcerpt = styled.p`
  color: inherit;
  line-height: 1.5;
  margin: 0;
  font-family: Georgia, serif;
  padding-bottom: 2rem;
`;

const Card = ({portfolio}: {portfolio: PortfolioNode}) => {
  return (
    <CardWrapper>
      <CardBlockLink to={portfolioUrl(portfolio)} className="content">
        {portfolio.image && <Img fluid={portfolio.image.fluid} />}
        <CardContent>
          <CardHeader>
            {portfolio.tags && <CardTag>{portfolio.tags[0].title}</CardTag>}
            <CardTitle>{portfolio.title}</CardTitle>
          </CardHeader>
          {portfolio.contentNode && <CardExcerpt>{portfolio.contentNode.childMarkdownRemark.excerpt}</CardExcerpt>}
        </CardContent>
      </CardBlockLink>
    </CardWrapper>
  );
};

export default Card;
