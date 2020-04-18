import axios from "axios";
export const FETCHING = 'FETCHING';
export const FETCH_SUCCESS = 'FETCH_SUCCESS';
export const FAILURE = "FAILURE";

export const START_ADDING = "START_ADDING";
export const SMURF_ADDED = "SMURF_ADDED";
export const FAIL= "FAIL";

export const fetchSmurf = () => (dispatch)=> {
    dispatch({type: FETCHING});
    axios
        .get('http://localhost:3333/smurfs')
    
        .then((res) => 
        dispatch (
            {type: FETCH_SUCCESS, payload:res.data}))

        .catch ((err) => dispatch({
            type: FAILURE,
            Payload: err.response
        })
        );
}
export const addSmurf = (smurf) => dispatch => {
    dispatch({type:START_ADDING})
    axios.post('http://localhost:3333/smurfs', smurf).then((res) =>{
        dispatch({
            type:SMURF_ADDED, payload:res.data
        });
    })
    .catch((error) =>{
        dispatch({type: FAIL, payload:error.response})
    })
}