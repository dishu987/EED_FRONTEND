import React, { useState } from "react";
import facultyData from "../../../constants/committees";
import { handleSearch } from "../../../utils/search.table";

const Committees: React.FC = () => {
  const [active, setActive] = useState<number>(0);
  const [searchValue, setSearchValue] = useState<string>("");
  const [notfound, setNotFound] = useState<boolean>(false);
  const tableRows = Array.from(document.querySelectorAll("#table tr"));

  const handleTabChange = (index: number) => {
    setActive(index);
    setSearchValue("");
    tableRows.forEach((row: any) => {
      row.style.display = "";
    });
  };

  return (
    <div className="py-5">
      <div className="container">
        <h1 className="h1 text-center main_head">
          Departmental <br className="d-lg-none" />
          <span>Committees</span>
        </h1>
        <div className="bg-dark p-3 rounded-4 my-5 position-sticky top-0">
          <ul className="nav nav-pills nav-fill">
            {facultyData.map((data, i) => {
              return (
                <li className="nav-item">
                  <span
                    className={`nav-link ${active === i && "active_tab"}`}
                    aria-current="page"
                    onClick={() => {
                      handleTabChange(i);
                    }}
                    aria-disabled="true"
                  >
                    {data.category}
                  </span>
                </li>
              );
            })}
          </ul>
        </div>
        <div className="my-4 mx-2 mx-lg-0">
          <h2 className="fw-bold h3 fade-in-custom">
            {facultyData[active].category}
          </h2>
          <div className="mt-3">
            <input
              type="text"
              name="search"
              id="search"
              className="w-100 rounded-2 form-control  p-3"
              style={{
                boxShadow: "none",
              }}
              onChange={(e) =>
                handleSearch(e, tableRows, setSearchValue, setNotFound)
              }
              value={searchValue}
              placeholder={`Search for ${facultyData[active].category}`}
            />
            {notfound && (
              <div
                className="alert alert-danger mt-4 fade-in-custom"
                role="alert"
              >
                Not items matched with
                <span className="text-red fw-bold mx-2">"{searchValue}"</span>
              </div>
            )}
          </div>
          <div className="w-100 overflow-auto">
            <table
              className="table fade-in-custom table-bordered my-4"
              id="table"
            >
              <thead className="bg-dark text-white">
                <tr>
                  <th scope="col">Sr. No.</th>
                  {facultyData[active].fields?.map((field, index) => {
                    return (
                      <th scope="col" key={index}>
                        {field}
                      </th>
                    );
                  })}
                </tr>
              </thead>
              <tbody>
                {facultyData[active].data?.map((da: any, index) => {
                  if (active === 0 || active === 1) {
                    return (
                      <tr key={index}>
                        <th scope="row">{index + 1}</th>
                        <td>{da.batch}</td>
                        <td>{da.email}</td>
                        <td>{da.name}</td>
                        <td>{da.contact}</td>
                      </tr>
                    );
                  } else if (active === 2) {
                    return (
                      <tr key={index}>
                        <th scope="row">{index + 1}</th>
                        <td>{da.committee}</td>
                        <td>{da.email}</td>
                        <td>{da.name}</td>
                        <td>{da.contact}</td>
                      </tr>
                    );
                  } else if (active === 3) {
                    return (
                      <tr key={index}>
                        <th scope="row">{index + 1}</th>
                        <td>{da.name}</td>
                        <td>{da.email}</td>
                        <td>{da.contact}</td>
                      </tr>
                    );
                  }
                  return (
                    <tr key={index}>
                      <th scope="row">{index + 1}</th>
                      <td>{da.groupName}</td>
                      <td>{da.email}</td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Committees;
