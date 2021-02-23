import React from "react";

export default class UserBox extends React.Component {
  constructor() {
    super();
    this.state = {
      data: {}
    }
  }


  componentDidMount(){
    fetch("http://localhost:3000/users/", {
      crossDomain: true, 
      method: 'GET',
      headers: {'Content-Type': 'application/json'},
    })
    .then(res => res.json())
    .then(data => this.setState({data: data}))
  }

  userInfo() {
    const user = this.state.data
    if (user !== undefined) {
      return (
        <div className="profile-box">
          <img src={ `${user.avatarmedium}` } alt="no pic?" />
          <h3>{user.personaname}</h3>
        </div>
      );
    }
    else {
      return<h1>not returning anything</h1>
    }
     
  }
  

  render() {
    return (this.userInfo())
  }
}