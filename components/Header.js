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
          <div className="hidden sm:flex justify-center items-center min-w-[50px]">
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
            <h1 className="text-xl sm:text-2xl font-semibold">
              Hey there, I'm Kuldeep Solanki!
            </h1>
            <p className="text-sm text-[#b7b7b7] flex items-center gap-1">
              <LocationIcon />
              <span>Gujarat, India</span>
            </p>
            <div className="flex flex-row gap-3 text-sm text-[#b7b7b7]">
              <a
                className="flex flex-row items-center gap-1 cursor-pointer hover:text-white transition-colors"
                href="/Kuldeep-Solanki-Resume.pdf"
                rel="noopener noreferrer"
                download
              >
                <ResumeIcon />
                <p>Resume</p>
              </a>
              <a
                className="flex flex-row items-center gap-1 cursor-pointer hover:text-white transition-colors"
                href="https://github.com/kuldp18"
                rel="noopener noreferrer"
                target="_blank"
              >
                <GithubIcon />
                <p>Github</p>
              </a>
              <a
                className="flex flex-row items-center gap-1 cursor-pointer hover:text-white transition-colors"
                href="https://www.linkedin.com/in/ksolanki8"
                rel="noopener noreferrer"
                target="_blank"
              >
                <LinkedinIcon />
                <p>Linkedin</p>
              </a>
              <a
                className="flex flex-row items-center gap-1 cursor-pointer hover:text-white transition-colors"
                href="https://x.com/itskuldeep8"
                rel="noopener noreferrer"
                target="_blank"
              >
                <TwitterIcon />
                <p>Twitter</p>
              </a>
            </div>
          </div>
        </div>
        <div className="text-justify text-[#b7b7b7] text-[12px] md:text-[16px]">
          <p>
            A curious fullstack developer passionate about building effortless
            web applications, combining modern JavaScript with Generative AI and
            LLMs to create intelligent and engaging user experiences.
          </p>
        </div>
      </header>
    </>
  );
};
export default Header;
