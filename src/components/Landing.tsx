import bg from "../assets/bg.jpg";

const Landing = () => {
  return (
    <>
      <section className="relative h-screen w-full overflow-hidden">
      
      {/* LAYER 1: The Background Image */}
      {/* 'object-cover' ensures it fills the screen without stretching */}
      <img 
        src={bg} 
        alt="Couple embracing"
        className="absolute inset-0 w-full h-full object-cover object-center"
      />

      {/* LAYER 2: The Dark Overlay */}
      {/* This adds a 40% black tint so white text pops against any photo */}
      <div className="absolute inset-0 bg-black/40"></div>

      {/* LAYER 3: The Content */}
      {/* Z-10 puts this above the image/overlay. Flexbox centers it perfectly. */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-4 text-white">
        
        {/* Top Tagline */}
        <p className="uppercase tracking-[0.2em] text-sm md:text-base font-medium mb-4 animate-fade-in-up">
          We're Getting Married
        </p>

        {/* Names - Big Serif Font */}
        <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl mb-6 leading-tight drop-shadow-lg">
          Rachita <span className="text-pink-200 italic">&</span> Abhishek
        </h1>

        {/* Date & Location */}
        <div className="flex flex-col md:flex-row items-center gap-2 md:gap-8 text-lg font-light tracking-wide">
          <span>April 21, 2026</span>
          <span className="hidden md:block w-1.5 h-1.5 bg-white rounded-full"></span>
          <span>New Delhi</span>
        </div>

        
      </div>
    </section>
    </>
  );
};

//We're Getting Married
export default Landing;
