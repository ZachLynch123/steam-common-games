import React from "react";
import Friend from "../components/Friend";
import { connect } from 'react-redux';
import fetchFriends from '../actions/fetchFriends';

class FriendsContainer extends React.Component {

  constructor(){
    super();
    this.state = {
      data: []
    }
  }


  componentDidMount() {
  //  const friends = {friends: [{steamid: 1}, {steamid: 2}]}
  //  this.props.fetchFriends(friends)
  fetch("http://localhost:3000/friends/", {
    crossDomain: true, 
    method: 'GET',
    headers: {'Content-Type': 'application/json'},
  })
  .then(res => res.json())
  .then(data => {
    this.setState({data: data})
  })
  }


 


  render() {
    // debugger
    const friends = this.state.data
    return (
      <div className="friends-container">
          {friends.map(friend => {
            return <Friend friend={friend}/>
          })}
      </div>
    );
  }
}


const mapStateToProps = state => {
  return {
    friends: state.friends
    
  }
}

// const mapDispatchToProps = dispatch => {
//   return {
//     fetchFriends: (friends) => dispatch({type: 'FETCH_FRIENDS', payload: friends})
//   }
// }



export default connect(mapStateToProps, {fetchFriends})(FriendsContainer);