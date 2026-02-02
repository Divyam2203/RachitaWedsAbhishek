

const Schedule = () => {
  // 1. Easy-to-edit Data Array
  // You can add more events here (like Reception or Mehendi) easily.
  const events = [
    // {
    //   id: 1,
    //   title: "Haldi Ceremony",
    //   date: "April 19, 2026",
    //   time: "10:00 AM - 1:00 PM",
    //   location: "Poolside, The Grand Palace",
    //   description: "A fun morning of turmeric and blessings. Get ready to get messy!",
    //   dressCode: "Yellows & Brights",
    //   icon: "☀️" // You can replace this with an SVG if you prefer
    // },
    // {
    //   id: 2,
    //   title: "Sangeet Night",
    //   date: "April 20, 2026",
    //   time: "7:00 PM onwards",
    //   location: "Crystal Ballroom",
    //   description: "Put on your dancing shoes for a night of music, performances, and cocktails.",
    //   dressCode: "Indo-Western / Glamour",
    //   icon: "💃"
    // },
    {
      id: 1,
      title: "The Wedding (Pheras)",
      date: "April 21, 2026",
      time: "7:00 PM ",
      location: "The Royal Lawns",
      description: "The traditional ceremony uniting our souls. Dinner to follow.",
      dressCode: "Traditional Indian / Formal",
      icon: "🔥"
    }
  ];

  return (
    <section className="w-full py-20 md:py-32 bg-stone-50">
      <div className="max-w-4xl mx-auto px-6">
        
        {/* Header */}
        <div className="text-center mb-16">
          <span className="text-red-800 uppercase tracking-[0.2em] text-sm font-bold mb-2 block">
            The Itinerary
          </span>
          <h2 className="font-serif text-4xl md:text-5xl text-gray-800">
            Schedule of Events
          </h2>
        </div>

        {/* Timeline Container */}
        <div className="relative space-y-8 md:space-y-12">
          
          {/* Vertical Line (The Timeline Spine) */}
          {/* Hidden on mobile, visible on tablet+ for a cleaner look */}
          <div className="hidden md:block absolute left-40 top-2 bottom-2 w-px bg-red-800/20"></div>

          {events.map((item) => (
            <div key={item.id} className="relative flex flex-col md:flex-row gap-6 md:gap-12 group">
              
              {/* 1. Date & Time Block (Left Side) */}
              <div className="md:w-40 md:text-right shrink-0 flex flex-row md:flex-col items-center md:items-end gap-2 md:gap-1">
                 <p className="font-serif text-2xl text-gray-800 pe-3">{item.date.split(',')[0]}</p> {/* Extracts "December 11" */}
                 <p className="text-red-700 font-medium text-sm uppercase tracking-wider pe-1">{item.time.split(' ')[0]} {item.time.split(' ')[1]}</p>
              </div>

              {/* 2. The Timeline Dot (Center) */}
              <div className="hidden md:flex absolute left-40 -translate-x-1/2 top-3 w-4 h-4 rounded-full bg-white border-4 border-red-800 z-10 group-hover:scale-125 transition-transform duration-300"></div>

              {/* 3. The Event Card (Right Side) */}
              <div className="flex-1 bg-white p-6 md:p-8 rounded-xl shadow-sm border border-stone-100 hover:shadow-md transition-shadow duration-300">
                
                {/* Mobile Date (Visible only on small screens) */}
                {/* <div className="md:hidden text-xs font-bold text-red-700 uppercase tracking-wider mb-2">
                  {item.date} • {item.time}
                </div> */}

                <div className="flex justify-between items-start mb-4">
                  <h3 className="font-serif text-2xl text-gray-900">{item.title}</h3>
                  <span className="text-2xl grayscale group-hover:grayscale-0 transition-all">{item.icon}</span>
                </div>

                <p className="text-gray-600 font-light leading-relaxed mb-6">
                  {item.description}
                </p>

                {/* Details Footer */}
                <div className="flex flex-col sm:flex-row gap-4 sm:gap-8 pt-4 border-t border-gray-100 text-sm">
                  
                  {/* Location
                  <div className="flex items-center gap-2 text-gray-500">
                    <svg className="w-4 h-4 text-red-800" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/></svg>
                    <span>{item.location}</span>
                  </div> */}

                  {/* Dress Code */}
                  <div className="flex items-center gap-2 text-gray-500">
                    <svg className="w-4 h-4 text-red-800" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z"/></svg>
                    <span>Dress: <span className="font-medium text-gray-700">{item.dressCode}</span></span>
                  </div>
                  
                </div>

              </div>
            </div>
          ))}
          
          <div className="text-center mb-16">
          <span className="text-gray-500 uppercase tracking-[0.2em] text-sm font-bold mb-2 block">
            {/* More Dates To Be Announced Soon */}
          </span>
          
        </div>

        </div>
      </div>
    </section>
  );
};

export default Schedule;