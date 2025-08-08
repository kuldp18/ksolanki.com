import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title:
    "Kuldeep Solanki - Full Stack Web Developer | React.js, Node.js, Next.js Expert",
  description:
    "Experienced Full Stack Web Developer from Gujarat, India specializing in React.js, Next.js, Node.js, and modern web technologies. Available for Frontend, Backend, and Full Stack development opportunities.",
  keywords: [
    "Kuldeep Solanki",
    "Full Stack Developer",
    "Frontend Developer",
    "Backend Developer",
    "React.js Developer",
    "Next.js Developer",
    "Node.js Developer",
    "JavaScript Developer",
    "Web Developer India",
    "Full Stack Developer India",
    "Gujarat Developer",
    "MERN Stack Developer",
    "Express.js Developer",
    "MongoDB Developer",
    "Tailwind CSS Developer",
    "RESTful API Developer",
    "React Native Developer",
    "PHP Developer",
    "MySQL Developer",
    "Git Version Control",
    "Responsive Web Design",
    "Progressive Web Apps",
    "Modern Web Technologies",
    "Software Engineer India",
    "Web Development Services",
    "Portfolio Website",
    "Hire Developer India",
    "Remote Developer",
    "Freelance Developer",
    "JavaScript Expert",
    "Frontend Technologies",
    "Backend Technologies",
    "Database Developer",
    "API Integration",
    "Web Application Developer",
    "Single Page Applications",
    "Component-Based Architecture",
    "State Management",
    "Server-Side Rendering",
    "Static Site Generation",
  ].join(", "),
  authors: [{ name: "Kuldeep Solanki", url: "https://ksolanki.com" }],
  creator: "Kuldeep Solanki",
  publisher: "Kuldeep Solanki",
  metadataBase: new URL("https://ksolanki.com"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://ksolanki.com",
    title:
      "Kuldeep Solanki - Full Stack Web Developer | React.js, Node.js, Next.js Expert",
    description:
      "Experienced Full Stack Web Developer from Gujarat, India specializing in React.js, Next.js, Node.js, and modern web technologies. Available for Frontend, Backend, and Full Stack development opportunities.",
    siteName: "Kuldeep Solanki Portfolio",
    images: [
      {
        url: "/portrait.jpg",
        width: 1200,
        height: 630,
        alt: "Kuldeep Solanki - Full Stack Web Developer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Kuldeep Solanki - Full Stack Web Developer | React.js, Node.js, Next.js Expert",
    description:
      "Experienced Full Stack Web Developer from Gujarat, India specializing in React.js, Next.js, Node.js, and modern web technologies.",
    images: ["/portrait.jpg"],
    creator: "@kuldp18",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "your-google-site-verification-code", // TODO- Replace with actual verification code
  },
  category: "Technology",
  classification: "Portfolio Website",
  other: {
    "geo.region": "IN-GJ",
    "geo.placename": "Gujarat, India",
    "geo.position": "23.0225;72.5714",
    ICBM: "23.0225, 72.5714",
    "DC.title": "Kuldeep Solanki - Full Stack Web Developer Portfolio",
    "DC.creator": "Kuldeep Solanki",
    "DC.subject":
      "Web Development, Full Stack Development, React.js, Node.js, Next.js",
    "DC.description":
      "Professional portfolio of Kuldeep Solanki, a Full Stack Web Developer from Gujarat, India",
    "DC.publisher": "Kuldeep Solanki",
    "DC.contributor": "Kuldeep Solanki",
    "DC.date": "2025",
    "DC.type": "Text",
    "DC.format": "text/html",
    "DC.identifier": "https://ksolanki.com",
    "DC.language": "en",
    "DC.coverage": "India",
    "DC.rights": "Copyright 2025 Kuldeep Solanki",
  },
};

export default function RootLayout({ children }) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Kuldeep Solanki",
    jobTitle: "Full Stack Web Developer",
    description:
      "Experienced Full Stack Web Developer specializing in React.js, Next.js, Node.js, and modern web technologies",
    url: "https://ksolanki.com",
    image: "https://ksolanki.com/portrait.jpg",
    email: "kuldeepsolanki1854@gmail.com",
    telephone: "+91-8780746364",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Gujarat",
      addressCountry: "India",
    },
    sameAs: ["https://linkedin.com/in/ksolanki8", "https://github.com/kuldp18"],
    knowsAbout: [
      "JavaScript",
      "React.js",
      "Next.js",
      "Node.js",
      "Express.js",
      "MongoDB",
      "MySQL",
      "PHP",
      "Python",
      "Full Stack Development",
      "Frontend Development",
      "Backend Development",
      "Web Development",
      "RESTful APIs",
      "Database Design",
      "Responsive Web Design",
    ],
    hasOccupation: {
      "@type": "Occupation",
      name: "Full Stack Web Developer",
      occupationLocation: {
        "@type": "Country",
        name: "India",
      },
      skills: [
        "JavaScript",
        "React.js",
        "Next.js",
        "Node.js",
        "Express.js",
        "MongoDB",
        "MySQL",
        "PHP",
        "Python",
        "HTML",
        "CSS",
        "Tailwind CSS",
        "Git",
        "RESTful APIs",
        "Database Design",
      ],
    },
    alumniOf: {
      "@type": "EducationalOrganization",
      name: "Institute of Advanced Research (IAR)",
      address: "Gandhinagar, India",
    },
    worksFor: {
      "@type": "Organization",
      name: "Freelance Developer",
    },
  };

  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <link rel="canonical" href="https://ksolanki.com" />
        <meta name="theme-color" content="#000000" />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <meta name="format-detection" content="telephone=no" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <div className="max-w-[980px] mx-auto min-h-screen p-5">
          <Header />
          {children}
          <Footer />
        </div>
      </body>
    </html>
  );
}
