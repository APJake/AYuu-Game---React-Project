import "./App.css";
import { ToastContainer } from "react-toastify";
import NavBar from "./components/NavBar";
import Summary from "./components/Summary";
import { Routes, Route } from "react-router-dom";
import Login from "./components/Login";
import Register from "./components/Register";

const App = () => {
    console.log("h");
    return (
        <div className="App">
            <ToastContainer />
            {/* <NavBar /> */}
            <Routes>
                <Route path="/" element={<Summary />} />
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Register />} />
            </Routes>
        </div>
    );
};

export default App;
