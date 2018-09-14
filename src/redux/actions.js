import * as actionTypes from './actionTypes'


export function addToCart(item) {
    return {
       type:actionTypes.ADD_TO_CART,
       item:item
    }
}

export function removeFromCart(item){
    return{
        type:actionTypes.REMOVE_FROM_CART,
        item:item
    }
}

export function search(text){
   return{
       type:actionTypes.SEARCH,
       text:text
   }
}
