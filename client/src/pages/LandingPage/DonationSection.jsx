import React from 'react';

const DonationSection = () => {
  return (
    <section className="py-16 bg-white text-black">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Support Our University</h2>
          <p className="text-xl mb-8">Your contribution can make a difference in the lives of our students.</p>
          <button className="bg-blue-600 text-white px-8 py-3 rounded-full text-lg font-semibold hover:bg-blue-500 transition duration-300">
            Donate Now
          </button>
        </div>
    </section>
  );
};

export default DonationSection;
