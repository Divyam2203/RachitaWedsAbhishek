const Schedule = () => {
  // 1. Easy-to-edit Data Array
  // You can add more events here (like Reception or Mehendi) easily.
  const events = [
    {
      id: 1,
      title: "Mehendi & Sangeet",
      date: "April 20, 2026",
      time: "5:30 PM Onwards",
      description:
        "An evening of colors, music, dancing and a lot of love. Come ready to celebrate, sing loudly and show off those dance moves you`ve been secretly practicing.",
      dressCode: " Anything Colourful and Celebratory! ",
    },
    {
      id: 2,
      title: "Haldi & Mangala Snanam",
      date: "April 21, 2026",
      time: "6:30 AM",
      location: "Crystal Ballroom",
      description:
        "A beautiful moring ritual filled with blessings, laughter, and a lot of haldi",
      dressCode: "Shades of White/ Ivory/ Off-White",
    },
    {
      id: 3,
      title: "Baraat & Wedding Ceremony",
      date: "April 21, 2026",
      time: "7:00 PM ",
      location: "The Royal Lawns",
      description:
        "The big moment. The drums will roll, the vows will be taken, and the celebrations will continue into the night. ",
      dressCode: "Your Festive Best!",
    },
  ];

  return (
    <section className="w-full py-20 md:py-32 bg-stone-50">
      <div className="max-w-4xl mx-auto px-6">
        {/* Header */}
        <div className="font-light text-center mb-16">
          <span className="text-red-800 uppercase tracking-[0.2em] text-sm   mb-2 block">
            come celebrate with us
          </span>
          <h2 className="text-4xl md:text-5xl text-gray-800">
            Wedding Itinerary
          </h2>
        </div>

        {/* Timeline Container */}
        <div className="relative space-y-8 md:space-y-12">
          {/* Vertical Line (The Timeline Spine) */}
          {/* Hidden on mobile, visible on tablet+ for a cleaner look */}
          <div className="hidden md:block absolute left-40 top-2 bottom-2 w-px bg-red-800/20"></div>

          {events.map((item) => (
            <div
              key={item.id}
              className="relative flex flex-col md:flex-row gap-6 md:gap-12 group"
            >
              {/* 1. Date & Time Block (Left Side) */}
              <div className="md:w-40 md:text-right shrink-0 flex flex-row md:flex-col items-center md:items-end gap-2 md:gap-1">
                <p className=" text-2xl text-gray-800 pe-3">
                  {item.date.split(",")[0]}
                </p>{" "}
                {/* Extracts "December 11" */}
                <p className="text-red-700 font-medium text-sm uppercase tracking-wider pe-1">
                  {item.time.split(" ")[0]} {item.time.split(" ")[1]}
                </p>
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
                  <h3 className=" text-2xl text-gray-900">{item.title}</h3>
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
                    <svg
                      className="w-4 h-4 text-red-800"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z"
                      />
                    </svg>
                    <span>
                      Dress Code:{" "}
                      <span className="font-medium text-gray-700">
                        {item.dressCode}
                      </span>
                    </span>
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
