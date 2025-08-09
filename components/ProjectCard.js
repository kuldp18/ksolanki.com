import { FaGithub as GithubIcon } from "react-icons/fa";
import { CiGlobe as WebIcon } from "react-icons/ci";

const ProjectCard = ({ title, description, website, code, type }) => {
  return (
    <div className="border-1 border-[#6c6c6c] p-3 md:p-4 flex flex-col gap-3 select-none hover:border-white transition-colors">
      <h2 className="text-sm font-semibold md:text-lg md:font-normal flex flex-col">
        {title || "Default Project"}
        {type && (
          <span className="text-[#b7b7b7] text-[12px] capitalize">{type}</span>
        )}
      </h2>
      <p className="text-sm text-[#b7b7b7] text-justify md:min-h-[90px]">
        {description}
      </p>
      <div className="text-sm text-[#b7b7b7] flex gap-3">
        {website && (
          <a
            href={website}
            className="hover:text-white flex gap-1 items-center transition-colors"
            rel="noopener noreferrer"
            target="_blank"
          >
            <WebIcon />
            <span>Demo</span>
          </a>
        )}

        {code && (
          <a
            href={code}
            className="hover:text-white flex gap-1 items-center transition-colors"
            rel="noopener noreferrer"
            target="_blank"
          >
            <GithubIcon />
            <span>Code</span>
          </a>
        )}
      </div>
    </div>
  );
};
export default ProjectCard;
