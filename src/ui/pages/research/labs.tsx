import { useEffect, useState } from "react";
import { LabsNames } from "../../../constants/labs.research";
import {
  microelectronicsLabs,
  powerEngineeringLabs,
  signalProcessingLabs,
} from "../../../constants/labs.research";

const ResearchLabs: React.FC = () => {
  const labs = [
    powerEngineeringLabs,
    signalProcessingLabs,
    microelectronicsLabs,
  ];
  const [active, setActive] = useState<number>(0);
  const handleTabChange = (index: number) => {
    setActive(index);
    setSearchValue("");
    tableRows.forEach((row: any) => {
      row.style.display = "";
    });
  };
  const [searchValue, setSearchValue] = useState<string>("");
  const [notfound, setNotFound] = useState<boolean>(false);
  const tableRows = Array.from(document.querySelectorAll("#labs tr"));
  useEffect(() => {
    if (
      labs[active].filter(
        (item) =>
          item.name
            .toLocaleLowerCase()
            .trim()
            .includes(searchValue.toLocaleLowerCase().trim()) ||
          item.location
            .toLocaleLowerCase()
            .trim()
            .includes(searchValue.toLocaleLowerCase().trim()) ||
          item.associatedFaculty
            .toLocaleLowerCase()
            .trim()
            .includes(searchValue.toLocaleLowerCase().trim())
      ).length > 0
    ) {
      setNotFound(false);
    } else {
      setNotFound(true);
    }
  }, [searchValue]);
  return (
    <div className="w-100 d-flex justify-content-center align-items-center flex-column  py-5">
      <h1 className="text-center main_head mb-5">
        Research <span> Laboratories</span>
      </h1>
      <div className="bg-dark p-3 rounded-4 position-sticky top-0 mb-5">
        <ul className="nav nav-pills nav-fill">
          {LabsNames.map((data, i) => {
            return (
              <li className="nav-item" key={i}>
                <span
                  className={`nav-link ${active === i && "active_tab"}`}
                  aria-current="page"
                  onClick={() => handleTabChange(i)}
                  aria-disabled="true"
                >
                  {data}
                  {active === i && `(${labs[active].length})`}
                </span>
              </li>
            );
          })}
        </ul>
      </div>
      <div className="container">
        <h4 className="fw-bold mb-4">
          <h2 className="fw-bold h3 fade-in-custom">{LabsNames[active]}</h2>
        </h4>
        <div className="my-3 fade-in-custom">
          <input
            type="text"
            name="search"
            id="search"
            className="w-100 rounded-2 form-control  p-3"
            style={{
              boxShadow: "none",
            }}
            onChange={(e) => setSearchValue(e.target.value)}
            value={searchValue}
            placeholder={`Search for ${LabsNames[active]}`}
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
        <div className="container overflow-auto p-0 fade-in-custom">
          <table
            className="table table-bordered table-hover table-responsive table-striped mb-4"
            id="labs"
          >
            <thead>
              <tr className="table-dark">
                <td>Sr. No. </td>
                <td>Lab Name </td>
                <td>Location</td>
                <td>Associated Faculty</td>
              </tr>
            </thead>
            <tbody>
              {labs[active]
                .filter(
                  (item) =>
                    item.name
                      .toLocaleLowerCase()
                      .trim()
                      .includes(searchValue.toLocaleLowerCase().trim()) ||
                    item.location
                      .toLocaleLowerCase()
                      .trim()
                      .includes(searchValue.toLocaleLowerCase().trim()) ||
                    item.associatedFaculty
                      .toLocaleLowerCase()
                      .trim()
                      .includes(searchValue.toLocaleLowerCase().trim())
                )
                .map((item, i) => {
                  return (
                    <tr>
                      <td>{item.id}</td>
                      <td key={i} className="fw-bold">
                        {item.name}
                      </td>
                      <td>{item.location}</td>
                      <td>{item.associatedFaculty}</td>
                    </tr>
                  );
                })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default ResearchLabs;
