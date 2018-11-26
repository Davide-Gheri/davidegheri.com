import { ImageFixed, ImageFluid, Remark, SeoMetaTags } from './common';

export interface AboutRow {
  [key: string]: any;
  image?: {
    fluid?: ImageFluid;
    fixed?: ImageFixed;
  };
  text?: string;
  text2?: string;
  textNode?: {
    childMarkdownRemark: Remark;
  };
  text2Node?: {
    childMarkdownRemark: Remark;
  };
}

export interface AboutNode {
  image?: {
    fluid?: ImageFluid;
    fixed?: ImageFixed;
  };
  homepage?: string;
  page?: AboutRow[];
  seoMetaTags?: SeoMetaTags;
  homepageSkills?: {
    skill: string;
  }[];
}

export interface AboutQuery {
  datoCmsAbout: AboutNode;
}
