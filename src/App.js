import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import GeneralSettings from "./components/contents/GeneralSettings";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import SiteSetup from "./components/contents/SiteSetup";
import Welcome from "./components/contents/Welcome";
import Create from "./components/contents/Create";
import Theme from "./components/contents/Theme";
import Category from "./components/contents/Category";
import Update from "./components/contents/Update";
import YourPost from "./components/contents/YourPost";
import Reader from "./components/contents/Reader";
import SocialMedia from "./components/contents/SocialMedia";

function App() {
    return (
        <div className="App">
            <BrowserRouter>
                <Navbar />
                <Sidebar />
                <Routes>
                    <Route path="/" element={<Welcome />} />
                    <Route path="/create" element={<Create />} />
                    <Route
                        path="/settings/generalsettings"
                        element={<GeneralSettings />}
                    />
                    <Route path="/settings/yourpost" element={<YourPost />} />
                    <Route path="/settings/reader" element={<Reader />} />
                    <Route
                        path="/settings/socialmedia"
                        element={<SocialMedia />}
                    />
                    <Route path="/theme" element={<Theme />} />
                    <Route path="/sitesetup" element={<SiteSetup />} />
                    <Route path="/category" element={<Category />} />
                    <Route path="/update" element={<Update />} />
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;
