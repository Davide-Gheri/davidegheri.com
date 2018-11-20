
export interface SeoNode {
  name?: string;
  globalSeo: {
    siteName?: string;
    fallbackSeo?: {
      title?: string;
      description?: string;
    }
  };
  faviconMetaTags?: {
    tags: FaviconTag[];
  };
}

export interface FaviconTag {
  tagName: string;
  attributes: {
    name?: string;
    sizes?: string;
    rel?: string;
    href?: string;
    type?: string;
    content?: string;
  };
}

export interface SeoQuery {
  datoCmsSite: SeoNode;
}
