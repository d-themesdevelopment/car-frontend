import ALink from "@/components/common/ALink";

const GridBannerSection = () => {
  const Data = [
    {
      title: " Q4 e-tron",
      imgUrl: "/images/banners/banner-1.jpg",
      button: {
        title: "Design & Order",
        url: "/",
      },
    },
    {
      title: "Q6 e-tron",
      imgUrl: "/images/banners/banner-2.jpg",
      button: {
        title: "Design & Order",
        url: "/",
      },
    },
    {
      title: "Q6 e-tron",
      imgUrl: "/images/banners/banner-3.jpg",
      button: {
        title: "Design & Order",
        url: "/",
      },
    },
    {
      title: "Q6 e-tron",
      imgUrl: "/images/banners/banner-4.jpg",
      button: {
        title: "Design & Order",
        url: "/",
      },
    },
  ];

  return (
    <section>
      <div className="container">
        <div className="grid grid-cols-12 grid-flex-row gap-2">
          {Data?.map((item, index) => (
            <div className="col-span-12 md:col-span-6" key={index}>
              <div className="banner relative text-center flex justify-center">
                <div className="overlay"></div>
                <img src={item.imgUrl} width={885} height={442} alt="Banner" />

                <div className="details absolute bottom-10 text-white text-center">
                  <h3 className="text-3xl mb-10">{item.title}</h3>
                  <ALink
                    href={"/"}
                    className="flex items-center justify-center space-x-2"
                  >
                    <span>Design & Order</span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="8"
                      height="13"
                      viewBox="0 0 8 13"
                      class="sc-pYA-dN kHIUEP"
                    >
                      <path
                        stroke="currentColor"
                        stroke-width="1px"
                        fill="none"
                        d="M1.5,1l5.485,5.504l-5.48,5.496"
                      ></path>
                    </svg>
                  </ALink>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GridBannerSection;
