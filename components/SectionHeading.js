const SectionHeading = ({ text }) => {
  return (
    <div className="flex items-center gap-3 my-5">
      <hr className="w-[10%] md:w-[3%] border-t border-gray-500" />
      <h2 className="text-lg sm:text-xl">{text || "Heading"}</h2>
      <hr className="flex-grow border-t border-gray-500" />
    </div>
  );
};
export default SectionHeading;
