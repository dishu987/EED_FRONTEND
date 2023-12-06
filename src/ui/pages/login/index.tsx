import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getUserAuthRequestAction } from "../../../store/reducers/slice/auth";

const Login: React.FC = () => {
  const dispatch = useDispatch();
  const auth = useSelector((state: any) => state.getauth);
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const handleLogin = async (e: any) => {
    e.preventDefault();
    if (!email || !password) {
      alert("Email and Password are required fields.");
    } else {
      const formData = new FormData();
      formData.append("email", email);
      formData.append("password", password);
      dispatch(getUserAuthRequestAction(formData));
    }
  };
  return (
    <>
      <div className="container w-100 d-flex justify-content-start align-items-start flex-column py-5">
        <div className="container card shadow-lg rounded-2 p-3 col-sm-4">
          <div className="h1 text-center mb-4">Login</div>

          <div className="w-100">
            {/* {!auth.isSuccessful && (
              <div className="alert alert-danger" role="alert">
                {auth?.result?.message}
              </div>
            )} */}
            <input
              type="email"
              name="email"
              autoComplete="false"
              className="form-control  mb-3"
              id="email"
              placeholder="ie. admin@iitrpr.ac.in"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <input
              type="password"
              className="form-control my-3"
              name="password"
              id=""
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="****"
            />
            {auth.isLoading ? (
              <div className="spinner-border" role="status">
                <span className="visually-hidden">Loading...</span>
              </div>
            ) : (
              <button onClick={handleLogin} className="btn btn-dark">
                Login
              </button>
            )}
          </div>
          <div className="text-center mt-2">
            <small>
              <Link
                to="#"
                onClick={() =>
                  alert(
                    "Please Contact the Administration to Change the Password."
                  )
                }
                className=" underline-hover"
              >
                Forget Password?
              </Link>
            </small>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
