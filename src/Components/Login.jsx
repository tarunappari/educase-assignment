import { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { toast } from "react-toastify";

const Login = () => {
  let navigate = useNavigate();

  let [user, setUser] = useState({
    email: "",
    password: "",
    name: "",
  });

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

  function checker(event) {
    event.preventDefault();

    if (!user.email || !user.password) {
      toast.warn("All fields are mandatory", toastStyle)
      return;
    }

    let users = JSON.parse(localStorage.getItem("users")) || false;

    if (users) {
      let flag = true;
      users.forEach((item) => {
        if (item.email === user.email) {
          flag = false;
          if (item.password === user.password) {
            let currentUser = {
              name: item.name,
              email: item.email,
            };
            localStorage.setItem("currentUser", JSON.stringify(currentUser));
            toast.success("Logged in", toastStyle);
            setTimeout(() => {
              navigate("/account");
            }, 1500);
            return;
          } else {
            toast.error("Incorrect Password", toastStyle);
            return;
          }
        }
      });
      if (flag) {
        toast.error("You didnt have an account Signup please", toastStyle);
        setTimeout(() => {
          navigate("/signup");
        }, 1500);
        return;
      }
    } else {
      toast.error("You didnt have an account Signup please", toastStyle);
      setTimeout(() => {
        navigate("/signup");
      }, 1500);
      return;
    }
  }

  return (
    <LoginContainer>
      <div className="container">
        <h1 className="left">Signin to your PopX account</h1>
        <div className="left">
          <p>Lorem ipsum dolor sit amet,</p>
          <p>consectetur adipiscing elit,</p>
        </div>
        <form className="form">
          <div className="inputDiv left">
            <input
              type="text"
              className="input"
              required="required"
              value={user.email}
              onChange={(e) => setUser({ ...user, email: e.target.value })}
            />
            <div className="label">
              <label>Email</label>
              <span>*</span>
            </div>
          </div>
          <div className="inputDiv right">
            <input
              type="password"
              className="input"
              required="required"
              value={user.password}
              onChange={(e) => setUser({ ...user, password: e.target.value })}
            />
            <div className="label">
              <label>Password</label>
              <span>*</span>
            </div>
          </div>
          <button onClick={checker} className="createBtn right">
            Login
          </button>
        </form>
      </div>
    </LoginContainer>
  );
};

export default Login;

let LoginContainer = styled.div`
  background-color: #f7f8f9;
  min-height: 100vh;
  min-width: 100vw;
  padding: 2rem;
  .container {
    display: flex;
    flex-direction: column;
    gap: 1rem;
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
  }

  @media screen and (max-width: 576px) {
    .input,
    button {
      min-width: 90% !important;
    }
  }
`;
