import { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { toast } from "react-toastify";

const SignUp = () => {
  let navigate = useNavigate();

  let [user, setUser] = useState({
    name: "",
    number: "",
    email: "",
    password: "",
    companyName: "",
    agency: "",
  });
  let [confirmPassword, setConfirmPassword] = useState();

  let toastStyle = {
    position: "top-right",
    autoClose: 3000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "dark",
  };

  //this is the validation check function
  function checker(event) {
    event.preventDefault();
    if (
      !user.name ||
      !user.number ||
      !user.email ||
      !user.password ||
      !user.agency
    ) {
      toast.warn("Please fill the required fields", toastStyle);
      return;
    }

    if (user.password.length < 8) {
      toast.warn("Password should have a minimum length of 8", toastStyle);
      return;
    }

    if (user.password !== confirmPassword) {
      toast.warn("Passwords didnt matched", toastStyle)
      setConfirmPassword('')
      return;
    }

    //if there is any users then we will get that from localstorage or else will be assigning and empty array 
    //to users 
    let users = JSON.parse(localStorage.getItem("users")) || [];

    //we will be iterating over the array and checks the emails if we get any matched eemail that means
    //user has an acount so will be naviagted to login page
    let flag = true;
    users.forEach((item) => {
      if (item.email === user.email) {
        flag = false;
      }
    });

    //else will be pushing current user to users array and stoing it in local storage
    //else will be navigating to login page
    if (flag) {
      users.push(user);

      localStorage.setItem("users", JSON.stringify(users));

      let currentUser = {
        email: user.email,
        name: user.name,
      };
      localStorage.setItem("currentUser", JSON.stringify(currentUser));

      toast.success("Account created", toastStyle);
      setTimeout(() => {
        navigate("/account");
      }, 1500);
    } else {
      localStorage.setItem("users", JSON.stringify(users));
      toast.warn("You already have an account just Login", toastStyle);
      setTimeout(() => {
        navigate("/login");
      }, 1500);
    }
  }

  return (
    <SignUpContainer>
      <div className="container">
        <h1 className="left">Create your PopX account</h1>
        <form className="form">
          <div className="inputDiv right">
            <input
              type="text"
              className="input"
              required="required"
              value={user.name}
              onChange={(e) => setUser({ ...user, name: e.target.value })}
            />
            <div className="label">
              <label>Full Name</label>
              <span>*</span>
            </div>
          </div>
          <div className="inputDiv left">
            <input
              type="number"
              className="input"
              required="required"
              value={user.number}
              onChange={(e) => setUser({ ...user, number: e.target.value })}
            />
            <div className="label">
              <label>PhoneNumber</label>
              <span>*</span>
            </div>
          </div>
          <div className="inputDiv right">
            <input
              type="text"
              required="required"
              className="input"
              value={user.email}
              onChange={(e) => setUser({ ...user, email: e.target.value })}
            />
            <div className="label">
              <label>Email</label>
              <span>*</span>
            </div>
          </div>
          <div className="inputDiv left">
            <input
              type="password"
              required="required"
              className="input"
              value={user.password}
              onChange={(e) => setUser({ ...user, password: e.target.value })}
            />
            <div className="label">
              <label>Password</label>
              <span>*</span>
            </div>
          </div>
          <div className="inputDiv right">
            <input
              type="text"
              required="required"
              className="input"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
            <div className="label">
              <label>Confirm Password</label>
              <span>*</span>
            </div>
          </div>
          <div className="inputDiv left">
            <input
              type="text"
              required="required"
              className="input"
              value={user.companyName}
              onChange={(e) =>
                setUser({ ...user, companyName: e.target.value })
              }
            />
            <div className="label">
              <label>Company Name</label>
            </div>
          </div>

          <div className="radioDiv right">
            <label>Are you an Agency?*</label>
            <div className="div">
              <div>
                <input
                  type="radio"
                  name="agency"
                  value="yes"
                  onChange={(e) => setUser({ ...user, agency: e.target.value })}
                />
                Yes
              </div>
              <div>
                <input
                  type="radio"
                  name="agency"
                  value="no"
                  onChange={(e) => setUser({ ...user, agency: e.target.value })}
                />
                No
              </div>
            </div>
          </div>
          <button onClick={checker} className="createBtn left">
            Create Account
          </button>
        </form>
      </div>
    </SignUpContainer>
  );
};

export default SignUp;

let SignUpContainer = styled.div`
  background-color: #f7f8f9;
  min-height: 100vh;
  min-width: 100vw;
  padding: 1.5rem;
  
  h1 {
    margin-bottom: 1rem;
  }
  .form {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    align-items: flex-start;
    .inputDiv {
      position: relative;
      min-width: 95vw;
    }
    .inputDiv .label {
      position: absolute;
      top: 0;
      padding: 0.5rem 1rem;
      color: #cbcbcb;
      transition: 0.3s;
    }
    .inputDiv input:valid ~ .label,
    .inputDiv input:focus ~ .label {
      color: #6c25ff;
      transform: translateX(0.8rem) translateY(-0.5rem);
      padding: 0 0.8rem;
      font-size: 0.8rem;
      background-color: #f7f8f9;
      span {
        color: red;
      }
    }
    .input {
      min-width: 70%;
      border: 1px solid #cbcbcb;
      border-radius: 0.5rem;
      padding: 0.5rem 1rem;
      background-color: transparent;
      font-size: 0.9rem;
    }
    .input:focus {
      outline: none;
    }
    button {
      min-width: 40%;
      border: none;
      padding: 0.5rem;
      border-radius: 0.5rem;
    }
    .radioDiv {
      display: flex;
      flex-direction: column;
      gap: 0.5rem;
      .div {
        display: flex;
        gap: 2rem;
        padding-left: 0.5rem;
      }
    }
  }

  @media screen and (max-width: 576px) {
    padding: 1rem;
    .input,
    button {
      min-width: 90vw !important;
    }
  }
`;
