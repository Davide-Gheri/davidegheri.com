
export interface FooterThanks {
  name?: string;
  url?: string;
}

export interface FooterNode {
  thanks?: FooterThanks[];
}

export interface FooterQuery {
  datoCmsFooter: FooterNode;
}
