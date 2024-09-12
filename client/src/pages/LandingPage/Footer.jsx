import React from 'react';

const Footer = () => {
  return (
    <footer className="py-8 bg-blue-600 text-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row md:justify-between">
          <p>&copy; 2023 Our University. All rights reserved.</p>
          <ul className="flex space-x-4 mt-4 md:mt-0">
            <li><a href="#" className="hover:underline">Privacy Policy</a></li>
            <li><a href="#" className="hover:underline">Terms of Service</a></li>
          </ul>
          <div className="w-full md:w-1/3 mb-8 md:mb-0">
              <h3 className="text-xl font-semibold mb-4">Contact Us</h3>
              <p>123 University Ave, City, State 12345</p>
              <p>Phone: (123) 456-7890</p>
              <p>Email: info@university.edu</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
