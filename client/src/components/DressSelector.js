import React from "react";
import "./DressSelector.css";

const DressSelector = () => {
    return (
        <div id="dress-selector">
            <div className="product-img" id="head-top">
                <img src="https://m.media-amazon.com/images/I/519MXZGul4L._UL1500_.jpg" />
            </div>
            <div className="product-img" id="head-mid">
                <img src="https://m.media-amazon.com/images/I/61+THk53YIL._UL1500_.jpg" />
            </div>
            <div className="product-img" id="neck">
                <img src="https://m.media-amazon.com/images/I/71YjXtPHFuL._UY625_.jpg" />
            </div>
            <div className="product-img" id="body-up">
                <img src="https://m.media-amazon.com/images/I/71eBQwa4KXL._UL1500_.jpg" />
            </div>
            <div className="product-img" id="body-down">
                <img src="https://m.media-amazon.com/images/I/613aUOVUTyL._UL1440_.jpg" />
            </div>
            <div id="hands"></div>
            <div className="product-img" id="foot">
                <img src="https://m.media-amazon.com/images/I/615XsPWsj7L._UL1440_.jpg" />
            </div>
        </div>
    );
};

export default DressSelector;
