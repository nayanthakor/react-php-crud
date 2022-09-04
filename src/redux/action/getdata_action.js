    import { GET_DATA_LOADING, GET_DATA_SUCCESS, GET_DATA_FAILED } from '../constant'
    import axios from 'axios'

    export const getData = () => async (dispatch)=> {
        try {
            // dispatch({
            //     type: GET_API_LOADING,
            //     payload: res.data
            // })
            dispatch({
                type: GET_API_SUCCESS,
                payload: res.data
            })
        } catch (error) {
            dispatch({
                type: GET_API_LOADING,
                payload: res.data
            })
        }
    }