import React from "react";
import { FaBars } from "react-icons/fa";

import items from "./sidebardata";
import SidebarItems from "./SidebarItems";

const Sidebar = () => {
    return (
        <div className="sidebar">
            <div className="container">
                <div className="bars">
                    <FaBars />
                </div>
                <div className="title">
                    Content
                    <br />
                    Management
                </div>
                <div className="sidebar-menu">
                    {items.map((item, index) => (
                        <SidebarItems key={index} item={item} />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Sidebar;
