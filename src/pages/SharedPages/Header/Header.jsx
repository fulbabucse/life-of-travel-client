import { useContext } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../contexts/UserContext/UserContext";
import userLogo from "../../../assets/userlogo-travel.png";

function Header() {
  const { user, signOutUser } = useContext(AuthContext);
  const [navbar, setNavbar] = useState(false);

  return (
    <nav className="w-full bg-transparent">
      <div className="justify-between px-4 mx-auto lg:max-w-7xl md:items-center md:flex md:px-8">
        <div>
          <div className="flex items-center justify-between py-3 md:py-5 md:block">
            <div>
              <Link
                to="/"
                className="text-3xl font-bold text-white/80 hover:text-white transition-colors duration-400"
              >
                Life of Travel
              </Link>
            </div>
            <div className="md:hidden">
              <button
                className="p-2 text-gray-700 rounded-md outline-none focus:border-gray-400 focus:border"
                onClick={() => setNavbar(!navbar)}
              >
                {navbar ? (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-6 h-6"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    />
                  </svg>
                ) : (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-6 h-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  </svg>
                )}
              </button>
            </div>
          </div>
        </div>
        <div>
          <div
            className={`flex-1 justify-self-center pb-3 mt-8 md:block md:pb-0 md:mt-0 ${
              navbar ? "block" : "hidden"
            }`}
          >
            <ul className="items-center justify-center space-y-8 md:flex md:space-x-6 md:space-y-0">
              <li className="text-white/90 hover:text-white transition-all duration-500 uppercase text-md font-bold">
                <Link to="/home">Home</Link>
              </li>
              <li className="text-white/90 hover:text-white transition-all duration-500 uppercase text-md font-bold">
                <Link to="/about">About</Link>
              </li>
              <li className="text-white/90 hover:text-white transition-all duration-500 uppercase text-md font-bold">
                <Link to="/blog">Blog</Link>
              </li>
              <li className="text-white/90 hover:text-white transition-all duration-500 uppercase text-md font-bold">
                <Link to="/contact">Contact</Link>
              </li>

              <li className="text-white/90 hover:text-white transition-all duration-500 uppercase text-md font-bold">
                <div className="dropdown dropdown-end">
                  <label
                    tabIndex={0}
                    className="btn btn-ghost btn-circle avatar"
                  >
                    <div className="w-10 rounded-full">
                      <img src={user?.photoURL || userLogo} />
                    </div>
                  </label>
                  <ul
                    tabIndex={0}
                    className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
                  >
                    <li>
                      <Link
                        to="/profile"
                        className="justify-center text-slate-800"
                      >
                        {user?.displayName || "Profile"}
                      </Link>
                    </li>
                    <li>
                      {user?.uid ? (
                        <button
                          onClick={signOutUser}
                          className="btn btn-sm btn-secondary"
                        >
                          Log out
                        </button>
                      ) : (
                        <Link to="/login" className="p-0 mt-1">
                          <button className="btn btn-sm btn-secondary w-full">
                            Log In
                          </button>
                        </Link>
                      )}
                    </li>

                    <li>
                      <Link to="/register" className="p-0 mt-1">
                        <button className="btn btn-sm btn-primary w-full">
                          Register
                        </button>
                      </Link>
                    </li>
                  </ul>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Header;
