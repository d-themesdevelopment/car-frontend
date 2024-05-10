import ALink from "@/components/common/ALink";

const BlogCollection = () => {
  const Data = [
    {
      title: "Audi Q4 e-tron",
      imgUrl: "banner-5.jpg",
      desc: "Three selectable levels, access to 37,500 charging points in Sweden and easy payment via the myAudi app or Plug & Charge.",
      button: {
        title: "Design & Order",
        url: "/",
      },
    },
    {
      title: "Q6 e-tron",
      imgUrl: "banner-6.jpg",
      desc: "Three selectable levels, access to 37,500 charging points in Sweden and easy payment via the myAudi app or Plug & Charge.",
      button: {
        title: "Design & Order",
        url: "/",
      },
    },
    {
      title: "Q6 e-tron",
      imgUrl: "banner-7.jpg",
      desc: "Three selectable levels, access to 37,500 charging points in Sweden and easy payment via the myAudi app or Plug & Charge.",
      button: {
        title: "Design & Order",
        url: "/",
      },
    },
    {
      title: "Q6 e-tron",
      imgUrl: "banner-8.jpg",
      desc: "Three selectable levels, access to 37,500 charging points in Sweden and easy payment via the myAudi app or Plug & Charge.",
      button: {
        title: "Design & Order",
        url: "/",
      },
    },
    {
      title: "Q6 e-tron",
      imgUrl: "banner-9.png",
      desc: "Three selectable levels, access to 37,500 charging points in Sweden and easy payment via the myAudi app or Plug & Charge.",
      button: {
        title: "Design & Order",
        url: "/",
      },
    },
    {
      title: "Q6 e-tron",
      imgUrl: "banner-10.jpg",
      desc: "Three selectable levels, access to 37,500 charging points in Sweden and easy payment via the myAudi app or Plug & Charge.",
      button: {
        title: "Design & Order",
        url: "/",
      },
    },
  ];

  return (
    <section className="mt-32 mb-20">
      <div className="container">
        <div className="grid grid-cols-12 grid-flex-row gap-2">
          {Data?.map((item, index) => (
            <div className="col-span-12 md:col-span-6 mb-10" key={index}>
              <div className="banner">
                <img
                  src={`/images/banners/${item.imgUrl}`}
                  width={885}
                  height={442}
                  alt="Banner"
                />

                <div className="details my-5 mr-10">
                  <h3 className="text-3xl mb-4">{item.title}</h3>
                  <p className="mb-7">{item.desc}</p>
                  <ALink href={"/"} className="flex items-center space-x-2">
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
  )
};

export default BlogCollection;
