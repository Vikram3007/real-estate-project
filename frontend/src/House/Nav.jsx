import React, { useState, useEffect } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import Logo from '../assets/Logo.jpg';

// Icons
import { FaSignOutAlt, FaFacebook, FaTwitter, FaInstagram, FaYoutube, FaWhatsapp, FaTimes } from 'react-icons/fa';
import { Share2 } from 'lucide-react';

const Nav = () => {
  // State for mobile menu toggle
  const [menuOpen, setMenuOpen] = useState(false);
  // State to track scroll for sticky navbar effect
  const [scrolled, setScrolled] = useState(false);
  // State to toggle social share icons popup
  const [showIcons, setShowIcons] = useState(false);
  // State to control initial popup visibility
  const [showPopup, setShowPopup] = useState(true);

  // Paths and labels for main nav links
  const paths = ['/', '/about', '/contact'];
  const labels = ['Home', 'About', 'Contact'];

  // 🔹 Detect scroll to add sticky background
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Message for WhatsApp share
  const message = encodeURIComponent(`Check out this website: ${window.location.href}`);
  const whatsappLink = `https://wa.me/?text=${message}`;

  const navigate = useNavigate(); // Navigation hook

  // 🔹 Logout function
  const logout = () => {
    localStorage.clear(); // Remove token
    navigate("/"); // Go to login/register page
  }

  return (
    <>
      {/* Navigation Bar */}
      <div
        className={`px-3 py-2 flex justify-between items-center fixed top-0 left-0 w-full transition-all duration-300 z-40 ${
          scrolled
            ? 'bg-white shadow-lg border-b-4 text-black' // Sticky navbar style when scrolled
            : 'bg-black/10 backdrop-blur-none text-white' // Transparent navbar initially
        }`}
      >
        {/* Logo */}
        <h3 className="font-bold text-2xl px-10">
          <img src={Logo} alt="Logo" className="w-32 h-auto p-2" />
        </h3>

        {/* Desktop Navigation */}
        <nav className="hidden md:block">
          <ul className="flex gap-4 font-bold">
            {/* Map through main nav links */}
            {paths.map((path, i) => (
              <li key={path}>
                <NavLink
                  to={path}
                  className={({ isActive }) =>
                    `px-3 py-1 rounded transition ${
                      isActive ? 'text-blue-500 underline' : 'text-gray-500 hover:text-blue-500'
                    }`
                  }
                >
                  {labels[i]}
                </NavLink>
              </li>
            ))}

            {/* Blog – currently just text, no link */}
            <li className="text-gray-500 hover:text-blue-500">Blog</li>

            {/* Call button */}
            <a href="tel:+9600577280" className="border-1 bg-black p-1 m-1 text-xs text-yellow-200">
              Call Me
            </a>

            {/* Logout – only visible if token exists */}
            {localStorage.getItem("token") && (
              <li>
                <button
                  onClick={logout}
                  className="flex items-center gap-1 text-red-500 hover:text-red-700 px-2 py-1 rounded"
                >
                  <FaSignOutAlt size={18} />
                  Logout
                </button>
              </li>
            )}
          </ul>
        </nav>

        {/* Mobile Toggle Button */}
        <button onClick={() => setMenuOpen(!menuOpen)} className="md:hidden block">
          <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" className="size-6">
            <path
              fillRule="evenodd"
              d="M3 6.75A.75.75 0 0 1 3.75 6h16.5a.75.75 0 0 1 0 1.5H3.75A.75.75 0 0 1 3 6.75ZM3 12a.75.75 0 0 1 .75-.75h16.5a.75.75 0 0 1 0 1.5H3.75A.75.75 0 0 1 3 12Zm0 5.25a.75.75 0 0 1 .75-.75h16.5a.75.75 0 0 1 0 1.5H3.75a.75.75 0 0 1-.75-.75Z"
              clipRule="evenodd"
            />
          </svg>
        </button>

        {/* Mobile Menu */}
        <div
          className={`fixed top-0 left-0 w-full h-screen bg-white text-black shadow-2xl transform transition-transform duration-300 md:hidden z-50 ${
            menuOpen ? 'translate-x-0' : '-translate-x-full' // Slide in/out
          }`}
        >
          <button onClick={() => setMenuOpen(false)} className="absolute top-4 right-4 text-3xl font-bold">
            <FaTimes size={30} color="black" />
          </button>
          <nav className="flex flex-col items-center justify-center p-6 h-full">
            <ul className="flex flex-col gap-6 font-bold text-lg text-center">
              {/* Mobile nav links */}
              {paths.map((path, i) => (
                <li key={path}>
                  <NavLink
                    to={path}
                    onClick={() => setMenuOpen(false)} // close menu after click
                    className={({ isActive }) =>
                      `px-3 py-1 rounded transition ${
                        isActive ? 'text-blue-500 underline' : 'text-gray-700 hover:text-blue-500'
                      }`
                    }
                  >
                    {labels[i]}
                  </NavLink>
                </li>
              ))}
              <li className="text-gray-500 hover:text-blue-500">Blog</li>
              <a href="tel:+9600577280" className="border-1 bg-black p-1 m-1 text-xs text-yellow-200">
                Call Me
              </a>
            </ul>
          </nav>
        </div>
      </div>

      {/* Social Share Buttons */}
      {!showPopup && (
        <>
          <div className="fixed bottom-20 right-8 z-40">
            {/* Share button */}
            <button
              onClick={() => setShowIcons(!showIcons)}
              className="flex items-center gap-2 bg-white text-black px-4 py-2 rounded-full shadow-lg hover:bg-gray-200 transition"
              aria-label="Share"
            >
              <Share2 size={20} />
            </button>

            {/* Social icons popup */}
            {showIcons && (
              <div className="mt-4 flex flex-col items-center gap-3 bg-white text-black px-4 py-3 rounded-xl shadow-md transition-all duration-300">
                {/* Close button for popup */}
                <svg
                  onClick={() => setShowIcons(false)}
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  width="24"
                  height="24"
                  fill="none"
                  stroke="black"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <line x1="18" y1="6" x2="6" y2="18" />
                  <line x1="6" y1="6" x2="18" y2="18" />
                </svg>

                {/* Social links */}
                <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                  <FaFacebook size={30} color="#1877F2" />
                </a>
                <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                  <FaTwitter size={30} color="#1DA1F2" />
                </a>
                <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                  <FaInstagram size={30} color="#E1306C" />
                </a>
                <a href="https://youtube.com" target="_blank" rel="noopener noreferrer">
                  <FaYoutube size={30} color="#FF0000" />
                </a>
              </div>
            )}
          </div>

          {/* WhatsApp button */}
          <div className="fixed bottom-8 right-8 z-40">
            <a
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 bg-green-500 text-green-200 px-4 py-2 rounded-full shadow-lg transition"
            >
              <FaWhatsapp size={23} />
            </a>
          </div>
        </>
      )}

    </>
  );
};

export default Nav;
