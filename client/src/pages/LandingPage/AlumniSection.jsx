import React from 'react';

const alumni = [
  { name: 'John Doe', degree: 'BS Computer Science', achievement: 'Founded a successful tech startup', photo: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=300&q=80' },
  { name: 'Jane Smith', degree: 'MBA', achievement: 'CEO of Fortune 500 company', photo: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=300&q=80' },
  { name: 'Mike Johnson', degree: 'PhD Physics', achievement: 'Nobel Prize winner in Physics', photo: 'https://images.unsplash.com/photo-1566492031773-4f4e44671857?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=300&q=80' },
];

const AlumniSection = () => {
  return (
    <section className="py-16 bg-gray-100">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Alumni Achievements</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {alumni.map((alum, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-lg shadow-md transition duration-300 transform hover:-translate-y-2"
            >
              <img
                src={alum.photo}
                alt={alum.name}
                className="w-32 h-32 rounded-full mx-auto mb-4 object-cover"
              />
              <h3 className="text-xl font-semibold text-center mb-2">{alum.name}</h3>
              <p className="text-gray-600 text-center mb-2">{alum.degree}</p>
              <p className="text-gray-700 text-center">{alum.achievement}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AlumniSection;
