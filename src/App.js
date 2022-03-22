import "./App.css";
import { ToastContainer } from "react-toastify";
import NavBar from "./components/NavBar";
import Summary from "./components/Summary";
import { Routes, Route } from "react-router-dom";
import Login from "./components/Login";
import Register from "./components/Register";
import Dashboard from "./components/Dashboard";
import Ayuu from "./components/Ayuu";
import "./main.css";

const App = () => {
    return (
        <div className="App">
            <ToastContainer />
            <NavBar />
            <Routes>
                <Route path="" element={<Dashboard />} />
                <Route path="summary" element={<Summary />} />
                <Route path="login" element={<Login />} />
                <Route path="register" element={<Register />} />
                <Route path="ayuu">
                    <Route
                        path=":id"
                        element={<Ayuu />}
                        key={document.location.href}
                    />
                </Route>
            </Routes>
        </div>
    );
};

export default App;
