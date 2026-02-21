const Invitation = () => {
  return (
    <section className="bg-stone-50 w-full py-20 md:py-32">
      <div className="max-w-3xl mx-auto text-center">
        <div className="pb-16">
          {/*Top Tagline*/}
          <p className="uppercase tracking-[0.2em] md:text-5xl text-xl mb-4 animate-fade-in-up">
            We're Getting Married
          </p>

          {/*Date & Location*/}
          <div className="uppercase tracking-[0.2em] text-sm md:text-base mb-4 animate-fade-in-up">
            <span>April 20 & 21, 2026 | New Delhi</span>
          </div>
        </div>

        {/* 2. The Body Text */}
        <p className="font-light text-gray-600 text-lg md:text-xl leading-relaxed mb-12 tracking-wide px-2">
          From two states to one family, from separate stories to a shared
          forever, we’re bringing our worlds together, and we’d love for you to
          be there when we do.
          <div></div>
          Come celebrate with us 🤍
        </p>
      </div>
    </section>
  );
};

export default Invitation;
