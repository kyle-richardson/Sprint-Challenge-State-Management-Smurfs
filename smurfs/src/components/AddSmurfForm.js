import React from "react"
import {addSmurf, handleChange} from "../actions"
import {connect} from "react-redux"


const AddSmurfForm = ({addSmurf, newSmurf, handleChange}) => {
    return (
        <div className="form-container">
            <h2>Add a new smurf to your island!</h2>
            <form className="add-form" onSubmit={addSmurf}>
                <input 
                    className="name-box"
                    type="text"
                    placeholder="Name"
                    name="name"
                    value={newSmurf.name}
                    onChange={handleChange}
                />
                <input 
                    className="age-box"
                    type="text"
                    placeholder="Age"
                    name="age"
                    value={newSmurf.age}
                    onChange={handleChange}
                />
                <input 
                    className="height-box"
                    type="text"
                    placeholder="Height"
                    name="height"
                    value={newSmurf.height}
                    onChange={handleChange}
                />
                <button className="add-button">Add Smurf</button>
            </form>
            
        </div>
        
    )
}

const mapStateToProps = state => ({
    newSmurf: state.newSmurf
})

export default connect(mapStateToProps,{addSmurf, handleChange})(AddSmurfForm);