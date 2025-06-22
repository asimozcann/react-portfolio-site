import { Fragment, Suspense } from "react";
import Hero from "../components/Hero/Hero";
import Introduce from "../components/Introduce/Introduce";
import Seo from "../components/Seo";

const HomePage = () => {
  return (
    <Fragment>
      <Seo
        title="Asım Özcan | Front-End Developer"
        description="Hızlı, Temiz ve Uyumlu Arayüzler"
        url="https://react-portfolio-site-asimozcan.vercel.app/"
        image="/images/social-share.png"
      />
      <Suspense fallback={<div>Yükleniyor...</div>}>
        <Hero />
        <Introduce />
      </Suspense>
    </Fragment>
  );
};

export default HomePage;
