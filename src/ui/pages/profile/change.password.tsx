import React, { useState } from "react";
import { useSelector } from "react-redux";
import UserProfileService from "../../../services/auth/profile";

const ChangePassword: React.FC = () => {
  const auth = useSelector((state: any) => state.getauth);
  const [oldpassword, setOldPassword1] = useState<string>("");
  const [password1, setPassword1] = useState<string>("");
  const [password2, setPassword2] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);
  const handleLogin = async (e: any) => {
    e.preventDefault();
    if (!oldpassword || !password1 || !password2) {
      alert("Please fill required fields");
      return;
    }
    setLoading(true);
    const formData = new FormData();
    formData.append("oldpassword", oldpassword);
    formData.append("password1", password1);
    formData.append("password2", password2);
    formData.append("email", auth?.data?.email);
    const res = await UserProfileService.changepassword(
      auth?.data?.token,
      formData
    );
    console.log(res);
    if (res?.data.success === 1) {
      alert(res?.data.message);
    } else {
      alert(res?.data.message);
    }
    setLoading(false);
    setOldPassword1("");
    setPassword1("");
    setPassword2("");
  };
  return (
    <>
      <div className="container w-100 d-flex justify-content-start align-items-start flex-column py-5">
        <div className="container card shadow-lg rounded-2 p-3 col-sm-6">
          <div className="h1 text-center mb-4">Change Password</div>
          <div className="w-100">
            <input
              type="text"
              name="oldpassword"
              autoComplete="false"
              className="form-control  mb-3"
              id="email"
              placeholder="Old Password.."
              value={oldpassword}
              onChange={(e) => setOldPassword1(e.target.value)}
            />
            <input
              type="text"
              name="password1"
              autoComplete="false"
              className="form-control  mb-3"
              id="email"
              placeholder="New Password.."
              value={password1}
              onChange={(e) => setPassword1(e.target.value)}
            />
            <input
              type="text"
              className="form-control my-3"
              name="password2"
              id=""
              value={password2}
              onChange={(e) => setPassword2(e.target.value)}
              placeholder="Re-enter New Password.."
            />
            <div
              className="alert alert-warning p-3"
              role="alert"
              style={{ textAlign: "left" }}
            >
              <p className="h5 fw-bold">Instructions</p>
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
            {loading ? (
              <div className="spinner-border" role="status">
                <span className="visually-hidden">Loading...</span>
              </div>
            ) : (
              <button onClick={handleLogin} className="btn btn-dark">
                Submit
              </button>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default ChangePassword;
