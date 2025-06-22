import { Fragment, Suspense } from "react";
import About from "../components/About/About";
import Seo from "../components/Seo";
const AboutPage = () => {
  return (
    <Fragment>
      <Seo
        title="Hakkımda | Asım Özcan"
        description="Bilgisayar Programcılığı mezunu bir Front-End geliştirici adayıyım. React ve modern web teknolojilerine odaklanıyorum."
        url="https://react-portfolio-site-asimozcan.vercel.app/about"
        image="/images/social-share.png"
      />
      <Suspense fallback={<div>Yükleniyor...</div>}>
        <About />
      </Suspense>
    </Fragment>
  );
};

export default AboutPage;
