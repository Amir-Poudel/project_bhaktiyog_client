import { TLogin, TRegister } from "@/types/auth.types";
import { Role, TImage, TResponseData } from "@/types/global.types";
import { createContext } from "react";

export type TUser = {
  full_name: string;
  email: string;
  profile_image: TImage;
  role: Role;
} & TResponseData;

type TAuthContext = {
  user: null | TUser;
  isLoading: boolean;
  logout: () => void;
  login: (data: TLogin) => void;
  register: (data: TRegister) => void;
};

//*context initial values
const initialValues: TAuthContext = {
  user: null,
  isLoading: false,
  logout: () => {},
  login: () => {},
  register: () => {},
};

//*create context
export const AuthContext = createContext<TAuthContext>(initialValues);
