const Invitation = () => {
  return (
    <section className="bg-stone-50 w-full py-20 md:py-32 px-6">
      <div className="max-w-3xl mx-auto text-center">
        {/* 1. The Heading */}
        <h2 className="font-serif text-3xl md:text-5xl text-gray-800 mb-8 leading-snug">
          We invite you to celebrate our new beginning
        </h2>

        {/* 2. The Body Text */}
        <p className="font-light text-gray-600 text-lg md:text-xl leading-relaxed mb-12 tracking-wide">
          With joyful hearts, we request the honor of your presence as we unite
          our lives in marriage. Your love and friendship have helped shape who
          we are, and we would be honored to have you by our side as we take
          this sacred step forward.
        </p>
      </div>
    </section>
  );
};

export default Invitation;
