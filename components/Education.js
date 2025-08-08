import SectionHeading from "./SectionHeading";

const Education = () => {
  return (
    <section>
      <SectionHeading text={"Education"} />
      <div className="flex justify-between items-center text-[#b7b7b7]">
        <div className="left">
          <h2 className="text-[#ededed]">
            Institute of Advanced Research (IAR), Gandhinagar
          </h2>
          <p className="text-sm">Bachelor of Computer Applications</p>
        </div>
        <div className="text-sm place-self-start">
          <p>Sept 2022 - Sept 2025</p>
        </div>
      </div>
    </section>
  );
};
export default Education;
