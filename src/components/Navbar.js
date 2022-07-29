import React from "react";
import { FaUserCircle } from "react-icons/fa";
import { NavLink } from "react-router-dom";

const Navbar = () => {
    return (
        <div>
            <nav>
                <div className="logo">
                    <img src={require("./images/IR_logo.jpeg")} alt="" />
                    <div>
                        Investor<br></br>Relation
                    </div>
                </div>
                <ul>
                    <li>Home</li>
                    <li>TCMS Support</li>
                    <li>
                        <NavLink to="/" className="link">
                            <FaUserCircle className="images user" />
                            Hello, User
                        </NavLink>
                    </li>
                </ul>
            </nav>
        </div>
    );
};

export default Navbar;
