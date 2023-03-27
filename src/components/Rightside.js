import React from "react";
import "./Rightside.css";
import { useSelector } from "react-redux";

const Rightside = () => {
  const name = useSelector((state) => state.name);
  return (
    <div className="rightside">
      <div className="sugestion">
        <span>sugestion for {name}</span>
        <img
          src="https://images.unsplash.com/photo-1501004318641-b39e6451bec6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cGxhbnR8ZW58MHx8MHx8&w=1000&q=80"
          alt="sugestion"
          className="rightsideimg"
        />
      </div>
      <div className="popular">
        <span>popular on redux app</span>
        <img
          src="https://t3.ftcdn.net/jpg/02/43/31/64/360_F_243316414_0TS5HktGmnhnMUpvWrwSAneOB8cmIip8.jpg"
          alt="popular"
          className="rightsideimg"
        />
      </div>
      <div className="editor">
        <span>Editor's choice</span>
        <img
          src="https://images.unsplash.com/photo-1591123720164-de1348028a82?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8Z3VufGVufDB8fDB8fA%3D%3D&w=1000&q=80"
          alt="editor"
          className="rightsideimg"
        />
      </div>
    </div>
  );
};

export default Rightside;
