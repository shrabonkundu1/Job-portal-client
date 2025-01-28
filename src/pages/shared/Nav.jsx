

import React, { useState, useEffect, useContext } from "react";
import { Link, useLocation } from "react-router-dom";
import AUthContext from "../../Context/AuthContext";
import { toast } from "react-toastify";
import { FaHome } from "react-icons/fa";
import { MdBookmarkAdd, MdGroupAdd, MdLocalLibrary } from "react-icons/md";
import { IoLogoStencil } from "react-icons/io5";
import { CgLogIn } from "react-icons/cg";
import { SiSecurityscorecard } from "react-icons/si";
import { TbLogout2 } from "react-icons/tb";

const Navbar = () => {
  const { user, logOutUser } = useContext(AUthContext);
  const location = useLocation();
  const [activeLink, setActiveLink] = useState(location.pathname);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    setActiveLink(location.pathname);
  }, [location.pathname]);

  const handleLogout = () => {
    logOutUser()
      .then(() => {
        toast.success("Logged out successfully!", {
          position: "top-center",
          autoClose: 2000,
        });
      })
      .catch((error) => {
        toast.error("Logout failed. Please try again.", {
          position: "top-center",
        });
      });
  };

  const getLinkStyle = (path) => {
    const isActive = activeLink === path;
    return `relative px-4 py-2 text-sm font-bold transition-colors flex items-center gap-2 duration-200 
      ${isActive ? "text-[#0077b6]" : "text-gray-700 hover:text-[#0077b6]"} 
      before:absolute before:bottom-0 before:left-0 before:w-full before:h-0.5 
      before:bg-[#0077b6] before:transform before:scale-x-0 before:transition-transform 
      before:duration-300 hover:before:scale-x-100 ${
        isActive ? "before:scale-x-100" : ""
      }`;
  };

  const links = (
    <ul className="flex flex-col md:flex-row items-center space-y-3 md:space-y-0 md:space-x-5">
      <li>
        <Link
          to="/"
          className={getLinkStyle("/")}
          onClick={() => setActiveLink("/")}
        >
          {" "}
          <FaHome size={19} /> Home
        </Link>
      </li>
      <li>
        <Link
          to="/allJobs"
          className={getLinkStyle("/allJobs")}
          onClick={() => setActiveLink("/all-reviews")}
        >
          <MdLocalLibrary size={19} /> All Jobs
        </Link>
      </li>
      <li>
        <Link
          to="/job_applications"
          className={getLinkStyle("/job_applications")}
          onClick={() => setActiveLink("/job_applications")}
        >
          <MdLocalLibrary size={19} /> My Application
        </Link>
      </li>
      <li>
        <Link
          to="/addJob"
          className={getLinkStyle("/addJob")}
          onClick={() => setActiveLink("/all-reviews")}
        >
          <MdBookmarkAdd size={19} /> Add Job
        </Link>
      </li>
      <li>
        <Link
          to="/myPostedJobs"
          className={getLinkStyle("/myPostedJobs")}
          onClick={() => setActiveLink("/myPostedJobs")}
        >
          <MdLocalLibrary size={19} /> My Posted Jobs
        </Link>
      </li>
      <div className="flex items-center md:space-x-4 md:hidden">
        {user ? (
          <div className="flex items-center gap-3 space-x-2">
            <img
              src={user.photoURL || "/default-avatar.png"}
              alt="User Avatar"
              className="w-10 h-10 rounded-full"
            />
            <button
              onClick={handleLogout}
              className="text-sm text-[#0077b6] font-bold flex items-center gap-1"
            >
              <TbLogout2 size={19} />
              Logout
            </button>
          </div>
        ) : (
          <div className=" ">
            <Link to="/login" className={getLinkStyle("/login")}>
              <CgLogIn size={19} /> Login
            </Link>
            <Link to="/signUp" className={getLinkStyle("/signUp")}>
              <SiSecurityscorecard size={19} /> Sign Up
            </Link>
          </div>
        )}
      </div>
    </ul>
  );

  return (
    <nav className="bg-white shadow">
      <div className="w-[90%] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center">
            <Link to="/" className="text-xl font-bold text-[#0077b6]">
              <p className="font-semibold flex items-center gap-2">
                <IoLogoStencil className="text-[#0077b6] text-4xl" />{" "}
                <span className="text-black font-bold text-3xl">
                  Future Hire
                </span>
              </p>{" "}
            </Link>
          </div>

          {/* Navigation Links */}
          <div className="hidden md:flex">{links}</div>

          {/* User Actions */}
          <div className="md:flex hidden items-center space-x-4">
            {user ? (
              <div className="flex items-center gap-3 space-x-2">
                <img
                  src={user.photoURL || "/default-avatar.png"}
                  alt="User Avatar"
                  className="w-10 h-10 rounded-full"
                />
                <button
                  onClick={handleLogout}
                  className="text-sm text-[#0077b6] font-bold flex items-center gap-1 border hover:text-white border-[#0077b6] p-3 rounded-md hover:bg-[#0077b6]"
                >
                  <TbLogout2 size={19} />
                  Logout
                </button>
              </div>
            ) : (
              <div className="flex items-center space-x-4">
                <Link to="/login" className={getLinkStyle("/login")}>
                  <CgLogIn size={19} /> Login
                </Link>
                <Link to="/signUp" className={getLinkStyle("/signUp")}>
                  <SiSecurityscorecard size={19} /> Sign Up
                </Link>
              </div>
            )}
          </div>

          {/* Mobile Menu Toggle */}
          <div className="-mr-2 flex md:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700"
            >
              <span className="sr-only">Open menu</span>
              <svg
                className="h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d={
                    isMobileMenuOpen
                      ? "M6 18L18 6M6 6l12 12"
                      : "M4 6h16M4 12h16m-7 6h7"
                  }
                />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1">{links}</div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;