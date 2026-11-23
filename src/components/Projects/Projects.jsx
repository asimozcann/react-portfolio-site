import Wrapper from "../UI/Wrapper";
import ProjectsCard from "./ProjectsCard";
import { projects } from "../../projectData";
import { useState } from "react";
const technologies = [
  "All",
  "LocalStorage",
  "React Router",
  "Firebase",
  "Context API"
];

const Projects = () => {

  const [selectedTechnology, setSelectedTechnology] =
    useState("All");
  const [search, setSearch] = useState("");
  const filteredProjects =
    selectedTechnology === "All"
      ? projects
      : projects.filter((project) =>
        project.technologies.includes(selectedTechnology)
      );
  const visibleProjects = filteredProjects.filter((project) =>
    project.title
      .toLocaleLowerCase("tr-TR")
      .includes(search.trim().toLocaleLowerCase("tr-TR"))
  );
  return (
    <Wrapper className="mt-14">
      <h1 className="md:text-5xl text-4xl text-center text-[#2B975D] mt-10 mb-5">
        Projelerim
      </h1>
      <p className="md:text-lg  text-center">
        İşte son zamanlarda üzerinde çalıştığım birkaç proje
      </p>
      <div className="mx-auto mt-8 max-w-md">
        <input
          type="search"
          value={search}
          onChange={(event) => setSearch(event.target.value)}
          placeholder="Projelerimde ara..."
          aria-label="Projelerde ara"
          className="w-full rounded-lg border border-gray-300 px-4 py-3 outline-none transition-colors focus:border-[#2B975D]"
        />
      </div>
      <div className="mt-8 flex flex-wrap justify-center gap-3">
        {technologies.map((technology) => (
          <button
            key={technology}
            type="button"
            aria-pressed={selectedTechnology === technology}
            onClick={() => setSelectedTechnology(technology)}
            className={
              selectedTechnology === technology
                ? "rounded-lg bg-[#2B975D] px-4 py-2 text-white "
                : "rounded-lg border px-4 py-2 transition-colors hover:bg-gray-100 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-600"
            }
          >
            {technology === "All" ? "Tümü" : technology}
          </button>
        ))}
      </div>
      <p className="mt-5 text-center">
        {visibleProjects.length} proje gösteriliyor.
      </p>

      {visibleProjects.length === 0 ? (
        <div className="my-12 flex flex-col items-center gap-4">
          <p className="text-center text-gray-500">
            Seçtiğin filtrelere uygun proje bulunamadı.
          </p>

          <button
            type="button"
            onClick={() => {
              setSelectedTechnology("All");
              setSearch("");
            }}
            className="rounded-lg bg-[#2B975D] px-5 py-3 font-medium text-white transition-colors hover:bg-green-700"
          >
            Filtreleri Temizle
          </button>
        </div>
      ) : (
        <div className="grid grid-auto-fill my-12 gap-12">
          {visibleProjects.map((project) => (
            <ProjectsCard key={project.id} project={project} />
          ))}
        </div>
      )}


    </Wrapper>
  );
};

export default Projects;
