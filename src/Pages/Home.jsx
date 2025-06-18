import { Fragment } from "react";
import Hero from "../components/Hero/Hero";
import Introduce from "../components/Introduce/Introduce";

const HomePage = () => {
  return (
    <Fragment>
      <Hero />
      <Introduce/>
    </Fragment>
  );
};

export default HomePage;
