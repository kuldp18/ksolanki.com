import SectionHeading from "./SectionHeading";

const Experience = () => {
  return (
    <section>
      <SectionHeading text={"Experience"} />

      <div className="flex flex-col gap-4">
        <div className="flex flex-row justify-between">
          <div className="flex flex-col">
            <h3 className="text-sm md:text-lg">
              Full-Stack Web Development Internship
            </h3>
            <p className="text-[#b7b7b7] text-sm">
              Business Web Solutions (BWS) Inc.
            </p>
          </div>
          <div className="flex flex-col text-sm text-[#b7b7b7]">
            <p className="place-self-end">India</p>
            <p>Jan - Apr 2025</p>
          </div>
        </div>

        <ul className="flex flex-col gap-2 text-sm text-justify text-[#b7b7b7]">
          <li className="flex items-start gap-2">
            <span>•</span>
            <span>
              Completed comprehensive training in JavaScript, React, Node.js and
              other technologies, accelerating readiness for full-stack
              development tasks.
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
