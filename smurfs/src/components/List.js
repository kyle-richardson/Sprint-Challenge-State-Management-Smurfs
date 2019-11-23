import React from "react"

const List = props => {
    return(
        <div>list to be here</div>
    )
}

const mapStateToProps = state => ({
    ...state
})

export default connect(mapStateToProps,{})(List);