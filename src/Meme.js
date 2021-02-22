import React from "react";
import "./Meme.css";

const Meme = ({ id, image, firstLine, secondLine, deleteMeme }) => {
    function handleDelete() {
        deleteMeme(id);
    }
    return (
        <div className="col m-4">
            <div className="Meme">
                <img src={image} alt="meme"/>
                <span className="Meme-FirstLine">{firstLine}</span>
                <span className="Meme-SecondLine">{secondLine}</span>
                <button id="Meme_DeleteBtn" onClick={handleDelete}>
                    X
                </button>
            </div>
        </div>
    )
}

export default Meme;