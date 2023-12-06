import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import AchievementsService from "../../../../services/auth/achievements";
import { getAchievementsRequestAction } from "../../../../store/reducers/slice/achievements/achievements";

interface FormData {
  name: string;
  category: string;
  department: string;
  supervisor: string;
  award: string;
}
const intialData: FormData = {
  name: "",
  category: "",
  department: "",
  supervisor: "",
  award: "",
};
const AddAchievements: React.FC = () => {
  const dispatch = useDispatch();
  const auth = useSelector((state: any) => state.getauth);
  const [data, setData] = useState<FormData>(intialData);
  const [loading, setLoading] = useState<boolean>(false);
  const handleAdd = async (e: any) => {
    e.preventDefault();
    setLoading(true);
    if (
      data.name &&
      data.category &&
      data.award &&
      data.department &&
      data.supervisor
    ) {
      setLoading(true);
      const formData = new FormData();
      formData.append("name", data.name);
      formData.append("category", data.category);
      formData.append("department", data.department);
      formData.append("supervisor", data.supervisor);
      formData.append("award", data.award);
      const res = await AchievementsService.add(auth?.data?.token, formData);
      console.log(res);
      if (res.data.status === 201) {
        alert(res?.data?.message);
        setData(intialData);
      } else {
        alert(res.data.message);
      }
      setData(intialData);
      dispatch(getAchievementsRequestAction());
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
          Name
        </label>{" "}
        <input
          type="text"
          name="name"
          autoComplete="false"
          className="form-control mb-3"
          placeholder="ie name of student or title of award"
          value={data.name}
          onChange={handleChange}
        />{" "}
        <label htmlFor="category" className="form-label">
          Category
        </label>
        <input
          type="text"
          className="form-control mb-4"
          name="category"
          value={data.category}
          onChange={handleChange}
          placeholder="i.e. Research Scholar"
        />
        <label htmlFor="department" className="form-label">
          Department
        </label>
        <select
          className="form-control mb-4"
          name="department"
          value={data.department}
          onChange={handleChange}
        >
          <option value="">--select department--</option>
          {departments.map((item, i) => {
            return (
              <option
                value={item.value}
                key={i}
                selected={item.value === "EED"}
              >
                {item.label}
              </option>
            );
          })}
        </select>
        <label htmlFor="supervisor" className="form-label">
          Supervisor
        </label>
        <select
          className="form-control mb-4"
          name="supervisor"
          value={data.supervisor}
          onChange={handleChange}
        >
          <option value="">--select superviser--</option>
          {professorNames.map((item, i) => {
            return (
              <option value={item} key={i}>
                {item}
              </option>
            );
          })}
        </select>
        <label htmlFor="award" className="form-label">
          Award
        </label>
        <textarea
          className="form-control mb-4"
          name="award"
          value={data.award}
          onChange={handleChange}
          placeholder=""
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
            data-bs-target="#addAchievementModal"
          >
            close
          </button>
        </div>
      </div>
    </>
  );
};

export default AddAchievements;

const professorNames = [
  "By Faculty",
  "Dr A. V. Ravi Teja",
  "Dr. Ranjana Sodhi",
  "Dr. Bibhu Prasad Padhy",
  "Dr. K. R. Sekhar",
  "Dr. C. C. Reddy",
  "Dr. Saifullah Payami",
  "Dr. Kalaiselvi J.",
  "Dr. Sanjay Roy",
  "Dr. Sam Darshi",
  "Dr. Ashwani Sharma",
  "Dr. Satyam Aggarwal",
  "Dr. Brajesh Kumbhani",
  "Dr. Subrahmanyam Murala",
  "Dr. J. S. Sahambi",
  "Dr. Suman Kumar",
  "Dr. Abhishek Sharma",
  "Dr. Pardeep Duhan",
  "Dr. Brajesh Rawat",
  "Dr. Rohit Y. Sharma",
  "Dr. Devarshi Das",
  "Dr. Vinayak Hande",
  "Dr. Mahendra Sakare",
];

const departments = [
  { value: "EED", label: "Electrical Engineering" },
  { value: "CSE", label: "Computer Science and Engineering" },
  { value: "ME", label: "Mechanical Engineering" },
  { value: "CE", label: "Civil Engineering" },
  { value: "CHE", label: "Chemical Engineering" },
];
