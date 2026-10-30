interface IProps {
  label: string;
  type?: "reset" | "submit" | "button";
}

const Button = ({ label, type = "button" }: IProps) => {
  return (
    <div>
      <button
        type={type}
        className="cursor-pointer w-full bg-teal-600 text-white font-bold text-lg py-3 rounded-md hover:bg-teal-500 active:bg-teal-700 transition-all duration-300"
      >
        {label}
      </button>
    </div>
  );
};

export default Button;
