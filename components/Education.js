import SectionHeading from "./SectionHeading";

const Education = () => {
  return (
    <section>
      <SectionHeading text={"Education"} />
      <div className="flex justify-between items-center text-[#b7b7b7]">
        <div className="left">
          <h2 className="text-[12px] sm:text-[16px] text-[#ededed]">
            Institute of Advanced Research (IAR), Gandhinagar
          </h2>
          <p className="text-[12px] sm:text-sm">
            Bachelor of Computer Applications
          </p>
        </div>
        <div className="text-[12px] sm:text-sm place-self-start">
          <p>2022 - 2025</p>
        </div>
      </div>
    </section>
  );
};
export default Education;
