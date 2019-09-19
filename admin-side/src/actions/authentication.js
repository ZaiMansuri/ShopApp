import axios from 'axios';
import { GET_ERRORS, SET_CURRENT_ADMIN } from './types';
import setAuthToken from '../setAuthToken';
import jwt_decode from 'jwt-decode';

export const registerAdmin = (admin, history) => dispatch => {
    axios.post('/api/admin/signup', admin)
            .then(res => history.push('/signin'))
            .catch(err => {
                dispatch({
                    type: GET_ERRORS,
                    payload: err.response.data
                });
            });
}

export const loginAdmin = (admin) => dispatch => {
    axios.post('/api/admin/signin', admin)
            .then(res => {
                const { token } = res.data;
                localStorage.setItem('jwtToken', token);
                setAuthToken(token);
                const decoded = jwt_decode(token);
                dispatch(setCurrentAdmin(decoded));
            })
            .catch(err => {
                dispatch({
                    type: GET_ERRORS,
                    payload: err.response.data
                });
            });
}

export const setCurrentAdmin = decoded => {
    return {
        type: SET_CURRENT_ADMIN,
        payload: decoded
    }
}

export const logoutAdmin = (history) => dispatch => {
    localStorage.removeItem('jwtToken');
    setAuthToken(false);
    dispatch(setCurrentAdmin({}));
    history.push('/signin')
}