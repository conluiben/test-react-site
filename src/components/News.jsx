import Section from "./layout/Section";
import sampleImage from "../assets/case-study.jpg";

const News = () => {
  const articleList = [
    {
      heading: "Case Study One",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor ut labore et dolore magna aliqua.",
      imageSource: sampleImage,
      link: "#",
    },
    {
      heading: "Case Study Two",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor ut labore et dolore magna aliqua.",
      imageSource: sampleImage,
      link: "#",
    },
    {
      heading: "Case Study Three",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor ut labore et dolore magna aliqua.",
      imageSource: sampleImage,
      link: "#",
    },
  ];
  return (
    <Section
      classNameOuter="bg-slate-100"
      classNameInner="text-center lg:text-left flex flex-col gap-y-8"
    >
      <div>
        <h2 className="text-3xl/8 font-[600]">Featured Case Studies</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam.
        </p>
      </div>
      <div className="grid grid-cols-3 gap-4">
        {articleList.map((anArticle, idx) => (
          <div
            className="max-w-[500px] card bg-slate-50 rounded-xl overflow-hidden p-4 flex flex-col items-center hover:cursor-pointer hover:shadow-2xl duration-200"
            key={idx}
          >
            <img
              src={anArticle["imageSource"]}
              alt={anArticle["region"]}
              className="rounded-lg mb-4"
            />
            <div className="p-0 flex flex-col items-start text-left">
              <h3 className="text-2xl">{anArticle["heading"]}</h3>
              <p className="text-base/4.5 mb-2">{anArticle["description"]}</p>
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
};

export default News;
