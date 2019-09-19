import { combineReducers } from 'redux';
import errorReducer from './errorReducer';
import authReducer from './authReducer';
import cartReducer from './cartReducer';

 const rootReducer = combineReducers({
    errors: errorReducer,
    auth: authReducer,
    cart: cartReducer
});
export default rootReducer;