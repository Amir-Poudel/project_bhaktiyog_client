import { Metadata } from "next";
import LoginForm from "@/components/common/form/login.form";
import react from "react";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Login | Nepali Pasal",
  description: "Login User",
};

const LoginPage = () => {
  return (
    <main className="h-screen flex justify-center items-center">
      {/* login section */}
      <section className="border border-gray-300 px-5 py-6 rounded-lg min-w-90 ">
        {/* heading */}
        <div>
          <h1 className="text-teal-500 text-2xl font-bold text-center">
            Login
          </h1>

          <h2 className="text-center text-[15px] text-gray-500 mt-0.5 font-medium">
            Welcome Back
          </h2>
        </div>

        {/* form */}
        <LoginForm />

        <div>
          <Link href={"/forgot-password"}>
            <p className="text-center text-teal-500 mt-2">Forgot Password?</p>
          </Link>

          <p className="text-center text-gray-600">
            Don&apos;t have an Account?
            <Link href={"/signup"}>
              <span className="text-teal-600 italic font-semibold">
                Create Account
              </span>
            </Link>
          </p>
        </div>
      </section>
    </main>
  );
};
export default LoginPage;
