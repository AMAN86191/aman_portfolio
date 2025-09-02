// src/components/Footer.jsx
const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white mt-10">
      <div className="max-w-7xl mx-auto px-4 py-6 flex flex-col md:flex-row justify-between items-center">
        <p className="text-sm">&copy; {new Date().getFullYear()} Aman.dev. All rights reserved.</p>
        <div className="space-x-4 mt-2 md:mt-0">
          <a href="https://github.com/AMAN86191" target="_blank" rel="noopener noreferrer" className="hover:underline">
            GitHub
          </a>
          {/* <a href="mailto:your-email@example.com" className="hover:underline">
            Contact
          </a> */}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
