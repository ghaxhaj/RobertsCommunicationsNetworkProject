import React from 'react'
import { useHistory } from 'react-router-dom';
import UserProfile from "./UserProfile"



export default class UserCard extends React.Component{


  

    renderUser = () => {
        let url = `/user/${this.props.login.username}`
        return(
        <div>
            <h3>{this.props.name.first} {this.props.name.last}</h3>
            <p>Gender: {this.props.gender}</p>
            <p>Age: {this.props.dob.age}</p>
            <p>Username: {this.props.login.username}</p>
            <img src={this.props.picture.medium}/>
        </div>
        
        )
    }


    render(){
        return(
            <>
            {this.renderUser()}
            </>
        )
    }
}