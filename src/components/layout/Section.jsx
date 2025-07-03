const Section = ({
  children,
  classNameOuter,
  classNameInner,
  isFullHeight,
  backgroundImageSrc,
}) => {
  return (
    <div
      className={`flex items-center justify-center w-full p-8 md:px-16 py-16 lg:py-24 ${
        isFullHeight && "min-h-[calc(100vh-80px)] lg:min-h-[calc(70vh-80px)]"
      } ${classNameOuter}`}
      style={{ backgroundImage: `url(${backgroundImageSrc})` }}
    >
      <div className={`w-full max-w-[1100px] ${classNameInner}`}>
        {children}
      </div>
    </div>
  );
};

export default Section;
