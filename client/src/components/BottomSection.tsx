const BottomSection = () => {
  return (
    <section className="absolute bg-foreground py-4 sm:py-6 px-3 sm:px-4 w-[85%] sm:w-[25em] h-auto min-h-[150px] sm:h-[450px]">
      <h2 className="text-white text-base sm:text-xl">
        <span className="red-line hidden sm:inline-block"></span>
        <span className="red-line w-4 sm:w-auto inline-block sm:hidden"></span>
        <span className="font-light">Another </span>
        <span className="font-bold">Headline</span>
      </h2>
    </section>
  );
};

export default BottomSection;
