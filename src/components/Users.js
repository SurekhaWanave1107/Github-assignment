import React from "react";
import "../CSS/Users.css";

function Users(props) {
  const {
    avatar_url,
    name,
    followers,
    following,
    public_repos,
  } = props.userData.userData;

  return (
    <div className="user">
      <div className="user-image">
        <img src={avatar_url} className="avatarUrl" alt="" />
        <h2>{name}</h2>
      </div>
      <div className="user-details">
        <h3>Followers: {followers}</h3>
        <h3>Following: {following}</h3>
        <h3>Repositories: {public_repos}</h3>
      </div>
    </div>
  );
}
export default Users;
