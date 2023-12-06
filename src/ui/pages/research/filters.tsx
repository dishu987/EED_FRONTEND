import React, { useEffect, useState } from "react";
import "./style.css";
import { types_of_publications, years } from "../../../constants/filters";
import PublicationsService from "../../../services/auth/publications";

const FilterPublications: React.FC<{
  setNotFound: any;
  setByType: any;
  bytype: any;
  setProf: any;
  byprof: any;
  byyear: any;
  setYear: any;
}> = ({ bytype, byprof, byyear, setByType, setYear, setProf }) => {
  const [profsdata, setProfsData] = useState<string[]>([]);
  useEffect(() => {
    const handleContributors = async () => {
      const res = await PublicationsService.getContributorsList();
      if (res.status == 200) {
        setProfsData(res.data);
      }
    };
    handleContributors();
  }, []);
  return (
    <>
      <div className="d-flex justify-content-between">
        <p className="h3 text-secondary my-2">
          <i className="fa-solid fa-filter"></i> Filters
        </p>
        {bytype.length > 0 || byyear !== "" || byprof !== "" ? (
          <button
            className="btn btn-link"
            onClick={() => {
              setByType([]);
              setProf("");
              setYear("");
            }}
            style={{ boxShadow: "none" }}
          >
            Remove Filters
          </button>
        ) : null}
      </div>
      <div className="accordion mt-3" id="OpenExample">
        <div className="accordion-item">
          <h2 className="accordion-header" id="headingOne">
            <button
              className="accordion-button outline-none"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseOne"
              aria-expanded="true"
              aria-controls="collapseOne"
            >
              BY TYPE
            </button>
          </h2>
          <div
            id="collapseOne"
            className="accordion-collapse collapse show"
            aria-labelledby="headingOne"
            data-bs-parent="#OpenExample"
          >
            <div className="accordion-body p-0">
              <div className="list-group m-0">
                <div className="form-check form-switch">
                  <label className="list-group-item">
                    <input
                      className="form-check-input me-1"
                      type="checkbox"
                      defaultValue="true"
                      checked={bytype.length === 0}
                      onChange={(e) => {
                        if (e.target.checked) setByType([]);
                      }}
                    />
                    All
                  </label>
                </div>
                {types_of_publications?.map((t, i) => {
                  return (
                    <div className="form-check form-switch">
                      <label className="list-group-item" key={i}>
                        <input
                          className="form-check-input me-1"
                          type="checkbox"
                          defaultValue="true"
                          checked={bytype.includes(t)}
                          onChange={() => {
                            const isPresent = bytype.includes(t);
                            if (isPresent) {
                              const updatedByType = bytype.filter(
                                (item: any) => item !== t
                              );
                              setByType(updatedByType);
                            } else {
                              setByType([...bytype, t]);
                            }
                          }}
                        />
                        {t}
                      </label>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header" id="headingTwo">
            <button
              className="accordion-button outline-none"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseTwo"
              aria-expanded="false"
              aria-controls="collapseTwo"
            >
              BY Faculty
            </button>
          </h2>
          <div
            id="collapseTwo"
            data-bs-parent="#OpenExample"
            className="accordion-collapse collapse show"
            aria-labelledby="headingTwo"
          >
            <div className="accordion-body p-0">
              <div className="list-group m-0">
                <select
                  className="form-select w-auto m-2 p-3 border-0"
                  style={{ boxShadow: "none" }}
                  onChange={(e) => setProf(e.target.value)}
                  value={byprof}
                >
                  <option value="">All</option>
                  {profsdata?.map((f, i) => {
                    return (
                      <option key={`prof${i}`} value={f}>
                        {f}
                      </option>
                    );
                  })}
                </select>
              </div>
            </div>
          </div>
        </div>{" "}
        <div className="accordion-item">
          <h2 className="accordion-header" id="headingThree">
            <button
              className="accordion-button outline-none"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseThree"
              aria-expanded="false"
              aria-controls="collapseThree"
            >
              BY Year
            </button>
          </h2>
          <div
            id="collapseThree"
            data-bs-parent="#OpenExample"
            className="accordion-collapse collapse show"
            aria-labelledby="headingThree"
          >
            <div className="accordion-body p-0">
              <div className="list-group m-0">
                <select
                  className="form-select w-auto m-2 p-3 border-0"
                  style={{ boxShadow: "none" }}
                  onChange={(e) => setYear(e.target.value)}
                  value={byyear}
                >
                  <option value="">All</option>
                  {years?.map((y, i) => {
                    return <option key={i}>{y}</option>;
                  })}
                </select>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default FilterPublications;
