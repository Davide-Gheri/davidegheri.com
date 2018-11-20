
export interface ContactNode {
  address?: string;
  telephone?: string;
  email?: string;
}

export interface ContactQuery {
  datoCmsContact: ContactNode;
}
