import ALink from "@/components/common/ALink";
import BlogCollection from "@/components/partials/home/BlogCollection";
import CategorySection from "@/components/partials/home/CategorySection";
import GridBannerSection from "@/components/partials/home/GridBannerSection";
import IntroSection from "@/components/partials/home/IntroSection";

export default function Home() {
  return (
    <main>
      <IntroSection />
      <CategorySection />
      <GridBannerSection />

     

      <section
        className="flex items-center h-[1000px] lg:h-[1600px] mt-16"
        style={{
          background: "no-repeat 60%/cover url(/images/bg-banner-1.jpg)",
        }}
      >
        <div className="container">
          <div className="max-w-[840px] w-full bg-white p-10 lg:p-16">
            <h3 className="text-4xl font-bold mb-7">New  A3 Sportback</h3>
            <p className="mb-10">
              Connected, and with a design that speaks for itself.
            </p>

            <ALink
              href={"/"}
              className="flex items-center space-x-2 font-medium"
            >
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



      <section className="my-36">
        <div className="container">
          <div className="grid grid-cols-12 grid-flex-row items-center gap-4 lg:gap-16">
            <div className="col-span-12 lg:col-span-6">
              <img
                src="/images/bg-banner-3.jpg"
                className="w-full"
                alt="banner"
              />
            </div>

            <div className="col-span-12 lg:col-span-6">
              <h3 className="text-4xl lg:text-5xl mb-7">
                New plug-in hybrids  Q7 and Q8
              </h3>
              <h4 className="text-3xl mb-5">
                Bigger battery, more power and longer range
              </h4>
              <p>
                Updated exterior and increased electric range to 83 km. High
                standard equipment with S line exterior, sports package and
                Matrix LED headlights. Read more and experience the models.
              </p>

              <div className="flex items-center space-x-1 mt-16">
                <ALink
                  href={"/"}
                  className={
                    "text-black bg-black border border-black text-white px-5 lg:px-9 py-4"
                  }
                >
                   Q7 TFSI e
                </ALink>
                <ALink href={"/"} className={"border border-black px-5 lg:px-9 py-4"}>
                   Q8 TFSI e
                </ALink>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section
        className="mt-28 py-20"
        style={{
          background: "no-repeat 60%/cover url(/images/bg-banner-2.jpg)",
        }}
      >
        <div className="container text-white">
          <h3 className="text-6xl lg:text-7xl font-bold mb-4">Cars in stock</h3>
          <p className="text-4xl lg:text-5xl font-semibold mb-14">
            New and used  for immediate delivery
          </p>

          <div className="flex items-center space-x-14 mb-16">
            <div className="flex items-center space-x-3 text-white">
              <div className="flex items-center justify-center w-7 h-7 rounded-full border border-white">
                <div className="w-5 h-5 rounded-full bg-white"></div>
              </div>

              <span>New cars</span>
            </div>

            <div className="flex items-center space-x-3 text-white">
              <div className="flex items-center justify-center w-7 h-7 rounded-full border border-white">
                <div className="w-3 h-3 rounded-full bg-white"></div>
              </div>

              <span>Used cars</span>
            </div>
          </div>

          <ALink
            href={"/"}
            className={
              "text-black bg-white border border-white  px-9 py-4 inline-block"
            }
          >
            Number of new cars in stock 619
          </ALink>
        </div>
      </section>

      <BlogCollection />

      <section className="bg-black text-white">
        <div className="grid grid-cols-12 grid-flex-row items-end gap-4 lg:gap-16">
          <div className="col-span-12 lg:col-span-6">
            <div className="p-10 lg:p-20">
              <h4 className="text-4xl mb-5">
                One click from your local  Partner:
              </h4>

              <h3 className="text-5xl mb-10 font-bold">My Car</h3>

              <div className="flex items-center space-x-1">
                <ALink href={"/"} className={"border border-white px-9 py-4"}>
                  Register
                </ALink>
                <ALink href={"/"} className={"border border-white px-9 py-4"}>
                  Read more
                </ALink>
              </div>
            </div>
          </div>

          <div className="col-span-12 lg:col-span-6">
            <img
              src="/images/bg-banner-4.jpg"
              className="w-full min-h-[600px]"
              alt="banner"
            />
          </div>
        </div>
      </section>


    </main>
  );
}
