import { FaHeart as HeartIcon } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="border-t border-neutral-600 mt-18 text-center text-sm text-[#b7b7b7] pt-6">
      <p className="flex justify-center items-center gap-1 flex-wrap">
        © {new Date().getFullYear()} — Made with{" "}
        <HeartIcon className="hover:text-white cursor-pointer" size={12} /> by{" "}
        <a
          href="https://github.com/kuldp18"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-white transition-colors"
        >
          @kuldp18
        </a>
      </p>
      <div className="mt-2 flex justify-center gap-4 flex-wrap">
        <a
          href="https://github.com/kuldp18"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-white transition-colors"
        >
          Github
        </a>
        <a
          href="https://linkedin.com/in/ksolanki8"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-white transition-colors"
        >
          Linkedin
        </a>
        <a
          href="mailto:kuldeepsolanki1854@gmail.com"
          className="hover:text-white transition-colors"
        >
          Contact
        </a>
        <a
          href="/Kuldeep-Solanki-Resume.pdf"
          rel="noopener noreferrer"
          className="hover:text-white transition-colors"
          download
        >
          Resume
        </a>
      </div>
    </footer>
  );
}
