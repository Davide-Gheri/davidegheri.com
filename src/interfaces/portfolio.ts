import { ImageFixed, ImageFluid, Remark, SeoMetaTags } from './common';
import { TagNode } from './tag';

export interface PortfolioNode {
  id?: string;
  title?: string;
  slug?: string;
  updatedAt?: string;
  seoMetaTags?: SeoMetaTags;
  content?: string;
  contentNode?: {
    childMarkdownRemark: Remark;
  };
  image?: {
    fluid?: ImageFluid;
    fixed?: ImageFixed;
  };
  tags?: TagNode[];
}

export interface PortfolioQuery {
  allDatoCmsPortfolio: {
    edges: {
      node: PortfolioNode;
    }[];
  };
}

export interface SinglePortfolioQuery {
  datoCmsPortfolio: PortfolioNode;
}
