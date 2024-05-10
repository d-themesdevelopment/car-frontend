import ALink from "@/components/common/ALink";

const IntroSection = () => {
  return (
    <section
      className="intro h-screen min-h-[600px] relative flex justify-center items-end"
      style={{
        background: "no-repeat 60%/cover url(/images/slides/slide-1.jpg)",
      }}
    >
      <div className="overlay"></div>

      <div className="max-w-[1500px] text-white px-5 absolute w-full bottom-20">
        <h2 className="text-6xl font-semibold mb-5">A new chapter.</h2>
        <p className="text-xl mb-7">
          Brand new electric Audi Q6 e-tron, Proline from SEK 899,000.
        </p>
        <div className="flex items-center space-x-1">
          <ALink
            href={"/"}
            className={"text-black bg-white border border-white px-7 lg:px-9 py-4"}
          >
            Discover
          </ALink>
          <ALink href={"/"} className={"border border-white px-7 lg:px-9 py-4"}>
            Design & Order
          </ALink>
        </div>
      </div>
    </section>
  );
};

export default IntroSection;
