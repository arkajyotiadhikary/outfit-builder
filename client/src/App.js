import React, { useState } from "react";
import "./App.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";
// components
import DressSelector from "./components/DressSelector";

function App() {
    const [preview, setPreview] = useState("");

    return (
        <div className="App">
            <div className="conetent d-flex justify-content-between">
                <div id="left-bar">
                    <div id="logo">
                        <h1>
                            O<span style={{ padding: "1rem" }}>U</span>B
                        </h1>
                    </div>
                    <div className="search">
                        <input className="form-control"></input>
                    </div>
                </div>
                <div id="preview">
                    <div id="preview-holder">
                        <img src={preview} />
                    </div>
                </div>
                <div id="right-bar">
                    <div id="top-bar">
                        <div id="profile-logo">
                            <FontAwesomeIcon icon={faUser} />
                        </div>
                    </div>
                    <DressSelector setPreview={setPreview} />
                </div>
            </div>
        </div>
    );
}

export default App;
