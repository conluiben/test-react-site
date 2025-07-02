import Section from "./layout/Section";
import {
  FaFacebookSquare,
  FaTwitterSquare,
  FaShareAltSquare,
  FaShareAlt,
} from "react-icons/fa";

const Footer = () => {
  const menuLinks = [
    {
      text: "Talk to our team",
      link: "#",
    },
    {
      text: "Explore our insights",
      link: "#",
    },
    {
      text: "Join our panel",
      link: "#",
    },
    {
      text: "Be a growth partner",
      link: "#",
    },
    {
      text: "Company overview",
      link: "#",
    },
    {
      text: "News",
      link: "#",
    },
  ];
  return (
    <Section
      classNameOuter="!py-8 bg-slate-800"
      classNameInner="flex flex-col gap-y-4 text-center lg:text-left text-white lg:flex-row lg:justify-between"
    >
      <div className="flex flex-col gap-y-0">
        <h3 className="text-2xl font-[600]">Sign up for CoreData's Insights</h3>
        <p className="text-base/4 mb-4">
          Uncover strategic insights that can be implemented in your
          organization
        </p>
        <input
          type="email"
          name="insights-email"
          id="insights-email"
          placeholder="Business email"
          className="bg-white text-black px-2 py-1"
        />
      </div>
      <div className="flex flex-col lg:-ml-64">
        {menuLinks.map((aLink, idx) => (
          <a href={aLink["link"]} key={idx}>
            {aLink["text"]}
          </a>
        ))}
      </div>
      <div className="flex items-center justify-center gap-1 text-3xl">
        <FaFacebookSquare />
        <FaTwitterSquare />
        <FaShareAltSquare />
      </div>
    </Section>
  );
};

export default Footer;
