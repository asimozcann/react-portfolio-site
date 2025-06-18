import Wrapper from "../UI/Wrapper";
import ProjectsCard from "./ProjectsCard";
import { projects } from "../../projectData";
const Projects = () => {
  return (
    <Wrapper className="mt-14">
      <h1 className="md:text-5xl text-4xl text-center text-[#2B975D] mt-10 mb-5">
        Projelerim
      </h1>
      <p className="md:text-lg  text-center">
        İşte son zamanlarda üzerinde çalıştığım birkaç proje
      </p>
      <div className="grid grid-auto-fill my-12 place-content-center gap-12 ">
        {projects.map((project,id) => (
          <ProjectsCard key={id} project={project} />
        ))}
      </div>
    </Wrapper>
  );
};

export default Projects;
