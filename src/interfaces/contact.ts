
export interface ContactNode {
  address?: string;
  telephone?: string;
  email?: string;
  successMessage?: string;
  errorMessage?: string;
}

export interface ContactQuery<T extends ContactNode = ContactNode> {
  datoCmsContact: T;
}
