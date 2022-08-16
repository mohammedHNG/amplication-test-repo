export type UserCreateInput = {
  firstName?: string | null;
  lastName?: string | null;
  password: string;
  roles: Array<string>;
  uid?: string | null;
  username: string;
};
