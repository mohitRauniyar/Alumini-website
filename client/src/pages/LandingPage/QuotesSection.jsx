import React, { useState, useEffect } from 'react';
import { FaQuoteLeft } from 'react-icons/fa';

const quotes = [
  { text: 'Education is the passport to the future, for tomorrow belongs to those who prepare for it today.', author: 'Malcolm X', photo: 'https://images.unsplash.com/photo-1582015752624-e8b1c75e3711?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=300&q=80' },
  { text: 'The function of education is to teach one to think intensively and to think critically. Intelligence plus character - that is the goal of true education.', author: 'Martin Luther King Jr.', photo: 'https://images.unsplash.com/photo-1541872703-74c5e44368f9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=300&q=80' },
  { text: 'The beautiful thing about learning is that no one can take it away from you.', author: 'B.B. King', photo: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=300&q=80' },
];

const QuotesSection = () => {
  const [currentQuoteIndex, setCurrentQuoteIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentQuoteIndex((prevIndex) => (prevIndex + 1) % quotes.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">What Our Community Says</h2>
        <div className="flex flex-col items-center justify-center text-center bg-gray-100 p-8 rounded-lg shadow-md">
          <FaQuoteLeft className="text-4xl text-blue-600 mb-4" />
          <p className="text-xl text-gray-700 mb-4">"{quotes[currentQuoteIndex].text}"</p>
          <p className="text-gray-600 mb-4">- {quotes[currentQuoteIndex].author}</p>
          <img
            src={quotes[currentQuoteIndex].photo}
            alt={quotes[currentQuoteIndex].author}
            className="w-16 h-16 rounded-full object-cover"
          />
        </div>
      </div>
    </section>
  );
};

export default QuotesSection;
