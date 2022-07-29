import React from "react";

const GeneralSettings = () => {
    return (
        <div className="content">
            <h2>General Settings</h2>
            <div className="genset">
                <div className="gs1">
                    <form>
                        <label for="timezone">Time Zone:</label>
                        <select name="timezone">
                            <option selected>Nothing Selected</option>
                        </select>
                    </form>
                </div>
                <div className="gs2">Date Format</div>
                <div className="gs3">
                    <form>
                        <input type="radio" name="date" value="1" />
                        <label for="date">2022-01-30</label>
                        <input type="radio" name="date" value="2" />
                        <label for="date">01-30-2022</label>
                        <input type="radio" name="date" value="3" />
                        <label for="date">30-01-2022</label>
                        <input type="radio" name="date" value="4" />
                        <label for="date">January 20, 2022</label>
                    </form>
                </div>
                <div className="gs4">Time Format</div>
                <div className="gs5">
                    <form>
                        <input type="radio" name="time" value="1" />
                        <label for="time">11:11 pm</label>
                        <input type="radio" name="time" value="2" />
                        <label for="time">11:11 PM</label>
                        <input type="radio" name="time" value="3" />
                        <label for="time">23:11</label>
                        <input type="radio" name="time" value="4" />
                        <label for="time">23:11:00</label>
                    </form>
                </div>
                <div className="gs6">
                    <form>
                        <label for="timezone">Week Starts</label>
                        <select name="timezone">
                            <option selected>Sunday</option>
                        </select>
                    </form>
                </div>
                <div className="gs7">
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
                <div className="gs8">
                    Quicklinks
                    <div>
                        <p>Edit Set-up</p>
                        <p>Dashboard</p>
                    </div>
                </div>
                <div className="gs9">
                    <button>Cancel</button>
                    <button>Next</button>
                </div>
            </div>
        </div>
    );
};

export default GeneralSettings;
