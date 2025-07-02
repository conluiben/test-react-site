import Button from "./Button";
import Section from "./layout/Section";

const JoinPanel = () => {
  return (
    <Section
      classNameOuter="bg-[url(./src/assets/banners/banner3-bg.jpg)] bg-no-repeat bg-cover bg-center"
      classNameInner="text-center lg:text-left text-white"
    >
      <h1 className="text-5xl/12 font-semibold mb-4">
        Contribute to expert conversation and get rewards through surveys
      </h1>
      <Button> Join CoreData's Panel of Experts</Button>
    </Section>
  );
};

export default JoinPanel;
