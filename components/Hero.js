"use client";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Sphere, MeshDistortMaterial } from "@react-three/drei";
import Image from "next/image";
import { HiDocumentDownload as ResumeIcon } from "react-icons/hi";
import { MdLocationOn as LocationIcon } from "react-icons/md";
import {
  FaGithub as GithubIcon,
  FaLinkedin as LinkedinIcon,
  FaTwitter as TwitterIcon,
} from "react-icons/fa";

const Hero = () => {
  return (
    <div className="h-screen relative text-white">
      <div className="absolute top-0 left-0 w-full h-full z-10 p-5">
        <header className="flex flex-col gap-5">
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
              Full-Stack Web Developer with a passion for building practical,
              user-focused web applications that solve real-world problems.
            </p>
          </div>
        </header>
        <div className="flex flex-col items-center justify-center h-[calc(100%-180px)]">
          <h1 className="text-6xl font-bold">Kuldeep Solanki</h1>
          <p className="text-2xl mt-4">Full Stack Developer</p>
          <button
            className="mt-8 px-6 py-3 bg-purple-600 rounded-full text-lg hover:bg-purple-700 transition-colors"
            onClick={() =>
              document
                .querySelector("main")
                .scrollIntoView({ behavior: "smooth" })
            }
          >
            Learn More
          </button>
        </div>
      </div>
      <Canvas>
        <OrbitControls enableZoom={false} autoRotate />
        <ambientLight intensity={1} />
        <directionalLight position={[3, 2, 1]} />
        <Sphere args={[1, 100, 200]} scale={2.4}>
          <MeshDistortMaterial
            color="#3d1c56"
            attach="material"
            distort={0.5}
            speed={2}
          />
        </Sphere>
      </Canvas>
    </div>
  );
};

export default Hero;
