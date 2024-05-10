import ALink from "./ALink";

const Footer = () => {
  return (
    <footer className="bg-black text-white">
      <div className="container">
        <div className="footer-middle py-16 lg:py-28 border-b border-white/30">
          <div className="grid grid-cols-12 lg:grid-cols-10 grid-flex-row gap-5">
            <div className="col-span-12 md:col-span-6 lg:col-span-2">
              <div className="widget">
                <h4 className="text-2xl font-medium mb-10">Models</h4>

                <ul className="text-sm space-y-4">
                  <li>
                    <ALink href={"/"}>All models</ALink>
                  </li>

                  <li>
                    <ALink href={"/"}>Electric cars</ALink>
                  </li>

                  <li>
                    <ALink href={"/"}>Plug-in hybrids</ALink>
                  </li>

                  <li>
                    <ALink href={"/"}>SUV</ALink>
                  </li>

                  <li>
                    <ALink href={"/"}>Avant</ALink>
                  </li>

                  <li>
                    <ALink href={"/"}>Sporsback</ALink>
                  </li>

                  <li>
                    <ALink href={"/"}>Andi Sport</ALink>
                  </li>
                </ul>
              </div>
            </div>

            <div className="col-span-12 md:col-span-6 lg:col-span-2">
              <div className="widget">
                <h4 className="text-2xl font-medium mb-10">Buy</h4>

                <ul className="text-sm space-y-4">
                  <li>
                    <ALink href={"/"}>All models</ALink>
                  </li>

                  <li>
                    <ALink href={"/"}>Electric cars</ALink>
                  </li>

                  <li>
                    <ALink href={"/"}>Plug-in hybrids</ALink>
                  </li>

                  <li>
                    <ALink href={"/"}>SUV</ALink>
                  </li>

                  <li>
                    <ALink href={"/"}>Avant</ALink>
                  </li>

                  <li>
                    <ALink href={"/"}>Sporsback</ALink>
                  </li>

                  <li>
                    <ALink href={"/"}>Andi Sport</ALink>
                  </li>
                </ul>
              </div>
            </div>

            <div className="col-span-12 md:col-span-6 lg:col-span-2">
              <div className="widget">
                <h4 className="text-2xl font-medium mb-10">Own</h4>

                <ul className="text-sm space-y-4">
                  <li>
                    <ALink href={"/"}>All models</ALink>
                  </li>

                  <li>
                    <ALink href={"/"}>Electric cars</ALink>
                  </li>

                  <li>
                    <ALink href={"/"}>Plug-in hybrids</ALink>
                  </li>

                  <li>
                    <ALink href={"/"}>SUV</ALink>
                  </li>

                  <li>
                    <ALink href={"/"}>Avant</ALink>
                  </li>

                  <li>
                    <ALink href={"/"}>Sporsback</ALink>
                  </li>

                  <li>
                    <ALink href={"/"}>Andi Sport</ALink>
                  </li>
                </ul>
              </div>
            </div>

            <div className="col-span-12 md:col-span-6 lg:col-span-2">
              <div className="widget">
                <h4 className="text-2xl font-medium mb-10">Company Car</h4>

                <ul className="text-sm space-y-4">
                  <li>
                    <ALink href={"/"}>All models</ALink>
                  </li>

                  <li>
                    <ALink href={"/"}>Electric cars</ALink>
                  </li>

                  <li>
                    <ALink href={"/"}>Plug-in hybrids</ALink>
                  </li>
                </ul>
              </div>
            </div>

            <div className="col-span-12 md:col-span-6 lg:col-span-2">
              <div className="widget">
                <h4 className="text-2xl font-medium mb-10">
                  About Audi Sweden
                </h4>

                <ul className="text-sm space-y-4">
                  <li>
                    <ALink href={"/"}>All models</ALink>
                  </li>

                  <li>
                    <ALink href={"/"}>Electric cars</ALink>
                  </li>

                  <li>
                    <ALink href={"/"}>Plug-in hybrids</ALink>
                  </li>

                  <li>
                    <ALink href={"/"}>SUV</ALink>
                  </li>

                  <li>
                    <ALink href={"/"}>Avant</ALink>
                  </li>

                  <li>
                    <ALink href={"/"}>Sporsback</ALink>
                  </li>

                  <li>
                    <ALink href={"/"}>Andi Sport</ALink>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div className="footer-bottom text-sm py-10">
          <div className="lg:flex items-center lg:space-x-16">
            <p>© 2024 AUDI SWEDEN. All Rights Reserved.</p>

            <ul className="lg:flex items-center lg:space-x-5 lg:space-y-0 space-y-4 lg:mt-0 mt-4">
              <li>
                <ALink href={"/"}>Publisher</ALink>
              </li>
              <li>
                <ALink href={"/"}>Legally</ALink>
              </li>
              <li>
                <ALink href={"/"}>Cookies</ALink>
              </li>
              <li>
                <ALink href={"/"}>Adjust settings for cookies</ALink>
              </li>
              <li>
                <ALink href={"/"}>Whistleblower channels</ALink>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
