import { GET_DATA_LOADING, GET_DATA_SUCCESS, GET_DATA_FAILED } from '../constant'

const getdata_reducer = (state = {}, action) => {
    switch(action.type){
        case GET_DATA_LOADING:
            return{...action.paylod}
        case GET_DATA_SUCCESS:
            return{...action.paylod}
        case GET_DATA_FAILED:
            return{...null}
        default:
            return{...state}
    }
}
export default getdata_reducer;