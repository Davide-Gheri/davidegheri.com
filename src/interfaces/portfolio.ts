import { ImageFixed, ImageFluid, Remark, SeoMetaTags } from './common';

export interface PortfolioNode {
  id?: string;
  title?: string;
  slug?: string;
  updatedAt?: string;
  seoMetaTags?: SeoMetaTags;
  content?: string;
  contentNode?: {
    childMarkdownRemark?: Remark;
  };
  image?: {
    fluid?: ImageFluid;
    fixed?: ImageFixed;
  };
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
