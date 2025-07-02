const Button = ({ children }) => {
  return (
    <button className="px-8 py-2 rounded-full bg-none border-2 border-white cursor-pointer text-white">
      {children}
    </button>
  );
};

export default Button;
