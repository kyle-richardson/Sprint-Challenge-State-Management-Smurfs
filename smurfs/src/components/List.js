import React, {useEffect} from "react"
import {connect} from "react-redux"
import { getList } from "../actions"

const List = ({smurfList, getList}) => {

    useEffect(()=>{
        getList()
    },[])

    return(
        <div>
            <div>list to be here</div>
            {smurfList.map(smurf=> {
                return (
                    <div>{smurf}</div>
                )
            })}
        </div>
        
    )
}

const mapStateToProps = state => ({
    smurfList: state.smurfList
})

export default connect(mapStateToProps,{getList})(List);