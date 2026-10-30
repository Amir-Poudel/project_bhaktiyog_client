import { loginSchema, registerSchema } from "@/schema/auth.schema";
import * as yup from "yup";

// export type TLogin = {
//   email: string;
//   password: string;
// };

export type TLogin = yup.InferType<typeof loginSchema>;
export type TRegister = yup.InferType<typeof registerSchema>;
