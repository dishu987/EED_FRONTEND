import React, { useEffect, useState } from "react";
import PublicationsService from "../../../services/auth/publications";
import "./style.css";
import FilterPublications from "./filters";
const Publications: React.FC = () => {
  const [publications, setPublications] = useState<any>({});
  const [loading, setLoading] = useState<boolean>(true);
  const [bytype, setByType] = useState<any>([]);
  const [byyear, setYear] = useState<any>("");
  const [byprof, setProf] = useState<any>("");
  const [searchq, setSearchQ] = useState<string>("");
  const [notFound, setNotFound] = useState<boolean>(false);
  useEffect(() => {
    const handlePublications = async () => {
      setLoading(true);
      try {
        const res = await PublicationsService.getpublications(byprof, byyear);
        console.log(res);
        if (res.status == 200 && res.data) {
          if (res.data.length == 0) {
            setNotFound(true);
          } else {
            setNotFound(false);
          }
          setPublications(res.data);
        }
      } catch (err) {
        console.log(err);
      }
      setLoading(false);
    };
    handlePublications();
  }, [byprof, byyear]);
  const filterPublications = () => {
    let elems = (document as any).querySelectorAll(".publications_filters");
    elems = Array.from(elems);
    let i = 0;
    elems.forEach((elem: any) => {
      if (!elem?.textContent.toLowerCase().includes(searchq.toLowerCase())) {
        elem.style.display = "none";
        elem.classList.remove("show");
        elem.classList.add("fade");
        i++;
      } else {
        elem.style.display = "block";
        elem.classList.add("show");
        elem.classList.remove("fade");
      }
    });
    if (searchq === "") {
      elems.forEach((elem: any) => {
        elem.style.display = "block";
      });
    }
    if (i === elems.length) {
      setNotFound(true);
    } else {
      setNotFound(false);
    }
  };
  return (
    <>
      <div className="w-100 d-flex justify-content-center align-items-center flex-column  py-5">
        <h1 className="text-center main_head mb-5">
          List of <span> Publications!</span>
        </h1>
        <div
          className="col-sm-12 d-flex flex-lg-row flex-column px-4 publications-row justify-content-center align-items-center align-items-lg-start"
          // style={{ height: "800px", overflow: "auto" }}
        >
          <div
            className="col-sm-3 shadow-lg p-3  position-sticky top-0 filter-card show_filter_panel_desktop"
            style={{ height: "fit-content" }}
          >
            <FilterPublications
              setNotFound={setNotFound}
              bytype={bytype}
              setProf={setProf}
              setByType={setByType}
              setYear={setYear}
              byprof={byprof}
              byyear={byyear}
            />
          </div>
          <div className="col-sm-9">
            <ul className="d-flex gap-3 flex-column list-unstyled mx-lg-5">
              <li>
                {" "}
                <div className="d-flex g-3 flex-column ">
                  <input
                    type="text"
                    name="search"
                    id="search"
                    className="w-100 rounded-4 form-control  p-3"
                    placeholder="Search for Publication.."
                    value={searchq}
                    onChange={(e) => {
                      setSearchQ(e.target.value);
                    }}
                    onKeyUp={() => {
                      filterPublications();
                    }}
                    onInput={() => {
                      filterPublications();
                    }}
                  />
                </div>
              </li>
              <button
                className="btn btn-danger show_filter_sidebar"
                type="button"
                data-bs-toggle="offcanvas"
                data-bs-target="#offcanvasWithBothOptions"
                aria-controls="offcanvasWithBothOptions"
              >
                <i className="fa-solid fa-filter"></i> Filters
              </button>

              {notFound && (
                <h1 className="text-center my-5 text-danger fade-in-custom">
                  Not found
                </h1>
              )}
              {!loading &&
                publications &&
                Object.keys(publications).map((pub: any, i: any) => {
                  if (
                    bytype.length === 0 ||
                    bytype.includes(publications[pub]?.type) === true
                  ) {
                    return (
                      <li
                        className={`fade-in-custom publications_filters mix col-xs-12 col-sm-12 col-md-12 col-lg-12 ${publications[
                          pub
                        ]?.type?.replace(
                          /\s+/g,
                          "-"
                        )}-border conference avrteja 2020 rounded-5`}
                        style={{ display: "inline-block" }}
                        key={i}
                      >
                        <div className="research-head">
                          <p className="fw-bold h3">
                            {publications[pub]?.title}{" "}
                          </p>
                          <a href={publications[pub]?.link} target="_blank">
                            <i className="fa-solid fa-arrow-up-right-from-square"></i>
                          </a>
                        </div>
                        <div className="research-auth  mb-3">
                          <p className="h6">Authors:</p>
                          <ul className="prof_filters">
                            {publications[pub]?.contributors &&
                              publications[pub]?.contributors != "NA" &&
                              JSON.parse(publications[pub]?.contributors)?.map(
                                (c: any, i: any) => {
                                  return (
                                    <li key={i}>
                                      <span className="p-1 fw-bold">{c}</span>{" "}
                                    </li>
                                  );
                                }
                              )}
                          </ul>
                        </div>
                        <div className="research-date">
                          {publications[pub]?.year}
                          <span
                            className={`research-type ${publications[
                              pub
                            ]?.type?.replace(/\s+/g, "-")}-color`}
                          >
                            {publications[pub]?.type}
                          </span>
                        </div>
                        <div className="research-desc">
                          {publications[pub]?.society}
                        </div>
                      </li>
                    );
                  }
                })}
            </ul>
          </div>
        </div>
      </div>
      <div
        className="offcanvas offcanvas-start show_filter_sidebar"
        data-bs-scroll="true"
        tabIndex={-1}
        id="offcanvasWithBothOptions"
        aria-labelledby="offcanvasWithBothOptionsLabel"
      >
        <div className="offcanvas-header">
          <button
            type="button"
            className="btn-close text-reset"
            data-bs-dismiss="offcanvas"
            aria-label="Close"
          />
        </div>
        <div className="offcanvas-body">
          <FilterPublications
            setNotFound={setNotFound}
            bytype={bytype}
            setProf={setProf}
            setByType={setByType}
            setYear={setYear}
            byprof={byprof}
            byyear={byyear}
          />
        </div>
      </div>
    </>
  );
};

export default Publications;
