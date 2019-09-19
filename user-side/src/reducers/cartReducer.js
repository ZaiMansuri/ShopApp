import initialState from './intialstate';

export default function cart(state = initialState.cart, action) {
  switch (action.type) {
    case 'ADD_TO_CART': {
      const subcatToAdd = state.find(subcat => subcat._id === action.subcat._id);
      //If the subcat exists map through the state and update the object
      if (subcatToAdd) {
        return state.map(subcat => {
          //Compare to find the object
          return subcat._id === action.subcat._id
            ? // take the current quantity and increase by one
            Object.assign({}, action.subcat, { quantity: subcatToAdd.quantity + 1 })
            : subcat;

        });
      } else {
        //If we don't find the item, add it to the state, also add 1 in quantity
        return [...state, Object.assign({}, action.subcat, { quantity: 1 })];
      }}
      
    //If 'ADD' from 'cartActions.js', spread the previous state, and
    //add the new subcat. This will result in a new array with an added subcat
    case 'REMOVE_CART':
      //If 'REMOVE' from 'cartActions.js', return a new array without the
      //item with the ID we clicked on. filter returns a new array, don't
      //have to spread here
      return state.filter(i => i._id !== action.subcat._id);

    case 'INC_ITEM':
    
      if (action.subcat.quantity >= 0) {
        return state.map(subcat => {
          //Compare to find the object
          return subcat._id === action.subcat._id
            // take the current quantity and decrease by one
            ? Object.assign({}, action.subcat,
              { quantity: action.subcat.quantity + 1 })
            : subcat;

        });
      }
      break;
    case 'DEC_ITEM':
      if (action.subcat.quantity > 0) {
        return state.map(subcat => {
          //Compare to find the object
          return subcat._id === action.subcat._id
            // take the current quantity and decrease by one
            ? Object.assign({}, action.subcat,
              { quantity: action.subcat.quantity - 1 })
            : subcat;

        });
      } 

    break;
    default:
      return state;
  }
};