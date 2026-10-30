import * as yup from "yup";

//* login schema
export const loginSchema = yup.object({
  email: yup
    .string()
    .email("invalid email format")
    .required("email is required"),
  password: yup.string().required("password is required"),
});

//* register schema
export const registerSchema = yup.object({
  full_name: yup
    .string()
    .required("full name is required")
    .min(3, "at least 3 characters required"),
  user_name: yup
    .string()
    .required("user name is required")
    .min(3, "at least 3 characters required"),
  email: yup
    .string()
    .email("invalid email format")
    .required("email is required"),
  password: yup
    .string()
    .required("password is required")
    .min(6, "password must contain 6 characters"),
  c_password: yup
    .string()
    .required("confirm password is required")
    .oneOf([yup.ref("password")], "passwords must match"),
  profile_image: yup
    .mixed<FileList>()
    // .required("Profile image is required")
    // .test(
    //   "fileRequired",
    //   "Profile image is required",
    //   (value) => value instanceof FileList && value.length > 0,
    // )
    .test(
      "fileType",
      "Only JPG, JPEG, PNG, SVG, and AVIF images are allowed",
      (value) => {
        if (!value || value.length === 0) return true;

        const allowedTypes = [
          "image/jpeg",
          "image/jpg",
          "image/png",
          "image/svg+xml",
          "image/avif",
        ];

        return allowedTypes.includes(value[0].type);
      },
    ),
});
