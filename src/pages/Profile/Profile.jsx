import React from "react";
import { useContext } from "react";
import { AuthContext } from "../../contexts/UserContext/UserContext";
import userLogo from "../../assets/userlogo-travel.png";

const Profile = () => {
  const { user } = useContext(AuthContext);
  const [openTab, setOpenTab] = React.useState(1);
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
                  <p>
                    Completely synergize resource taxing relationships via
                    premier niche markets. Professionally cultivate one-to-one
                    customer service with robust ideas.
                    <br />
                    <br />
                    Dynamically innovate resource-leveling customer service for
                    state of the art customer service.
                  </p>
                </div>
                <div className={openTab === 3 ? "block" : "hidden"} id="link3">
                  <p>
                    Efficiently unleash cross-media information without
                    cross-media value. Quickly maximize timely deliverables for
                    real-time schemas.
                    <br />
                    <br /> Dramatically maintain clicks-and-mortar solutions
                    without functional solutions.
                  </p>
                </div>

                <div className={openTab === 4 ? "block" : "hidden"} id="link3">
                  <p>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Saepe provident odit dignissimos labore molestiae,
                    repellendus, totam laudantium incidunt doloremque quia est,
                    facere temporibus inventore vitae architecto eligendi vero
                    molestias ex.
                  </p>
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
