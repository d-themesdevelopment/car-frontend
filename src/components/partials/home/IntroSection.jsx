import ALink from "@/components/common/ALink";

const IntroSection = () => {
  return (
    <section
      className="intro h-screen min-h-[600px] relative flex justify-center items-end"
      style={{
        background: "no-repeat 60%/cover url(/images/banner-1.jpg)",
      }}
    >
      <div className="overlay"></div>

      <div className="max-w-[1500px] text-white px-5 absolute w-full bottom-20">
        <div className="max-w-[800px]">
          <h2 className="text-7xl font-bold mb-5">A new chapter.</h2>
          <p className="text-lg mb-7">
            Our Swedish roots coupled with our specialization in German cars
            create a powerful synergy. Sweden is renowned for its commitment to
            quality, innovation, and precision engineering—values that align
            perfectly with the meticulous standards set by German automotive
            manufacturers. As a Swedish company, we bring a unique perspective
            to the table, blending Scandinavian craftsmanship with German
            engineering excellence. This combination allows us to deliver
            unparalleled service, reliability, and performance enhancements to
            German car owners, ensuring they experience the best of both worlds:
            Swedish reliability and German precision.
          </p>
          {/* <div className="flex items-center space-x-1">
            <ALink
              href={"/"}
              className={
                "text-black bg-white border border-white px-7 lg:px-9 py-4"
              }
            >
              Discover
            </ALink>
            <ALink
              href={"/"}
              className={"border border-white px-7 lg:px-9 py-4"}
            >
              Design & Order
            </ALink>
          </div> */}
        </div>
      </div>
    </section>
  );
};

export default IntroSection;
