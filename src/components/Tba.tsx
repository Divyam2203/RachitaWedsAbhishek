

const Tba = () => {
  return (
    <section className="w-full py-20 md:py-32 bg-stone-50">
      <div className="max-w-4xl mx-auto px-6 text-center">
        
        {/* 1. Header Section (Kept consistent) */}
        <div className="mb-12">
          <span className="text-red-800 uppercase tracking-[0.2em] text-sm font-bold mb-2 block">
            The Itinerary
          </span>
          <h2 className="font-serif text-4xl md:text-5xl text-gray-800">
            Schedule of Events
          </h2>
        </div>

        {/* 2. The "To Be Announced" Card */}
        <div className="bg-white p-10 md:p-16 rounded-xl shadow-sm border border-stone-100 flex flex-col items-center justify-center animate-fade-in-up">
          
          {/* Decorative Icon */}
          <div className="w-16 h-16 bg-stone-100 rounded-full flex items-center justify-center mb-6 text-red-800">
             <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
               <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
             </svg>
          </div>

          {/* Main Message */}
          <h3 className="font-serif text-2xl md:text-3xl text-gray-800 mb-4">
            Details Coming Soon
          </h3>
          
          <div className="w-12 h-px bg-red-800/40 mb-6"></div>

          <p className="text-gray-600 text-lg leading-relaxed max-w-lg mx-auto">
            We are currently finalizing the dates and times for Wedding ceremonies. 
            Please check back closer to the date for the full itinerary.
          </p>

        

        </div>

      </div>
    </section>
  );
};

export default Tba;