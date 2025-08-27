import SectionHeading from "./SectionHeading";

const skills = [
  {
    label: "Languages",
    value: "JavaScript, HTML, CSS, PHP, Python",
  },
  {
    label: "Frameworks & Libraries",
    value:
      "React.js, Next.js, Node.js, Express.js, Mongoose, ShadCN, Tailwind CSS",
  },
  {
    label: "Databases",
    value: "MongoDB, MySQL/SQL",
  },
  {
    label: "Tools & Technologies",
    value: "Git, VS Code, Postman, RESTful APIs, AI/LLM Integrations",
  },
];

const Skills = () => {
  return (
    <section>
      <SectionHeading text={"Skills"} />

      <div className="text-sm md:text-[16px] text-[#c8c8c8] flex flex-col gap-3 md:gap-2">
        {skills.map((skill, index) => (
          <div
            key={index}
            className="flex flex-col sm:flex-row sm:items-baseline gap-1 sm:gap-2"
          >
            <h3 className="text-[#ededed] font-medium whitespace-nowrap">
              {skill.label}:
            </h3>
            <p className="leading-relaxed">{skill.value}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
