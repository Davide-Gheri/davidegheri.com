
export interface FooterThanks {
  name?: string;
  url?: string;
}

export interface FooterNode {
  thanks?: FooterThanks[];
}

export interface FooterQuery<T extends FooterNode = FooterNode> {
  datoCmsFooter: T;
}
