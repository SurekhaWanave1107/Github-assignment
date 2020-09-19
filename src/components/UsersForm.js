import React, { Component } from "react";
import { connect } from "react-redux";
import icon from "../images/github-logo_icon-icons.com_73546.svg";
import "../CSS/UserForm.css";
import Users from "./Users";
import { fetchUser } from "../Actions/UserActions";

class UserForm extends Component {
  state = {
    userName: "",
    userData: "",
  };

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  searchUser = (event) => {
    event.preventDefault();

    this.props.fetchUser(this.state.userName);
  };

  render() {
    return (
      <div>
        <header>
          <img src={icon} className="github-logo" alt="github" />
          <h1>GitHub</h1>
        </header>
        <main>
          <h2>Enter the GitHub user</h2>
          <input
            type="text"
            name="userName"
            value={this.state.userName}
            onChange={this.handleChange}
          />
          <button onClick={this.searchUser}>Search</button>
        </main>

        <Users userData={this.props.userData} />
      </div>
    );
  }
}
const mapStateToProps = (state) => ({
  userData: state.userData,
});

export default connect(mapStateToProps, { fetchUser })(UserForm);
