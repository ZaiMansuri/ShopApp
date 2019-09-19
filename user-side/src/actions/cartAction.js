

export function addToCart(subcat, pimage, sub_name, description, price) {
  
  return {
    type: 'ADD_TO_CART',
    subcat: subcat,
    pimage: pimage,
    sub_name: sub_name,
    description: description,
    price: price
  };
}

export function incItem(subcat) {
  return {
    type: 'INC_ITEM',
    subcat: subcat,
   
  };
}
export function decItem(subcat) {
  return {
    type: 'DEC_ITEM',
    subcat: subcat,
  }
}

export function removeFromCart(subcat) {
  return {
    type: 'REMOVE_CART',
    subcat: subcat,
  }
}
