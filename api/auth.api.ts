import { TLogin, TRegister } from "@/types/auth.types";
import api from ".";

//*sigup mutation function
export const signup = async (data: TRegister) => {
  try {
    const formData = new FormData();
    formData.append("full_name", data.full_name);
    formData.append("user_name", data.user_name);
    formData.append("email", data.email);
    formData.append("password", data.password);
    formData.append("c_password", data.c_password);

    if (data.profile_image && data.profile_image.length > 0) {
      formData.append("profile_image", data.profile_image[0]);
    }
    const response = await api.post("/auth/register", formData);
    return response.data;
  } catch (error: any) {
    throw error?.response?.data;
  }
};

//* login mutation function
export const login = async (data: TLogin) => {
  try {
    const response = await api.post("/auth/login", data);
    return response.data;
  } catch (error: any) {
    throw error?.response?.data;
  }
};

export const getProfile = async () => {
  try {
    const response = await api.get("/auth/profile");
    return response.data;
  } catch (error: any) {
    throw error?.response?.data;
  }
};

//* logout mutation function
export const logoutUser = async () => {
  try {
    const response = await api.post("/auth/logout");
    return response.data;
    /* eslint-disable @typescript-eslint/no-explicit-any */
  } catch (error: any) {
    throw error?.response?.data;
  }
};
