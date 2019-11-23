import React from "react"
import {Link} from "react-router-dom"

const Start = () => {
    return (
        <div className="start-container">
            <h1>Smurfs!! Gotta love em.</h1>
            <p>Open your smurf island by clicking the button below.</p>
            <Link to="/list">
                <div className="start-button">Go to island</div>
            </Link>
        </div>
        
        
    )
}

export default Start