import { createGlobalStyle } from "styled-components";

//this file is used for styling part

const GlobalStyles = createGlobalStyle`
      *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: 'Poppins', sans-serif;
      }
      .createBtn {
          background-color: #6c25ff;
          color: #ffffff;
      }

      .createBtn:hover{
        background-color: #6c25ff4b;
          color: black;
      }

      .loginBtn {
          background-color: #6c25ff4b;
          color: black;
        }

        .loginBtn:hover{
          background-color: #6c25ff;
          color: #ffffff;
        }

      @keyframes leftAnimation {
        from{
          margin-left: -7rem;
          opacity: 0;
        }
        to{
          margin: 0;
          opacity: 1;
        }
      }

      @keyframes rightAnimation {
        from{
          margin-left: 7rem;
          opacity: 0;
        }
        to{
          margin: 0;
          opacity: 1;
        }
      }

      @keyframes topAnimation {
        from{
          margin-top: -7rem;
          opacity: 0;
        }
        to{
          margin: 0;
          opacity: 1;
        }
      }

      @keyframes bottomAnimation {
        from{
          margin-bottom: -7rem;
          opacity: 0;
        }
        to{
          margin: 0;
          opacity: 1;
        }
      }

    .left{
      animation: leftAnimation 2s ease;
    }
    .right{
      animation: rightAnimation 2s ease;
    }
    .top{
      animation: topAnimation 2s ease;
    }
    .bottom{
      animation: bottomAnimation 2s ease;
    }

    button{
      transition: all 0.3s;
    }
    button:hover{
      transform: translateX(-3px) translateY(-3px);
    }

    
    /* Styling the main scrollbar */
   ::-webkit-scrollbar {
        width: 0.3rem;
        height:0.3rem;  /* Width of the scrollbar */
    }

/* Styling the thumb part of the scrollbar */
::-webkit-scrollbar-thumb {
  background-color: gray;  /* Color of the scrollbar thumb */
  border-radius: 5px;      /* Rounded corners for the thumb */
}
`;

export default GlobalStyles;
