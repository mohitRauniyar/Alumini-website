import React, { useState, useEffect } from 'react';
import { FaSearch, FaMapMarkerAlt, FaDollarSign, FaBriefcase } from 'react-icons/fa';
import { motion, AnimatePresence } from 'framer-motion';

const JobPortal = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [filters, setFilters] = useState({
    title: '',
    location: '',
    salaryRange: '',
    experience: ''
  });
  const [jobs, setJobs] = useState([]);
  const [selectedJob, setSelectedJob] = useState(null);

  useEffect(() => {
    // Simulated API call to fetch jobs
    const fetchJobs = async () => {
      // In a real application, this would be an API call
      const dummyJobs = [
        {
          id: 1,
          title: 'Frontend Developer',
          company: 'TechCorp',
          location: 'New York, NY',
          salary: '$80,000 - $120,000',
          experience: '2-4 years',
          description: 'We are looking for a talented Frontend Developer to join our team...',
          requirements: 'Proficiency in React, JavaScript, HTML, and CSS...',
          applicationInstructions: 'Please submit your resume and portfolio to apply@techcorp.com'
        },
        {
          id: 2,
          title: 'Backend Engineer',
          company: 'DataSystems Inc.',
          location: 'San Francisco, CA',
          salary: '$100,000 - $150,000',
          experience: '3-5 years',
          description: 'Join our backend team to build scalable and efficient systems...',
          requirements: 'Strong experience with Node.js, Python, and database management...',
          applicationInstructions: 'Apply through our careers page at datasystems.com/careers'
        },
        // Add more dummy jobs here
      ];
      setJobs(dummyJobs);
    };
    fetchJobs();
  }, []);

  const handleSearch = (e) => {
    e.preventDefault();
    // Implement search logic here
    console.log('Searching for:', searchTerm);
  };

  const handleFilterChange = (e) => {
    setFilters({ ...filters, [e.target.name]: e.target.value });
  };

  const filteredJobs = jobs.filter(job => {
    return (
      job.title.toLowerCase().includes(searchTerm.toLowerCase()) &&
      (filters.title === '' || job.title.toLowerCase().includes(filters.title.toLowerCase())) &&
      (filters.location === '' || job.location.toLowerCase().includes(filters.location.toLowerCase())) &&
      (filters.salaryRange === '' || job.salary.toLowerCase().includes(filters.salaryRange.toLowerCase())) &&
      (filters.experience === '' || job.experience.toLowerCase().includes(filters.experience.toLowerCase()))
    );
  });

  return (
    <div className="min-h-screen bg-white text-gray-800">
      <header className="bg-blue-600 text-white py-6">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl font-bold"> Alumni Job Portal</h1>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8">
        <form onSubmit={handleSearch} className="mb-8">
          <div className="flex flex-wrap -mx-2 mb-4">
            <div className="w-full md:w-1/2 px-2 mb-4 md:mb-0">
              <div className="relative">
                <input
                  type="text"
                  className="w-full p-3 pr-10 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Search for jobs..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
                <FaSearch className="absolute right-3 top-3 text-gray-400" />
              </div>
            </div>
            <div className="w-full md:w-1/2 px-2">
              <button
                type="submit"
                className="w-full bg-blue-600 text-white p-3 rounded-lg hover:bg-blue-700 transition duration-300"
              >
                Search Jobs
              </button>
            </div>
          </div>
          <div className="flex flex-wrap -mx-2">
            <div className="w-full sm:w-1/2 md:w-1/4 px-2 mb-4">
              <input
                type="text"
                name="title"
                className="w-full p-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Job Title"
                value={filters.title}
                onChange={handleFilterChange}
              />
            </div>
            <div className="w-full sm:w-1/2 md:w-1/4 px-2 mb-4">
              <input
                type="text"
                name="location"
                className="w-full p-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Location"
                value={filters.location}
                onChange={handleFilterChange}
              />
            </div>
            <div className="w-full sm:w-1/2 md:w-1/4 px-2 mb-4">
              <input
                type="text"
                name="salaryRange"
                className="w-full p-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Salary Range"
                value={filters.salaryRange}
                onChange={handleFilterChange}
              />
            </div>
            <div className="w-full sm:w-1/2 md:w-1/4 px-2 mb-4">
              <input
                type="text"
                name="experience"
                className="w-full p-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Experience Level"
                value={filters.experience}
                onChange={handleFilterChange}
              />
            </div>
          </div>
        </form>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredJobs.map((job) => (
            <motion.div
              key={job.id}
              className="bg-white rounded-lg shadow-md overflow-hidden cursor-pointer"
              whileHover={{ scale: 1.03 }}
              onClick={() => setSelectedJob(job)}
            >
              <div className="p-6">
                <h2 className="text-xl font-semibold mb-2">{job.title}</h2>
                <p className="text-gray-600 mb-4">{job.company}</p>
                <div className="flex items-center text-sm text-gray-500 mb-2">
                  <FaMapMarkerAlt className="mr-2" />
                  <span>{job.location}</span>
                </div>
                <div className="flex items-center text-sm text-gray-500 mb-2">
                  <FaDollarSign className="mr-2" />
                  <span>{job.salary}</span>
                </div>
                <div className="flex items-center text-sm text-gray-500">
                  <FaBriefcase className="mr-2" />
                  <span>{job.experience}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </main>

      <AnimatePresence>
        {selectedJob && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4"
            onClick={() => setSelectedJob(null)}
          >
            <motion.div
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: 50, opacity: 0 }}
              className="bg-white rounded-lg p-8 max-w-2xl w-full max-h-[90vh] overflow-y-auto"
              onClick={(e) => e.stopPropagation()}
            >
              <h2 className="text-2xl font-bold mb-4">{selectedJob.title}</h2>
              <p className="text-xl text-gray-600 mb-4">{selectedJob.company}</p>
              <div className="flex flex-wrap text-sm text-gray-500 mb-6">
                <div className="mr-4 mb-2"><FaMapMarkerAlt className="inline mr-1" /> {selectedJob.location}</div>
                <div className="mr-4 mb-2"><FaDollarSign className="inline mr-1" /> {selectedJob.salary}</div>
                <div className="mb-2"><FaBriefcase className="inline mr-1" /> {selectedJob.experience}</div>
              </div>
              <h3 className="text-lg font-semibold mb-2">Job Description</h3>
              <p className="mb-4">{selectedJob.description}</p>
              <h3 className="text-lg font-semibold mb-2">Requirements</h3>
              <p className="mb-4">{selectedJob.requirements}</p>
              <h3 className="text-lg font-semibold mb-2">How to Apply</h3>
              <p>{selectedJob.applicationInstructions}</p>
              <button
                className="mt-6 bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition duration-300"
                onClick={() => setSelectedJob(null)}
              >
                Close
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default JobPortal;