import { SET_CURRENT_ADMIN } from '../actions/types';
import isEmpty from '../validation/is-empty';

const initialState = {
    isAuthenticated: false,
    admin: {}
}

export default function(state = initialState, action ) {
    switch(action.type) {
        case SET_CURRENT_ADMIN:
            return {
                ...state,
                isAuthenticated: !isEmpty(action.payload),
                user: action.payload
            }
        default: 
            return state;
    }
}