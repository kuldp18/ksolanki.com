import ProjectCard from "./ProjectCard";
import SectionHeading from "./SectionHeading";

const projects = [
  {
    title: "Jiso",
    description:
      "Jiso is a full-stack web app built with MERN stack and open-source LLM for AI based mental health assistance.",
    code: "https://github.com/kuldp18/jiso-frontend",
    type: "internship",
  },
  {
    title: "Quiz Time",
    description:
      "A dynamic quiz app in React.js that tests your knowledge while keeping you on your toes!",
    code: "https://github.com/kuldp18/quiz-time",
    website: "https://quiz-time-js.netlify.app",
    type: "personal",
  },
  {
    title: "Floating Sticky Notes",
    description:
      "Full-stack note-taking application with user authentication. Uses AppWrite as backend.",
    code: "https://github.com/kuldp18/very-sticky-notes",
    website: "https://verysticky.netlify.app/",
    type: "personal",
  },
  {
    title: "Fast Currency Converter",
    description:
      "Modern responsive currency converter built with React that helps you convert between different currencies with real-time exchange rates.",
    code: "https://github.com/kuldp18/react-currency",
    website: "https://fast-currency-converter.netlify.app/",
    type: "personal",
  },
  {
    title: "Quirx",
    description:
      "YouTube-inspired video sharing site built with PHP and MySQL with an admin panel. Users can give rate videos with 1 to 5 stars.",
    code: "https://github.com/kuldp18/quirx",
    type: "personal",
  },
];

const Projects = () => {
  return (
    <section>
      <SectionHeading text={"Projects"} />
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-x-2 gap-y-4">
        {projects.map((project, index) => {
          return <ProjectCard {...project} key={index} />;
        })}
      </div>
    </section>
  );
};
export default Projects;
