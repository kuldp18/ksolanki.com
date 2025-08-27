import SectionHeading from "./SectionHeading";

const Experience = () => {
  return (
    <section>
      <SectionHeading text={"Experience"} />

      <div className="flex flex-col gap-4">
        <div className="flex flex-row justify-between">
          <div className="flex flex-col">
            <h3 className="text-[13px] sm:text-lg font-[500]">
              Full-Stack Web Developer Intern
            </h3>
            <p className="text-[#b7b7b7] text-[13px]">
              Business Web Solutions (BWS) Inc.
            </p>
          </div>
          <div className="flex flex-col text-[12px] sm:text-[13px]  text-[#b7b7b7]">
            <p className="place-self-end">Remote, India</p>
            <p>Jan - Apr 2025</p>
          </div>
        </div>

        <ul className="flex flex-col gap-2 text-[13px] sm:text-[15px] text-justify text-[#b7b7b7]">
          <li className="flex items-start gap-2">
            <span>•</span>
            <span>
              Developed Jiso project after completing comprehensive training in
              JavaScript, React.js, Node.js and other technologies.
            </span>
          </li>
          <li className="flex items-start gap-2">
            <span>•</span>
            <span>
              Integrated an open-source LLM into app workflows, enabling
              automated insights and suggestions for users.
            </span>
          </li>
        </ul>
      </div>
    </section>
  );
};
export default Experience;
