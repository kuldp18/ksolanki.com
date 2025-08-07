import Image from "next/image";

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
              quality={90}
            />
          </div>
          <div className="text flex flex-col gap-2 w-full">
            <h1 className="sm:text-lg md:text-2xl">
              Hey there, I'm Kuldeep Solanki!
            </h1>
            <p className="text-sm text-[#b7b7b7] flex items-center gap-1">
              <span>{/* <MapPin size={14} /> */}</span>
              <span>Gujarat, India</span>
            </p>
            <div className="flex flex-row gap-3 text-sm text-[#b7b7b7]">
              <div className="flex flex-row items-center gap-1 cursor-pointer hover:text-white">
                <p>{/* <FileUser size={14} /> */}</p>
                <p>Resume</p>
              </div>
              <div className="flex flex-row items-center gap-1 cursor-pointer hover:text-white">
                <p>{/* <Github size={14} /> */}</p>
                <p>Github</p>
              </div>
              <div className="flex flex-row items-center gap-1 cursor-pointer hover:text-white">
                <p>{/* <Linkedin size={14} /> */}</p>
                <p>Linkedin</p>
              </div>
              <div className="flex flex-row items-center gap-1 cursor-pointer hover:text-white">
                <p>{/* <Twitter size={14} /> */}</p>
                <p>Twitter</p>
              </div>
            </div>
          </div>
        </div>
        <div className="text-justify text-[#b7b7b7]">
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
