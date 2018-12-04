
export interface SiteMetadata {
  baseUrl?: string;
  recaptcha?: {
    key?: string;
    secret?: string
  };
}

export interface SiteNode {
  siteMetadata: SiteMetadata;
}

export interface SiteQuery<T extends SiteNode = SiteNode> {
  site: T;
}
