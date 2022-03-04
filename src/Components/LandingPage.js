import React from 'react'
import Assignment from '../Documents/assignment.pdf'

class LandingPage extends React.Component{


    render(){
        return(
            <div className = "landingPage">
            <h1>Welcome to My Robert Communications Network Coding Challenge!</h1>
            <p>You can download the assignment by clicking the link below to give yourself a better idea of what the goal was here!</p>
            <a href={Assignment} target = "_blank">
            Click To Download the Assignment!
            </a>

            <p>Please click on "Dashboard Page" to view the completed assignment. Once you do, you can see that the data is paginated with 20 results per page. The assignment said to include 100 users. 
            To the right, you will see 5 buttons numbered 1 - 5. Each click will call a new API link, adjusting to the page number you clicked on while maintaining the same seed to ensure no duplicate results.</p>

            <p>There is also a dymanic search bar under those buttons that allows you to find a user by either their first or last name. One of the issues I ran into was the UserCards getting duplicated when clearing out the search-bar. I fixed it by making sure that the filteredVal value in our state is set back to null. This fixed the issue I was having.</p>

            <p>There is a conditional JSX statement that will show the "See Your Recently Visited User" only if you have clicked on a user. It pops up on the top left side. I did some simple styling to get the UserCards to populate in a "not-so-ugly" way. Each UserCard has its own button that will land you to their profile page.</p>
            
            <p>I kept the profile page simple with the styling, but it is fully functional and does exactly what the assignment asked for. If you take a look at the URL, the ID it is using is the user's username. This is because some of the users had empty ID values, but the usernames were always populated and unique, therefore I used that. Figuring out how to find out how many days until the persons birthday was a challenge! You can see my code out for that in UserProfile.js </p>

            <p>I do have a couple bugs that I would love to get a chance to work through with one of the wonderful engineers at Robert Communications Network! The 1-5 page buttons need to be clicked twice to work. Google tells me it has something to do with state not being updated on the first event. However, if you use the search bar, the buttons magicallly work the first time you click them... Not sure why. Again, if you guys can find out where I'm going wrong with that, please let me know! I also have some styling issues when filtering through the search bar. The divs do not populate correctly sometimes, but that's more of a CSS issue than functionality.</p>

            <p>It was an honor to work on this project for you guys! I wish I had a couple more days to make it prettier, but I believe it looks alright for 1 and a half days worth of work! I believe in focusing on pure functionality prior to making a web-app look pretty. The biggest issue I faced was passing the data from the UserCard to the UserProfile. I was not able to pass the data through props as I normally would, so I designed a call-back function that holds the UserProfile data in Apps state. This actually worked out better for me as it saved to the stack, so it made designing the "Most Recent User" button much easier.</p>

            <p>Please reach out to discuss the code I've written for you! I left some comments on my code to make the flow of it more readable, but explaining it via Zoom would make it much easier to understand my thought process! Please feel free to reach out to me at 347-443-0435 or ghaxhaj@fordham.edu. Thank you again for the opportunity!</p>

            
            </div>
        )
    }
}

export default LandingPage