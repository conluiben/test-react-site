import Button from "./Button";
import Section from "./layout/Section";
import bannerBackground from "../assets/banners/banner3-bg.jpg";

const JoinPanel = () => {
  return (
    <Section
      classNameOuter="bg-[url(./src/assets/banners/banner3-bg.jpg)] bg-no-repeat bg-cover bg-center"
      classNameInner="text-center lg:text-left text-white"
      backgroundImageSrc={bannerBackground}
    >
      <h1 className="text-5xl/12 font-semibold mb-8">
        Contribute to expert conversation and get rewards through surveys
      </h1>
      <Button
        className="2xl:text-[2vh]"
        href="https://poe-au.coredata.com.au"
        opensNewTab
      >
        Join CoreData's Panel of Experts
      </Button>
    </Section>
  );
};

export default JoinPanel;
