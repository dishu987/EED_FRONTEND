import React, { useState } from "react";

interface FormData {
  email: string;
  name: string;
  mobile: string;
  batch: string;
  degree: string;
}
const intialData: FormData = {
  email: "",
  name: "",
  mobile: "",
  batch: "",
  degree: "",
};
const AddStudent: React.FC = () => {
  //   const auth = useSelector((state: any) => state.getauth);
  const [data, setData] = useState<FormData>(intialData);
  const [loading, setLoading] = useState<boolean>(false);

  const handleAdd = async (e: any) => {
    e.preventDefault();
    setLoading(true);
    if (data.email && data.batch && data.mobile && data.name && data.degree) {
      setLoading(true);
      const formData = new FormData();
      formData.append("email", data.email);
      formData.append("name", data?.name || ""); //for adding faculty name in db
      formData.append("mobile", data?.mobile || ""); // for adding faculty phone number to the database
      //   const res = await FacultyService.add(auth?.data?.token, formData);
      const res: any = "";
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

  return (
    <>
      <div className="container card fade-in-custom rounded-2 p-3 col-sm-12">
        <div className="w-100">
          <div className="col-md-12 d-flex flex-row justify-content-between gap-2 mb-2">
            <div className="col-md-6">
              {" "}
              <label htmlFor="name" className="form-label">
                Name
              </label>
              <input
                type="text"
                name="name"
                autoComplete="false"
                className="form-control"
                id="name"
                placeholder=""
                value={data.name}
                onChange={handleChange}
              />
            </div>
            <div className="col-md-6">
              {" "}
              <label htmlFor="email" className="form-label">
                Email
              </label>
              <input
                type="email"
                name="email"
                autoComplete="false"
                className="form-control"
                id="email"
                placeholder="ie. 2020EEBXYZA@iitrpr.ac.in"
                value={data.email}
                onChange={handleChange}
              />
            </div>
          </div>
          <div className="col-md-12 d-flex flex-row justify-content-between gap-2 mb-2">
            <div className="col-md-6">
              <label htmlFor="designation" className="form-label ">
                Batch
              </label>
              <select
                className="form-control"
                name="designation"
                value={data.batch}
                onChange={handleChange}
              >
                <option value={"novalue"}>---select batch---</option>
                <option value="2020">2020</option>
                <option value="2021">2021</option>
                <option value="2022">2022</option>
              </select>
            </div>
            <div className="col-md-6">
              <label htmlFor="validationDefault02" className="form-label">
                Degree
              </label>
              <select
                className="form-control"
                name="subject"
                value={data.degree}
                onChange={handleChange}
              >
                <option value={"novalue"}>---select degree---</option>
                <option value="Btech">Btech</option>
                <option value="Mtech">Mtech</option>
                <option value="Ph.D">Ph.D</option>
              </select>
            </div>
          </div>{" "}
          <label htmlFor="validationDefault02" className="form-label">
            Mobile
          </label>
          <input
            type="text"
            className="form-control mb-3"
            id="validationDefault02"
            value={data.mobile}
            name="mobile"
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
    </>
  );
};

export default AddStudent;
