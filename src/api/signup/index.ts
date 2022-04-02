import { User } from "../../types/user";
import { Repository, url } from "../repository";

export type TSignup = { name: string; email: string };

export const signupClient = (input: TSignup): Promise<User> => {
  return Repository.post(`${url}/signup`, input);
};
