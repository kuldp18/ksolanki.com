import SectionHeading from "./SectionHeading";

const Achievements = () => {
  return (
    <section>
      <SectionHeading text={"Achievements"} />
      <div className="flex justify-between items-center text-[#b7b7b7]">
        <div className="left">
          <h2 className="text-[12px] sm:text-[16px] text-[#ededed]">
            First Runner-Up &mdash; Azadi ka Amrit Mahotsav Hackathon 2022
            (SSIP-Gujarat)
          </h2>
          <p className="text-[12px] sm:text-sm">Career Guidance using AI/ML</p>
        </div>
        <div className="text-[12px] sm:text-sm place-self-start">
          <p>Feb 2023</p>
        </div>
      </div>
    </section>
  );
};
export default Achievements;
