import React, { useRef } from "react";
import { useContext } from "react";
import userLogo from "../../../assets/userlogo-travel.png";
import toast from "react-hot-toast";
import { AuthContext } from "../../../contexts/UserContext/UserContext";

const Profile = () => {
  const { user, updatesUserProfile, updatesNewPassword, handleDeleteUser } =
    useContext(AuthContext);
  const [openTab, setOpenTab] = React.useState(1);

  const nameRef = useRef(user?.displayName);
  const photoLinkRef = useRef(user?.photoURL);
  const passwordRef = useRef();

  const handleUserUpdatesForm = (e) => {
    e.preventDefault();
    const name = nameRef.current.value;
    const photoLink = photoLinkRef.current.value;
    handleUpdateProfile(name, photoLink);
    toast.success("Profile Updates Successfully");
  };

  const handleUpdateProfile = (name, photoLink) => {
    const updatesInfo = {
      displayName: name,
      photoURL: photoLink,
    };
    updatesUserProfile(updatesInfo)
      .then((res) => {
        console.log(res.user);
      })
      .catch((err) => console.error(err));
  };

  const handleUpdatePassword = (e) => {
    e.preventDefault();
    toast.success("Successfully password updated");
    const password = passwordRef.current.value;
    updatesNewPassword(password)
      .then((res) => {})
      .catch((err) => console.error(err));
  };

  return (
    <>
      <div className="flex flex-col items-center lg:w-2/4 mx-auto px-2 lg:mt-6">
        <div>
          <img
            style={{
              width: "160px",
              height: "160px",
              borderRadius: "100px",
            }}
            className="border-4 border-pink-500"
            src={user?.photoURL || userLogo}
            alt={user?.displayName}
          />
          <h3 className="text-white text-4xl font-bold">{user?.displayName}</h3>
        </div>
        <div className="w-full">
          <ul
            className="flex mb-0 list-none flex-wrap pt-3 pb-4 flex-row"
            role="tablist"
          >
            <li className="-mb-px mr-2 last:mr-0 flex-auto text-center">
              <a
                className={
                  "text-xs font-bold uppercase px-5 py-3  mb-2 shadow-lg rounded block leading-normal " +
                  (openTab === 1 ? "text-white bg-pink-500" : "bg-white")
                }
                onClick={(e) => {
                  e.preventDefault();
                  setOpenTab(1);
                }}
                data-toggle="tab"
                href="#link1"
                role="tablist"
              >
                Profile
              </a>
            </li>
            <li className="-mb-px mr-2 last:mr-0 flex-auto text-center">
              <a
                className={
                  "text-xs font-bold uppercase px-5 py-3  mb-2 shadow-lg rounded block leading-normal " +
                  (openTab === 2 ? "text-white bg-pink-500" : "bg-white")
                }
                onClick={(e) => {
                  e.preventDefault();
                  setOpenTab(2);
                }}
                data-toggle="tab"
                href="#link2"
                role="tablist"
              >
                Change User Info
              </a>
            </li>
            <li className="-mb-px mr-2 last:mr-0 flex-auto text-center">
              <a
                className={
                  "text-xs font-bold uppercase px-5 py-3  mb-2 shadow-lg rounded block leading-normal " +
                  (openTab === 3 ? "text-white bg-pink-500" : "bg-white")
                }
                onClick={(e) => {
                  e.preventDefault();
                  setOpenTab(3);
                }}
                data-toggle="tab"
                href="#link3"
                role="tablist"
              >
                Changes Password
              </a>
            </li>

            <li className="-mb-px mr-2 last:mr-0 flex-auto text-center">
              <a
                className={
                  "text-xs font-bold uppercase px-5 py-3  mb-2 shadow-lg rounded block leading-normal " +
                  (openTab === 4 ? "text-white bg-pink-500" : "bg-white")
                }
                onClick={(e) => {
                  e.preventDefault();
                  setOpenTab(4);
                }}
                data-toggle="tab"
                href="#link3"
                role="tablist"
              >
                Danger Zone
              </a>
            </li>
          </ul>
          <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded">
            <div className="px-4 py-5 flex-auto">
              <div className="tab-content tab-space">
                <div className={openTab === 1 ? "block" : "hidden"} id="link1">
                  <h3 className="text-2xl font-bold">{user?.displayName}</h3>
                  <p className="text-lg">
                    Email:{" "}
                    <a href={`mailto:${user?.email}`} className="text-blue-500">
                      {user?.email}
                    </a>
                  </p>
                  <p>
                    Email Status:{" "}
                    <span
                      className={`${
                        user?.emailVerified === true
                          ? "text-emerald-400 font-semibold"
                          : "text-red-500 font-semibold"
                      }`}
                    >
                      {user?.emailVerified === true
                        ? "Verified"
                        : "Not Verified"}
                    </span>
                  </p>
                  <p>
                    Contact Number:
                    <a
                      href={`tel:${user?.phoneNumber || "121"}`}
                      className="text-decoration-none mx-1"
                    >
                      {user?.phoneNumber ? user?.phoneNumber : "121"}
                    </a>
                  </p>
                </div>
                <div className={openTab === 2 ? "block" : "hidden"} id="link2">
                  <form onSubmit={handleUserUpdatesForm}>
                    <div className="mb-2">
                      <label
                        htmlFor="name"
                        className="block text-sm font-semibold text-gray-800"
                      >
                        Name
                      </label>
                      <input
                        type="text"
                        name="name"
                        ref={nameRef}
                        defaultValue={user?.displayName}
                        className="block w-full px-4 py-2 mt-2 text-purple-700 bg-white border rounded-md focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40"
                        required
                      />
                    </div>

                    <div className="mb-2">
                      <label
                        htmlFor="photoLink"
                        className="block text-sm font-semibold text-gray-800"
                      >
                        Photo link
                      </label>
                      <input
                        type="text"
                        name="photoUrl"
                        ref={photoLinkRef}
                        defaultValue={user?.photoURL}
                        className="block w-full px-4 py-2 mt-2 text-purple-700 bg-white border rounded-md focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40"
                        required
                      />
                    </div>

                    <div className="mb-2">
                      <label
                        htmlFor="email"
                        className="block text-sm font-semibold text-gray-800"
                      >
                        Email
                      </label>
                      <input
                        type="email"
                        name="email"
                        defaultValue={user?.email}
                        disabled
                        className="block w-full px-4 py-2 mt-2 text-purple-700 bg-white border rounded-md focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40"
                        required
                      />
                    </div>
                    <div className="mb-2">
                      <label
                        htmlFor="contact"
                        className="block text-sm font-semibold text-gray-800"
                      >
                        Contact Number
                      </label>
                      <input
                        type="text"
                        name="number"
                        defaultValue="+8801700-000000"
                        className="block w-full px-4 py-2 mt-2 text-purple-700 bg-white border rounded-md focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40"
                        required
                      />
                    </div>

                    <div className="flex items-start mb-3">
                      <div className="flex items-center h-5">
                        <input
                          id="remember"
                          type="checkbox"
                          value=""
                          className="w-4 h-4 bg-gray-50 rounded border border-gray-300 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800"
                          required
                        />
                      </div>
                      <label
                        htmlFor="remember"
                        className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                      >
                        Remember me
                      </label>
                    </div>

                    <div className="">
                      <button className="w-full px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-purple-700 rounded-md hover:bg-purple-600 focus:outline-none focus:bg-purple-600">
                        Save
                      </button>
                    </div>
                  </form>
                </div>

                <div className={openTab === 3 ? "block" : "hidden"} id="link3">
                  <form onSubmit={handleUpdatePassword}>
                    <div className="mb-2">
                      <label
                        htmlFor="password"
                        className="block text-sm font-semibold text-gray-800"
                      >
                        Password
                      </label>
                      <input
                        type="password"
                        name="password"
                        ref={passwordRef}
                        className="block w-full px-4 py-2 mt-2 text-purple-700 bg-white border rounded-md focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40"
                        required
                      />
                    </div>

                    <div className="">
                      <button className="w-full px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-purple-700 rounded-md hover:bg-purple-600 focus:outline-none focus:bg-purple-600">
                        Change Password
                      </button>
                    </div>
                  </form>
                </div>

                <div className={openTab === 4 ? "block" : "hidden"} id="link3">
                  <div className="">
                    <button
                      onClick={handleDeleteUser}
                      className="w-full px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-purple-700 rounded-md hover:bg-purple-600 focus:outline-none focus:bg-purple-600"
                    >
                      Delete Account
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Profile;
