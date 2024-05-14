import ALink from "@/components/common/ALink";
import BlogCollection from "@/components/partials/home/BlogCollection";
import CategorySection from "@/components/partials/home/CategorySection";
import GridBannerSection from "@/components/partials/home/GridBannerSection";
import IntroSection from "@/components/partials/home/IntroSection";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";

export default function Home() {
  const [loading, setLoading] = useState(false);
  const { register, handleSubmit, reset, formState = { errors } } = useForm();

  async function handleSendMail(values) {
    setLoading(true);

    const username = values?.username;
    const email = values?.email;
    const message = values?.message;

    console.log(username, email, message);

    try {
      const response = await fetch("/api/sendMail", {
        method: "POST",
        body: JSON.stringify({
          username,
          email,
          message,
        }),
      });

      if (response.ok) {
        console.log("Success");
        setLoading(false);
        reset();
        toast.success("You sent email successfully!", {
          position: "top-right",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "colored",
        });
      }

      // const data = await response.json();
    } catch (error) {
      console.error("error:", error);
      setLoading(false);
      reset();
      toast.error("🤔 failed!", {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
      });
    }
  }

  const URL = "https://form.jotform.com/241340355286050";

  return (
    <main>
      <IntroSection />
      <CategorySection />
      <GridBannerSection />

      {/* <section
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
      </section> */}

      <section className="my-36">
        <div className="container">
          <div className="grid grid-cols-12 grid-flex-row gap-4 lg:gap-16">
            <div className="col-span-12 lg:col-span-6">
              <img
                src="/images/porsche1.jpg"
                className="w-full sticky top-5"
                alt="banner"
              />
            </div>

            <div className="col-span-12 lg:col-span-6">
              {/* <h3 className="text-4xl lg:text-5xl mb-7"></h3> */}
              {/* <h4 className="text-3xl mb-5">
                Bigger battery, more power and longer range
              </h4> */}
              <div className="lg:text-lg">
                <p className="mb-5">Restoring Legacy!</p>
                <p className="mb-5">
                  Explore Our Extensive Range of Spare Parts for Vintage VW and
                  Porsche Models. Rediscover the timeless charm and performance
                  of classic VW and Porsche vehicles with German Auto Parts. We
                  are proud to offer an extensive range of spare parts tailored
                  specifically for the renovation and restoration of older VW
                  and Porsche models.
                </p>
                <p className="mb-5">
                  Whether you&apos;re a seasoned enthusiast or embarking on your
                  first restoration project, German Auto Parts is your trusted
                  partner in preserving automotive history and heritage. At
                  German Auto Parts, we understand the importance of
                  authenticity and precision when it comes to restoring vintage
                  vehicles. Our spare parts are meticulously crafted to meet or
                  exceed the original specifications, ensuring seamless
                  integration and optimal performance.
                </p>
                <p className="mb-5">
                  We source our parts from reputable manufacturers who share our
                  passion for preserving the legacy of VW and Porsche,
                  guaranteeing uncompromising quality and reliability. Dive into
                  our comprehensive catalog featuring a wide array of spare
                  parts for vintage VW and Porsche models, including iconic
                  classics like the Beetle, Bus, 911, and more.
                </p>
                <p className="mb-5">
                  From engine components and electrical systems to body panels
                  and interior trim, we have everything you need to breathe new
                  life into your beloved classic. Whether you&apos;re tackling a
                  full restoration or simply replacing worn-out parts, German
                  Auto Parts is your one-stop destination for all your vintage
                  VW and Porsche needs.
                </p>
                <p className="mb-5">
                  Embarking on a restoration project can be daunting, but you
                  don&apos;t have to go it alone. Our team of automotive experts
                  is here to provide guidance, support, and technical assistance
                  every step of the way. Whether you need help identifying the
                  right parts for your project or troubleshooting technical
                  challenges, we&apos;re here to ensure your restoration journey
                  is smooth and successful.
                </p>
                <p className="mb-5">
                  At German Auto Parts, we&apos;re more than just a supplier of
                  spare parts; we&apos;re custodians of automotive heritage. By
                  preserving and restoring classic VW and Porsche vehicles, we
                  honor the legacy of these iconic brands and ensure they
                  continue to inspire generations to come.
                </p>
                <p>
                  Join us in our mission to keep the spirit of vintage motoring
                  alive and experience the thrill of driving a piece of
                  automotive history restored to its former glory. Explore our
                  catalog today and embark on a journey of nostalgia, passion,
                  and craftsmanship. Together, let&apos;s breathe new life into
                  automotive icons and keep the spirit of vintage motoring alive
                  for generations to come.
                </p>
              </div>

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
            <div className="px-5 py-10 md:p-10 lg:p-20">
              {/* <h4 className="text-4xl mb-3">Contact Us</h4> */}

              <h3 className="text-6xl mb-5 font-bold">Contact Us</h3>

              <p className="mb-16">
                Have a question or need more information? Send us a message!
                Whether you&apos;re looking for a quote or have inquiries about
                our products, we&apos;re here to help. Simply fill out the form
                below, and we&apos;ll get back to you as soon as possible.
              </p>

              {/* <iframe
                id="JotFormIFrame-241340355286050"
                title="Form"
                onload="window.parent.scrollTo(0,0)"
                allowtransparency="true"
                allow="geolocation; microphone; camera; fullscreen"
                src="https://form.jotform.com/241340355286050"
                frameborder="0"
                style="min-width:100%;max-width:100%;height:539px;border:none;"
                scrolling="no"
              ></iframe> */}

              <a
                className="border border-white px-7 lg:px-9 py-4"
                href="https://www.jotform.com/form/241333096377358"
                target="_blank"
              >
                Contact Us
              </a>

              {/* <iframe
              className="w-full h-[500px] contact-form"
                title="your title"
                // src="https://www.jotform.com/form/241333096377358"
                src="https://form.jotform.com/241341464759158"
              ></iframe> */}
              {/* <form action="#" onSubmit={handleSubmit(handleSendMail)}>
                <div className="form-wrap mb-5">
                  <input
                    type="text"
                    {...register("username", { required: true })}
                    className="w-full border-b bg-black border-white/20 py-4 focus:outline-none"
                    placeholder="Full Name *"
                    required
                  />
                </div>

                <div className="form-wrap mb-5">
                  <input
                    type="email"
                    {...register("email", { required: true })}
                    className="w-full border-b bg-black border-white/20 py-4 focus:outline-none"
                    placeholder="Email Address *"
                    required
                  />
                </div>

                <div className="form-wrap">
                  <textarea
                    type="text"
                    rows={4}
                    {...register("message", { required: true })}
                    className="w-full border-b bg-black border-white/20 py-4 focus:outline-none"
                    placeholder="Email Message *"
                    required
                  />
                </div>

                <button
                  type="submit"
                  className={`border border-white px-9 py-4 mt-16 ${
                    loading ? "pointer-events-none " : ""
                  }`}
                >
                  {loading ? "Sending..." : "Submit"}
                </button>
              </form> */}
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
