import Section from "./layout/Section";

const Insights = () => {
  const sampleTopics = [
    "Economic Data",
    "Latest issues today",
    "Market X Crash",
    "PersonX",
    "Independence Day",
    "Stocks",
    "Celebrity News",
    "CBS Polls",
    "Congress and Iran",
    "Privacy",
    "BLACKPINK",
    "Trump job approval",
  ];
  return (
    <Section
      classNameOuter="bg-slate-50"
      // classNameOuter="bg-[url(./src/assets/banners/banner1-bg.jpg)] bg-fixed bg-no-repeat bg-cover bg-center"
      classNameInner="flex flex-col gap-y-4 text-base lg:text-lg"
    >
      <div className="flex overflow-hidden rounded-full bg-white">
        <input
          type="text"
          name="search"
          id="search-bar"
          placeholder="Explore our insights..."
          className="grow px-4 py-2 lg:px-6 lg:py-4 focus:outline-none"
        />
        <button className="bg-[rgb(7,155,218)] px-3 py-2 lg:px-6 rounded-full">
          Submit
        </button>
      </div>
      <div className="flex flex-wrap items-center justify-center w-full gap-x-2 gap-y-1 ">
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
