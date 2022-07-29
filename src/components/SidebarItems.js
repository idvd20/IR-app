import React, { useState } from "react";
import { NavLink } from "react-router-dom";

const SidebarItems = ({ item }) => {
    const [close, setClose] = useState(true);

    if (item.childrens) {
        return (
            <div>
                <div
                    onClick={() => setClose(!close)}
                    className={close ? "link" : "active link"}
                >
                    {item.icon}
                    {item.name}
                </div>
                <div
                    className={close ? "close link" : "link"}
                    onClick={() => setClose(close)}
                >
                    {item.childrens.map((child, index) => (
                        <div>
                            <NavLink
                                to={child.path}
                                onClick={() => setClose(!close)}
                                className="link submenu"
                                key={index}
                            >
                                {child.icon}
                                {child.name}
                            </NavLink>
                        </div>
                    ))}
                </div>
            </div>
        );
    } else {
        return (
            <div>
                <NavLink to={item.path} className="link menu">
                    {item.icon}
                    {item.name}
                </NavLink>
            </div>
        );
    }
};

export default SidebarItems;
