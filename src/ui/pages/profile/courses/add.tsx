import React, { useState } from "react";
import { useSelector } from "react-redux";
import CourseService from "../../../../services/auth/courses";

interface FormData {
  title: string;
  code: string;
  description: string;
  ltpc: string;
  degree: string;
}
const intialData: FormData = {
  title: "",
  code: "",
  description: "",
  ltpc: "",
  degree: "",
};
const AddCourse: React.FC = () => {
  const auth = useSelector((state: any) => state.getauth);
  const [data, setData] = useState<FormData>(intialData);
  const [loading, setLoading] = useState<boolean>(false);
  const handleAdd = async (e: any) => {
    e.preventDefault();
    setLoading(true);
    if (
      data.title &&
      data.description &&
      data.code &&
      data.ltpc &&
      data.degree
    ) {
      setLoading(true);
      const formData = new FormData();
      formData.append("title", data.title);
      formData.append("description", data.description);
      formData.append("code", data.code);
      formData.append("ltpc", data.ltpc);
      formData.append("degree", data.degree);
      formData.append("userid", auth?.data?.id);
      const res = await CourseService.addcourse(auth?.data?.token, formData);
      console.log(res);
      if (res.data.status === 201) {
        alert(res?.data?.message);
        setData(intialData);
      } else {
        alert(res.data.message);
      }
    } else {
      setLoading(true);
      alert("Required Fields Are Missing!");
    }
    setLoading(false);
    setData(intialData);
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
      <div className="fade-in-custom  shadow-sm p-3">
        <label htmlFor="degree" className="form-label">
          Course For
        </label>{" "}
        <select
          className="form-select mb-3"
          name="degree"
          id="degree"
          onChange={handleChange}
        >
          <option value="notValue">--select degree--</option>
          <option value="btech">B.Tech.</option>
          <option value="mtech">M.Tech.</option>
          <option value="msc">M.Sc.</option>
          <option value="phd">Ph.D.</option>
        </select>
        <label htmlFor="name" className="form-label">
          Course Title
        </label>{" "}
        <input
          type="text"
          name="title"
          autoComplete="false"
          className="form-control mb-3"
          placeholder="ie. Power Systems"
          value={data.title}
          onChange={handleChange}
        />{" "}
        <div className="col-md-12 d-flex flex-row justify-content-between gap-2 mb-2">
          <div className="col-md-6">
            <label htmlFor="profile_image" className="form-label">
              Course Code
            </label>
            <input
              type="text"
              className="form-control mb-3"
              name="code"
              id="code"
              placeholder="ie. EE309"
              onChange={handleChange}
            />
          </div>
          <div className="col-md-6">
            <label htmlFor="isprivate" className="form-label">
              L-T-P-S-C
            </label>
            <input
              type="text"
              className="form-control mb-3"
              name="ltpc"
              id="ltpc"
              placeholder="ie. 3-1-0-5-3"
              onChange={handleChange}
            />
          </div>
        </div>
        <label htmlFor="name" className="form-label">
          Description
        </label>
        <textarea
          name="description"
          autoComplete="false"
          className="form-control  mb-3"
          placeholder="Something more about this course.."
          value={data.description}
          onChange={handleChange}
          rows={5}
        />
        <button onClick={handleAdd} className="btn btn-dark p-3 w-100">
          {loading ? (
            <div className="spinner-border" role="status">
              <span className="visually-hidden">Loading...</span>
            </div>
          ) : (
            "Add"
          )}
        </button>
      </div>
    </>
  );
};

export default AddCourse;
