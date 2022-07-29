import React from "react";

const YourPost = () => {
    return (
        <div className="content">
            <h2>Your Post</h2>
            <div className="yourpost">
                <div className="yp1">Post show at the most recent in Home</div>
                <div className="yp2">
                    <form>
                        <label for="posts"></label>
                        <select name="posts">
                            <option selected>10</option>
                        </select>
                    </form>
                </div>
                <div className="yp3">Highlight post show per Menu</div>
                <div className="yp4">
                    <form>
                        <label for="posts"></label>
                        <select name="posts">
                            <option selected>10</option>
                        </select>
                    </form>
                </div>
                <div className="yp5">
                    Highlight post duration
                    <p>
                        Note: if no new post, old post will remain Highlighted
                    </p>
                </div>
                <div className="yp6">
                    <form>
                        <input type="radio" name="date" value="1" />
                        <label for="date">Last 1 week</label>
                        <input type="radio" name="date" value="2" />
                        <label for="date">Last 2 weeks</label>
                        <input type="radio" name="date" value="3" />
                        <label for="date">Last 4 weeks</label>
                        <input type="radio" name="date" value="4" />
                        <label for="date">Last 2 months</label>
                    </form>
                </div>
                <div className="yp7">Visibility</div>
                <div className="yp8">
                    <form>
                        <input type="radio" name="visibility" value="1" />
                        <label for="visibility">
                            Allow search engine to index site
                        </label>
                        <input type="radio" name="visibility" value="2" />
                        <label for="visibility">
                            Discourage search engines to index site
                        </label>
                    </form>
                </div>
                <div className="yp9">
                    Related posts
                    <p>
                        Note: if Show Related content is selected - Header,
                        Entry Date, and context will be displayed
                    </p>
                </div>
                <div className="yp10">
                    <form>
                        <input type="radio" name="related" value="1" />
                        <label for="related">
                            Hide Related content after post
                        </label>
                        <input type="radio" name="related" value="2" />
                        <label for="related">
                            Show Related content after post
                        </label>
                    </form>
                </div>
                <div className="yp11">
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
                <div className="yp12">
                    Quicklinks
                    <div>
                        <p>Edit Set-up</p>
                        <p>Dashboard</p>
                    </div>
                </div>
                <div className="yp13">
                    <button>Cancel</button>
                    <button>Next</button>
                </div>
            </div>
        </div>
    );
};

export default YourPost;
