import React from "react";
// import ReactDOM from "react-dom/client";

function Blogcard(props) {
  return (
    <div className="card">
      <img
        src="https://picsum.photos/200"
        className="card-img-top"
        alt="Image"
      />
      <div className="card-body">
        <h5 className="card-title">{props.name}</h5>
        {/* <p className="card-text">{prop.color}</p> */}
        <a href="#" className="btn btn-primary">
          {/* {prop.Capacity} */}
        </a>
      </div>
    </div>
  );
}

export default Blogcard;
