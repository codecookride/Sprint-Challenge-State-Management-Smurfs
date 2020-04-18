import React, {useEffect} from "react";
import {connect} from "react-redux";
import Smurf from "./Smurfs"
import {fetchSmurf} from "../actions"

const SmurfList = (props) => {
    useEffect(() =>{
        props.fetchSmurf()
    },[])
    if (props.isFetching) {
        return <h2>Loading</h2>
    }

    return (
        <div>
            {props.error && <p>{props.error}</p>}
            {props.Smurfs.map((smurfs) =>(
               <Smurf key ={smurfs.id} smurf={smurfs}/> 
            ))}

        </div>
    )
}


const mapStateToProps = (state) => {
    console.log(state);
    return {
        Smurfs:state.Smurfs,
        isFetching: state.isfetching,
        error : state.error,
    }

}

export default connect (mapStateToProps, {fetchSmurf})(SmurfList)