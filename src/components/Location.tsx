const Location = () => {
  return (
    <>
      <section className="w-full py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* LEFT SIDE: Address & Details */}
            <div className="text-center md:text-left space-y-6 order-2 md:order-1">
              <h2 className="font-serif text-4xl text-gray-800">The Venue</h2>

              <div className="space-y-2 text-gray-600 text-lg">
                <p className="font-semibold text-gray-900">
                  The Grand Palace Hotel
                </p>
                <p>123 Wedding Avenue</p>
                <p>Sector 29, Gurugram, Haryana</p>
              </div>

              <a
                href="https://maps.google.com" // Replace with your actual directions link
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block px-8 py-3 bg-gray-900 text-white font-medium text-sm tracking-wider uppercase rounded hover:bg-gray-700 transition-colors"
              >
                Get Directions
              </a>
            </div>

            {/* RIGHT SIDE: The Map */}
            {/* 'order-1' makes it appear on top on mobile, but right on desktop */}
            <div className="w-full h-96 bg-gray-200 rounded-xl overflow-hidden shadow-xl order-1 md:order-2 relative">
              <iframe
                title="Wedding Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d224345.83923192776!2d77.0688975472578!3d28.52758200617607!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cfd5b347eb62d%3A0x52c2b7494e204dce!2sNew%20Delhi%2C%20Delhi%2C%20India!5e0!3m2!1sen!2sus!4v1699999999999!5m2!1sen!2sus"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="absolute inset-0 w-full h-full"
              ></iframe>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Location;
