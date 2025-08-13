import Link from "next/link";
import { MdOutlineKeyboardBackspace as BackIcon } from "react-icons/md";

const NotFoundPage = () => {
  return (
    <section className="flex items-center justify-center min-h-[calc(100vh-40px)]">
      <div className="flex flex-col items-center gap-4 text-[12px] sm:text-lg text-[#b7b7b7]">
        <h1>Error 404: Requested page was not found.</h1>
        <Link
          href={"/"}
          className="flex items-center gap-2 hover:text-white transition-colors"
        >
          <BackIcon className="w-[1em] h-[1em] relative top-[1px]" />
          <span>Go back</span>
        </Link>
      </div>
    </section>
  );
};
export default NotFoundPage;
