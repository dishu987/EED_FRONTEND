import React, { useState } from "react";
import { useSelector } from "react-redux";
import FacultyService from "../../../services/data/faculty";
import {
  FacultyDesignationData,
  FacultySubjectsData,
} from "../../../constants/faculty.data";

interface FormData {
  designation: string;
  email: string;
  name: string;
  mobile: string;
  password: string;
  research_interests: string;
  homepage: string;
  subject: string;
  is_admin: boolean;
}
const intialData = {
  email: "",
  name: "",
  mobile: "",
  password: "123456789",
  homepage: "",
  research_interests: "",
  designation: "",
  subject: "",
  is_admin: false,
};
const AddFaculty: React.FC = () => {
  const auth = useSelector((state: any) => state.getauth);
  const [data, setData] = useState<FormData>(intialData);
  const [selectedFile, setSelectedFile] = useState<any>(null);
  const [imagePreview, setImagePreview] = useState<any>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [show, setShow] = useState<boolean>(false);
  const handleAdd = async (e: any) => {
    e.preventDefault();
    setLoading(true);
    if (
      data.email &&
      data.password &&
      selectedFile &&
      data.designation &&
      data.homepage &&
      data.mobile &&
      data.name &&
      data.research_interests
    ) {
      if (data.designation === "novalue") {
        alert("Please select a valid designation!");
        return;
      }
      setLoading(true);
      const formData = new FormData();
      formData.append("email", data.email);
      formData.append("password", data.password);
      formData.append("subject", data.subject);
      formData.append("profile_image", selectedFile);
      formData.append("name", data?.name || ""); //for adding faculty name in db
      formData.append("mobile", data?.mobile || ""); // for adding faculty phone number to the database
      formData.append("research_interests", data?.research_interests);
      formData.append("homepage", data?.homepage);
      formData.append("designation", data?.designation);
      formData.append("is_admin", data?.is_admin == true ? "1" : "0");
      const res = await FacultyService.add(auth?.data?.token, formData);
      console.log(res);
      if (res.data.status === 201) {
        alert("User has been Registered!");
        setData(intialData);
      } else {
        alert(res.data.message);
      }
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
  const handleFileChange = (event: any) => {
    const file = event.target.files[0];
    setSelectedFile(file);
    // Display the selected image in an image tag
    const reader = new FileReader();
    reader.onload = (e: any) => {
      setImagePreview(e.target.result);
    };
    reader.readAsDataURL(file);
  };
  return (
    <>
      <div className="container w-100 d-flex justify-content-start align-items-start flex-column py-5">
        <div className="container card shadow-lg rounded-2 p-3 col-sm-12">
          <div className="h1 text-center mb-4">Add Faculty Manually</div>
          {imagePreview && (
            <figure className="figure text-center">
              <img
                src={imagePreview}
                className="figure-img img-fluid rounded hover-scale-up"
                style={{ height: "200px" }}
              />
            </figure>
          )}

          <div className="w-100">
            <div className="col-md-12 d-flex flex-row justify-content-between align-items-center gap-2 mb-2">
              <div className="col-md-6 ">
                {" "}
                <label htmlFor="name" className="form-label">
                  Name
                </label>
                <input
                  type="text"
                  name="name"
                  autoComplete="false"
                  className="form-control  mb-3"
                  id="name"
                  placeholder="ie. Dr. Ram"
                  value={data.name}
                  onChange={handleChange}
                />
              </div>

              <div className="col-md-6 d-flex justify-content-between align-items-center">
                {" "}
                <div className="form-check form-switch d-flex align-items-center mt-3">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    id="flexSwitchCheckDefault"
                    checked={data.is_admin}
                    onChange={(e) => {
                      setData((d) => ({
                        ...d,
                        is_admin: e.target.checked,
                      }));
                    }}
                    name="is_admin"
                  />
                  <label
                    className="form-check-label mx-2"
                    style={{ cursor: "help" }}
                    htmlFor="flexSwitchCheckDefault"
                  >
                    Is user is Admin?{" "}
                    <button
                      type="button"
                      className="btn btn-link"
                      data-bs-toggle="modal"
                      data-bs-target="#adminInstModal"
                      style={{ boxShadow: "none" }}
                    >
                      help
                    </button>
                  </label>
                </div>
              </div>
            </div>

            <div className="col-md-12 d-flex flex-row justify-content-between gap-2 mb-2">
              <div className="col-md-6">
                <label htmlFor="designation" className="form-label ">
                  Designation
                </label>
                <select
                  className="form-control  mb-3"
                  name="designation"
                  value={data.designation}
                  onChange={handleChange}
                >
                  <option value={"novalue"}>---select designation---</option>
                  {FacultyDesignationData.map((d, i) => {
                    return (
                      <option value={d} key={i}>
                        {d}
                      </option>
                    );
                  })}
                </select>
              </div>
              <div className="col-md-6">
                <label htmlFor="validationDefault02" className="form-label">
                  Subject
                </label>
                <select
                  className="form-control  mb-3"
                  name="subject"
                  value={data.subject}
                  onChange={handleChange}
                >
                  <option value={"novalue"}>---select subject---</option>
                  {FacultySubjectsData.map((d, i) => {
                    return (
                      <option value={d} key={i}>
                        {d}
                      </option>
                    );
                  })}
                </select>
              </div>
            </div>

            <div className="col-md-12 d-flex flex-row justify-content-between gap-2 mb-2">
              <div className="col-md-6">
                <label htmlFor="email" className="form-label">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  autoComplete="false"
                  className="form-control  mb-3"
                  id="email"
                  placeholder="ie. admin@iitrpr.ac.in"
                  value={data.email}
                  onChange={handleChange}
                />
              </div>
              <div className="col-md-6">
                <label htmlFor="profile_image" className="form-label">
                  Profile Image
                </label>
                <input
                  type="file"
                  className="form-control"
                  name="profile_image"
                  id="profile_image"
                  onChange={handleFileChange}
                  accept=".jpg"
                />
              </div>
            </div>
            <div className="col-md-12 d-flex flex-row justify-content-between gap-2 mb-2">
              <div className="col-md-6">
                <label htmlFor="validationDefault02" className="form-label">
                  Mobile
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="validationDefault02"
                  value={data.mobile}
                  name="mobile"
                  onChange={handleChange}
                />
              </div>
              <div className="col-md-6">
                <label
                  htmlFor="validationDefaultUsername"
                  className="form-label"
                >
                  Homepage
                </label>
                <div className="input-group">
                  <span className="input-group-text" id="inputGroupPrepend2">
                    #
                  </span>
                  <input
                    type="text"
                    className="form-control"
                    id="validationDefaultUsername"
                    aria-describedby="inputGroupPrepend2"
                    value={data.homepage}
                    placeholder="ie. personal.blog.com"
                    name="homepage"
                    onChange={handleChange}
                  />
                </div>
              </div>
            </div>
            <label htmlFor="research_interests">Research Interests</label>
            <textarea
              className="form-control mb-2"
              style={{ height: "100px" }}
              name="research_interests"
              id="research_interests"
              onChange={handleChange}
            ></textarea>

            <div
              className="alert alert-warning"
              role="alert"
              style={{ textAlign: "left" }}
            >
              {" "}
              <label htmlFor="password" className="form-label fw-bold">
                Password
              </label>
              <div className="input-group">
                <input
                  type={show ? "text" : "password"}
                  className="fw-bold h5 form-control mb-2 "
                  name="password"
                  value={data.password}
                  onChange={handleChange}
                  placeholder="Password.."
                />
                <span className="input-group-btn">
                  <button
                    className="btn btn-secondary rounded-0 shadow-none"
                    type="button"
                    onClick={() => setShow(!show)}
                  >
                    {!show ? <>Show</> : <>Hide</>}
                  </button>
                </span>
              </div>
              <ul>
                <li>
                  Password must be at least{" "}
                  <strong className="text-danger">8 Characters </strong> long.{" "}
                </li>
                <li>Password should be contain at least one Alphabet.</li>
                <li>
                  Password should be contain at least one Spacial Character(ie
                  @,#, etc.)
                </li>
              </ul>
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
          </div>
        </div>
      </div>
      <div
        className="modal fade"
        id="adminInstModal"
        tabIndex={-1}
        aria-labelledby="adminInstModal"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title fw-bold" id="adminInstModal">
                Who is a Admin?
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              />
            </div>
            <div className="modal-body modal-dialog-centered modal-dialog-scrollable">
              <div className="alert alert-warning p-3" role="alert">
                <ul>
                  <li>
                    An administrator is a privileged user with special
                    permissions and responsibilities.
                  </li>
                  <li>
                    Admins have the authority to manage user accounts, oversee
                    content, and ensure the smooth operation of the platform.
                  </li>
                  <li>
                    As an admin, they will play a crucial role in maintaining
                    the integrity and security of our platform.
                  </li>
                  <li>
                    There responsibilities may include user management, content
                    moderation, and other tasks essential for the efficient
                    functioning of the system.
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AddFaculty;
