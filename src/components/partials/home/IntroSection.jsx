import ALink from "@/components/common/ALink";

const IntroSection = () => {
  return (
    <section
      className="intro h-screen min-h-[1200px] lg:min-h-[600px] relative flex justify-center items-end"
      style={{
        background: "no-repeat 60%/cover url(/images/banner-1.jpg)",
      }}
    >
      <div className="overlay"></div>

      <div className="max-w-[1500px] text-white px-5 absolute w-full bottom-20">
        <div className="max-w-[800px]">
          <h2 className="text-6xl font-bold mb-5">
            Welcome to a New Beginning!
          </h2>
          <div className="lg:text-lg mb-7">
            {/* Our Swedish roots coupled with our specialization in German cars
            create a powerful synergy. Sweden is renowned for its commitment to
            quality, innovation, and precision engineering—values that align
            perfectly with the meticulous standards set by German automotive
            manufacturers. As a Swedish company, we bring a unique perspective
            to the table, blending Scandinavian craftsmanship with German
            engineering excellence. This combination allows us to deliver
            unparalleled service, reliability, and performance enhancements to
            German car owners, ensuring they experience the best of both worlds:
            Swedish reliability and German precision. */}
            <p className="mb-5">
              At German Auto Parts, we pride ourselves on our Swedish roots and
              our expertise in German cars, which come together to form a
              formidable partnership.
            </p>
            <p className="mb-5">
              Sweden is known worldwide for its dedication to quality,
              innovation, and precision engineering—values that mirror the
              exacting standards upheld by German automotive manufacturers. As a
              Swedish company, we bring a distinct perspective to the automotive
              industry, seamlessly merging Scandinavian craftsmanship with the
              unparalleled engineering excellence synonymous with Germany.
            </p>

            <p className="mb-5">
              This fusion enables us to provide the owners of German cars with
              unmatched service, reliability, and performance enhancements. We
              strive to offer the best of both worlds: Swedish reliability
              coupled with German precision, ensuring our customers receive
              nothing but the highest quality products and services.
            </p>
          </div>
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
