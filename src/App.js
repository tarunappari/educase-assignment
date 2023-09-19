import GlobalStyles from "./Styles/GlobalStyles";
import HomePage from "./Components/HomePage";
import Login from "./Components/Login";
import SignUp from "./Components/SignUp";
import Account from "./Components/Account";
import { Route, Routes } from "react-router-dom";
import { ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {


  return (
    <div>
      <ToastContainer />
      <GlobalStyles />
      <Routes>
        <Route path="/" element={<HomePage />}/>
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/account" element={<Account />} />
      </Routes>
    </div>
  );
}

export default App;
