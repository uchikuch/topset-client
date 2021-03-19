import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaBars, FaTimes, FaFire, FaSortDown } from "react-icons/fa";
// import { Button } from "./Button";
import "../styles/Navbar.css";
import { IconContext } from "react-icons/lib";
import { useStateValue } from "../StateProvider";

function Navbar() {
  const [{ user }, dispatch] = useStateValue();
  const [click, setClick] = useState(false);
  // const [button, setButton] = useState(false);
  const [dropdown, setDropdown] = useState(false);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);
  const toggleDropdown = () => setDropdown(!dropdown);

  // const showButton = () => {
  //   if (window.innerWidth <= 960) {
  //     setButton(false);
  //   } else {
  //     setButton(true);
  //   }
  // };

  const handleSignOut = () => {
    console.log("hadling signout");
    dispatch({
      type: "LOGOUT_USER",
    });
  };

  // useEffect(() => {
  //   showButton();
  // }, []);

  // window.addEventListener("resize", showButton);

  return (
    <>
      <IconContext.Provider value={{ color: "#341a64" }}>
        <div className="nav__navbar">
          <div className="navbar-container container">
            {user && (
              <div className="menu-icon" onClick={handleClick}>
                {click ? <FaTimes /> : <FaBars />}
              </div>
            )}
            {/* desktop logo */}
            <div className="__full-logo is-hidden-touch">
              <Link to="/" className="navbar-logo" onClick={closeMobileMenu}>
                <img
                  src="https://topset.ng/wp-content/uploads/2021/03/Light-TOPSET-Learning-Logo.png"
                  width="172"
                  height="38"
                  alt="logo"
                />
              </Link>
            </div>
            {/* mobile logo */}
            <div className="__logo-icon is-hidden-desktop">
              <Link to="/" className="navbar-logo" onClick={closeMobileMenu}>
                <img
                  src="https://topset.ng/wp-content/uploads/2021/03/Transparent-TOPSET-Blue-Logo-Symbol.png"
                  width="58"
                  height="58"
                  alt="logo"
                />
              </Link>
            </div>
            {/* Navigation Mobile */}
            {user && (
              <div className="__nav-list">
                <ul className={click ? "nav-menu active" : "nav-menu"}>
                  <li className="nav-item">
                    <Link
                      to="/"
                      className="nav-links"
                      onClick={closeMobileMenu}
                    >
                      Home
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link
                      to="/services"
                      className="nav-links"
                      onClick={closeMobileMenu}
                    >
                      Learn
                    </Link>
                  </li>
                  {/* profile details mobile */}
                  <li className="nav-item">
                    <div className="is-hidden-desktop">
                      <div className="__dropdown-divider"></div>
                      <div className="__user-avatar-mobile">
                        <img
                          src={user ? user.avatar.src : ""}
                          alt="avatar"
                          width="50"
                          height="50"
                        />
                        <div className="__user">
                          <div className="__username">
                            <p className="h8">{user ? user.username : ""}</p>
                          </div>
                          <p className="h9">{user ? user.firstname : ""}</p>
                        </div>
                      </div>
                      <div className="__dropdown-divider"></div>
                      <div className="__profile-item">
                        <Link to="/profile-details">
                          <p className="h8">My Profile</p>
                        </Link>
                      </div>
                      <div className="__profile-item">
                        <Link to="/settings">
                          <p className="h8">Settings</p>
                        </Link>
                      </div>
                      <div className="__dropdown-divider"></div>
                      <div>
                        <p className="__signout">Sign out</p>
                      </div>
                    </div>
                  </li>
                  {/* Login Button */}
                  {/* <li className="nav-btn">
                  <div className="is-hidden-touch">
                    {button ? (
                      <Link to="/login" className="btn-link">
                        <Button buttonStyle="btn--outline">LOG IN</Button>
                      </Link>
                    ) : (
                      <Link
                        to="/login"
                        className="btn-link"
                        onClick={closeMobileMenu}
                      >
                        <Button
                          buttonStyle="btn--outline"
                          buttonSize="btn--mobile"
                        >
                          LOG IN
                        </Button>
                      </Link>
                    )}
                  </div>
                </li>  */}
                </ul>
              </div>
            )}
            {/* User details Desktop show if user is logged in */}
            {user && (
              <div className="__user-stats">
                <div className="__daily-goal">
                  <div className="is-hidden-touch">
                    <img
                      src="https://topset.ng/wp-content/uploads/2021/03/trophy1-1.svg"
                      width="55"
                      height="55"
                      alt="trophy"
                    />
                  </div>
                  <div className="__stats">
                    <h5>DAILY GOAL</h5>
                    <h6>{user.daily_xp}/100</h6>
                  </div>
                </div>
                <div className="__streak">
                  <FaFire color="white" />
                  <p className="h7">{user.streak}</p>
                </div>
                <div className="__dropdown">
                  <div
                    className="__profile is-hidden-touch"
                    onClick={toggleDropdown}
                  >
                    <img
                      src={user ? user.avatar.src : ""}
                      alt="avatar"
                      width="50"
                      height="50"
                    />
                    <div className="__sort-down">
                      <FaSortDown color="#6e559e" />
                    </div>
                    <div className="__username">
                      <p className="h8">{user ? user.username : ""}</p>
                    </div>
                  </div>
                  {/* Dropdown profile content */}
                  <div
                    className={`dropdown-content ${
                      dropdown ? "__showDropdown" : ""
                    }`}
                  >
                    <div className="__user-avatar">
                      <img
                        src={user ? user.avatar.src : ""}
                        alt="avatar"
                        width="50"
                        height="50"
                      />
                      <div className="__user">
                        <div className="__username">
                          <p className="h8">{user ? user.username : ""}</p>
                        </div>
                        <p className="h9">{user ? user.firstname : ""}</p>
                      </div>
                    </div>
                    <div className="__dropdown-divider"></div>
                    <div className="__profile-item">
                      <Link to="/profile-details">
                        <p className="h8">My Profile</p>
                      </Link>
                    </div>
                    <div className="__profile-item">
                      <Link to="/settings">
                        <p className="h8">Settings</p>
                      </Link>
                    </div>
                    <div className="__dropdown-divider"></div>
                    <div>
                      <p className="__signout" onClick={handleSignOut}>
                        Sign out
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </IconContext.Provider>
    </>
  );
}

export default Navbar;
