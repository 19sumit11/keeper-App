import React from "react";

const Note = (props) => {

return (
    <div className="note">
        <div>
        <h1>{props.title}</h1>
        <p>{props.content}</p>
        </div>


       
    </div>
)}

export default Note