import React, { useState } from "react";
import axios from "axios";
import "./App.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
// components
import DressSelector from "./components/DressSelector";

function App() {
    const [preview, setPreview] = useState("");
    const [search, setSearch] = useState("");

    const handleChange = (e) => {
        setSearch(e.target.value);
        console.log(search);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        axios.post("http://localhost:8000/getcloths", { data: search });
    };

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
                        <div class="input-group">
                            <div class="form-outline">
                                <input
                                    type="search"
                                    id="form1"
                                    onChange={handleChange}
                                    class="form-control"
                                />
                            </div>
                            <button
                                type="button"
                                class="btn btn-primary"
                                onClick={handleSubmit}
                            >
                                <FontAwesomeIcon icon={faMagnifyingGlass} />
                            </button>
                        </div>
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
