import React from "react";
import { IoClose } from "react-icons/io5";
import { IoIosAddCircle } from "react-icons/io";

const SiteSetup = () => {
    return (
        <div className="content">
            <h2>Step 1: Site Setup</h2>
            <div className="ssu">
                <div className="ssu1">
                    <label for="webname">Website Name:</label>
                    <input
                        type="text"
                        name="webname"
                        placeholder="Give your website a name."
                        size="65"
                    />
                </div>
                <div className="ssu2">
                    <label for="weblogo">Website Logo:</label>
                    <input
                        type="text"
                        name="weblogo"
                        placeholder="Upload a Logo.(accepts .png format and max size of 5MB only)"
                        size="65"
                    />
                </div>
                <div className="ssu3">
                    Default Site Menu
                    <div>
                        <input type="radio" name="pricechart" />
                        <label for="pricechart">Share Price Chart</label>
                        <IoClose />
                    </div>
                    <div>
                        <input type="radio" name="pricecalc" />
                        <label for="pricecalc">Share Price Calculator</label>
                        <IoClose />
                    </div>
                    <div>
                        <input type="radio" name="calendar" />
                        <label for="calendar">Calendar</label>
                        <IoClose />
                    </div>
                    Click <IoClose /> to remove
                </div>
                <div className="ssu4">
                    Create Site Menu
                    <div>
                        <input
                            type="text"
                            name="sitemenu"
                            placeholder="Name of the Menu."
                        />
                        <button>
                            <IoIosAddCircle />
                        </button>
                    </div>
                </div>
                <div className="ssu5">
                    Site Set-up
                    <div>
                        <input type="radio" name="namesite" />
                        <label for="namesite">Name Your Site</label>
                    </div>
                    <div>
                        <input type="radio" name="sitemenu" />
                        <label for="sitemenu">Create Site Menu</label>
                    </div>
                </div>
                <div className="ssu6">Quicklinks</div>
                <div className="ssu7">
                    <button>Cancel</button>
                    <button>Next</button>
                </div>
            </div>
        </div>
    );
};

export default SiteSetup;
