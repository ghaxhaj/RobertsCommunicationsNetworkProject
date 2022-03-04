import React from 'react'
import '../styles.css'



export default class UserCard extends React.Component{

    renderUser = () => {
        return(
        <div className = "userCard">
            <div className = "userCardContainer">
            <h3 className = "userCardName">{this.props.name.first} {this.props.name.last}</h3>
            <img src={this.props.picture.medium} className = "userCardImg"/>
            </div>
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