import Section from "./layout/Section";
import sampleImage from "../assets/banners/banner3-bg.jpg";

const Services = () => {
  const allServices = [
    {
      header: "Market Intelligence",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.",
      imageSource: sampleImage,
    },
    {
      header: "Business Intelligence",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.",
      imageSource: sampleImage,
    },
    {
      header: "Customer Intelligence",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.",
      imageSource: sampleImage,
    },
    {
      header: "Customer Engagement",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.",
      imageSource: sampleImage,
    },
  ];

  return (
    <Section
      classNameOuter="bg-slate-100"
      classNameInner="text-center lg:text-left"
    >
      <div className="mb-4">
        <h2 className="text-3xl font-[600]">Be a growth partner</h2>
        <p>
          We provide our partners with research-driven insights to support
          growth and transformational change.
        </p>
      </div>
      <div className="flex flex-col gap-4 lg:grid lg:grid-cols-2">
        {allServices.map((aService, idx) => (
          <div
            className="card bg-slate-50 rounded-xl overflow-hidden"
            key={idx}
          >
            <img src={aService["imageSource"]} alt="Growth Partner Image" />
            <div className="p-4">
              <h3 className="text-2xl">{aService["header"]}</h3>
              <p className="text-base/4.5">{aService["description"]}</p>
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
};

export default Services;
