import React, { useState, useRef } from 'react';
import emailjs from '@emailjs/browser';

const WeddingRSVP = () => {
  const form = useRef(null); // 1. Create a reference to the HTML form
  const [status, setStatus] = useState('idle');

  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault(); // Stop page refresh
    setStatus('submitting');

    // 2. The EmailJS Logic
    if (!form.current) return;
    // Replace 'YOUR_SERVICE_ID', etc. with your actual keys from emailjs.com
    emailjs.sendForm(
      'service_asc340l',    // e.g., service_z3x9...
      'template_ob8zoyn',   // e.g., template_8a2b...
      form.current,         // This sends the whole form data automatically
      '8YcGAlVzEAqHzn5r0'     // e.g., user_12345...
    )
    .then((result) => {
        console.log(result.text);
        setStatus('success');
    }, (error) => {
        console.log(error.text);
        setStatus('error');
    });
  };

  if (status === 'success') {
    return (
      <section className="py-20 bg-stone-100 text-center">
        <div className="max-w-md mx-auto p-8 bg-white shadow-xl rounded-xl">
          <h2 className="text-3xl font-serif text-green-700 mb-4">Thank You!</h2>
          <p className="text-gray-600">Check your inbox—we sent a confirmation!</p>
        </div>
      </section>
    );
  }

  return (
    <section className="py-24 bg-stone-100 px-6">
      <div className="max-w-lg mx-auto bg-white p-8 md:p-12 shadow-2xl rounded-xl border-t-4 border-red-800">
        <h2 className="text-center font-serif text-3xl md:text-4xl text-gray-800 mb-8">
          Kindly RSVP
        </h2>

        {/* 3. Attach the 'ref' and the 'onSubmit' to the form */}
        <form ref={form} onSubmit={sendEmail} className="space-y-6">
          
          <div>
            <label className="block text-xs font-bold uppercase tracking-widest text-gray-500 mb-2">Full Name</label>
            {/* 'name' attribute MUST match variables in your EmailJS template */}
            <input type="text" name="user_name" required className="w-full border-b-2 border-gray-300 focus:border-red-800 outline-none py-2 text-lg bg-transparent" />
          </div>

          <div className="grid grid-cols-2 gap-6">
            <div>
              <label className="block text-xs font-bold uppercase tracking-widest text-gray-500 mb-2">Guests</label>
              <select name="guest_count" className="w-full border-b-2 border-gray-300 focus:border-red-800 outline-none py-2 bg-transparent">
                {[1, 2, 3, 4, 5].map(num => <option key={num} value={num}>{num}</option>)}
              </select>
            </div>
            <div>
              <label className="block text-xs font-bold uppercase tracking-widest text-gray-500 mb-2">Attending?</label>
              <select name="attending_status" className="w-full border-b-2 border-gray-300 focus:border-red-800 outline-none py-2 bg-transparent">
                <option value="yes">Yes</option>
                <option value="no">No</option>
              </select>
            </div>
          </div>

          <div>
            <label className="block text-xs font-bold uppercase tracking-widest text-gray-500 mb-2">Message</label>
            <textarea name="message" rows={3} className="w-full border-2 border-gray-200 focus:border-red-800 outline-none p-3 rounded-md resize-none"></textarea>
          </div>

          <button type="submit" disabled={status === 'submitting'} className="w-full bg-red-800 text-white font-bold uppercase tracking-widest py-4 rounded hover:bg-red-900 transition-all disabled:opacity-50">
            {status === 'submitting' ? 'Sending...' : 'Confirm RSVP'}
          </button>

          {status === 'error' && <p className="text-red-500 text-center text-sm mt-2">Failed to send. Please try again.</p>}
        </form>
      </div>
    </section>
  );
};

export default WeddingRSVP;