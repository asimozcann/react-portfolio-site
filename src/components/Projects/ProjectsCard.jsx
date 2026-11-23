import TechnologyBadge from "./TechnologyBadge";
import { useState, useId } from "react";
const ProjectsCard = ({ project }) => {
  const { img, title, description, technologies, gitLink, demoLink } = project;
  const [isExpanded, setIsExpanded] = useState(false);
  const isLongDescription = description.length > 120;

  const firstPart = description.slice(0, 120);

  const lastSpaceIndex = firstPart.lastIndexOf(" ");

  const shortDescription = isLongDescription
    ? firstPart.slice(0, lastSpaceIndex > 0 ? lastSpaceIndex : 120) + "..."
    : description;

  const descriptionId = useId();
  return (
    <div className="h-full  border rounded-lg w-full p-6 shadow-[0_0px_5px_rgba(34,197,94,0.5)] hover:shadow-[0_0px_10px_rgba(34,197,94,0.6)] md:hover:scale-[1.02] hover:scale-[1.01] transition duration-500 flex flex-col">

      <div className="aspect-video w-full overflow-hidden rounded-md bg-gray-100 p-2">
        <img
          className="h-full w-full object-contain"
          src={img}
          alt={title}
          loading="lazy"
        />
      </div>


      <h1 className="md:text-3xl text-2xl text-[#2B975D] mt-6 text-center">
        {title}
      </h1>


      <div className="mt-4 flex flex-wrap justify-center gap-2">
        {technologies.split(",").map((technology) => (
          <TechnologyBadge
            key={technology.trim()}
            name={technology.trim()}
          />
        ))}
      </div>


      <p className="mt-4 mb-6 flex-1 text-left text-[15px] leading-relaxed md:text-[17px]"
        id={descriptionId}
      >
        {isExpanded ? description : shortDescription}
      </p>

      {isLongDescription && (
        <button
          className="self-start text-sm font-medium text-[#2B975D] underline-offset-4 transition-colors hover:underline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#2B975D]"
          type="button"
          onClick={() => setIsExpanded(prev => !prev)}
          aria-controls={descriptionId}
          aria-expanded={isExpanded}
        >
          {isExpanded ? "Daha az göster" : "Devamını oku"}
        </button>
      )}


      <div className="mt-auto flex flex-wrap items-center justify-center gap-3 pt-4">
        <a
          href={gitLink}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex min-w-32 items-center justify-center rounded-lg border border-[#2B975D] px-4 py-3 font-medium text-[#2B975D] transition-colors duration-200 hover:bg-green-50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#2B975D]"
        >
          <i className="fa-brands fa-github mr-2" aria-hidden="true"></i>
          GitHub
        </a>

        <a
          href={demoLink}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex min-w-32 items-center justify-center rounded-lg bg-[#2B975D] px-4 py-3 font-medium text-white transition-colors duration-200 hover:bg-green-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#2B975D]"
        >
          <i className="fa-solid fa-globe mr-2" aria-hidden="true"></i>
          Canlı Demo
        </a>
      </div>

    </div>
  );
};

export default ProjectsCard;
