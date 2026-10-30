export enum Role {
  USER = "USER",
  ADMIN = "ADMIN",
  SUPER_ADMIN = "SUPER ADMIN",
}
export const all_admins = [Role.ADMIN, Role.SUPER_ADMIN];

export type TResponseData = {
  _id: string;
  createdAt: string;
  updatedAt: string;
};

export type TImage = {
  path: string;
  public_id: string;
};