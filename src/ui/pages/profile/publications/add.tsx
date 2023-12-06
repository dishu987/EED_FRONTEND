import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import PublicationsService from "../../../../services/auth/publications";
import FacultyAddService from "../../../../services/auth/faculty";

interface FormData {
  title: string;
  type: string;
  year: string;
  society: string;
  link: string;
  contributors: string[];
}
const intialData = {
  title: "",
  type: "",
  year: "",
  society: "",
  link: "",
  contributors: [],
};
const AddPublication: React.FC = () => {
  const auth = useSelector((state: any) => state.getauth);
  const [data, setData] = useState<FormData>(intialData);
  const [loading, setLoading] = useState<boolean>(false);
  const [usersNames, setUsersName] = useState<string[]>([]);
  const [customContributor, setCustomContributor] = useState<string>("");
  useEffect(() => {
    const handleContributors = async () => {
      const res = await FacultyAddService.getUsersList(auth?.data?.token);
      if (res.status == 200) {
        setUsersName(res.data);
      }
    };
    handleContributors();
  }, []);
  const handleAdd = async (e: any) => {
    e.preventDefault();
    setLoading(true);
    if (data.title && data.link && data.society && data.type && data.year) {
      if (data.type === "novalue") {
        alert("Please select a valid designation!");
        return;
      }
      setLoading(true);
      const formData = new FormData();
      formData.append("title", data.title);
      formData.append("link", data.link);
      formData.append("society", data.society);
      formData.append("type", data.type);
      formData.append("year", data.year);
      formData.append("userid", auth?.data?.id);
      formData.append(
        "contributors",
        JSON.stringify([...data.contributors, auth?.data?.name])
      );
      const res = await PublicationsService.addpublications(
        auth?.data?.token,
        formData
      );
      console.log(res);
      if (res.data.status === 201) {
        alert(res?.data?.message);
        setData(intialData);
      } else {
        alert(res.data.message);
      }
      window.location.reload();
    } else {
      setLoading(true);
      alert("Required fields are missing");
    }
    setLoading(false);
  };
  const handleChange = (event: any) => {
    const { name, value } = event.target;
    setData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };
  const removeContributor = (c: string) => {
    // Create a new array excluding the contributor with the specified name
    setData({
      ...data,
      contributors: data.contributors.filter(
        (contributor) => contributor !== c
      ),
    });
  };

  const handleSelectContributor = (event: any) => {
    const { name, value } = event.target;
    const updatedContributors = [...data.contributors, value];
    setData((prevFormData) => ({
      ...prevFormData,
      [name]: updatedContributors,
    }));
  };
  const handleCustomAddContributor = () => {
    if (customContributor != "") {
      const updatedContributors = [...data.contributors, customContributor];
      setData((prevFormData) => ({
        ...prevFormData,
        contributors: updatedContributors,
      }));
      setCustomContributor("");
    } else {
      alert("Empty Field!");
    }
  };
  return (
    <>
      <div className="w-100">
        <label htmlFor="name" className="form-label">
          Title
        </label>
        <input
          type="text"
          name="title"
          autoComplete="false"
          className="form-control  mb-3"
          placeholder=""
          value={data.title}
          onChange={handleChange}
        />
        <div className="col-md-12 d-flex flex-row justify-content-between gap-2 mb-2">
          <div className="col-md-6">
            <label htmlFor="type" className="form-label ">
              Type of Publication
            </label>
            <select
              className="form-control  mb-3"
              name="type"
              value={data.type}
              onChange={handleChange}
            >
              <option value={"novalue"}>---select type---</option>
              {types_of_publications.map((t, i) => {
                return (
                  <option value={t} key={i}>
                    {t}
                  </option>
                );
              })}
            </select>
          </div>
          <div className="col-md-6">
            <label htmlFor="validationDefault02" className="form-label">
              Society
            </label>
            <input
              type="text"
              name="society"
              autoComplete="false"
              className="form-control  mb-3"
              value={data.society}
              placeholder="ie. IECON 2021 – 47th Annual Conference of the IEEE Industrial Electronics Society"
              onChange={handleChange}
            />
          </div>
        </div>
        <div className="col-md-12 d-flex flex-row justify-content-between gap-2 mb-2">
          <div className="col-md-6">
            <label htmlFor="email" className="form-label">
              Year of Publications
            </label>
            <select
              className="form-control  mb-3"
              name="year"
              value={data.year}
              onChange={handleChange}
            >
              <option value={"novalue"}>---select year---</option>
              {years.map((y, i) => {
                return (
                  <option value={y} key={i}>
                    {y}
                  </option>
                );
              })}
            </select>
          </div>
          <div className="col-md-6">
            <label htmlFor="email" className="form-label">
              Link of Publication(Optional)
            </label>
            <input
              type="text"
              name="link"
              autoComplete="false"
              className="form-control  mb-3"
              placeholder="ie. ieee standard paper link.."
              value={data.link}
              onChange={handleChange}
            />
          </div>
        </div>
        <div className="col-md-12">
          <label htmlFor="contributors" className="form-label">
            Add Contributors(Optional)
          </label>
          <select
            className="form-control"
            name="contributors"
            value={data.year}
            onChange={handleSelectContributor}
          >
            <option value="">--select--</option>
            {usersNames
              ?.filter((c) => !data.contributors.includes(c))
              .map((c, i) => {
                return (
                  <option value={c} key={i}>
                    {c}
                  </option>
                );
              })}
          </select>
          <a
            className="mb-3"
            data-bs-toggle="collapse"
            href="#collapseExample"
            role="button"
            aria-expanded="false"
            aria-controls="collapseExample"
          >
            Is contributor from outside(Click)?
          </a>
          <div className="collapse" id="collapseExample">
            <div className="input-group mb-3">
              <input
                type="text"
                className="form-control"
                placeholder="Contributor Name.."
                aria-label="Recipient's username"
                aria-describedby="button-addon2"
                value={customContributor}
                onChange={(e) => setCustomContributor(e.target.value)}
                onKeyDown={(e) => {
                  if (e.key === "Enter") {
                    handleCustomAddContributor();
                  }
                }}
              />
              <button
                className="btn btn-danger"
                type="button"
                id="button-addon2"
                onClick={handleCustomAddContributor}
              >
                Add
              </button>
            </div>
          </div>

          <div className="mb-3 d-flex gap-1 flex-wrap">
            {data.contributors?.map((c, i) => {
              return (
                <span className="badge rounded-pill bg-secondary py-2" key={i}>
                  {c}
                  <span
                    onClick={() => removeContributor(c)}
                    className="m-2"
                    style={{ cursor: "pointer" }}
                  >
                    <i className="fa-solid fa-xmark"></i>
                  </span>
                </span>
              );
            })}
          </div>
        </div>
        <button onClick={handleAdd} className="btn btn-dark p-3 w-100">
          {loading ? (
            <div className="spinner-border" role="status">
              <span className="visually-hidden">Loading...</span>
            </div>
          ) : (
            "Add"
          )}
        </button>
        <div className="text-center col-sm-12">
          <button
            type="button"
            className="btn btn-link"
            data-bs-dismiss="modal"
            data-bs-target="#addPublicationModal"
          >
            Close
          </button>
        </div>
      </div>
    </>
  );
};

export default AddPublication;

const years = [
  2008, 2009, 2010, 2011, 2012, 2013, 2014, 2015, 2016, 2017, 2018, 2019, 2020,
  2021, 2022, 2023,
];

const types_of_publications = [
  "Conference",
  "Patent",
  "Journal",
  "Book",
  "Book Chapter",
  "Publications",
];
