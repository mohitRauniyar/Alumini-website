import React from 'react';

const UpcomingEvents = () => {
    return (
      <div className="flex justify-center items-center min-h-screen bg-gray-100">
        <div className="max-w-2xl p-6 bg-white border border-gray-200 rounded-lg shadow-md dark:bg-white dark:border-gray-300">
          <div className="mb-4">
            <img 
              src="https://imgs.search.brave.com/oq4WpAJXv8bsYWXdz_if4sJOAPWuWFSneXawU7P_fEA/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9pbWcu/ZnJlZXBpay5jb20v/cHJlbWl1bS1waG90/by9wZW9wbGUtYXJl/LXdhdGNoaW5nLWNv/bmNlcnQtY2xhc3Np/Y2FsLW11c2ljLWRh/eWxpZ2h0LW91dGRv/b3ItZW52aXJvbWVu/dC1ibHVycmVkLWlt/YWdlXzM0NTM0My0x/Mzg0LmpwZz9zaXpl/PTYyNiZleHQ9anBn" //kuch to daal
              alt="Upcoming Event"
              className="w-full h-auto rounded-lg" 
            />
          </div>
  
          <div className="text-center mb-4">
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-gray-900">
              The Next Frontier of Learning
            </h5>
            <p className="text-blue-500 mb-1 text-sm">Progressive Education</p>
            <h6 className="text-lg font-semibold text-gray-900 dark:text-gray-900">Lesson Plans</h6>
          </div>
          <div className="bg-gray-50 dark:bg-gray-200 rounded-lg p-4 text-center mb-4">
            <p className="text-sm text-gray-700 dark:text-gray-800">Wed, September 28</p>
            <p className="text-sm text-gray-700 dark:text-gray-800">5:00pm - 8:00pm PDT</p>
            <a href="#" className="text-blue-600 hover:underline dark:text-blue-500 font-medium">
              Zoom Meeting
            </a>
          </div>
          <div className="flex flex-col items-center">
            <button className="py-2 px-4 mb-2 text-white bg-blue-500 rounded-lg hover:bg-blue-400 focus:outline-none">
              Join Now
            </button>
            <p className="text-sm text-gray-500 dark:text-gray-400">
              15 members have already joined.
            </p>
          </div>
        </div>
      </div>
    );
  };
  
  export default UpcomingEvents;