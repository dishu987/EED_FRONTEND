import React, { useEffect, useState } from "react";
import { FormatEmail } from "../../../../utils/format.email";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const AllUsers: React.FC = () => {
  const auth = useSelector((state: any) => state.getauth);
  const [searchValue, setSearchValue] = useState<string>("");
  const students = useSelector((state: any) => state.students);
  const [active, setActive] = useState<string>("faculties");
  const faculties = useSelector((state: any) => state.faculties);
  const staff = useSelector((state: any) => state.staff);
  useEffect(() => {
    setSearchValue("");
  }, []);
  return (
    <>
      <div className="my-5 container">
        {" "}
        <div className="h1 text-center main_head ">Manage Users</div>
        <div
          className="bg-dark p-3 my-3 rounded-4 position-sticky"
          style={{ zIndex: 1 }}
        >
          <ul className="nav nav-pills nav-fill">
            <li className="nav-item">
              <span
                className={`nav-link ${active === "faculties" && "active_tab"}`}
                aria-current="page"
                onClick={() => setActive("faculties")}
                aria-disabled="true"
              >
                Faculty Members
              </span>
            </li>
            <li className="nav-item">
              <span
                className={`nav-link ${active === "staff" && "active_tab"}`}
                aria-current="page"
                onClick={() => setActive("staff")}
                aria-disabled="true"
              >
                Staff Members
              </span>
            </li>
            <li className="nav-item">
              <span
                className={`nav-link ${active === "students" && "active_tab"}`}
                aria-current="page"
                onClick={() => setActive("students")}
                aria-disabled="true"
              >
                Students
              </span>
            </li>
          </ul>
        </div>
        {/* <div className="my-3">
          <div className="input-group">
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
        </div> */}
        <section>
          {active === "faculties" &&
            !faculties?.isLoading &&
            faculties.isSuccessful &&
            Object.keys(faculties?.data).map((category, i) => {
              if (faculties?.data[category]?.length) {
                return (
                  <div key={i}>
                    <div className="h5 fw-bold text-dark mb-4 my-5">
                      {" "}
                      {category}
                      <hr />
                    </div>
                    <table className="table table-bordered">
                      <thead>
                        <tr className="table-dark">
                          <th>Sr. No.</th>
                          <th>Name</th>
                          <th>Designation</th>
                          <th>Email</th>
                          <th>Mobile</th>
                          <th>Is Admin</th>
                          <th>Last Logged In</th>
                          <th>Action</th>
                        </tr>
                      </thead>
                      <tbody>
                        {faculties?.data[category]?.map((f: any, j: any) => {
                          return (
                            <tr key={j} className="fw-bold">
                              <td>{j + 1}</td>
                              <td>
                                {f?.name}
                                {f?.id === auth?.data?.id ? "(You)" : null}
                              </td>
                              <td>{f?.designation}</td>
                              <td>{FormatEmail(f?.email)}</td>
                              <td>{f?.mobile}</td>
                              <td>{f?.is_admin === 1 ? "Yes" : "No"}</td>
                              <td className="text-danger">
                                {f?.last_logged_in}
                              </td>
                              <td>
                                <div className="dropdown">
                                  <button
                                    className="btn btn-danger text-white dropdown-toggle"
                                    type="button"
                                    id="dropdownMenuButton1"
                                    data-bs-toggle="dropdown"
                                    aria-expanded="false"
                                    disabled={auth?.data?.is_admin === "1"}
                                  >
                                    Action
                                  </button>

                                  <ul
                                    className="dropdown-menu"
                                    aria-labelledby="dropdownMenuButton1"
                                  >
                                    <li>
                                      <Link
                                        to={
                                          f?.id === auth?.data?.id
                                            ? "/profile"
                                            : `/view/${f?.id}`
                                        }
                                        className="dropdown-item "
                                      >
                                        <i className="fa-solid fa-user"></i>{" "}
                                        Profile
                                      </Link>
                                    </li>

                                    {f?.id != auth?.data?.id && (
                                      <>
                                        <li>
                                          <Link
                                            to="#"
                                            className="dropdown-item"
                                          >
                                            <i className="fa-solid fa-lock"></i>{" "}
                                            Make Admin
                                          </Link>
                                        </li>
                                        <li>
                                          <Link
                                            to="#"
                                            className="dropdown-item text-danger"

                                            // onClick={() => setdeleteid(publications[p]?.id)}
                                          >
                                            {" "}
                                            <i className="fa-solid fa-trash-can"></i>{" "}
                                            Delete
                                          </Link>
                                        </li>
                                      </>
                                    )}
                                  </ul>
                                </div>
                              </td>
                            </tr>
                          );
                        })}
                      </tbody>
                    </table>
                  </div>
                );
              }
            })}
          {active === "staff" && (
            <table className="table table-bordered mt-5">
              <thead>
                <tr className="table-dark">
                  <th>Sr. No.</th>
                  <th>Name</th>
                  <th>Mobile</th>
                  <th>Designation</th>
                  <th>Email</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {!staff?.isLoading &&
                  staff?.isSuccessful &&
                  staff?.data?.map((item: any, i: any) => {
                    return (
                      <tr key={i}>
                        <td>{i + 1}</td>
                        <td>{item?.name}</td>
                        <td>{item?.mobile}</td>
                        <td>{item?.designation}</td>
                        <td>
                          <a href={"mailto:" + item?.email} target="_blank">
                            {FormatEmail(item?.email)}
                          </a>
                        </td>
                        <td>
                          <div className="dropdown">
                            <button
                              className="btn btn-danger text-white dropdown-toggle"
                              type="button"
                              id="dropdownMenuButton1"
                              data-bs-toggle="dropdown"
                              aria-expanded="false"
                              disabled={auth?.data?.is_admin === "1"}
                            >
                              Action
                            </button>

                            <ul
                              className="dropdown-menu"
                              aria-labelledby="dropdownMenuButton1"
                            >
                              <li>
                                <Link
                                  to="#"
                                  className="dropdown-item text-danger"
                                  data-bs-toggle="modal"
                                  data-bs-target="#DeletePublicationModel"
                                  // onClick={() => setdeleteid(publications[p]?.id)}
                                >
                                  {" "}
                                  <i className="fa-solid fa-trash-can"></i>{" "}
                                  Delete
                                </Link>
                              </li>
                            </ul>
                          </div>
                        </td>
                      </tr>
                    );
                  })}
              </tbody>
            </table>
          )}
          {active === "students" && (
            <table className="table table-bordered mt-5">
              <thead>
                <tr className="table-dark">
                  <th>Sr. No.</th>
                  <th>Name</th>
                  <th>Batch</th>
                  <th>Degree</th>
                  <th>Email</th>
                  <th>Mobile</th>
                  <th>Action</th>
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
                    {
                      if (x) {
                        return (
                          <tr key={i}>
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
                            <td>
                              <td>
                                <div className="dropdown">
                                  <button
                                    className="btn btn-danger text-white dropdown-toggle"
                                    type="button"
                                    id="dropdownMenuButton1"
                                    data-bs-toggle="dropdown"
                                    aria-expanded="false"
                                    disabled={auth?.data?.is_admin === "1"}
                                  >
                                    Action
                                  </button>

                                  <ul
                                    className="dropdown-menu"
                                    aria-labelledby="dropdownMenuButton1"
                                  >
                                    <li>
                                      <Link
                                        to="#"
                                        className="dropdown-item text-danger"
                                        data-bs-toggle="modal"
                                        data-bs-target="#DeletePublicationModel"
                                        // onClick={() => setdeleteid(publications[p]?.id)}
                                      >
                                        {" "}
                                        <i className="fa-solid fa-trash-can"></i>{" "}
                                        Delete
                                      </Link>
                                    </li>
                                  </ul>
                                </div>
                              </td>
                            </td>
                          </tr>
                        );
                      }
                    }
                  })}
              </tbody>
            </table>
          )}
        </section>
      </div>
    </>
  );
};

export default AllUsers;
