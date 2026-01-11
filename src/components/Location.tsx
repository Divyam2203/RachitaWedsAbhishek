import kanerbaag from "../assets/Kanerbaag.jpg";

const Location = () => {
  return (
    <section className="w-full py-20 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        
        {/* Section Heading */}
        <div className="text-center mb-16">
          <span className="text-red-800 uppercase tracking-[0.2em] text-sm font-bold mb-2 block">
            The Destination
          </span>
          <h2 className="font-serif text-4xl md:text-5xl text-gray-800">
            Location & Venue
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-8 items-stretch">
          
          {/* LEFT: Venue Photo */}
          <div className="relative h-80 md:h-full min-h-[350px] rounded-xl overflow-hidden shadow-lg">
            <img 
              src={kanerbaag}
              alt="The Wedding Venue"
              className="absolute inset-0 w-full h-full object-cover"
            />
            {/* Subtle overlay on the image */}
            <div className="absolute inset-0 bg-black/10 hover:bg-transparent transition-all duration-500"></div>
          </div>

          {/* RIGHT: Map & Details Column */}
          <div className="flex flex-col gap-8">
            
            {/* The Map */}
            <div className="h-64 md:h-80 w-full rounded-xl overflow-hidden shadow-lg border border-stone-100">
              <iframe 
                title="Google Maps Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3508.575863463262!2d77.1311214!3d28.432052199999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d1f5c44f55e87%3A0xb1ab66f7c2f2c71a!2sKanerbaag!5e0!3m2!1sen!2sin!4v1767293473802!5m2!1sen!2sin" 
                width="100%" 
                height="100%" 
                style={{ border: 0 }}  
                loading="lazy" 
                className="" // Optional: makes map look more elegant/neutral
              ></iframe>
            </div>

            {/* Address Details Box */}
            <div className="bg-stone-50 p-8 rounded-xl border border-stone-200 flex flex-col items-center md:items-start text-center md:text-left">
              <h3 className="font-serif text-2xl text-gray-900 mb-2">Kanerbaag</h3>
              <p className="text-gray-600 mb-6 font-light">
                Street no 8, Baliawas<br />
                Gurugram, Bandhwari, Haryana
              </p>
              
              <a 
                href="https://maps.app.goo.gl/zPspJkK3vxjNKZXP9" 
                target="_blank" 
                rel="noreferrer"
                className="bg-gray-900 text-white px-6 py-3 rounded text-xs font-bold uppercase tracking-widest hover:bg-red-800 transition-colors"
              >
                Open in Google Maps
              </a>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};



export default Location;
