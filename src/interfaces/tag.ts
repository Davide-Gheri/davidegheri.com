import { SeoMetaTags } from './common';

export interface TagNode {
  id?: string;
  title?: string;
  slug?: string;
  description?: string;
  seoMetaTags?: SeoMetaTags;
  updatedAt?: string;
}

export interface TagQuery {
  datoCmsTag: TagNode;
}
