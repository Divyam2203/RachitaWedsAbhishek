const Footer = () => {
  return (
    <footer className="bg-stone-900 text-stone-300 py-16 border-t-4 border-red-800">
      <div className="max-w-4xl mx-auto px-6 text-center">
        {/* 1. Ganesha & Mantra Section */}
        <div className="mb-10 flex flex-col items-center">
          {/* Simple Line Art Ganesha (White/Gold) */}
          <svg
            viewBox="0 0 100 100"
            className="w-12 h-12 mb-4 text-amber-500 fill-current opacity-90"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M50 20 C 35 20, 30 35, 30 45 C 30 65, 45 65, 45 80 C 45 85, 35 85, 35 90"
              stroke="currentColor"
              strokeWidth="3"
              fill="none"
              strokeLinecap="round"
            />
            <path
              d="M30 45 C 30 30, 40 10, 60 15 C 75 20, 70 40, 70 45"
              stroke="currentColor"
              strokeWidth="3"
              fill="none"
              strokeLinecap="round"
            />
            <path
              d="M70 45 C 85 40, 90 55, 80 65 C 75 70, 70 65, 70 60"
              stroke="currentColor"
              strokeWidth="3"
              fill="none"
              strokeLinecap="round"
            />
            <path
              d="M55 60 L 65 55"
              stroke="currentColor"
              strokeWidth="3"
              fill="none"
              strokeLinecap="round"
            />
          </svg>

          <p className="font-serif italic text-amber-500/80 text-sm md:text-base mb-1">
            "Vakratunda Mahakaya Surya Koti Samaprabha"
          </p>
          <p className="text-stone-500 text-xs uppercase tracking-widest">
            May we be blessed with a hurdle-free beginning
          </p>
        </div>

        {/* 2. Divider */}
        <div className="w-full max-w-xs h-px bg-stone-700 mx-auto mb-10"></div>

        {/* 3. Couple & Hashtag */}
        <h2 className="font-serif text-3xl md:text-4xl text-white mb-2">
          Rachita & Abhishek
        </h2>

        {/* 4. Wedding Planner / Help Contact
        <div className="bg-stone-800/50 rounded-lg p-6 inline-block mb-10 border border-stone-700">
          <p className="text-stone-400 text-sm mb-2 uppercase tracking-wide">
            Need help with stay or travel?
          </p>
          <p className="text-white text-lg font-medium">
            Contact: Rahul (Brother of Groom)
          </p>
          <a href="tel:+919876543210" className="text-amber-500 hover:text-amber-400 transition-colors">
            +91 98765 43210
          </a>
        </div> */}

        {/* 5. Copyright */}
        <div className="text-stone-600 text-xs mt-4">
          <p>Made with ❤️ by Divyam</p>
          <p className="mt-1">&copy; 2026 Wedding Season</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
