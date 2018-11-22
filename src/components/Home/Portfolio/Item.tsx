import React from 'react';
import styled from 'styled-components';
import { Link } from 'gatsby';
import Img from 'gatsby-image';

const GridItem = styled.div`
  width: auto;
  max-width: none;
  overflow: hidden;
  margin: .5rem;
  background: #38a89d;
  color: #ffffff;
  opacity: 1;
  visibility: visible;
  box-shadow: rgba(39, 44, 49, 0.06) 8px 14px 38px, rgba(39, 44, 49, 0.03) 1px 3px 8px;
  transition: all .5s ease;
  :hover {
    box-shadow: rgba(39, 44, 49, 0.07) 8px 28px 50px, rgba(39, 44, 49, 0.04) 1px 6px 12px;
    transition: all 0.4s ease;
    transform: translate3D(0, -1px, 0) scale(1.02);
  }
`;

const ItemContent = styled.div`
  padding: 1rem 1.5rem;
`;

const ItemTitle = styled.div`
  font-size: 1.5rem;
  margin-bottom: .5rem;
  font-weight: 700;
`;

const ItemBlockLink = styled(Link)`
  text-decoration: none;
  color: inherit;
  display: block;
`;

const ItemExcerpt = styled.p`
  color: inherit;
  line-height: 1.5;
  margin: 0;
  font-family: Georgia, serif;
  padding-bottom: 2rem;
`;

const Item = ({portfolio}: {portfolio: any}) => {
  const content = portfolio.contentNode.childMarkdownRemark.excerpt;
  return (
    <GridItem>
      <ItemBlockLink to={`/${portfolio.slug}`} className="content">
        <Img fluid={portfolio.image.fluid} />
        <ItemContent>
            <ItemTitle>{portfolio.title}</ItemTitle>
            <ItemExcerpt>{content}</ItemExcerpt>
        </ItemContent>
      </ItemBlockLink>
    </GridItem>
  );
};

export default Item;
