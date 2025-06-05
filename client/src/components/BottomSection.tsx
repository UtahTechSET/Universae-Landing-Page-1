const BottomSection = () => {
  return (
    <section className="
        bg-foreground px-2 py-4 w-[21em]
        sm:pb-10 sm:py-6 sm:px-4 sm:w-[25em]
        md:absolute  md:h-[450px]
      ">
      <h2 className="text-white text-xl">
        <span className="red-line h-[0.1em]"></span>
        <span className="font-choplin-light">Why </span>
        <span className="font-choplin-medium">Study{" "}</span>
        <span className="font-choplin-light">at </span>
        <span className="font-choplin-medium">Utah Tech?</span>
      </h2>
    </section>
  );
};

export default BottomSection;
