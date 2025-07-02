const Section = ({
  children,
  classNameOuter,
  classNameInner,
  isFullHeight,
}) => {
  return (
    <div
      className={`flex items-center justify-center w-full p-8 md:px-16 py-16 lg:py-24 ${
        isFullHeight && "min-h-[calc(100vh-50px)] lg:min-h-[calc(70vh-50px)]"
      } ${classNameOuter}`}
    >
      <div className={`w-full max-w-[1100px] ${classNameInner}`}>
        {children}
      </div>
    </div>
  );
};

export default Section;
