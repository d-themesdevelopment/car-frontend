import ALink from "@/components/common/ALink";

const BigBannerSection = () => {
  return (
    <section
      className="flex items-center h-[1000px] lg:h-[1600px] mt-16"
      style={{
        background: "no-repeat 60%/cover url(/images/bg-banner-1.jpg)",
      }}
    >
      <div className="container">
        <div className="max-w-[840px] w-full bg-white p-10 lg:p-16">
          <h3 className="text-4xl font-bold mb-7">New A3 Sportback</h3>
          <p className="mb-10">
            Connected, and with a design that speaks for itself.
          </p>

          <ALink href={"/"} className="flex items-center space-x-2 font-medium">
            <span>Read more</span>
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
    </section>
  );
};

export default BigBannerSection;