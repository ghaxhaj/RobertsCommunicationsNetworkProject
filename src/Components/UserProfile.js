import React from 'react'
import { Link } from 'react-router-dom';



class UserProfile extends React.Component{


    render(){

        let address = this.props[0].location.street.number + " " + this.props[0].location.street.name + ", " + this.props[0].location.city + ", " 
        + this.props[0].location.state + " " + this.props[0].location.postcode


        let year = this.props[0].dob.date.slice(0,4)
        let tempMonth = this.props[0].dob.date.slice(5,7)
        let month = null;

        do{
            if(tempMonth === '01'){
                month = 'January'
            }
            if(tempMonth === '02'){
                month = "Febuary"
            }
            if(tempMonth === '03'){
                month = "March"
            }
            if(tempMonth === '04'){
                month = "April"
            }
            if(tempMonth === '05'){
                month = "May"
            }
            if(tempMonth === '06'){
                month = "June"
            }
            if(tempMonth === '07'){
                month = "July"
            }
            if(tempMonth === '08'){
                month = "August"
            }
            if(tempMonth === '09'){
                month = "September"
            }
            if(tempMonth === '10'){
                month = "October"
            }
            if(tempMonth === '11'){
                month = "November"
            }
            if(tempMonth === '12'){
                month = "December"
            }
        }while(month == null)

        //Will use the tempMonth numerical value and put the String version of the month

        let day = this.props[0].dob.date.slice(8,10)
        let dob = month + " " + day + ", " + year


        let today = new Date()
        let birthdayYear = today.getFullYear()

        if(today.getMonth() > parseInt(tempMonth - 1)){
            birthdayYear++
        }

        //checks to see if we are already past the month of the birthday. Increases the birthday year by 1 so we do not calculate a negative value.
      
        if(today.getMonth() == parseInt(tempMonth - 1) && today.getDate() > parseInt(day)){
            birthdayYear++;
        }

        //Checks to see if we are in the same month of the birthday, but past the birth-day. Increases the birthday year by 1 so we do not calculate a negative value.

        let birthday = new Date(birthdayYear, parseInt(tempMonth - 1), parseInt(day))
        let dayInMiliseconds = 1000 * 60 * 60 * 24
        let daysRemaining = Math.round(Math.abs((birthday.getTime() - today.getTime())) / dayInMiliseconds)

        //Date() uses months as Arrays are indexed, so January == 00, Feb == 01... Therefore I needed to calculate it with 1 less than TempMonth as TempMonth is the literal numerical version of the month
        //Math.round() to round up, Math.abs() to get the absolute value, and the logic inside essentially calculates the miliseconds between the birhday and todays date, divided by 1 day in miliseconds so the value populates in days rather than miliseconds.


        return(
            <div>
            <h3>{this.props[0].name.first} {this.props[0].name.last}</h3>
            <p>Gender: {this.props[0].gender}</p>
            <p>Cell: {this.props[0].cell}</p>
            <p>Home: {this.props[0].phone}</p>
            <p>Email: {this.props[0].email}</p>
            <p>ID: {this.props[0].id.value}</p>
            <p>Address: {address} </p>
            <p>Date Of Birth: {dob}</p>
            <p>Days Until Birthday: {daysRemaining} days remaining</p>
            <p>Username: {this.props[0].login.username}</p>
            <p>Nationality: {this.props[0].nat}</p>
            <img src={this.props[0].picture.large}/>
            <br/>
            <Link to='/dashboard'>Click To Go Back To Dashboard</Link>
        </div>
        )
    }
}

export default UserProfile

