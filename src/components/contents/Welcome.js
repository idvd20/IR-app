import React from "react";
import { BsFillPinFill } from "react-icons/bs";
import { MdComment } from "react-icons/md";
import { RiPagesLine } from "react-icons/ri";

export default function Welcome() {
    return (
        <div className="content">
            <h2>WELCOME TO INVESTOR RELATION</h2>
            <div className="welcome">
                <div className="w1">
                    <img
                        src={require("../images/preview.png")}
                        alt="pre"
                        className="preview"
                    />
                </div>
                <div className="w2">
                    <div>
                        <button>Edit</button>
                        <button>Publish</button>
                    </div>
                    <div>
                        <button>Website Review</button>
                    </div>
                </div>
                <div className="w3">
                    <div>Activity</div>
                    <div>Recently Published</div>
                    <div className="wcontents">
                        <p>June 15, 2022 2:00 pm</p>
                        <p>Hello World</p>
                    </div>
                    <div className="wcontents">
                        <p>June 17, 2022 8:43 pm</p>
                        <p>A Goodnight message</p>
                    </div>
                    <div className="wcontents">
                        <p>June 29, 2022 11:20 pm</p>
                        <p>Take a bite</p>
                    </div>
                </div>
                <div className="w4">
                    <div>Quick Draft</div>
                    <form className="wdraft">
                        <label for="title">Title</label>
                        <input
                            type="text"
                            id="title"
                            name="title"
                            placeholder="Post Title"
                        />
                        <label for="content">Content</label>
                        <textarea
                            id="content"
                            name="content"
                            placeholder="What's on your mind?"
                        />
                        <input type="submit" value="Save" />
                    </form>
                </div>
                <div className="w5">
                    <div>Draft</div>
                    <div className="wcontents">
                        <p>Western Bites</p>
                        <button>publish</button>
                    </div>
                    <div className="wcontents">
                        <p>Hot or Cold on Winter Days</p>
                        <button>publish</button>
                    </div>
                    <div className="wcontents">
                        <p>Honey over Sugar for sweets</p>
                        <button>publish</button>
                    </div>
                </div>
                <div className="w6">
                    <div>Comments</div>
                    <div>Recent Comments</div>
                    <div className="wcontents">
                        <p>from @imHungry22 on Take a bite</p>
                    </div>
                    <div className="wcontents">
                        <p>from @sleepyHead001 on Say Goodnight My Love</p>
                    </div>
                    <div className="wcontents">
                        <p>from @imHungry22 on What to eat on a rainy day</p>
                    </div>
                </div>
                <div className="w7">
                    <div>Summary</div>
                    <div className="wsummary">
                        <BsFillPinFill />
                        <p>15 Posts</p>
                    </div>
                    <div className="wsummary">
                        <RiPagesLine />
                        <p>3 Pages</p>
                    </div>
                    <br />
                    <div className="wsummary">
                        <MdComment />
                        <p>7 Comments</p>
                    </div>
                </div>
            </div>
        </div>
    );
}
