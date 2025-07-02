import Section from "./layout/Section";
import Timeline from "./Timeline";

const Services = () => {
  return (
    <Section
      classNameOuter="bg-slate-100"
      classNameInner="text-center lg:text-left"
    >
      <div className="mb-12">
        <h2 className="text-3xl font-[600]">Be a growth partner</h2>
        <p>
          We provide our partners with research-driven insights to support
          growth and transformational change.
        </p>
      </div>
      {/* <div className="flex flex-col gap-4 lg:grid lg:grid-cols-2">
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
      </div> */}
      <div className="flex justify-between gap-x-16">
        <Timeline className="flex-1" />
        <div className="shrink flex flex-col whitespace-nowrap">
          {/* <p className="sticky bottom-0">Menu goes here</p> */}
          {[
            "Market Intelligence",
            "Business Intelligence",
            "Customer Intelligence",
            "Customer Engagement",
          ].map((aLink, idx) => (
            <a
              href="#"
              className={`px-5 py-3 border-slate-300 ${
                idx === 0 ? "border-t border-b" : "border-b"
              }`}
              key={idx}
            >
              {aLink}
            </a>
          ))}
        </div>
      </div>
    </Section>
  );
};

export default Services;
