const LandingSection: React.FC = () => {
  return (
    <div className="flex flex-col items-center h-[90vh] w-full mt-52 px-12 z-0">
      <p className="text-[40px] font-bold text-center animate-fadein w-[90%] lg:w-[40%]">
        Escreva algo legal aqui
      </p>
      <div className="flex relative w-[90%] md:w-[40%] lg:w-[20%]">
        <p className="text-[14px] absolute animate-slidein opacity-0 font-semibold left-0">
          Algo
        </p>
        <p className="text-[14px] absolute animate-slidein opacity-0 animation-delay-[500ms] font-semibold text-center w-full">
          Legal
        </p>
        <p className="text-[14px] absolute animate-slidein opacity-0 animation-delay-[1000ms] font-semibold right-0">
          Aqui
        </p>
      </div>
    </div>
  );
};

export default LandingSection;
