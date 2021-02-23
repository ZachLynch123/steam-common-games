import React from 'react';
import UserBox from "./UserBox";
import FriendsContainer from "./FriendsContainer";
// import steamApiKey from './keys/keys.js'

class App extends React.Component {
  
  constructor() {
    super();
    this.state = {
      data: [],
      group: []
    }
  }

  componentDidMount() {
    fetch(`http://localhost:3000/users/`, {
      crossDomain: true, 
      method: 'GET',
      headers: {'Content-Type': 'application/json'},
    })
    .then(res => res.json())
    .then(resJson => {      
    })
  }
  
   
    render() {
        return (
          <div>
            <UserBox /> 
            <FriendsContainer />
          </div>
        );
      }
}


export default App;
