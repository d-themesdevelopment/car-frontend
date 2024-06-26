import ALink from "../ALink";

const MainMenu = ({ toggle, setToggle }) => {
  return (
    <>
      {toggle && (
        <div
          className="overlay bg-black/70 fixed left-0 top-0 right-0 bottom-0"
          onClick={() => setToggle(false)}
        ></div>
      )}

      <ul
        className={`${
          toggle ? "" : "-translate-x-[280px] lg:translate-x-0"
        } transition-all   text-sm md:text-base lg:flex items-center lg:space-x-7 text-grey-100 lg:text-white fixed lg:relative bg-white lg:bg-transparent left-0 top-0 bottom-0 lg:w-auto w-[280px] lg:p-0 p-5`}
      >
        <li>
          <ALink href={"/"} className="block py-3 lg:py-6">
            Shop
          </ALink>
        </li>

        <li>
          <ALink href={"/"} className="block py-3 lg:py-6">
            Contact
          </ALink>
        </li>
      </ul>
    </>
  );
};

export default MainMenu;
