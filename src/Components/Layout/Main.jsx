import { Outlet } from "react-router-dom";
import Navbar from "../Navbar/Navbar";

const Main = () => {
    return (
        <div>
            <div className="container mx-auto">
                <Navbar></Navbar>
            </div>
            <Outlet></Outlet>
            
        </div>
    );
};

export default Main;