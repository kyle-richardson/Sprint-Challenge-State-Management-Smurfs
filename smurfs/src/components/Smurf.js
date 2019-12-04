import React from "react"
import {connect} from "react-redux"
import {handleChange, handleDelete, handleEdit, startEdit} from "../actions"

const Smurf = ({editSmurf, handleChange, isEditing, smurf, handleDelete, handleEdit, startEdit}) => {
    return (
        !isEditing ? 
        <div className="single-smurf">
            <p>Name: {smurf.name}</p>
            <p>Age: {smurf.age}</p>
            <p>Height: {smurf.height}</p>
            <div className="buttons-container">
                <div className="edit-button" name={smurf.id} onClick= {startEdit}>
                    Edit
                </div>
                <div className="delete-button" name={smurf.id} onClick={handleDelete}>
                    Banish
                </div>
            </div>
        </div>
        : editSmurf.id===smurf.id ?
        <form className="single-smurf" name={smurf.id} onSubmit={handleEdit}>
           Name: <input 
                className="name-box"
                type="text"
                placeholder="Name"
                name="name"
                value={editSmurf.name}
                onChange={handleChange}
            />
            Age: <input 
                className="age-box"
                type="text"
                placeholder="Age"
                name="age"
                value={editSmurf.age}
                onChange={handleChange}
            />
            Height: <input 
                className="height-box"
                type="text"
                placeholder="Height"
                name="height"
                value={editSmurf.height}
                onChange={handleChange}
            />
            <button>Save Changes</button>
        </form>
        : 
        <div className="single-smurf">
            <p>Name: {smurf.name}</p>
            <p>Age: {smurf.age}</p>
            <p>Height: {smurf.height}</p>
        </div>
    )
}

const mapStateToProps = state => ({
    smurfList: state.smurfList,
    isEditing: state.isEditing,
    editSmurf: state.editSmurf
})

export default connect(mapStateToProps,{handleChange, handleDelete, handleEdit, startEdit})(Smurf);