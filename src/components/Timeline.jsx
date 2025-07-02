import {
  FaRocket,
  FaHandHoldingUsd,
  FaUsers,
  FaMoneyBillWave,
} from "react-icons/fa";

const Timeline = ({ className = "" }) => {
  const allServices = [
    {
      icon: <FaRocket />,
      header: "Market Intelligence",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.",
    },
    {
      icon: <FaHandHoldingUsd />,
      header: "Business Intelligence",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.",
    },
    {
      icon: <FaUsers />,
      header: "Customer Intelligence",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.",
    },
    {
      icon: <FaMoneyBillWave />,
      header: "Customer Engagement",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.",
    },
  ];

  return (
    <ul
      className={`relative border-l border-gray-300 pl-10.5 list-none ml-8 ${className}`}
    >
      {allServices.map((aService, index) => (
        <li key={index} className="relative mb-16 min-h-[60vh]">
          {/* Timeline Icon */}
          <span className="absolute -left-[70px] -top-[10px] bg-[#ccefff] text-[#0091DA] rounded-full w-auto p-4 flex items-center justify-center text-2xl">
            {aService.icon}
          </span>

          {/* Timeline Content */}
          <h5 className="text-3xl mb-2 font-semibold">{aService.header}</h5>
          <p className="text-lg/6 text-gray-600">{aService.description}</p>
        </li>
      ))}
    </ul>
  );
};

export default Timeline;
