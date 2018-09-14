import * as actionTypes from './actionTypes';


let initState = {
    cartShow:false,
    products:[{'id':'0','path':'../images/apple.jpg','name':'apple','price':'4.99',"quantity":10,"type":"fruit"},
               {'id':'1','path':'../images/pear.jpg','name':'pear','price':'3.59',"quantity":8,"type":"fruit"},
               {'id':'2','path':'../images/watermelen.jpg','name':'watermelen','price':'6.99',"quantity":15,"type":"fruit"},
               {'id':'3','path':'../images/banana.jpg','name':'banana','price':'2.99',"quantity":5,"type":"fruit"},
               {'id':'4','path':'../images/tomato.jpg','name':'tomato','price':'3.99',"quantity":18,"type":"vegetable"},
               {'id':'5','path':'../images/celery.jpg','name':'celery','price':'4.29',"quantity":12,"type":"vegetable"},
               {'id':'6','path':'../images/onion.jpg','name':'onion','price':'1.99',"quantity":25,"type":"vegetable"},
               {'id':'7','path':'../images/carrot.jpg','name':'carrot','price':'2.99',"quantity":19,"type":"vegetable"}
            ],
    selectProducts:[{'id':'0','path':'../images/apple.jpg','name':'apple','price':'4.99',"quantity":10,"type":"fruit"},
                {'id':'1','path':'../images/pear.jpg','name':'pear','price':'3.59',"quantity":8,"type":"fruit"},
                {'id':'2','path':'../images/watermelen.jpg','name':'watermelen','price':'6.99',"quantity":15,"type":"fruit"},
                {'id':'3','path':'../images/banana.jpg','name':'banana','price':'2.99',"quantity":5,"type":"fruit"},
                {'id':'4','path':'../images/tomato.jpg','name':'tomato','price':'3.99',"quantity":18,"type":"vegetable"},
                {'id':'5','path':'../images/celery.jpg','name':'celery','price':'4.29',"quantity":12,"type":"vegetable"},
                {'id':'6','path':'../images/onion.jpg','name':'onion','price':'1.99',"quantity":25,"type":"vegetable"},
                {'id':'7','path':'../images/carrot.jpg','name':'carrot','price':'2.99',"quantity":19,"type":"vegetable"}
            ],
    carts:{}
    
}

export default function Reducer(state = initState,action){
   switch(action.type){
    case actionTypes.SEARCH : return  Object.assign({},state,{
       selectProducts: state.products.filter((item) => {
           return  action.text ? item.name === action.text : item.name;
       })
    });
    case actionTypes.ADD_TO_CART: return Object.assign({},state,{
        carts:Object.assign({},state.carts, addOrRemoveItem(action.item ,state.carts,1)),
        products:state.products.map((item) => {
            return   item.name === action.item.name ? {
                   id:item.id,
                   name:item.name,
                   path:item.path,
                   type:item.type,
                   price:item.price,
                   quantity:item.quantity > 0 ? item.quantity -1 : 0
            }:item
        }),
        selectProducts:state.selectProducts.map((item) => {
            return   item.name === action.item.name ? {
                   id:item.id,
                   name:item.name,
                   path:item.path,
                   type:item.type,
                   price:item.price,
                   quantity:item.quantity > 0 ? item.quantity -1 : 0
            }:item
        })
    });
    case actionTypes.REMOVE_FROM_CART : return Object.assign({},state,{
        carts:Object.assign({},state.carts, addOrRemoveItem(action.item ,state.carts,0)),
        products:state.products.map((item) => {
            return   item.name === action.item.name ? {
                   id:item.id,
                   name:item.name,
                   path:item.path,
                   type:item.type,
                   price:item.price,
                   quantity:action.item.quantity > 0 ? item.quantity +1 : item.quantity
            }:item
        }),
        selectProducts:state.selectProducts.map((item) => {
            return   item.name === action.item.name ? {
                   id:item.id,
                   name:item.name,
                   path:item.path,
                   type:item.type,
                   price:item.price,
                   quantity:action.item.quantity > 0 ? item.quantity +1 : item.quantity
            }:item
        })
    });
    default: return state;
   }
}



function addOrRemoveItem(item,carts,flag){
    let quantity;
    if(carts[item.name] && JSON.stringify(carts[item.name]) !== "{}"){
        quantity = flag ? carts[item.name].quantity + 1 : carts[item.name].quantity - 1;
    }else{
        quantity = 1;
    }

   let a = quantity ? {
        [item.name]:{
            name: item.name,
            quantity: quantity,
            price:item.price,
            path:item.path
        }
   } :{
    [item.name]:{}
   };
   return a;
}