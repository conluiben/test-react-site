const Button = ({ className, href, children, opensNewTab }) => {
  return (
    <a
      className={`px-8 py-4 rounded-xl bg-none cursor-pointer text-white bg-[#E87722] 2xl:text-[2.5vh] ${className}`}
      href={href}
      target={opensNewTab && "_blank"}
    >
      {children}
    </a>
  );
};

export default Button;
