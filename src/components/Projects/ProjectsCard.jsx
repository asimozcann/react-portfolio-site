const ProjectsCard = ({ project }) => {
  const { img, title, description, technologies, gitLink, demoLink } = project;

  return (
    <div className="h-full md:max-h-[800px] border rounded-lg w-full p-6 shadow-[0_0px_5px_rgba(34,197,94,0.5)] hover:shadow-[0_0px_10px_rgba(34,197,94,0.6)] md:hover:scale-[1.02] hover:scale-[1.01] transition duration-500 flex flex-col">
      <img className="w-full  object-cover rounded-md" src={img} alt={title} />

      <h1 className="md:text-3xl text-2xl text-[#2B975D] mt-6 text-center">
        {title}
      </h1>
      <h2 className="text-[#8c8c85] mt-2 text-center md:text-xl text-lg">
        {technologies}
      </h2>
      <p className="md:text-[17px] text-[15px] text-justify md:text-left mt-4 mb-6 flex-1">
        {description}
      </p>
      <div className="flex items-center justify-center gap-6">
        <a
          href={gitLink}
          target="_blank"
          className="mt-auto self-center bg-[#2B975D] px-4 py-2 rounded-md text-white hover:bg-[#2b975dd9] transition duration-300 flex items-center"
        >
          <i className="fa-brands fa-github  mr-2"></i> GitHub
        </a>
        <a
          href={demoLink}
          target="_blank"
          className="mt-auto self-center bg-[#2B975D] px-4 py-2 rounded-md text-white hover:bg-[#2b975dd9] transition duration-300 flex items-center"
        >
          <i class="fa-solid fa-globe mr-2"></i> Demo
        </a>
      </div>
    </div>
  );
};

export default ProjectsCard;
