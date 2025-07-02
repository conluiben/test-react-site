import Button from "./Button";
import Section from "./layout/Section";

const CallToAction = () => {
  return (
    <Section
      classNameOuter="bg-slate-600"
      classNameInner="text-center lg:text-left text-white"
    >
      <h1 className="text-5xl/12 font-semibold mb-8">Ready to grow with us?</h1>
      <Button>Talk to our team</Button>
    </Section>
  );
};

export default CallToAction;
