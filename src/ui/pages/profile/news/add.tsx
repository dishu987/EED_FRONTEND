import React, { useState } from "react";
import { useSelector } from "react-redux";
import NewsService from "../../../../services/auth/news";

interface FormData {
  title: string;
  isprivate: boolean;
  description: string;
  type: string;
}
const intialData: FormData = {
  title: "",
  isprivate: false,
  description: "",
  type: "",
};
const AddNews: React.FC = () => {
  const auth = useSelector((state: any) => state.getauth);
  const [data, setData] = useState<FormData>(intialData);
  const [loading, setLoading] = useState<boolean>(false);
  const [selectedFile, setSelectedFile] = useState<any>(null);
  const [imagePreview, setImagePreview] = useState<any>(null);
  const handleAdd = async (e: any) => {
    e.preventDefault();
    setLoading(true);
    if (data.title && data.description && selectedFile) {
      setLoading(true);
      const formData = new FormData();
      formData.append("title", data.title);
      formData.append("isprivate", data.isprivate ? "1" : "0");
      formData.append("image", selectedFile);
      formData.append("description", data.description);
      formData.append("userid", auth?.data?.id);
      formData.append("type", data.type);
      const res = await NewsService.addnews(auth?.data?.token, formData);
      console.log(res);
      if (res.data.status === 201) {
        alert(res?.data?.message);
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
    const reader = new FileReader();
    reader.onload = (e: any) => {
      setImagePreview(e.target.result);
    };
    reader.readAsDataURL(file);
  };
  const handleRadioChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const updatedData: FormData = {
      ...data,
      isprivate: !e.target.checked,
    };
    setData(updatedData);
  };
  const handleRadioChange1 = (e: React.ChangeEvent<HTMLInputElement>) => {
    const updatedData: FormData = {
      ...data,
      isprivate: e.target.checked,
    };
    setData(updatedData);
  };
  return (
    <>
      <div className="container w-100 d-flex justify-content-start align-items-start flex-column py-5">
        <div className="container card shadow-lg rounded-2 p-3 col-sm-12">
          <div className="h1 text-center mb-4">Add News</div>
          {imagePreview && (
            <figure className="col-sm-12 figure text-center">
              <img
                src={imagePreview}
                className="figure-img img-fluid rounded hover-scale-up"
                style={{ height: "200px" }}
              />
            </figure>
          )}
          <div className="w-100">
            <label htmlFor="name" className="form-label">
              News Title
            </label>{" "}
            <input
              type="text"
              name="title"
              autoComplete="false"
              className="form-control mb-3"
              placeholder=""
              value={data.title}
              onChange={handleChange}
            />{" "}
            <label htmlFor="type" className="form-label">
              Type of News
            </label>
            <select
              className="form-control mb-2"
              name="type"
              value={data.type}
              onChange={handleChange}
            >
              <option value="">--select--</option>
              {TypeNewsConst.map((c, i) => {
                return (
                  <option value={c} key={i}>
                    {c}
                  </option>
                );
              })}
            </select>
            <div className="col-md-12 d-flex flex-row justify-content-between gap-2 mb-2">
              <div className="col-md-6">
                <label htmlFor="profile_image" className="form-label">
                  Banner Image
                </label>
                <input
                  type="file"
                  className="form-control mb-3"
                  name="image"
                  id="image"
                  onChange={handleFileChange}
                  accept=".jpg"
                />
              </div>
              <div className="col-md-6">
                <label htmlFor="isprivate" className="form-label">
                  Visiblity
                </label>
                <div className="d-flex form-control gap-3">
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="flexRadioDefault"
                      onChange={handleRadioChange}
                      checked={!data.isprivate}
                    />
                    <label
                      className="form-check-label"
                      htmlFor="flexRadioDefault1"
                    >
                      Public
                    </label>
                  </div>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="flexRadioDefault"
                      onChange={handleRadioChange1}
                      checked={data.isprivate}
                    />
                    <label
                      className="form-check-label"
                      htmlFor="flexRadioDefault2"
                    >
                      Private
                    </label>
                  </div>
                </div>
              </div>
            </div>
            <label htmlFor="name" className="form-label">
              News Description
            </label>
            <textarea
              name="description"
              autoComplete="false"
              className="form-control  mb-3"
              placeholder=""
              value={data.description}
              onChange={handleChange}
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
        </div>
      </div>
    </>
  );
};

export default AddNews;

const TypeNewsConst = ["Faculty joining", "Inaugration", "Innovation", "Other"];
