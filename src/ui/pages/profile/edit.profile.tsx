import React, { useEffect, useRef, useState } from "react";
import { useSelector } from "react-redux";
import { BACKEND_URL } from "../../../utils/api.constants";
import UserProfileService from "../../../services/auth/profile";
import { FacultySubjectsData } from "../../../constants/faculty.data";

interface FormData {
  mobile: any;
  research_interests: any;
  homepage: any;
  subject: any;
}
const intialData = {
  mobile: "",
  homepage: "",
  research_interests: "",
  subject: "",
};
interface T {
  profile: any;
}
const EditProfile: React.FC<T> = ({ profile }) => {
  const fileInputRef = useRef(null);
  const auth = useSelector((state: any) => state.getauth);
  const [data, setData] = useState<FormData>(intialData);
  const [selectedFile, setSelectedFile] = useState<any>(null);
  const [imagePreview, setImagePreview] = useState<any>(null);
  const [loading, setLoading] = useState<boolean>(false);
  useEffect(() => {
    console.log("1");
    setData({
      mobile: profile.mobile,
      homepage: profile.homepage,
      subject: profile.subject,
      research_interests: profile.research_interests,
    });
  }, [profile]);

  const handleEdit = async (e: any) => {
    e.preventDefault();
    setLoading(true);
    console.log(data);
    if (data.homepage && data.mobile && data.research_interests) {
      let msg = "";
      if (!imagePreview) {
        msg =
          "Altered Fields: Subject, Mobile and Research Interests, Click 'OK' to Proceed!";
      }
      if (imagePreview) {
        msg =
          "Altered Fields: Profile Image, Subject, Mobile and Research Interests, Click 'OK' to Proceed!";
      }

      if (
        confirm(msg) &&
        confirm(
          "Are you sure you want to submit the form? Your changes will be saved."
        )
      ) {
        setLoading(true);
        const formData = new FormData();
        formData.append("profile_image", selectedFile);
        formData.append("subject", data.subject);
        formData.append("mobile", data.mobile);
        formData.append("research_interests", data.research_interests);
        formData.append("homepage", data.homepage);
        const res = await UserProfileService.editprofile(
          auth?.data?.token,
          formData
        );
        console.log(res);
        if (res?.data.success === 1) {
          alert(res?.data.message);
          location.href = "/profile";
        } else {
          alert(res?.data.message);
        }
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
      <div className="container w-100 d-flex justify-content-start align-items-start flex-column">
        {!imagePreview && (
          <figure className="figure text-center col-sm-12">
            <img
              src={BACKEND_URL + "/users/" + profile.profile_image}
              className="figure-img img-fluid rounded hover-scale-up"
              style={{ height: "200px" }}
            />
          </figure>
        )}
        {imagePreview && (
          <figure className="figure text-center col-sm-12">
            <img
              src={imagePreview}
              className="figure-img img-fluid rounded hover-scale-up"
              style={{ height: "200px" }}
            />
          </figure>
        )}
        <div className="w-100">
          <div className="mb-3">
            <label htmlFor="name" className="form-label">
              Name
            </label>
            <input
              type="text"
              name="name"
              autoComplete="false"
              className="form-control"
              id="name"
              placeholder="ie. assistant professor"
              value={profile?.name}
              disabled
            />
            <small>
              <div className="alert alert-warning p-0 px-1 mt-1" role="alert">
                For security purposes, the <strong>Name</strong> field is locked
                and cannot be modified to maintain data integrity.
              </div>
            </small>
          </div>
          <div className="col-md-12 d-flex flex-row justify-content-between gap-2 mb-2">
            <div className="col-md-6">
              <div className="mb-3">
                <label htmlFor="designation" className="form-label ">
                  Designation
                </label>
                <select
                  className="form-control"
                  name="designation"
                  value={profile.designation}
                  disabled
                  // onChange={handleChange}
                >
                  <option>---select designation---</option>
                  <option value={"Assistant Professor"}>
                    Assistant Professor
                  </option>
                  <option value={"Associate Professor"}>
                    Associate Professor
                  </option>
                  <option value={"Professor"}>Professor</option>
                  <option value="Inspire Faculty">Inspire Faculty</option>
                </select>
                <small>
                  <div
                    className="alert alert-warning p-0 px-1 mt-1"
                    role="alert"
                  >
                    For security purposes, the <strong>Designation</strong>{" "}
                    field is locked and cannot be modified to maintain data
                    integrity.
                  </div>
                </small>
              </div>
            </div>
            <div className="col-md-6">
              <label htmlFor="email" className="form-label">
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
              <div className="mb-3">
                <label htmlFor="email" className="form-label">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  autoComplete="false"
                  className="form-control"
                  id="email"
                  placeholder="ie. admin@iitrpr.ac.in"
                  value={profile?.email}
                  disabled
                />
                <small>
                  <div
                    className="alert alert-warning p-0 px-1 mt-1"
                    role="alert"
                  >
                    For security purposes, the <strong>Email</strong> field is
                    locked and cannot be modified to maintain data integrity.
                  </div>
                </small>
              </div>
            </div>
            <div className="col-md-6">
              <label htmlFor="profile_image" className="form-label">
                Profile Image
              </label>
              <input
                type="file"
                ref={fileInputRef}
                className="form-control"
                name="profile_image"
                id="profile_image"
                onChange={handleFileChange}
                accept=".jpg"
              />
              {imagePreview && (
                <button
                  type="button"
                  className="btn btn-link mt-2 shadow-none text-danger"
                  onClick={() => {
                    setImagePreview("");
                    if (fileInputRef.current) {
                      (fileInputRef as any).current.value = null;
                    }
                  }}
                  disabled={imagePreview ? false : true}
                >
                  <i className="fa-solid fa-xmark"></i> Remove
                </button>
              )}
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
              <label htmlFor="validationDefaultUsername" className="form-label">
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
            className="form-control mb-2 p-3"
            style={{ height: "200px" }}
            name="research_interests"
            id="research_interests"
            onChange={handleChange}
            value={data.research_interests}
          ></textarea>
          <button className="btn btn-dark p-3 w-100" onClick={handleEdit}>
            {loading ? (
              <>
                <div className="spinner-border" role="status">
                  <span className="visually-hidden">Loading...</span>
                </div>
              </>
            ) : (
              "Add"
            )}
          </button>
          <div className="text-center col-sm-12">
            <button
              type="button"
              className="btn btn-link"
              data-bs-dismiss="modal"
              data-bs-target="#editProfileModal"
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default EditProfile;
