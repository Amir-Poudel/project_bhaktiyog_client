import { UseFormRegister } from "react-hook-form";
import { object } from "zod";

interface IProps {
  label: string;
  id: string;
  name: string;
  placeholder: string;
  type?: "text" | "email" | "password";
  required?: string;
  register: UseFormRegister<any>;
  error?: string;
}

const Input = ({
  id,
  label,
  name,
  placeholder = "start typing..",
  type = "text",
  register,
  error,
}: IProps) => {
  return (
      <div className="flex flex-col gap-0.4 tracking-wider">
        <label htmlFor={id} className="text-teal-600 font-semibold">
          {label}
        </label>

        <input
          {...register(name)}
          id={id}
          name={name}
          type={type}
          placeholder={placeholder}
          className={`border  text-gray-500 py-2 px-1.5 rounded-md text-base ${error ? "border-red-500 focus:outline-red-500  focus:border-red-500" : "border-gray-300 focus:outline-teal-600 focus:border-teal-600"}`}
        />
        <small className="text-red-500 h-3 p-0 -mt-[3px] ">{error}</small>
      </div>
      
    
  );
};

export default Input;
