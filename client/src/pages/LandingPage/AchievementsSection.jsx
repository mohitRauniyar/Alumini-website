import React from 'react';
import { FaGraduationCap } from 'react-icons/fa';

const achievements = [
  { icon: <FaGraduationCap />, text: 'Top 50 University Worldwide' },
  { icon: <FaGraduationCap />, text: '95% Graduate Employment Rate' },
  { icon: <FaGraduationCap />, text: '200+ Research Publications Annually' },
  { icon: <FaGraduationCap />, text: '50+ International Partnerships' },
];

const AchievementsSection = () => {
  return (
    <section className="py-16 bg-gray-100">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">University Achievements</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {achievements.map((achievement, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-lg shadow-md flex flex-col items-center text-center"
            >
              <div className="text-4xl text-blue-600 mb-4">{achievement.icon}</div>
              <p className="text-gray-700">{achievement.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AchievementsSection;
