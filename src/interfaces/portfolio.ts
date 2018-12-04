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

export interface PortfoliosQuery<T extends PortfolioNode = PortfolioNode> {
  allDatoCmsPortfolio: {
    edges: {
      node: T;
    }[];
  };
}

export interface PortfolioQuery<T extends PortfolioNode = PortfolioNode> {
  datoCmsPortfolio: T;
}
