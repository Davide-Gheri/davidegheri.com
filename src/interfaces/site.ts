
export interface SiteMetadata {
  baseUrl?: string;
}

export interface SiteNode {
  siteMetadata: SiteMetadata;
}

export interface SiteQuery {
  site: SiteNode;
}
