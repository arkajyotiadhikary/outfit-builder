import React from "react";
import "./DressSelector.css";
import ImageHolder from "./ImageHolder";

const DressSelector = (props) => {
    const { setPreview } = props;
    const changePreview = (src) => {
        setPreview(src);
    };
    return (
        <div id="dress-selector">
            <div
                className="product-img"
                id="head-mid"
                onClick={() =>
                    changePreview(
                        "https://m.media-amazon.com/images/I/519MXZGul4L._UL1500_.jpg"
                    )
                }
            >
                <img src="https://m.media-amazon.com/images/I/519MXZGul4L._UL1500_.jpg" />
            </div>
            <div
                className="product-img"
                id="head-mid"
                onClick={() =>
                    changePreview(
                        "https://m.media-amazon.com/images/I/61+THk53YIL._UL1500_.jpg"
                    )
                }
            >
                <img src="https://m.media-amazon.com/images/I/61+THk53YIL._UL1500_.jpg" />
            </div>
            <div
                className="product-img"
                id="neck"
                onClick={() =>
                    changePreview(
                        "https://m.media-amazon.com/images/I/71YjXtPHFuL._UY625_.jpg"
                    )
                }
            >
                <img src="https://m.media-amazon.com/images/I/71YjXtPHFuL._UY625_.jpg" />
            </div>
            <div
                className="product-img"
                id="body-up"
                onClick={() =>
                    changePreview(
                        "https://m.media-amazon.com/images/I/71eBQwa4KXL._UL1500_.jpg"
                    )
                }
            >
                <img src="https://m.media-amazon.com/images/I/71eBQwa4KXL._UL1500_.jpg" />
            </div>
            <div
                className="product-img"
                id="body-down"
                onClick={() =>
                    changePreview(
                        "https://m.media-amazon.com/images/I/613aUOVUTyL._UL1440_.jpg"
                    )
                }
            >
                <img src="https://m.media-amazon.com/images/I/613aUOVUTyL._UL1440_.jpg" />
            </div>
            <div id="hands" onClick={() => changePreview("")}></div>
            <div
                className="product-img"
                id="foot"
                onClick={() =>
                    changePreview(
                        "https://m.media-amazon.com/images/I/615XsPWsj7L._UL1440_.jpg"
                    )
                }
            >
                <img src="https://m.media-amazon.com/images/I/615XsPWsj7L._UL1440_.jpg" />
            </div>
        </div>
    );
};

export default DressSelector;
