// import React, { useState, useEffect, useContext } from 'react';
// import { Link, useLocation } from 'react-router-dom';
// // import { useFirebaseAuth } from '../hooks/useFirebaseAuth';
// import AUthContext from '../../Context/AuthContext';
// // import { useTheme } from '../hooks/useTheme';

// const Navbar = () => {
//   const { user, logOut } = useContext(AUthContext);
// //   const { darkMode, toggleTheme } = useTheme();
//   const location = useLocation();

//   const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
//   const [activeLink, setActiveLink] = useState(location.pathname);

//   useEffect(() => {
//     setActiveLink(location.pathname);
//   }, [location.pathname]);

//   const getLinkStyle = (path) => {
//     const isActive = activeLink === path;
//     return `px-3 py-2 rounded-md text-sm font-medium ${
//       isActive
//         // ? darkMode
//         //   ? 'bg-gray-700 text-white'
//         //   : 'bg-blue-500 text-white'
//         // : darkMode
//         // ? 'text-gray-300 hover:bg-gray-600 hover:text-white'
//         // : 'text-gray-700 hover:bg-blue-100 hover:text-blue-500'
//     }`;
//   };

//   const handleLogout = async () => {
//     await logOut();
//   };

//   return (
//     <nav className={` shadow`}>
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="flex justify-between h-16">
//           <div className="flex items-center">
//             <Link to="/" className="text-xl font-bold text-blue-500">Austhetic Gamer</Link>
//           </div>
//           <div className="hidden md:flex items-center space-x-4">
//             <Link to="/" className={getLinkStyle('/')}>Home</Link>
//             <Link to="/all-reviews" className={getLinkStyle('/all-reviews')}>All Reviews</Link>
//             {user && (
//               <>
//                 <Link to="/add-review" className={getLinkStyle('/add-review')}>Add Review</Link>
//                 <Link to="/my-reviews" className={getLinkStyle('/my-reviews')}>My Reviews</Link>
//                 <Link to="/watchlist" className={getLinkStyle('/watchlist')}>Watchlist</Link>
//               </>
//             )}
//           </div>
//           <div className="flex items-center space-x-4">
//             <button className="p-2 text-gray-500 hover:text-gray-700">
//               {/* {darkMode ? '🌙' : '☀️'} */}
//             </button>
//             {user ? (
//               <div className="flex items-center space-x-2">
//                 <img
//                   src={user.photoURL || '/default-avatar.png'}
//                   alt="User Avatar"
//                   className="w-8 h-8 rounded-full"
//                 />
//                 <button onClick={handleLogout} className="text-sm text-red-500">Logout</button>
//               </div>
//             ) : (
//               <Link to="/login" className={getLinkStyle('/login')}>Login</Link>
//             )}
//           </div>
//           <div className="-mr-2 flex md:hidden">
//             <button
//               onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
//               className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700"
//             >
//               <span className="sr-only">Open menu</span>
//               <svg
//                 className="h-6 w-6"
//                 xmlns="http://www.w3.org/2000/svg"
//                 fill="none"
//                 viewBox="0 0 24 24"
//                 stroke="currentColor"
//               >
//                 <path
//                   strokeLinecap="round"
//                   strokeLinejoin="round"
//                   strokeWidth="2"
//                   d={isMobileMenuOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16m-7 6h7'}
//                 />
//               </svg>
//             </button>
//           </div>
//         </div>
//       </div>

//       {isMobileMenuOpen && (
//         <div className="md:hidden">
//           <div className="px-2 pt-2 pb-3 space-y-1">
//             <Link to="/" className={getLinkStyle('/')}>Home</Link>
//             <Link to="/all-reviews" className={getLinkStyle('/all-reviews')}>All Reviews</Link>
//             {user && (
//               <>
//                 <Link to="/add-review" className={getLinkStyle('/add-review')}>Add Review</Link>
//                 <Link to="/my-reviews" className={getLinkStyle('/my-reviews')}>My Reviews</Link>
//                 <Link to="/watchlist" className={getLinkStyle('/watchlist')}>Watchlist</Link>
//               </>
//             )}
//             {!user && <Link to="/login" className={getLinkStyle('/login')}>Login</Link>}
//           </div>
//         </div>
//       )}
//     </nav>
//   );
// };

// export default Navbar;

// import React, { useContext, useEffect, useState } from "react";
// import { NavLink, useLocation } from "react-router-dom";
// import { FaHome } from "react-icons/fa";
// import { MdDarkMode, MdGroupAdd } from "react-icons/md";
// import { CiLight, CiLogin, CiLogout } from "react-icons/ci";
// import AUthContext from "../../Context/AuthContext";
// import { IoLogoStencil } from "react-icons/io5";
// import logo from "../../assets/team/logo.webp";
// import { toast } from "react-toastify";

// const Navbar = () => {
//   const location = useLocation();
//   const { user, logOutUser } = useContext(AUthContext);
//   const [darkMode, setDarkMode] = useState(false);
//   const [activeLink, setActiveLink] = useState(location.pathname);

//   useEffect(() => {
//     setActiveLink(location.pathname);
//   }, [location.pathname]);

//   useEffect(() => {
//     if (darkMode) {
//       document.documentElement.classList.add("dark");
//     } else {
//       document.documentElement.classList.remove("dark");
//     }
//   }, [darkMode]);

//   const handleSignOut = () => {
// logOutUser()
//   .then(() => {
//     toast.success("Logged out successfully!", {
//       position: "top-center",
//       autoClose: 2000,
//     });
//   })
//   .catch((error) => {
//     toast.error("Logout failed. Please try again.", {
//       position: "top-center",
//     });
//   });
//   };

//   const getLinkStyle = (path) => `
//     relative px-4 py-2 text-sm font-bold transition-colors duration-200
//     ${
//       activeLink === path
//         ? "text-[#e20f3a]"
//         : darkMode
//         ? "text-white hover:text-[#e20f3a]"
//         : "text-black hover:text-[#e20f3a]"
//     }
//     before:absolute before:bottom-0 before:left-0 before:w-full before:h-0.5
//     before:bg-[#e20f3a] before:transform before:scale-x-0 before:transition-transform
//     before:duration-300 hover:before:scale-x-100
//     ${activeLink === path ? "before:scale-x-100" : ""}
//   `;

//   const links = (
//     <ul className="flex items-center space-x-5">
//       <li className="flex items-center">
//         <NavLink to="/" className={getLinkStyle("/")}  onClick={() => setActiveLink("/")} >
//          <span className="flex gap-2 items-center"> <FaHome /> <span>Home</span></span>
//         </NavLink>
//       </li>
//       <li>
//         <NavLink
//           to="/allJobs"
//           className={getLinkStyle("/allJobs")}
//           onClick={() => setActiveLink("/allJobs")}
//         >
//           All Jobs
//         </NavLink>
//       </li>
//       {user && (
//         <li>
//           <NavLink
//             to="/addJob"
//             className={getLinkStyle("/addJob")}
//             onClick={() => setActiveLink("/addJob")}
//           >
//             Add Job
//           </NavLink>
//         </li>
//       )}
//     </ul>
//   );

//   return (
//     <div className="bg-white dark:bg-gray-800 shadow">
//       <div className="max-w-7xl mx-auto px-4 flex justify-between items-center h-16">
//         {/* Logo */}
//         <div className="flex items-center">
//           <NavLink to="/" className="flex items-center space-x-2">
//             <IoLogoStencil className="text-blue-700 text-3xl" />
//             <span className="text-xl font-bold text-gray-900 ">Future Hire</span>
//           </NavLink>
//         </div>

//         {/* Navigation Links */}
//         <div className="hidden md:flex">{links}</div>

//         {/* Theme Toggle & User Actions */}
//         <div className="flex items-center space-x-4">

//           {user ? (
//             <div className="flex items-center space-x-4">
//               <button onClick={handleSignOut} className="text-red-500 font-bold flex gap-2 items-center btn-outline">
//                 <CiLogout /> Logout
//               </button>
//             </div>
//           ) : (
//             <div className="flex space-x-4">
//               <NavLink to="/signUp" className="text-blue-500 font-bold">
//                 <MdGroupAdd /> Sign Up
//               </NavLink>
//               <NavLink
//                 to="/login"
//                 className="px-4 py-2 bg-blue-600 text-white rounded shadow"
//               >
//                 <CiLogin /> Login
//               </NavLink>
//             </div>
//           )}
//         </div>

//         {/* Mobile Menu */}

//       </div>
//     </div>
//   );
// };

// export default Navbar;

import React, { useState, useEffect, useContext } from "react";
import { Link, useLocation } from "react-router-dom";
import AUthContext from "../../Context/AuthContext";
import { toast } from "react-toastify";
import { FaHome } from "react-icons/fa";
import { MdGroupAdd } from "react-icons/md";
import { IoLogoStencil } from "react-icons/io5";

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
      ${isActive ? "text-red-600" : "text-gray-700 hover:text-red-600"} 
      before:absolute before:bottom-0 before:left-0 before:w-full before:h-0.5 
      before:bg-red-600 before:transform before:scale-x-0 before:transition-transform 
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
          <FaHome /> Home
        </Link>
      </li>
      <li>
        <Link
          to="/allJobs"
          className={getLinkStyle("/all-reviews")}
          onClick={() => setActiveLink("/all-reviews")}
        >
          All Jobs
        </Link>
      </li>
      <li>
        <Link
          to="/addJob"
          className={getLinkStyle("/all-reviews")}
          onClick={() => setActiveLink("/all-reviews")}
        >
          Add Job
        </Link>
      </li>
      <div className="flex items-center md:space-x-4 md:hidden">
        {user ? (
          <div className="flex items-center space-x-2">
            <img
              src={user.photoURL || "/default-avatar.png"}
              alt="User Avatar"
              className="w-8 h-8 rounded-full"
            />
            <button
              onClick={handleLogout}
              className="text-sm text-red-500 font-bold"
            >
              Logout
            </button>
          </div>
        ) : (
          <div className=" ">
            <Link to="/login" className={getLinkStyle("/login")}>
              Login
            </Link>
            <Link to="/signUp" className={getLinkStyle("/signUp")}>
              Sign Up
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
            <Link to="/" className="text-xl font-bold text-blue-500">
              <p className="font-semibold flex items-center gap-2">
                <IoLogoStencil className="text-blue-700 text-4xl" />{" "}
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
              <div className="flex items-center space-x-2">
                <img
                  src={user.photoURL || "/default-avatar.png"}
                  alt="User Avatar"
                  className="w-8 h-8 rounded-full"
                />
                <button
                  onClick={handleLogout}
                  className="text-sm text-red-500 font-bold"
                >
                  Logout
                </button>
              </div>
            ) : (
              <div className="flex items-center space-x-4">
                <Link to="/login" className={getLinkStyle("/login")}>
                  Login
                </Link>
                <Link to="/signUp" className={getLinkStyle("/signUp")}>
                  Sign Up
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

// import React, { useContext, useEffect, useState } from "react";
// import { Link, useLocation } from "react-router-dom";
// import AuthContext from "../../Context/AuthContext";
// import { FaHome } from "react-icons/fa";
// import { MdGroupAdd } from "react-icons/md";
// import { CiLogin, CiLogout } from "react-icons/ci";

// const Navbar = () => {
//   const { user, logOutUser } = useContext(AuthContext);
//   const location = useLocation();
//   const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
//   const [isDropdownOpen, setIsDropdownOpen] = useState(false);
//   const [activeLink, setActiveLink] = useState(location.pathname);

//   useEffect(() => {
//     setActiveLink(location.pathname);
//   }, [location.pathname]);

//   const handleLogout =  () => {
//     logOutUser()
//     .then(() => {
//       toast.success("Logged out successfully!", {
//         position: "top-center",
//         autoClose: 2000,
//       });
//     })
//     .catch((error) => {
//       toast.error("Logout failed. Please try again.", {
//         position: "top-center",
//       });
//     });
//   };

//   const getLinkStyle = (path) => {
//     const isActive = activeLink === path;
//     return `px-3 py-2 rounded-md text-sm font-medium transition-all duration-200 ${
//       isActive ? "text-red-600" : "text-gray-700 hover:text-red-600"
//     }`;
//   };

//   return (
//     <nav className="bg-white shadow">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="flex justify-between h-16 items-center">
//           {/* Logo */}
//           <div className="flex items-center">
//             <Link to="/" className="text-xl font-bold text-blue-500">
//               Austhetic Gamer
//             </Link>
//           </div>

//           {/* Navigation Links */}
//           <div className="hidden md:flex items-center space-x-4">
//             <Link to="/" className={getLinkStyle("/")}>Home</Link>
//             <Link to="/all-reviews" className={getLinkStyle("/all-reviews")}>All Reviews</Link>
//             {user && (
//               <>
//                 <Link to="/add-review" className={getLinkStyle("/add-review")}>Add Review</Link>
//                 <Link to="/my-reviews" className={getLinkStyle("/my-reviews")}>My Reviews</Link>
//                 <Link to="/watchlist" className={getLinkStyle("/watchlist")}>Watchlist</Link>
//               </>
//             )}
//           </div>

//           {/* User Actions */}
//           <div className="hidden md:flex items-center space-x-4">
//             {user ? (
//               <div className="flex items-center space-x-2">
//                 <img
//                   src={user.photoURL || "/default-avatar.png"}
//                   alt="User Avatar"
//                   className="w-8 h-8 rounded-full"
//                 />
//                 <button
//                   onClick={handleLogout}
//                   className="text-sm text-red-500 hover:text-red-700"
//                 >
//                   Logout
//                 </button>
//               </div>
//             ) : (
//               <>
//                 <Link to="/signUp" className="text-blue-500 font-bold">
//                   <MdGroupAdd /> Sign Up
//                 </Link>
//                 <Link
//                   to="/login"
//                   className="px-4 py-2 bg-blue-600 text-white rounded shadow hover:bg-blue-700"
//                 >
//                   <CiLogin /> Login
//                 </Link>
//               </>
//             )}
//           </div>

//           {/* Mobile Menu Button */}
//           <div className="-mr-2 flex md:hidden">
//             <button
//               onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
//               className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-700 hover:bg-gray-100"
//             >
//               <span className="sr-only">Open menu</span>
//               <svg
//                 className="h-6 w-6"
//                 xmlns="http://www.w3.org/2000/svg"
//                 fill="none"
//                 viewBox="0 0 24 24"
//                 stroke="currentColor"
//               >
//                 <path
//                   strokeLinecap="round"
//                   strokeLinejoin="round"
//                   strokeWidth="2"
//                   d={
//                     isMobileMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"
//                   }
//                 />
//               </svg>
//             </button>
//           </div>
//         </div>
//       </div>

//       {/* Mobile Menu */}
//       {isMobileMenuOpen && (
//         <div className="md:hidden">
//           <div className="px-2 pt-2 pb-3 space-y-1">
//             <Link to="/" className={getLinkStyle("/")}>Home</Link>
//             <Link to="/all-reviews" className={getLinkStyle("/all-reviews")}>All Reviews</Link>
//             {user && (
//               <>
//                 <Link to="/add-review" className={getLinkStyle("/add-review")}>Add Review</Link>
//                 <Link to="/my-reviews" className={getLinkStyle("/my-reviews")}>My Reviews</Link>
//                 <Link to="/watchlist" className={getLinkStyle("/watchlist")}>Watchlist</Link>
//               </>
//             )}
//             {!user && (
//               <div className="relative">
//                 <button
//                   onClick={() => setIsDropdownOpen(!isDropdownOpen)}
//                   className="w-full text-left px-4 py-2 bg-blue-600 text-white rounded shadow"
//                 >
//                   Login/Sign Up
//                 </button>
//                 {isDropdownOpen && (
//                   <div className="absolute left-0 mt-2 w-full bg-white shadow-md rounded">
//                     <Link
//                       to="/login"
//                       className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
//                       onClick={() => setIsMobileMenuOpen(false)}
//                     >
//                       Login
//                     </Link>
//                     <Link
//                       to="/signUp"
//                       className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
//                       onClick={() => setIsMobileMenuOpen(false)}
//                     >
//                       Sign Up
//                     </Link>
//                   </div>
//                 )}
//               </div>
//             )}
//           </div>
//         </div>
//       )}
//     </nav>
//   );
// };

// export default Navbar;
