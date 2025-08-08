import Education from "@/components/Education";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";

export const metadata = {
  title:
    "Kuldeep Solanki - Full Stack Developer Portfolio | React.js, Node.js, Next.js",
  description:
    "Professional portfolio showcasing full stack web development projects by Kuldeep Solanki. Expertise in React.js, Next.js, Node.js, Express.js, MongoDB, and modern web technologies. Available for hire in India.",
  openGraph: {
    title:
      "Kuldeep Solanki - Full Stack Developer Portfolio | React.js, Node.js, Next.js",
    description:
      "Professional portfolio showcasing full stack web development projects by Kuldeep Solanki. Expertise in React.js, Next.js, Node.js, Express.js, MongoDB, and modern web technologies.",
  },
  twitter: {
    title:
      "Kuldeep Solanki - Full Stack Developer Portfolio | React.js, Node.js, Next.js",
    description:
      "Professional portfolio showcasing full stack web development projects by Kuldeep Solanki. Expertise in React.js, Next.js, Node.js, Express.js, MongoDB, and modern web technologies.",
  },
};

const Home = () => {
  return (
    <main>
      <Experience />
      <Skills />
      <Projects />
      <Education />
    </main>
  );
};

export default Home;
