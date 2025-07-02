import Section from "./layout/Section";

const Insights = () => {
  const sampleTopics = [
    "Aged Care",
    "Alternative Investments",
    "Asset Management",
    "Brand Tracking",
    "Budgeting and Savings",
    "Business Valuation",
    "Credit Markets",
    "Cryptocurrency",
    "Customer Acquisition Strategy",
    "Economic Indicators",
    "Economic Policy",
    "Family Office",
    "Financial Advise",
    "Financial Literacy",
  ];

  return (
    <Section
      classNameOuter="bg-slate-100"
      // classNameOuter="bg-[url(./src/assets/banners/banner1-bg.jpg)] bg-fixed bg-no-repeat bg-cover bg-center"
      classNameInner="flex flex-col gap-y-4 text-base lg:text-lg"
    >
      <div className="flex overflow-hidden rounded-full bg-white p-1 mb-2 border-1 border-gray-300">
        <input
          type="text"
          name="search"
          id="search-bar"
          placeholder="Explore our insights..."
          className="grow px-4 py-2 lg:px-6 lg:py-4 focus:outline-none"
        />
        <button className="bg-[#E87722] px-3 py-2 lg:px-6 rounded-full text-white">
          Search
        </button>
      </div>
      <div className="flex flex-wrap items-center justify-center w-full gap-x-2 gap-y-1  text-white ">
        {sampleTopics.map((aTopic, idx) => (
          <div
            className="px-4 py-1.5 rounded-full bg-[rgb(7,155,218)]"
            key={idx}
          >
            {aTopic}
          </div>
        ))}
      </div>
      {/* <div>
        <img src={lineGraph} className="w-full" alt="Graph Sample" />
      </div> */}
    </Section>
  );
};

export default Insights;
