import styled from "styled-components";
import profileImg from "../Images/profileImg.png";
import camImg from "../Images/cam.svg";
import { useEffect, useState } from "react";

const Account = () => {
  let [user, setUser] = useState({
    name: "",
    email: "",
  });

  //here we will be retrieving the current user from localstorage which has the user details 
  //by useEffect to minimize the re-renders
  //and didplaying user details in the ui
  useEffect(()=>{
    let currentUser = JSON.parse(localStorage.getItem("currentUser"));
    setUser({ ...currentUser })
  },[]) 

  return (
    <AccountContainer>
      <div className="settingDiv right">Account Settings</div>
      <div className="profileContainer">
        <div className="userDiv">
          <div className="profile">
            <div className="imgContainer left">
              <img src={profileImg} alt="img" className="profileImg" />
              <img src={camImg} alt="camImg" className="cam" />
            </div>
            <div className="userInfo">
              <h4 className="right">{user.name}</h4>
              <p className="right"> {user.email} </p>
            </div>
          </div>
          <div className="bottom">
            <p className="para bottom">
              Lorem Ipsum Dolor Sit Amet, Consetetur Sadipscing Elitr, Sed Diam
              Nonumy Eirmod Tempor Invidunt Ut Labore Et Dolore Magna Aliquyam
              Erat, Sed Diam
            </p>
          </div>
        </div>
      </div>
    </AccountContainer>
  );
};

export default Account;

let AccountContainer = styled.div`
  .settingDiv {
    padding: 1rem;
    position: sticky;
    top: 0;
    z-index: 2;
    background-color: white;
    font-weight: bold;
  }
  .profileContainer {
    background-color: #f7f8f9;
    min-height: 90vh;
    .userDiv {
      display: flex;
      padding: 1rem;
      gap: 1rem;
      flex-direction: column;
      .profile {
        display: flex;
        .imgContainer {
          .profileImg {
            width: 6rem;
          }
          .cam {
            width: 1.5rem;
            position: relative;
            bottom: 0.5rem;
            right: 1.3rem;
          }
        }
        .userInfo {
          display: flex;
          flex-direction: column;
          justify-content: center;
        }
      }
    }
  }
`;
