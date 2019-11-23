import React from "react"
import {addSmurf, handleChange} from "../actions"
import {connect} from "react-redux"


const AddSmurfForm = ({addSmurf, newSmurf, handleChange}) => {
    return (
        <div className="form-container">
            <form onSubmit={addSmurf}>
                <input 
                    type="text"
                    placeholder="Name"
                    name="name"
                    value={newSmurf.name}
                    onChange={handleChange}
                />
                <input 
                    type="text"
                    placeholder="age"
                    name="age"
                    value={newSmurf.age}
                    onChange={handleChange}
                />
                <input 
                    type="text"
                    placeholder="height"
                    name="height"
                    value={newSmurf.height}
                    onChange={handleChange}
                />
                <button>Add Smurf</button>
            </form>
            
        </div>
        
    )
}

const mapStateToProps = state => ({
    newSmurf: state.newSmurf
})

export default connect(mapStateToProps,{addSmurf, handleChange})(AddSmurfForm);