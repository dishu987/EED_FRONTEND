import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import ResearchProjectsService from "../../../../services/auth/research.projects";
import { getResearchProjectRequestAction } from "../../../../store/reducers/slice/projects/research.projects";

interface FormData {
  title: string;
  funding_agency: string;
}
const intialData: FormData = {
  title: "",
  funding_agency: "",
};
const AddResearchProjects: React.FC = () => {
  const dispatch = useDispatch();
  const auth = useSelector((state: any) => state.getauth);
  const [data, setData] = useState<FormData>(intialData);
  const [loading, setLoading] = useState<boolean>(false);
  const handleAdd = async (e: any) => {
    e.preventDefault();
    setLoading(true);
    if (data.title && data.funding_agency) {
      setLoading(true);
      const formData = new FormData();
      formData.append("title", data.title);
      formData.append("funding_agency", data.funding_agency);
      const res = await ResearchProjectsService.add(
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
      setData(intialData);
      dispatch(getResearchProjectRequestAction());
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

  return (
    <>
      <div className="w-100">
        <label htmlFor="name" className="form-label">
          Project Title
        </label>{" "}
        <input
          type="text"
          name="title"
          autoComplete="false"
          className="form-control mb-3"
          placeholder="i.e. Sensorless Control of Switched Reluctance Motor Drives for Electric Vehicle Applications"
          value={data.title}
          onChange={handleChange}
        />{" "}
        <label htmlFor="funding_agency" className="form-label">
          Funding Agency
        </label>
        <input
          type="text"
          className="form-control mb-4"
          name="funding_agency"
          value={data.funding_agency}
          onChange={handleChange}
          placeholder="i.e. DRDO"
        />
        <div className="text-center">
          <button onClick={handleAdd} className="btn btn-dark p-3 w-100">
            {loading ? (
              <div className="spinner-border" role="status">
                <span className="visually-hidden">Loading...</span>
              </div>
            ) : (
              "Add"
            )}
          </button>
          <button
            className="btn btn-link text-center"
            data-bs-dismiss="modal"
            aria-label="Close"
            data-bs-target="#addProjectModal"
          >
            close
          </button>
        </div>
      </div>
    </>
  );
};

export default AddResearchProjects;
