import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import StaffService from "../../../../services/auth/staff";
import { getStaffRequestAction } from "../../../../store/reducers/slice/peoples/staff";

interface FormData {
  designation: string;
  email: string;
  name: string;
  mobile: string;
}
const intialData: FormData = {
  email: "",
  name: "",
  mobile: "",
  designation: "",
};
const AddStaff: React.FC = () => {
  const dispatch = useDispatch();
  const auth = useSelector((state: any) => state.getauth);
  const [data, setData] = useState<FormData>(intialData);
  const [selectedFile, setSelectedFile] = useState<any>(null);
  const [imagePreview, setImagePreview] = useState<any>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const handleAdd = async (e: any) => {
    e.preventDefault();
    setLoading(true);
    if (
      data.email &&
      selectedFile &&
      data.designation &&
      data.mobile &&
      data.name
    ) {
      if (data.designation === "novalue") {
        alert("Please select a valid designation!");
        return;
      }
      setLoading(true);
      const formData = new FormData();
      formData.append("email", data.email);
      formData.append("profile_image", selectedFile);
      formData.append("name", data?.name);
      formData.append("mobile", data?.mobile);
      formData.append("designation", data?.designation);
      const res = await StaffService.add(auth?.data?.token, formData);
      console.log(res);
      if (res.data.status === 201) {
        alert(res.data.message);
      } else {
        alert(res.data.message);
      }
      setData(intialData);
      dispatch(getStaffRequestAction());
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
          <div className="h1 text-center mb-4">Add Staff Manually</div>
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
            <label htmlFor="name" className="form-label">
              Name
            </label>
            <input
              type="text"
              name="name"
              autoComplete="false"
              className="form-control  mb-3"
              id="name"
              placeholder="ie. XYZ"
              value={data.name}
              onChange={handleChange}
            />
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
                  {designationsData.map((d, i) => {
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
                  Mobile
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="validationDefault02"
                  value={data.mobile}
                  name="mobile"
                  onChange={handleChange}
                  placeholder="i.e. 10 digits mobile number"
                />
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
                  placeholder="ie. staff_test@iitrpr.ac.in"
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
    </>
  );
};

export default AddStaff;

export const designationsData: string[] = [
  "Technical Supt.",
  "Jr. Lab Assistant",
  "Sr. Assistant",
  "Office Assistant",
];
