
export interface Remark {
  excerpt?: string;
  html?: string;
  timeToRead?: number;
}

export interface TagAttributes {
  property?: string;
  content?: string;
  name?: string;
}

export interface Tag {
  tagName?: string;
  attributes?: TagAttributes;
}

export interface SeoMetaTags {
  tags: Tag[];
}

export interface ImageFluid {
  [key: string]: any;
  base64?: string;
  aspectRatio?: string;
  src?: string;
  srcSet: string;
  sizes: string;
}

export interface ImageFixed {
  [key: string]: any;
  base64: string;
  width: string;
  height: string;
  src: string;
  srcSet: string;
}
