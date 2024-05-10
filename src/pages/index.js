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
        className="mt-28 py-20"
        style={{
          background: "no-repeat 60%/cover url(/images/bg-banner-2.jpg)",
        }}
      >
        <div className="container text-white">
          <h3 className="text-6xl lg:text-7xl font-bold mb-4">Cars in stock</h3>
          <p className="text-4xl lg:text-5xl font-semibold mb-14">
            New and used for immediate delivery
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

      <section className="my-36">
        <div className="container">
          <div className="grid grid-cols-12 grid-flex-row items-center gap-4 lg:gap-16">
            <div className="col-span-12 lg:col-span-6">
              <img
                src="/images/bg-banner-3-2.png"
                className="w-full"
                alt="banner"
              />
            </div>

            <div className="col-span-12 lg:col-span-6">
              <h3 className="text-4xl lg:text-5xl mb-7">Restoring Legacy!</h3>
              {/* <h4 className="text-3xl mb-5">
                Bigger battery, more power and longer range
              </h4> */}
              <p>
                Explore Our Extensive Range of Spare Parts for Vintage VW and
                Porsche Models. Rediscover the timeless charm and performance of
                classic VW and Porsche vehicles with German Auto Parts. We are
                proud to offer an extensive range of spare parts tailored
                specifically for the renovation and restoration of older VW and
                Porsche models. Whether you&apos;re a seasoned enthusiast or
                embarking on your first restoration project, German Auto Parts
                is your trusted partner in preserving automotive history and
                heritage. At German Auto Parts, we understand the importance of
                authenticity and precision when it comes to restoring vintage
                vehicles. Our spare parts are meticulously crafted to meet or
                exceed the original specifications, ensuring seamless
                integration and optimal performance. We source our parts from
                reputable manufacturers who share our passion for preserving the
                legacy of VW and Porsche, guaranteeing uncompromising quality
                and reliability. Dive into our comprehensive catalog featuring a
                wide array of spare parts for vintage VW and Porsche models,
                including iconic classics like the Beetle, Bus, 911, and more.
                From engine components and electrical systems to body panels and
                interior trim, we have everything you need to breathe new life
                into your beloved classic. Whether you&apos;re tackling a full
                restoration or simply replacing worn-out parts, German Auto
                Parts is your one-stop destination for all your vintage VW and
                Porsche needs. Embarking on a restoration project can be
                daunting, but you don&apos;t have to go it alone. Our team of
                automotive experts is here to provide guidance, support, and
                technical assistance every step of the way. Whether you need
                help identifying the right parts for your project or
                troubleshooting technical challenges, we&apos;re here to ensure
                your restoration journey is smooth and successful. At German
                Auto Parts, we&apos;re more than just a supplier of spare parts;
                we&apos;re custodians of automotive heritage. By preserving and
                restoring classic VW and Porsche vehicles, we honor the legacy
                of these iconic brands and ensure they continue to inspire
                generations to come. Join us in our mission to keep the spirit
                of vintage motoring alive and experience the thrill of driving a
                piece of automotive history restored to its former glory.
                Explore our catalog today and embark on a journey of nostalgia,
                passion, and craftsmanship. Together, let&apos;s breathe new
                life into automotive icons and keep the spirit of vintage
                motoring alive for generations to come.
              </p>

              {/* <div className="flex items-center space-x-1 mt-16">
                <ALink
                  href={"/"}
                  className={
                    "text-black bg-black border border-black text-white px-5 lg:px-9 py-4"
                  }
                >
                  Q7 TFSI e
                </ALink>
                <ALink
                  href={"/"}
                  className={"border border-black px-5 lg:px-9 py-4"}
                >
                  Q8 TFSI e
                </ALink>
              </div> */}
            </div>
          </div>
        </div>
      </section>

      {/* <BlogCollection /> */}

      <section className="bg-black text-white">
        <div className="grid grid-cols-12 grid-flex-row items-center gap-4 lg:gap-16">
          <div className="col-span-12 lg:col-span-6">
            <div className="p-10 lg:p-20">
              <h4 className="text-4xl mb-3">Request A Call</h4>

              <h3 className="text-5xl mb-5 font-bold">We call you back</h3>

              <p className="mb-10">
                Updated exterior and increased electric range to 83 km. High
                standard equipment with S line exterior, sports package and
                Matrix LED headlights. Read more and experience the models.
              </p>

              <form action="#">
                <div className="form-wrap mb-5">
                  <input
                    type="text"
                    className="w-full border-b bg-black border-white/20 py-4 focus:outline-none"
                    placeholder="Full Name *"
                    required
                  />
                </div>

                <div className="form-wrap mb-5">
                  <input
                    type="email"
                    className="w-full border-b bg-black border-white/20 py-4 focus:outline-none"
                    placeholder="Email Address *"
                    required
                  />
                </div>

                <div className="form-wrap">
                  <textarea
                    type="text"
                    rows={5}
                    className="w-full border-b bg-black border-white/20 py-4 focus:outline-none"
                    placeholder="Email Message *"
                    required
                  />
                </div>

                <button
                  type="submit"
                  className={"border border-white px-9 py-4 mt-20"}
                >
                  Submit
                </button>
              </form>
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
