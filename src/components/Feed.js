import React from "react";
import "./Feed.css";
import { Avatar } from "@mui/material";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { update } from "./store/Store";
const Feed = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const user = useSelector((state) => state);
  const dispatch = useDispatch();
  const handleUpdate = (e) => {
    e.preventDefault();
    dispatch(update({ name, email }));
  };
  return (
    <div className="feed">
      <div className="feedtop">
        <span>Update your account</span>
        <p>
          Deleting account can not be undone <b>{user.name}!</b> You should
          conforim your password to delete the account.
        </p>
        <button className="deletebtn">Delete Account</button>
      </div>
      <hr className="feedhr"></hr>
      <div className="feedbottom">
        <span className="profile">profile picture</span>
        <div className="avatar">
          <Avatar />
          <span>Change</span>
        </div>
        <form>
          <label>UserName</label>
          <input
            type="text"
            placeholder={user.name}
            onChange={(e) => setName(e.target.value)}
          />
          <label>Email</label>
          <input
            type="email"
            placeholder={user.email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <label>Password</label>
          <input type="password" placeholder="123456" />
          <button className="updatebtn" onClick={handleUpdate}>
            Update
          </button>
        </form>
      </div>
    </div>
  );
};

export default Feed;
