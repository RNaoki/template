const LandingSection: React.FC = () => {
  return (
    <div className="flex flex-col items-center h-[100vh] w-full mt-52 px-12">
      <p className="text-[40px] font-bold text-center animate-fadein w-[90%] xl:w-[40%]">
        Inspirational or description title
      </p>
      <div className="flex relative w-[90%] xl:w-[30%]">
        <p className="text-[14px] absolute animate-slidein opacity-0 font-semibold left-0">
          Ability 1
        </p>
        <p className="text-[14px] absolute animate-slidein opacity-0 animation-delay-[500ms] font-semibold text-center w-full">
          Ability 2
        </p>
        <p className="text-[14px] absolute animate-slidein opacity-0 animation-delay-[1000ms] font-semibold right-0">
          Ability 3
        </p>
      </div>
    </div>
  );
};

export default LandingSection;
