import React from 'react'



class UserProfile extends React.Component{
    state = {
        data: []
    }

    render(){
        console.log(this.props[0])
        return(
            <div>
            <h3>{this.props[0].name.first} {this.props[0].name.last}</h3>
            <p>Gender: {this.props[0].gender}</p>
            <p>Age: {this.props[0].dob.age}</p>
            <p>Username: {this.props[0].login.username}</p>
            <img src={this.props[0].picture.medium}/>
        </div>
        )
    }
}

export default UserProfile

