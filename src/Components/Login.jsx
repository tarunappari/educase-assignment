import { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { toast } from "react-toastify";
import EmailIcon from '@mui/icons-material/Email';
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';

const Login = () => {
  let navigate = useNavigate();

  // initialized user to collect user info login info 
  let [user, setUser] = useState({
    email: "",
    password: "",
    name: "",
  });
  let [visibilty,setvisibility] = useState(false)

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

  //this function is used for validation check
  function checker(event) {
    event.preventDefault();

    if (!user.email || !user.password) {
      toast.warn("All fields are mandatory", toastStyle)
      return;
    }

    // we are retreiving the users from localstorage if present else users will be false and 
    //user will be navigated to signup page
    let users = JSON.parse(localStorage.getItem("users")) || false;

    //if users array is present in localstorage then im checking if curent user is matching or not
    //by iterating over the users array
    if (users) {
      let flag = true;
      users.forEach((item) => {
        if (item.email === user.email) {
          flag = false;
          if (item.password === user.password) {

            //if email and password macthes then im saving the currentuser details and navigating him to 
            //account page else navigating signup page 
            //if password didnt matches the im throwing error that indicates incorrect password
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
            setUser({...user,password:''})
            return;
          }
        }
      })

      //if there is no email match in users array that means current user didnt have an account
      //so navigating to the signup page
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
            <div className="icon"><EmailIcon/></div>
          </div>
          <div className="inputDiv right">
            <input
              type={visibilty ? 'text' : 'password'}
              className="input"
              required="required"
              value={user.password}
              onChange={(e) => setUser({ ...user, password: e.target.value })}
            />
            <div className="label">
              <label>Password</label>
              <span>*</span>
            </div>
            <div className="icon" onClick={()=>setvisibility(prev => !prev)}>{visibilty ? <VisibilityIcon/> : <VisibilityOffIcon/>}</div>
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
  padding: 3rem;
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
    .icon{
      position: absolute;
      right: 24rem;
      top: 0.5rem;
      opacity: 0.8;
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
    padding: 1rem;
    .input,
    button {
      min-width: 90vw !important;
    }
    .icon{
      position: absolute;
      left: 19rem;
      top: 0;
    }
  }
`;
