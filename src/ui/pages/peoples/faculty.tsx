import React, { useEffect, useState } from "react";
import PeopleCard from "./people.card";
import { useSelector } from "react-redux";

const Faculties: React.FC = () => {
  const [searchValue, setSearchValue] = useState<string>("");
  const [notfound, setNotFound] = useState<boolean>(false);
  const faculties = useSelector((state: any) => state.faculties);
  const [activeBatch, setActiveBatch] = useState<string>("All");
  useEffect(() => {
    setNotFound(false);
    setSearchValue("");
  }, []);
  return (
    <>
      <div className="my-5 container">
        <div className="h1 text-center main_head mb-5">
          {" "}
          <span>Faculty </span>
          <small>Members</small>
        </div>
        <div
          className="bg-dark p-3 my-3 rounded-4 position-sticky"
          style={{ zIndex: 2 }}
        >
          <ul className="nav nav-pills nav-fill">
            <li className="nav-item">
              <span
                className={`nav-link ${activeBatch === "All" && "active_tab"}`}
                aria-current="page"
                onClick={() => setActiveBatch("All")}
                aria-disabled="true"
              >
                All
              </span>
            </li>
            {!faculties?.isLoading &&
              faculties.isSuccessful &&
              Object.keys(faculties?.data).map((category, i) => (
                <li className="nav-item" key={i}>
                  <span
                    className={`nav-link ${
                      activeBatch === category && "active_tab"
                    }`}
                    aria-current="page"
                    onClick={() => setActiveBatch(category)}
                    aria-disabled="true"
                  >
                    {category}
                  </span>
                </li>
              ))}
            {/* <li className="nav-item">
              <span
                className="nav-link"
                aria-current="page"
                // onClick={() => handleTabChange(i)}
                aria-disabled="true"
              >
                <button
                  className="dropdown btn btn-dark dropdown-toggle m-0 p-0"
                  type="button"
                  data-bs-toggle="dropdown"
                  style={{ boxShadow: "none" }}
                  aria-expanded="false"
                >
                  More
                </button>
                <ul className="dropdown-menu">
                  <li>
                    <a className="dropdown-item" href="#">
                      All
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      2020
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      2021
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      2022
                    </a>
                  </li>
                </ul>
              </span>
            </li> */}
          </ul>
        </div>
        <div className="my-3">
          <div className="input-group">
            <button
              className="dropdown btn btn-secondary dropdown-toggle px-3"
              type="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              <i className="fa-solid fa-filter"></i>
            </button>
            <ul className="dropdown-menu">
              <li>
                <a className="dropdown-item" href="#">
                  All
                </a>
              </li>
              {!faculties?.isLoading &&
                faculties.isSuccessful &&
                Object.keys(faculties?.data).map((category, i) => (
                  <li key={i}>
                    <a className="dropdown-item" href="#">
                      {category}
                    </a>
                  </li>
                ))}
            </ul>
            <input
              type="text"
              name="search"
              id="search"
              className="form-control p-3"
              value={searchValue}
              placeholder="Search by Name, Research Interests, etc.."
            />
            <button
              className="btn btn-secondary btn-41"
              style={{ width: "5rem", zIndex: 0 }}
              type="button"
            >
              <i className="fa-solid fa-magnifying-glass"></i>
            </button>
          </div>
          {notfound && (
            <div
              className="alert alert-danger mt-1 fade-in-custom"
              role="alert"
            >
              Not items matched with
              <span className="text-red fw-bold mx-2">"{searchValue}"</span>
            </div>
          )}
        </div>
        <section>
          {!faculties?.isLoading &&
            faculties.isSuccessful &&
            Object.keys(faculties?.data).map((category, i) => {
              if (faculties?.data[category]?.length) {
                return (
                  <div key={i}>
                    <div className="h1 fw-bold text-dark mb-4 text-center my-5">
                      {" "}
                      {category}
                      <hr />
                    </div>
                    {faculties?.data[category]?.map((f: any, j: any) => {
                      return <PeopleCard user={f} key={j} />;
                    })}
                  </div>
                );
              }
            })}
        </section>
      </div>
    </>
  );
};

export default Faculties;
