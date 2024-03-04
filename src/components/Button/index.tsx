type ButtonProps = {
  children: string;
};

export const Button = ({ children }: ButtonProps) => {
  return (
    <button className="bg-blue-500 text-gray-100 px-4 py-2 rounded-sm">
      {children}
    </button>
  );
};
