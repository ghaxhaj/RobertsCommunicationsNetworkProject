import React from 'react'
import UserCard from './UserCard'
import { Link, Route } from 'react-router-dom';

class DashboardPage extends React.Component{

    state = {
        users: [],
        currPage: 1,
        filterVal: null,
        clickedUser: {}
    }

    componentDidMount(){
        fetch(`https://randomuser.me/api/?page=${this.state.currPage}&nat=us&results=20&seed=abc`)
        .then(resp => resp.json())
        .then(users => this.setState({
            users: users.results
        }))
    }


renderUsers = () => {
    if(this.state.users.length > 0 && this.state.filterVal == null){
        return this.state.users.sort(function(a,b){
            let nameA = a.name.last.toUpperCase()
            let nameB = b.name.last.toUpperCase()

            if(nameA < nameB){
                return -1
            }

            if(nameA > nameB){
                return 1
            }

            return 0
        }).map(user => {
            return (<div><UserCard {...user} /><Link to={`/user/${user.login.username}`}><button value ={user.login.username}onClick={this.handleProfilePage}>Click Here!</button></Link></div>)
        })
    }
    if(this.state.filterVal != null){

        let filtFirstName = this.state.users.filter(user => 
        user.name.first.toUpperCase().includes(this.state.filterVal.toUpperCase()))

        let filtLastName = this.state.users.filter(user => 
        user.name.last.toUpperCase().includes(this.state.filterVal.toUpperCase()))

        let all = [...filtFirstName, ...filtLastName]

        return all.map(user => {
            return (<div><UserCard {...user} /><button value ={user.login.username}onClick={this.handleProfilePage}>Click Here!</button></div>)
        })
    }
}

filterResults = (event) => {
    event.preventDefault()
    this.setState({
        filterVal: event.target.value
    })
}


handleProfilePage = (event) => {
  
    let currentUser = this.state.users.filter(user => user.login.username === event.target.value)

    this.setState({
        currUser: currentUser
    })

    this.props.passedFunction(currentUser)

}


eventHandler = (event) => {
    this.setState({
        currPage: event.target.value
    })
    this.componentDidMount()
}

renderPageButtons = () => {
    return(
        <div>
        <button value='1' onClick={this.eventHandler}>1</button>
        <button value='2' onClick={this.eventHandler}>2</button>
        <button value='3' onClick={this.eventHandler}>3</button>
        <button value='4' onClick={this.eventHandler}>4</button>
        <button value='5' onClick={this.eventHandler}>5</button>
        </div>
    )
}



render(){
    console.log(this.props[0])
    return(
        <div>
        <input type="text" className="searchBar" onChange={this.filterResults} placeholder="Search for names.."/>
        {this.props[0] != null ? <Link to={`/user/${this.props[0].login.username}`}><button>See Your Recently Visited User</button></Link> : <></>}
        {this.renderUsers()}
        {this.renderPageButtons()}
        </div>
    )
}
}

export default DashboardPage


