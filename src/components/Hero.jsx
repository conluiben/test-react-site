// import heroImage from "../assets/meeting-fauxels.jpg"

import Button from "./Button";
import Carousel from "./Carousel";
import Section from "./layout/Section";
import Navbar from "./Navbar";

export default function Hero() {
  return (
    <Section
      isFullHeight
      // classNameOuter="relative w-screen bg-gradient-to-b from-[#008edc] to-[#004c72]"
      classNameOuter="w-full bg-[url(./src/assets/banners/banner1-bg.jpg)] bg-no-repeat bg-cover bg-center relative"
      // classNameOuter="w-screen bg-[url(./src/assets/banners/banner1-bg.jpg)] bg-no-repeat bg-cover bg-center lg:bg-contain lg:bg-top-right relative"
      classNameInner="text-center lg:text-left text-white"
    >
      <div className="w-full lg:w-2/3 2xl:w-1/2 z-2 relative">
        <h1 className="text-5xl font-semibold mb-2 2xl:text-[7vh]">
          Growth Partnerships
        </h1>
        <p className="text-lg/5 mb-8 2xl:text-[2.5vh] 2xl:leading-12 2xl:mb-12">
          Turning Data Into Insights and Insights Into Action
        </p>
        <Button>Talk to our Team</Button>
      </div>
      {/* overlay */}
      <div className="absolute top-0 left-0 w-full h-full bg-black opacity-10 z-1"></div>
      {/* overlay */}
      {/* <div
        className="z-0 absolute -top-[10vh] right-[10%] text-[89vh] font-black text-transparent bg-[url(./src/assets/banners/banner1-bg.jpg)] bg-cover bg-center bg-fixed bg-clip-text leading-none"
        style={{
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
        }}
      >
        C
      </div> */}

      {/* <div
        className="absolute bottom-[0vh] right-[5vw] 2xl:right-[2vw] text-[95vh] font-black text-transparent bg-[url(./src/assets/banners/banner1-bg.jpg)] bg-cover bg-center bg-fixed bg-clip-text leading-none"
        style={{
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
          textBox: "trim-both cap alphabetic",
        }}
      >
        C
      </div> */}
      {/* <Navbar /> */}
    </Section>
  );
}
