import Achievements from "@/components/Achievements";
import Education from "@/components/Education";
import Experience from "@/components/Experience";
import Footer from "@/components/Footer";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import Hero from "@/components/Hero";
import Section from "@/components/Section";

export const metadata = {
  title: "Kuldeep Solanki - Full Stack Developer",
  description:
    "Welcome to the portfolio of Kuldeep Solanki, a full stack developer specializing in React, Next.js, and Node.js. Explore my projects, skills, and experience.",
  keywords: [
    "Kuldeep Solanki",
    "Full Stack Developer",
    "React Developer",
    "Next.js Developer",
    "Node.js Developer",
    "Portfolio",
    "Web Developer India",
  ],
  openGraph: {
    title: "Kuldeep Solanki - Full Stack Developer Portfolio",
    description:
      "Explore the work of Kuldeep Solanki, a full stack developer with expertise in modern web technologies.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Kuldeep Solanki Portfolio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Kuldeep Solanki - Full Stack Developer Portfolio",
    description:
      "Check out my portfolio! As a full stack developer, I build modern, user-focused web applications.",
    images: ["/twitter-image.jpg"],
  },
};

const Home = () => {
  return (
    <>
      <Hero />
      <main>
        <Section>
          <Skills />
        </Section>
        <Section>
          <Experience />
        </Section>
        <Section>
          <Projects />
        </Section>
        <Section>
          <Education />
        </Section>
        <Section>
          <Achievements />
        </Section>
      </main>
      <Footer />
    </>
  );
};

export default Home;
