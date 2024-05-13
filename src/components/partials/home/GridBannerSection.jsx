import ALink from "@/components/common/ALink";
import React from "react";

const GridBannerSection = () => {
  const Data = [
    {
      title:
        "Welcome to the future of automotive customization and performance enhancement.",
      desc: `<p>Welcome to the future of automotive customization and performance enhancement. Today, we're thrilled to introduce German Auto Parts the epitome of excellence in the world of premium spare parts and tuning.</p>

      <p>We represent the pinnacle of automotive engineering, offering a curated selection of products for Audi, BMW, AMG, Mercedes, Seat, Skoda, Porsche, and VW enthusiasts. With a commitment to quality, performance, and innovation, we're here to elevate your driving experience to unprecedented heights.</p>`,
      imgUrl: "/images/banners/banner-2.jpg",
      button: {
        title: "Design & Order",
        url: "/",
      },
    },
    {
      title: "Q6 e-tron",
      desc: `<p>At German Auto Parts, our vision is simple: to be the ultimate destination for automotive enthusiasts seeking premium spare parts and tuning solutions.</p>
      <p>We strive to redefine the standards of excellence in the industry by providing unparalleled customer service, superior products, and a seamless online shopping experience.
      Our goal is to inspire passion, empower creativity, and unleash the full potential of every vehicle that comes our way.</p>`,
      imgUrl: "/images/banners/banner-3.jpg",
      button: {
        title: "Design & Order",
        url: "/",
      },
    },
    {
      title: "Q6 e-tron",
      desc: `<p>Dive into our extensive catalog featuring an array of premium spare parts and tuning options for Audi, BMW, AMG, Mercedes, Seat, Skoda, Porsche, and VW models. From performance exhaust systems and suspension upgrades to bespoke carbon fiber components and cutting-edge ECU tuning, we have everything you need to enhance both the aesthetics and performance of your vehicle.</p>

      <p>Our partnerships with the most prestigious brands in the industry ensure that only the finest products grace our shelves, guaranteeing excellence in every purchase.</p>
      `,
      imgUrl: "/images/banners/banner-4.jpg",
      button: {
        title: "Design & Order",
        url: "/",
      },
    },
    {
      title: "Q6 e-tron",
      desc: `<p>Experience convenience like never before with our state-of-the-art webshop platform. Our user-friendly interface and intuitive navigation make finding the perfect products for your vehicle effortless. Enjoy secure transactions, fast shipping, and dedicated customer support every step of the way, ensuring a hassle-free shopping experience from start to finish.</p>

      <p>Proudly serving automotive enthusiasts across all EU countries, we bring our passion for premium spare parts and tuning to enthusiasts far and wide. With streamlined logistics and efficient distribution channels, we ensure timely delivery to your doorstep, no matter where you are in Europe (EU). Join our growing community of enthusiasts and embark on a journey of automotive excellence with German Auto Parts.</p>      
      <p>Thank you for joining us on this journey as we revolutionize the automotive aftermarket industry. Whether you're seeking to enhance the performance, style, or individuality of your vehicle, German Auto Parts is here to turn your dreams into reality.</p>
      Explore our webshop today and discover the endless possibilities that await you.`,
      imgUrl: "/images/banners/banner-5.jpg",
      button: {
        title: "Design & Order",
        url: "/",
      },
    },
  ];

  return (
    <section>
      <div className="container">
        <div className="grid grid-cols-12 grid-flex-row items-center gap-0 grid-container">
          {Data?.map((item, index) => (
            <React.Fragment key={index}>
              <div
                className={`col-span-12 md:col-span-6 ${
                  index % 2 === 0 ? "" : "md:hidden"
                }`}
              >
                <div className="banner relative text-center flex justify-center">
                  <div className="overlay"></div>
                  <img
                    src={item.imgUrl}
                    width={885}
                    height={442}
                    alt="Banner"
                  />
                </div>
              </div>

              <div
                className={`col-span-12 md:col-span-6 md:px-20 py-5 md:py-10 details`}
              >
                {/* <h3 className="text-3xl mb-10">{item.title}</h3> */}
                <div
                  className="desc lg:text-lg"
                  dangerouslySetInnerHTML={{ __html: item.desc }}
                ></div>
                {/* <ALink
                  href={"/"}
                  className="flex items-center justify-start space-x-2"
                >
                  <span>Design & Order</span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="8"
                    height="13"
                    viewBox="0 0 8 13"
                  >
                    <path
                      stroke="currentColor"
                      strokeWidth="1px"
                      fill="none"
                      d="M1.5,1l5.485,5.504l-5.48,5.496"
                    ></path>
                  </svg>
                </ALink> */}
              </div>

              <div
                className={`col-span-12 md:col-span-6  ${
                  index % 2 === 0 ? "hidden" : "hidden md:block"
                }`}
              >
                <div className="banner relative text-center flex justify-center">
                  <div className="overlay"></div>
                  <img
                    src={item.imgUrl}
                    width={885}
                    height={442}
                    alt="Banner"
                  />
                </div>
              </div>
            </React.Fragment>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GridBannerSection;
