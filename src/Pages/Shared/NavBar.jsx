/* eslint-disable react/prop-types */
import { useEffect, useRef, useState } from "react";
const NavBar = ({ setSearchText, searchText }) => {
  const [isDropdownVisible, setDropdownVisible] = useState(false);

  const inputRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (inputRef.current && !inputRef.current.contains(event.target)) {
        // Clicked outside the input field
        setDropdownVisible(false);
      }
    };

    // Attach the event listener
    document.addEventListener("click", handleClickOutside);

    return () => {
      // Remove the event listener when the component is unmounted
      document.removeEventListener("click", handleClickOutside);
    };
  }, [isDropdownVisible]);

  const hideDropdownOnMobile = () => {
    if (window.innerWidth < 800) {
      setDropdownVisible(!isDropdownVisible);
    }
  };

  return (
    <>
      <div className="navbar w-full mt-5">
        <div className="flex-1">
          <a href="/" className=" font-bold text-red-950 text-sm md:text-xl">Pti</a>
        </div>

        <div className="flex-1  w-full gap-2">
          <div
            className="form-control lg:w-96 relative"
            onClick={hideDropdownOnMobile}
          >
            <input
              ref={inputRef}
              type="text"
              value={searchText}
              onChange={(e) => setSearchText(e.target.value)}
              name="searchText"
              placeholder="Search Your Food"
              className={`input w-24 bg-base-300 md:w-auto ${
                isDropdownVisible
                  ? "w-64 transition-all duration-300 ease-in-out"
                  : "transition-all duration-300 "
              }`}
            />
          </div>
        </div>

        <div
          id="dropdown"
          className={isDropdownVisible ? "hidden md:block" : " "}
        >
          <select className="w-24 bg-red-400  select select-primary  font-semibold lg:w-32 text-sm ">
            <option disabled selected>
              MENU
            </option>
            <option>Home</option>
            <option>Details</option>
            <option>Category</option>
            <option>My Favorites </option>
            <option>Profile </option>
            <option>Log In / Sign Up </option>
          </select>
        </div>

        <div className="flex-none gap-2 hidden md:block">
          <div className="dropdown dropdown-end">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost btn-circle avatar"
            >
              <div className="w-10 rounded-full">
                <img
                  alt="Tailwind CSS Navbar component"
                  src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg"
                />
              </div>
            </div>
            <ul
              tabIndex={0}
              className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52"
            >
              <li>
                <a className="justify-between">
                  Profile
                </a>
              </li>
              <li>
                <a>Settings</a>
              </li>
              <li>
                <a>Logout</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default NavBar;
