import { NavLink } from "react-router-dom";
import Wrapper from "./UI/Wrapper";
import { useContext, useState } from "react";
import { ThemeContext } from "../components/context/ThemeContext";
const MainNavigation = () => {
  const [menuOpen, setmenuOpen] = useState(false);
  const { theme, setTheme } = useContext(ThemeContext);
  const navList = [
    {
      title: "Ana Sayfa",
      link: "/",
    },
    {
      title: "Hakkımda",
      link: "/about",
    },
    {
      title: "Projeler",
      link: "/projects",
    },
    {
      title: "İletişim",
      link: "/contact",
    },
  ];
  return (
    <header className="bg-white dark:bg-gray-950 text-black dark:text-white fixed w-full h-[60px] top-0 left-0 z-50 shadow-md transition-colors duration-300">
      <Wrapper className="flex h-full justify-between items-center ">
        <NavLink to="/">
          <div className="border p-2 border-gray-300 text-xl">
            <h1>
              A <span className="text-[#2B975D]">Ö</span>
            </h1>
          </div>
        </NavLink>
        <ul className="flex items-center gap-20 text-[19px]">
          {navList.map((nav, id) => {
            return (
              <li
                key={id}
                className="hover:text-[#2B975D] hover:underline transition-all duration-200 md:block hidden"
              >
                <NavLink to={nav.link}>{nav.title}</NavLink>
              </li>
            );
          })}
          <li className="flex items-center gap-4">
            <i
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              className={`fa-solid ${
                theme === "dark" ? "fa-sun" : "fa-moon"
              } cursor-pointer md:text-2xl text-3xl`}
            ></i>
            <i
              onClick={() => {
                setmenuOpen(!menuOpen);
              }}
              className="fa-solid fa-bars cursor-pointer text-3xl md:hidden"
            ></i>
          </li>
        </ul>
        {menuOpen && (
          <ul className="flex flex-col absolute top-[60px] left-0 w-full bg-white dark:bg-gray-900 text-black dark:text-white text-xl p-4 shadow-lg md:hidden z-50 items-center gap-6 text-[19px] transition-colors duration-300">
            {navList.map((nav, id) => {
              return (
                <li
                  key={id}
                  className="hover:text-[#2B975D] hover:underline transition-all duration-200 "
                >
                  <NavLink onClick={() => setmenuOpen(!menuOpen)} to={nav.link}>
                    {nav.title}
                  </NavLink>
                </li>
              );
            })}
          </ul>
        )}
      </Wrapper>
    </header>
  );
};

export default MainNavigation;
