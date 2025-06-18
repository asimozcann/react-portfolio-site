import Wrapper from "../UI/Wrapper";

const Hero = () => {
  return (
    <main className="flex justify-center items-center relative">
      <Wrapper
        className="absolute left-1/2 transform -translate-x-1/2 lg:-translate-y-5
      translate-y-6
        text-center flex flex-col text-white "
      >
        <h1 className="lg:text-6xl text-4xl text-[#2B975D] font-bold ">
          Asım Özcan
        </h1>
        <p className="lg:text-xl text-[15px] mt-4 ">
          Front-End Developer | React & Tailwind
          <span className="block">Hızlı, Temiz ve Uyumlu Arayüzler</span>
        </p>
      </Wrapper>
    </main>
  );
};

export default Hero;
