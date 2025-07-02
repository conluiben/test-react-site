import Section from "./layout/Section";
import sampleImage from "../assets/meeting-fauxels.jpg";
import Carousel from "./Carousel";

const CompanyNews = () => {
  return (
    <Section
      classNameOuter="bg-slate-200"
      classNameInner="text-center lg:text-left flex flex-col gap-y-8"
    >
      <div>
        <h2 className="text-3xl/8 font-[600]">Global presence, local focus</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam.
        </p>
      </div>
      <div>
        <div className="">
          <h2 className="text-2xl/6.5 font-[600] mb-4">
            From advisers to brokers, to banking and aged care, our research
            covers different industries
          </h2>
          <div>
            <select name="news-region" id="news-region">
              <option value="global">Global</option>
              <option value="au">Australia</option>
              <option value="manila">Manila</option>
            </select>
          </div>
        </div>
        <div className="news-feed flex flex-col gap-y-4">
          <Carousel>
            <div className="max-w-[500px] card bg-slate-50 rounded-xl overflow-hidden p-4 flex flex-col items-center hover:cursor-pointer hover:shadow-2xl duration-200">
              <img
                src={sampleImage}
                alt="News Image"
                className="rounded-lg mb-4"
              />
              <div className="p-0 flex flex-col items-start text-left">
                <h3 className="text-2xl">Article One</h3>
                <p className="text-base/4.5 mb-2">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor ut labore et dolore magna aliqua.
                </p>
                <button className="rounded-lg self-end px-3 py-1 bg-slate-200 hover:cursor-pointer hover:bg-slate-300 duration-200">
                  Read more
                </button>
              </div>
            </div>
            <div className="max-w-[500px] card bg-slate-50 rounded-xl overflow-hidden p-4 flex flex-col items-center hover:cursor-pointer hover:shadow-2xl duration-200">
              <img
                src={sampleImage}
                alt="News Image"
                className="rounded-lg mb-4"
              />
              <div className="p-0 flex flex-col items-start text-left">
                <h3 className="text-2xl">Article Two</h3>
                <p className="text-base/4.5 mb-2">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor ut labore et dolore magna aliqua.
                </p>
                <button className="rounded-lg self-end px-3 py-1 bg-slate-200 hover:cursor-pointer hover:bg-slate-300 duration-200">
                  Read more
                </button>
              </div>
            </div>
            <div className="max-w-[500px] card bg-slate-50 rounded-xl overflow-hidden p-4 flex flex-col items-center hover:cursor-pointer hover:shadow-2xl duration-200">
              <img
                src={sampleImage}
                alt="News Image"
                className="rounded-lg mb-4"
              />
              <div className="p-0 flex flex-col items-start text-left">
                <h3 className="text-2xl">Article Three</h3>
                <p className="text-base/4.5 mb-2">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor ut labore et dolore magna aliqua.
                </p>
                <button className="rounded-lg self-end px-3 py-1 bg-slate-200 hover:cursor-pointer hover:bg-slate-300 duration-200">
                  Read more
                </button>
              </div>
            </div>
          </Carousel>
        </div>
      </div>
    </Section>
  );
};

export default CompanyNews;
