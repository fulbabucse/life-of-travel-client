import { useContext } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../contexts/UserContext/UserContext";
import userLogo from "../../../assets/userlogo-travel.png";
import { FaTh, FaTimes } from "react-icons/fa";

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
                className="p-2 text-white rounded-md outline-none focus:border-white focus:border"
                onClick={() => setNavbar(!navbar)}
              >
                {navbar ? <FaTimes></FaTimes> : <FaTh></FaTh>}
              </button>
            </div>
          </div>
        </div>
        <div>
          <div
            className={`flex-1 justify-self-center pb-3 lg:mt-8 md:block md:pb-0 md:mt-0 ${
              navbar ? "block" : "hidden"
            }`}
          >
            <ul className="items-center justify-center space-y-2 md:flex md:space-x-6 md:space-y-0">
              <li className="text-white/90 text-center hover:text-white transition-all duration-500 uppercase text-md font-bold">
                <Link to="/home">Home</Link>
              </li>
              <li className="text-white/90 text-center hover:text-white transition-all duration-500 uppercase text-md font-bold">
                <Link to="/about">About</Link>
              </li>
              <li className="text-white/90 text-center hover:text-white transition-all duration-500 uppercase text-md font-bold">
                <Link to="/blog">Blog</Link>
              </li>
              <li className="text-white/90 text-center hover:text-white transition-all duration-500 uppercase text-md font-bold">
                <Link to="/contact">Contact</Link>
              </li>

              <li className="text-white/90 text-center hover:text-white transition-all duration-500 uppercase text-md font-bold">
                <div className="dropdown dropdown-end">
                  <label
                    tabIndex={0}
                    className="btn btn-ghost btn-circle avatar"
                  >
                    <div className="w-10 rounded-full border-2 border-amber-400">
                      <img src={user?.photoURL || userLogo} />
                    </div>
                  </label>
                  <ul
                    tabIndex={0}
                    className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
                  >
                    <li>
                      {user?.uid && (
                        <Link
                          to="/profile"
                          className="justify-center text-slate-800 mb-1"
                        >
                          {user?.displayName || "Profile"}
                        </Link>
                      )}
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
