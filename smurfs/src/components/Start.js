import React from "react"
import {Link} from "react-router-dom"

const Start = () => {
    return (
        <div className="start-container">
            <h1>Smurf!! Gotta love em.</h1>
            <p>Get started here</p>
            <Link to="/smurfs">
                <div className="start-button">Get Rates!</div>
            </Link>
        </div>
        
        
    )
}

export default Start