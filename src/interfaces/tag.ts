
export interface TagNode {
  id?: string;
  title?: string;
  slug?: string;
}

export interface TagQuery {
  datoCmsTag: TagNode;
}
