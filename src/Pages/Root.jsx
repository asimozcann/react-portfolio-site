import { Fragment } from "react";
import MainNavigation from "../components/MainNavigation";
import { Outlet } from "react-router-dom";
import Footer from "../components/Footer/Footer";

const RootLayout = () => {
  return (
    <Fragment>
      <div className="min-h-screen bg-white dark:bg-gray-900 text-black dark:text-white transition-colors duration-300">
      <MainNavigation />
      <Outlet />
      <Footer />
      </div>
    </Fragment>
  );
};

export default RootLayout;
