export type SignInType = {
  email: string;
  password: string;
};

export type SignUpType = {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  confirmPassword: string;
};

export interface ImageType {
  id: string;
  url: string;
}
