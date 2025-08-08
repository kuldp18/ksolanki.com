import Image from "next/image";
import { HiDocumentDownload as ResumeIcon } from "react-icons/hi";
import { MdLocationOn as LocationIcon } from "react-icons/md";
import {
  FaGithub as GithubIcon,
  FaLinkedin as LinkedinIcon,
  FaTwitter as TwitterIcon,
} from "react-icons/fa";

const Header = () => {
  return (
    <>
      <header className="flex flex-col gap-5 mb-5">
        <div className="flex flex-row gap-4 items-center">
          <div className="flex justify-center items-center min-w-[50px]">
            <Image
              src="/portrait.jpg"
              width={100}
              height={100}
              alt="portrait"
              className="object-cover rounded-3xl border-2 border-[#b7b7b7]"
              quality={100}
            />
          </div>
          <div className="text flex flex-col gap-2 w-full">
            <h1 className="sm:text-lg md:text-2xl font-semibold">
              Hey there, I'm Kuldeep Solanki!
            </h1>
            <p className="text-sm text-[#b7b7b7] flex items-center gap-1">
              <LocationIcon />
              <span>Gujarat, India</span>
            </p>
            <div className="flex flex-row gap-3 text-sm text-[#b7b7b7]">
              <a
                className="flex flex-row items-center gap-1 cursor-pointer hover:text-white"
                href="#"
              >
                <ResumeIcon />
                <p>Resume</p>
              </a>
              <a
                className="flex flex-row items-center gap-1 cursor-pointer hover:text-white"
                href="https://github.com/kuldp18"
                target="_blank"
              >
                <GithubIcon />
                <p>Github</p>
              </a>
              <a
                className="flex flex-row items-center gap-1 cursor-pointer hover:text-white"
                href="https://www.linkedin.com/in/ksolanki8"
                target="_blank"
              >
                <LinkedinIcon />
                <p>Linkedin</p>
              </a>
              <a
                className="flex flex-row items-center gap-1 cursor-pointer hover:text-white"
                href="https://x.com/itskuldeep8"
                target="_blank"
              >
                <TwitterIcon />
                <p>Twitter</p>
              </a>
            </div>
          </div>
        </div>
        <div className="text-justify text-[#b7b7b7] text-sm md:text-[16px]">
          <p>
            Full-stack developer blending front-end creativity with back-end
            logic. I am skilled in building user-focused apps using JavaScript,
            React.js, Node.js and LLM integrations to deliver functional &
            elegant solutions.
          </p>
        </div>
      </header>
    </>
  );
};
export default Header;
