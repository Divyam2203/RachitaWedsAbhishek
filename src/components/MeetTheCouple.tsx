import groom from "../assets/groom.webp";
import bride from "../assets/bride.webp";

const MeetTheCouple = () => {
  return (
    <section className="bg-white w-full py-20 md:py-32 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Section Heading */}
        <h2 className="text-center font-serif text-4xl md:text-5xl text-gray-800 mb-16 md:mb-24">
          Meet the Happy Couple
        </h2>

        {/* --- GROOM PROFILE --- */}
        {/* Grid layout: Image Left, Text Right on desktop */}
        <div className="grid md:grid-cols-2 gap-10 md:gap-20 items-center mb-24 md:mb-32">
          {/* 1. Image Container */}
          {/* 'h-[500px]' ensures a tall portrait orientation */}
          <div className="relative h-125 md:h-150 w-full rounded-2xl overflow-hidden shadow-xl bg-gray-100">
            <img
              src={groom}
              alt="The Groom"
              className="w-full h-full object-cover object-top hover:scale-105 transition-transform duration-700"
            />
          </div>

          {/* 2. Text Content */}
          <div className="text-center md:text-left">
            <span className="block text-red-800 uppercase tracking-[0.2em] text-sm font-bold mb-4">
              The Groom
            </span>
            <h3 className="font-serif text-4xl md:text-5xl text-gray-900 mb-6">
              Abhishek
            </h3>
            <div className="w-16 h-px bg-red-800/40 mx-auto md:mx-0 mb-6"></div>
            <p className="text-gray-600 text-lg leading-relaxed font-light">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book.
            </p>
          </div>
        </div>

        {/* --- BRIDE PROFILE --- */}
        {/* Alternating Layout: Text Left, Image Right on desktop */}
        <div className="grid md:grid-cols-2 gap-10 md:gap-20 items-center">
          {/* 1. Text Content */}
          {/* 'order-2 md:order-1' makes text come second on mobile, but first on desktop */}
          <div className="text-center md:text-left order-2 md:order-1">
            <span className="block text-red-800 uppercase tracking-[0.2em] text-sm font-bold mb-4">
              The Bride
            </span>
            <h3 className="font-serif text-4xl md:text-5xl text-gray-900 mb-6">
              Rachita Kriti
            </h3>
            <div className="w-16 h-px bg-red-800/40 mx-auto md:mx-0 mb-6"></div>
            <p className="text-gray-600 text-lg leading-relaxed font-light">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book.
            </p>
          </div>

          {/* 2. Image Container */}
          {/* 'order-1 md:order-2' makes image appear first on mobile */}
          <div className="relative h-125 md:h-150 w-full rounded-2xl overflow-hidden shadow-xl bg-gray-100 order-1 md:order-2">
            <img
              src={bride}
              alt="The Bride"
              className="w-full h-full object-cover object-center hover:scale-105 transition-transform duration-700"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default MeetTheCouple;
