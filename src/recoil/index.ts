import { atom } from "recoil";
import { User } from "../types/user";

export const userStore = atom<User>({
  key: "user",
  default: null,
});
