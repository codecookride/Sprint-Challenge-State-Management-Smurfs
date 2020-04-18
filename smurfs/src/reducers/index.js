import {
    FETCHING,
    FETCH_SUCCESS,
    FAILURE,
    START_ADDING,
    SMURF_ADDED,
    FAIL
} from "../actions";

const initialState = {
    Smurfs: [],
    isFetching: false,
    error:""
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCHING:
            return{
                ...state,
                isFetching:true,

            }
        case FETCH_SUCCESS:
            console.log(action.payload)
            return {
                ...state,
                isFetching: false,
                error: "",
                Smurfs:action.payload

            };
            case FAILURE:
                return {
                    ...state,
                    isFetching:false,
                    error:action.payload
                };
            case START_ADDING:
                return {
                    ...state,
                    isFetching:true,
                    error:""

                };
                case SMURF_ADDED:
                    return{
                        ...state,
                        isFetching:false,
                        Smurfs:action.payload
                    };
                    case FAIL:
                        return{
                            ...state,
                            isFetching: false,
                            error:action.payload

                        }
                default:
                    return state;

    }
}

export default reducer;