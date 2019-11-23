import React from "react"
import {connect} from "react-redux"
import {handleDelete, handleEdit} from "../actions"

const Smurf = ({smurf, handleDelete, handleEdit}) => {
    return (
        <div className="single-smurf">
            <p>Name: {smurf.name}</p>
            <p>Age: {smurf.age}</p>
            <p>Height: {smurf.height}</p>
            <div className="buttons-container">
                <div className="edit-button" name={smurf.id} onCLick={handleEdit}>
                    Edit
                </div>
                <div className="delete-button" name={smurf.id} onClick={handleDelete}>
                    Banish
                </div>
            </div>
           
           
        </div>
    )
}

const mapStateToProps = state => ({
    smurfList: state.smurfList
})

export default connect(mapStateToProps,{handleDelete, handleEdit})(Smurf);