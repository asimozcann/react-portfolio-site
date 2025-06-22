import { Fragment, Suspense } from "react";
import Projects from "../components/Projects/Projects";
import Seo from "../components/Seo";
const ProjectsPage = () => {
  return (
    <Fragment>
      <Seo
        title="Projeler | Asım Özcan"
        description="React, Tailwind CSS ve Context API ile geliştirdiğim projelerime göz atın."
        url="https://react-portfolio-site-asimozcan.vercel.app/projects"
        image="/images/social-share.png"
      />
      <Suspense fallback={<div>Yükleniyor...</div>}>
        <Projects />
      </Suspense>
    </Fragment>
  );
};

export default ProjectsPage;
