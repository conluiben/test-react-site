import Section from "./layout/Section";
import Carousel from "./Carousel";

const Partners = () => {
  const listOfPartners = [
    {
      name: "StatePlus",
      source:
        "https://assets.coredataresearch.com/coredata.com.au/images/clients/slide/stateplus.png",
    },
    {
      name: "Commonwelth Bank",
      source:
        "https://assets.coredataresearch.com/coredata.com.au/images/clients/client-1.png",
    },
    {
      name: "Greenstone",
      source:
        "https://assets.coredataresearch.com/coredata.com.au/images/clients/client3.png",
    },
    {
      name: "Bankwest",
      source:
        "https://assets.coredataresearch.com/coredata.com.au/images/clients/slide/logo_Bankwest.png",
    },
    {
      name: "BT Financial Group",
      source:
        "https://assets.coredataresearch.com/coredata.com.au/images/clients/slide/BT_Financial_logo.png",
    },
    {
      name: "The Fred Hollows Foundation",
      source:
        "https://assets.coredataresearch.com/coredata.com.au/images/clients/slide/fred.png",
    },
    {
      name: "REI Super",
      source:
        "https://assets.coredataresearch.com/coredata.com.au/images/clients/slide/rei-super.png",
    },
    {
      name: "Swiss Re",
      source:
        "https://assets.coredataresearch.com/coredata.com.au/images/clients/slide/swiss.png",
    },
    {
      name: "Workplace Super Specialists Australia",
      source:
        "https://assets.coredataresearch.com/coredata.com.au/images/clients/slide/WSSA_full_web.png",
    },
    {
      name: "Equip",
      source:
        "https://assets.coredataresearch.com/coredata.com.au/images/clients/slide/euipsuper.png",
    },
  ];
  return (
    <Section
      classNameOuter="bg-slate-200"
      classNameInner="text-center lg:text-left"
    >
      <h2 className="text-3xl/8 font-[600] mb-4">
        Join our partners who trusted us with their success
      </h2>
      {/* <div className="flex flex-wrap items-center justify-center gap-y-0">
        {listOfPartners.map((aPartner, idx) => (
          <div className="w-1/2 max-w-[200px]" key={idx}>
            <img src={aPartner["source"]} alt={aPartner["name"]} />
          </div>
        ))}
      </div> */}
      <Carousel autoSlide autoSlideInterval={3000}>
        {listOfPartners.map((aPartner, idx) => (
          <div className="w-auto flex-shrink-0 object-cover" key={idx}>
            <img
              src={aPartner["source"]}
              alt={aPartner["name"]}
              className="w-48 h-48"
            />
          </div>
        ))}
      </Carousel>
    </Section>
  );
};

export default Partners;
