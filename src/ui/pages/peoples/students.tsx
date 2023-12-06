import React, { useEffect, useState } from "react";
import { FormatEmail } from "../../../utils/format.email";
import { useSelector } from "react-redux";

const Students: React.FC = () => {
  const [searchValue, setSearchValue] = useState<string>("");
  const [notfound, setNotFound] = useState<boolean>(false);
  const students = useSelector((state: any) => state.students);
  const [activeBatch, setActiveBatch] = useState<string>("All");
  useEffect(() => {
    setNotFound(false);
    setSearchValue("");
  }, []);
  return (
    <>
      <div className="my-5 container">
        {" "}
        <div className="h1 text-center main_head "> Students</div>
        <div
          className="bg-dark p-3 my-3 rounded-4 position-sticky"
          style={{ zIndex: 1 }}
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
            <li className="nav-item">
              <span
                className={`nav-link ${activeBatch === "2020" && "active_tab"}`}
                aria-current="page"
                onClick={() => setActiveBatch("2020")}
                aria-disabled="true"
              >
                2020
              </span>
            </li>
            <li className="nav-item">
              <span
                className={`nav-link ${activeBatch === "2021" && "active_tab"}`}
                aria-current="page"
                onClick={() => setActiveBatch("2021")}
                aria-disabled="true"
              >
                2021
              </span>
            </li>
            <li className="nav-item">
              <span
                className={`nav-link ${activeBatch === "2022" && "active_tab"}`}
                aria-current="page"
                onClick={() => setActiveBatch("2022")}
                aria-disabled="true"
              >
                2022
              </span>
            </li>
            <li className="nav-item">
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
            </li>
          </ul>
        </div>
        <div className="my-3">
          <div className="input-group">
            <button
              className="dropdown btn btn-secondary dropdown-toggle px-3"
              type="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
              style={{ zIndex: 1 }}
            >
              <i className="fa-solid fa-filter"></i>
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
            <input
              type="text"
              name="search"
              id="search"
              className="form-control p-3"
              value={searchValue}
              onChange={(e) => setSearchValue(e.target.value)}
              placeholder="Search by Name, Batch, etc.."
              style={{ zIndex: 0 }}
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
          <table className="table table-bordered">
            <thead>
              <tr>
                <th>Sr. No.</th>
                <th>Name</th>
                <th>Batch</th>
                <th>Degree</th>
                <th>Email</th>
                <th>Mobile</th>
              </tr>
            </thead>
            <tbody>
              {!students?.isLoading &&
                students?.isSuccessful &&
                Object.keys(students?.data).map((key: any, i: any) => {
                  let x =
                    students?.data[key]?.name
                      .toLowerCase()
                      .includes(searchValue.toLowerCase()) ||
                    students?.data[key]?.email
                      .toLowerCase()
                      .includes(searchValue.toLowerCase()) ||
                    students?.data[key]?.mobile
                      .toLowerCase()
                      .includes(searchValue.toLowerCase()) ||
                    students?.data[key]?.batch
                      .toLowerCase()
                      .includes(searchValue.toLowerCase());
                  if (
                    students?.data[key]?.batch === activeBatch ||
                    activeBatch == "All"
                  ) {
                    if (x) {
                      return (
                        <tr
                          key={i}
                          className={
                            students?.data[key]?.batch === activeBatch ||
                            activeBatch == "All"
                              ? "show_custom"
                              : ""
                          }
                        >
                          <td>{i + 1}</td>
                          <td>{students?.data[key]?.name}</td>
                          <td>{students?.data[key]?.batch}</td>
                          <td>{students?.data[key]?.degree}</td>
                          <td>
                            <a
                              href={"mailto:" + students?.data[key]?.email}
                              target="_blank"
                            >
                              {FormatEmail(students?.data[key]?.email)}
                            </a>
                          </td>
                          <td>{students?.data[key]?.mobile}</td>
                        </tr>
                      );
                    }
                  }
                })}
            </tbody>
          </table>
        </section>
      </div>
    </>
  );
};

export default Students;
