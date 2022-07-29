import { FaSitemap } from "react-icons/fa";
import { IoIosCreate, IoIosBrush } from "react-icons/io";
import { IoSettings } from "react-icons/io5";
import { MdCategory, MdUpdate } from "react-icons/md";

const items = [
    {
        path: "/create",
        name: "Create",
        icon: <IoIosCreate />,
    },
    {
        path: "/sitesetup",
        name: "Site Set-up",
        icon: <FaSitemap />,
    },
    {
        name: "Settings",
        icon: <IoSettings />,
        childrens: [
            {
                path: "/settings/generalsettings",
                name: "General Settings",
            },
            {
                path: "/settings/yourpost",
                name: "Your Post",
            },
            {
                path: "/settings/reader",
                name: "Reader's Perception",
            },
            {
                path: "/settings/socialmedia",
                name: "Social Media",
            },
        ],
    },
    {
        path: "/theme",
        name: "Theme",
        icon: <IoIosBrush />,
    },
    {
        path: "/category",
        name: "Category",
        icon: <MdCategory />,
    },
    {
        path: "/update",
        name: "Update",
        icon: <MdUpdate />,
    },
];
export default items;
