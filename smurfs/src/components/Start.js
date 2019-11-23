import React from "react"
import {Link} from "react-router-dom"

const Start = () => {
    return (
        <div className="start-container">
            <h1>Smurf!! Gotta love em.</h1>
            <p>Get started here</p>
            <Link to="/list">
                <div className="start-button">Get Smurf List!</div>
            </Link>
        </div>
        
        
    )
}

export default Start