import React from 'react'
import UserCard from './UserCard'
import { Link } from 'react-router-dom';
import '../styles.css'

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

    //This API is designed to reupdate state when the page is changed. By keeping the seed the same, it knows not to duplicate users when switching pages


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
            //Sorts users by last name 
        }).map(user => {
            return (<div><UserCard {...user} /><Link to={`/user/${user.login.username}`}><button className = "clickForProfileButton" value ={user.login.username}onClick={this.handleProfilePage}>Click For Profile!</button></Link></div>)
            //returns a UserCard for each user along with a Click for Profile button that helps call on the callBack function we passed down to DashboardPage. 
        })
    }
    if(this.state.filterVal != null){

        if(this.state.filterVal.length < 1){
            this.setState({
                filterVal: null
            })
        }
        //This checks to see if the user backspaced and emptied the field in the search bar. If it did, it sets state to null and repopulates the page with the current page number

        let filtFirstName = this.state.users.filter(user => 
        user.name.first.toUpperCase().includes(this.state.filterVal.toUpperCase()))

        let filtLastName = this.state.users.filter(user => 
        user.name.last.toUpperCase().includes(this.state.filterVal.toUpperCase()))

        let all = [...filtFirstName, ...filtLastName]
        //this is to handle the weird API format. It had first and last name as two separate attriubtes. I did this to combine all possible filtured values in an array.
        return all.map(user => {
            return (<div><UserCard {...user} /><Link to={`/user/${user.login.username}`}><button className = "clickForProfileButton" value ={user.login.username}onClick={this.handleProfilePage}>Click For Profile!</button></Link></div>)
        })
    }
}

filterResults = (event) => {
    event.preventDefault()
    this.setState({
        filterVal: event.target.value
    })
}

//This function simply updates this.state.filterVal with whatever the user types into the searchbar


handleProfilePage = (event) => {
  
    let currentUser = this.state.users.filter(user => user.login.username === event.target.value)
    //This fines the clicked user by username (it is the most unique attribute of the dataset)
    this.setState({
        currUser: currentUser
    })

    this.props.passedFunction(currentUser)
    //This uses the currentUser and sends it to the App component using the callback function
}


eventHandler = (event) => {
    event.preventDefault()
    this.setState({
        currPage: event.target.value
    })

    this.componentDidMount()
}

//This function handles the changing of pages. I had to recall componentDidMount() to get the API to update correctly. There must be a better way to do this, but this is what I got! 

renderPageButtons = () => {
    return(
        <div className = 'dashBoardButtons'>
        <button className = 'dashButtons' value='1' onClick={this.eventHandler}>1</button>
        <button className = 'dashButtons' value='2' onClick={this.eventHandler}>2</button>
        <button className = 'dashButtons' value='3' onClick={this.eventHandler}>3</button>
        <button className = 'dashButtons' value='4' onClick={this.eventHandler}>4</button>
        <button className = 'dashButtons' value='5' onClick={this.eventHandler}>5</button>
        </div>
    )
}

//Simple function called to render the page buttons



render(){
    //console.log(this.props[0])
    return(
        <>
        <input type="text" className="searchBar" onChange={this.filterResults} placeholder="Search for names.."/>
        <div className = "mainDashboardDiv">
        {this.renderUsers()}
        </div>
        {this.renderPageButtons()}
        {this.props[0] != null ? <Link to={`/user/${this.props[0].login.username}`}><button className="recentButton">See Your Recently Visited User</button></Link> : <></>}
        </>
    )
}
}

//Input field used for the searchBar. Used a conditional JSX statement that will only render the See Your Recently Visited User button if User from app (passed through props and it is the first element in props, so we access it by this.props[0]) is not Null. 


export default DashboardPage


