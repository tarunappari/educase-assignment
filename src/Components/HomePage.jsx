import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import image from "../Images/homeImage.webp";

const HomePage = () => {

  //in this component im navigating the user o login and signup pages based on 
  //clicking the buttons
  
  let navigate = useNavigate();

  return (
    <HomePageContainer>
      <div className="container">
        <div className="imageContainer bottom">
          <img src={image} alt="image" />
        </div>
        <div className="infoContainer top">
          <h1>Welcome to PopX</h1>
          <div>
            <p>Lorem ipsum dolor sit amet,</p>
            <p>consectetur adipiscing elit,</p>
          </div>
          <div className="btnContainer">
            <button className="createBtn" onClick={() => navigate("/signup")}>
              Create Account
            </button>
            <button className="loginBtn" onClick={() => navigate("/login")}>
              Already Registered? Login
            </button>
          </div>
        </div>
      </div>
    </HomePageContainer>
  );
};

export default HomePage;

let HomePageContainer = styled.div`
  .container {
    background-color: #f7f8f9;
    display: grid;
    grid-template-columns: 1fr 1fr;
    min-height: 100vh;
    min-width: 100vw;
    .imageContainer {
      display: flex;
      justify-content: center;
      align-items: center;
      img {
        width: 35rem;
      }
    }
    .infoContainer {
      display: flex;
      flex-direction: column;
      gap: 1.5rem;
      justify-content: center;
      padding-left: 3rem;
      .btnContainer {
        button {
          min-width: 60%;
          margin-bottom: 1.5rem;
          padding: 0.5rem 0;
          border-radius: 0.5rem;
          border: none;
          cursor: pointer;
        }
      }
    }
  }

  @media screen and (max-width: 576px) {
    .container {
      display: flex;
      flex-direction: column;
      .imageContainer {
        display: flex;
        justify-content: center;
        align-items: center;
        min-height: 60vh;
        img {
          width: 22rem;
        }
      }
      .infoContainer {
        display: flex;
        flex-direction: column;
        gap: 0.8rem;
        justify-content: center;
        .btnContainer {
          button {
            min-width: 80%;
            margin-bottom: 0.8rem;
            padding: 0.2rem 0;
            border-radius: 0.3rem;
            border: none;
          }
        }
      }
    }
  }
`;
