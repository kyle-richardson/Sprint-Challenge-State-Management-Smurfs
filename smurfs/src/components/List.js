import React, {useEffect} from "react"
import {connect} from "react-redux"
import { getList } from "../actions"
import AddSmurfForm from "./AddSmurfForm"
import Smurf from "./Smurf"

// {
//     name: "Brainey",
//     age: 200,
//     height: "5cm",
//     id: 0
//   }
const List = ({smurfList, getList}) => {

    useEffect(()=>{
        getList()
        // eslint-disable-next-line
    },[])

    return(
        <div className="list-container">
            <h2>Smurfs currently on your island</h2>
            <div className="list">
                {smurfList.map(smurf=> {
                    return (
                        <Smurf key={smurf.id} smurf={smurf}/>
                    )
                })}
            </div>
            
            <AddSmurfForm />
        </div>
        
    )
}

const mapStateToProps = state => ({
    smurfList: state.smurfList
})

export default connect(mapStateToProps,{getList})(List);