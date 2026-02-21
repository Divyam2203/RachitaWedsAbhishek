import bg from "../assets/bg.jpg";
import Logo from "../assets/logo.png";

const Landing = () => {
  return (
    <>
      <section className="relative h-screen w-full overflow-hidden">
        {/* LAYER 1: The Background Image */}
        {/* 'object-cover' ensures it fills the screen without stretching */}
        <img
          src={bg}
          alt="Couple photo"
          className="absolute inset-0 w-full h-full object-cover object-[50%_18%] md:object-[50%_35%]"
        />

        {/* LAYER 2: The Dark Overlay */}
        {/* This adds a 40% black tint so white text pops against any photo */}
        <div className="absolute inset-0 bg-black/40"></div>

        {/* LAYER 3: The Content */}
        {/* Z-10 puts this above the image/overlay. Flexbox centers it perfectly. */}
        <div className="relative flex flex-col items-center justify-start h-full text-center pt-10 text-white">
          {/* Names - Big Serif Font */}
          <h1 className="font font-normal text-3xl md:text-7xl lg:text-8xl mb-6 leading-tight drop-shadow-lg text-amber-400">
            {/* Rachita <span className="text-amber-200 italic">&</span> Abhishek */}
            <img src={Logo} alt="logo" className="w-35 h-35 " />
          </h1>
        </div>
      </section>
    </>
  );
};

//We're Getting Married
export default Landing;
