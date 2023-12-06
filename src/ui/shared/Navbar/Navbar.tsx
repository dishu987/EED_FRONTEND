import React, { useEffect, useState } from "react";
import "./style.css";
import logo_img from "./../../../assets/iitr-banner.png";
import { NavLinks } from "../../../constants/navlinks";
import { contact_info } from "../../../constants/content.website";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getUserAuthLogoutAction } from "../../../store/reducers/slice/auth";
import AlertModel from "../Model";

const Navbar: React.FC = () => {
  const dispatch = useDispatch();
  const auth = useSelector((state: any) => state.getauth);
  const [active, setActive] = useState<string>(window.location.pathname);
  const handleLogout = () => {
    window.location.replace("/login");
    dispatch(getUserAuthLogoutAction());
  };
  const handleActive = (path: string) => {
    setActive(path);
    const elem = document.getElementById("toggle-btn-custom");
    if (window.innerWidth <= 768 && elem) {
      elem.click();
    }
  };
  useEffect(() => {
    const navBar = document.querySelector(".navbarBgDark");
    let prevScrollPos = window.scrollY;

    const handleScroll = () => {
      const currentScrollPos = window.scrollY;

      // Calculate 20% of the laptop screen height
      const PercentHeight = 0.2 * window.innerHeight;

      // Check the scroll direction and position
      if (
        currentScrollPos > PercentHeight &&
        currentScrollPos > prevScrollPos
      ) {
        // Scrolling down, add the class
        navBar?.classList.add("navbar_links");
      } else {
        // Scrolling up or not scrolled enough, remove the class
        navBar?.classList.remove("navbar_links");
      }

      prevScrollPos = currentScrollPos;
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      id="navbarCustom"
      className="bg-white w-100 m-0 top-0"
      style={{ zIndex: "999" }}
    >
      <div className="container-fluid p-0 bg-nav">
        <div
          className="row d-flex align-items-center mx-lg-3 mx-2"
          style={{ justifyContent: "space-between" }}
        >
          <div className="col-12 col-lg-3 p-0">
            <div className="display-3 fw-bold py-2 text-center text-lg-center">
              <Link to="https://iitrpr.ac.in/" target="_blank">
                <img
                  src={logo_img}
                  alt="logo"
                  srcSet={logo_img}
                  className="logo_img"
                  // style={{ height: "4rem" }}
                />
              </Link>
            </div>
            <hr className="d-block d-lg-none" />
          </div>
          <div className="col-12 col-lg-3 p-0">
            <div className="d-flex justify-content-center align-items-end flex-column px-lg-none px-0">
              <div className="pt-2">{contact_info.mobile}</div>
              <div>{contact_info.email}</div>
              <div className="pb-2">
                <div className="">
                  <div id="google_translate_element"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="navbarBgDark " data-bs-theme="dark">
          <nav className="navbar navbar-expand-lg justify-content-center justify-content-lg-between p-0">
            <button
              className="shadow-none d-lg-none navbar-toggler m-3 w-100 text-white text-center"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNavDropdown"
              aria-controls="navbarNavDropdown"
              aria-expanded="false"
              aria-label="Toggle navigation"
              id="toggle-btn-custom"
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                outline: "none",
                border: "none",
              }}
            >
              <span className="material-symbols-outlined">menu</span>
              <span className="h5 d-flex justify-content-center align-items-center pt-2">
                Menu
              </span>
            </button>
            <div
              className="collapse navbar-collapse justify-content-between"
              id="navbarNavDropdown"
            >
              <ul className="navbar-nav text-uppercase ps-3">
                {NavLinks?.map((item, index) => {
                  if (item?.path) {
                    return (
                      <li className="nav-item" key={index}>
                        <Link
                          className={
                            active === item.path
                              ? `nav-link active pe-3 fw-bold`
                              : `nav-link pe-3`
                          }
                          aria-current="page"
                          to={item?.path}
                          onClick={() => handleActive(item?.path)}
                        >
                          {item.name}
                        </Link>
                      </li>
                    );
                  }
                  return (
                    <li className="nav-item dropdown" key={index}>
                      <Link
                        className="nav-link dropdown-toggle px-lg-3"
                        to="#"
                        role="button"
                        data-bs-toggle="dropdown"
                        aria-expanded="false"
                      >
                        {item.name}
                      </Link>
                      <ul className="dropdown-menu">
                        {item?.dropdown?.map((ditem, index) => {
                          return (
                            <li key={index}>
                              <Link
                                className="dropdown-item"
                                to={ditem?.path}
                                onClick={() => handleActive(ditem?.path)}
                              >
                                {ditem?.name}
                              </Link>
                            </li>
                          );
                        })}
                      </ul>
                    </li>
                  );
                })}
              </ul>
              <div className="text-white m-1 p-3">
                {auth?.isSuccessful ? (
                  <>
                    <div className="dropdown rounded-3">
                      <Link
                        className="btn btn-secondary nav-link dropdown-toggle fw-bold"
                        to="#"
                        role="button"
                        data-bs-toggle="dropdown"
                        aria-expanded="false"
                      >
                        <i className="fa-solid fa-user"></i> {auth?.data?.name}
                      </Link>

                      <ul className="dropdown-menu dropdown-menu-end">
                        {auth?.data?.is_admin ? (
                          <>
                            <li className="p-0">
                              <button
                                className="btn btn-success mx-3"
                                onClick={() => {}}
                                style={{
                                  boxShadow: "none",
                                }}
                              >
                                <i className="fa-solid fa-user"></i> Admin
                              </button>
                            </li>
                            <li>
                              <hr className="dropdown-divider" />
                            </li>
                          </>
                        ) : null}

                        <li>
                          <Link className="dropdown-item" to="/profile">
                            Profile
                          </Link>
                        </li>
                        <li>
                          <Link className="dropdown-item" to="/change-password">
                            Change Password
                          </Link>
                        </li>
                        <li>
                          <Link className="dropdown-item" to="#">
                            Help?
                          </Link>
                        </li>

                        <li>
                          <hr className="dropdown-divider" />
                        </li>
                        <li>
                          <button
                            className="dropdown-item"
                            type="button"
                            // onClick={handleLogout}
                            data-bs-toggle="modal"
                            data-bs-target="#logoutModel"
                          >
                            Logout{" "}
                            <i className="fa-solid fa-arrow-right-from-bracket"></i>
                          </button>
                        </li>
                      </ul>
                    </div>
                  </>
                ) : (
                  <button
                    type="button"
                    onClick={() => (location.href = "/login")}
                    className="btn getBtn rounded-0 text-white hover-btn btn41-43 btn-41"
                  >
                    Login
                  </button>
                )}
              </div>
            </div>
          </nav>
        </div>
      </div>
      <AlertModel
        btntext="Logout"
        medelId="logoutModel"
        onPressOK={handleLogout}
        title="Are you Sure want to Logout?"
      />
    </div>
  );
};

export default Navbar;
