import React from "react";
import FriendList from "./FriendList";
import steamApiKey from '../keys/keys'
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
   const friends = {friends: [{steamid: 1}, {steamid: 2}]}
   this.props.fetchFriends(friends)
  }


 // fetch(`/ISteamUser/GetFriendList/v0001/?key=${steamApiKey}&steamid=76561198036778665&relationship=friend`, {
    //   crossDomain: true, 
    //   method: 'GET',
    //   headers: {'Content-Type': 'application/json'},
    // })
    // .then(res => res.json())
    // .then(resJson => {
    //   this.setState({data: resJson.friendslist.friends});
    // })


  render() {
    console.log(this.props.friends);
    debugger
    return (
      <div className="friends-container">
        <FriendList friends={this.state.data}/>
        
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