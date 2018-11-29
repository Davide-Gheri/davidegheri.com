
export interface ContactNode {
  address?: string;
  telephone?: string;
  email?: string;
  successMessage?: string;
  errorMessage?: string;
}

export interface ContactQuery {
  datoCmsContact: ContactNode;
}
