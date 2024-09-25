export default function ScheduleConsultButton() {
  return (
    <div
      id="schedule-consult-button-section"
      className="flex justify-evenly lg:w-10/12 w-full lg:mx-auto my-8 items-center"
    >
      <span
        id="decoration"
        className="w-[10%] border-2 border-black h-[1px] hidden lg:block"
      ></span>
      <a
        href="/schedule"
        className="p-4 rounded animation duration-300 linear hover:border-sky-400 border-sky-200 hover:bg-sky-500 hover:text-white bg-sky-200 "
      >
        Schedule Consultation w/ Clif
      </a>
      <span
        id="decoration"
        className="w-[10%] border-2 border-black h-[1px] hidden lg:block"
      ></span>
    </div>
  );
}
