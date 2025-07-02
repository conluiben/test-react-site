// import heroImage from "../assets/meeting-fauxels.jpg"

import Button from "./Button";
import Carousel from "./Carousel";
import Section from "./layout/Section";

export default function Hero() {
  return (
    <Section
      isFullHeight
      classNameOuter="w-screen bg-gradient-to-b from-[#008edc] to-[#004c72]"
      // classNameOuter="w-screen bg-[url(./src/assets/banners/banner1.jpg)] bg-no-repeat bg-cover bg-center lg:bg-contain lg:bg-top-right"
      classNameInner="text-center lg:text-left text-white"
    >
      <div className="w-full lg:w-2/3">
        <h1 className="text-5xl font-semibold mb-2">Growth Partnerships</h1>
        <p className="text-lg/5 mb-4">
          Turning Data Into Insights and Insights Into Action
        </p>
        <Button>Talk to our Team</Button>
      </div>
    </Section>
  );
}
