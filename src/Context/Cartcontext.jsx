import { createContext,useReducer } from "react";

const ACTION={
    SET_CART_ITEM:"SET_CART_ITEM",
}

const initState={
    cartCount:0,
    cartTotal:0,
    cartItem:[],
    cartDiscount:0
};
const cartReducer=(state,action)=>{
    console.log(state,action);
    
    const{type,payload}=action;
    switch(type){
    case ACTION.SET_CART_ITEM:
        return {...state,...payload};
        default: 
        throw new Error(`unhandle type in cart reducer ${type}`)
        }
}

export const CartContext=createContext({
    cartCount:0,
    cartTotal:0,
    cartItem:[],
    cartDiscount:0,
    clearCart:()=>{},
    addItemtoCart:()=>{},
    removeItemtoCart:()=>{}
   
})
 const addCartItem=(cartItem,productToAdd)=>{
    const existingCartItem=cartItem.find((item)=>item.id===productToAdd.id);
    if(existingCartItem){
        return cartItem.map((item)=>item.id===productToAdd.id?{...item,quantity:item.quantity+1}:item)
    }
    return [...cartItem,{...productToAdd,quantity:1}]
 }
 const removeCartItem=(cartItem,productToRemove)=>{
    console.log(productToRemove);
    
   const existingCartItem=cartItem.find((item)=>item.id===productToRemove.id); 
   if(existingCartItem.quantity===1){
    return cartItem.filter((item)=>item.id!==productToRemove.id)
   }
    return cartItem.map((item)=>item.id===productToRemove.id?{...item,quantity:item.quantity-1}:item)

 }
 const removeProduct=(cartItem,removeItem)=>{
    return cartItem.filter((item)=>item.id!==removeItem.id)
 }
 
export const  CartProvider=({children})=>{
    const [{cartCount,cartTotal,cartItem,cartDiscount},dispatch] =useReducer(cartReducer,initState)
    const updateCartItemReducer=(cartItem)=>{
        const newCartCount=cartItem.reduce((acc,ele)=>acc+ele.quantity,0)
        const newCartTotal=cartItem.reduce((acc,ele)=>acc+ele.quantity*ele.price,0)
          const newCartDisCount=cartItem.reduce((acc,ele)=>acc+ele.quantity*ele.price,0)*10/100
        const payload={
            cartItem,
            cartDiscount:newCartDisCount,
            cartCount:newCartCount,
            cartTotal:newCartTotal
};
dispatch({type:"SET_CART_ITEM",payload})
}
const addItemtoCart=(productToAdd)=>{
    const newCartItem=addCartItem(cartItem,productToAdd)
    updateCartItemReducer(newCartItem)
}
const removeItemtoCart=(productToRemove)=>{
    const newCartItem=removeCartItem(cartItem,productToRemove)
    updateCartItemReducer(newCartItem)
}
const clearCart=(itemRemove)=>{
      const newCartItem=removeProduct(cartItem,itemRemove)
    updateCartItemReducer(newCartItem)

}
const value={
    clearCart,
    addItemtoCart,
    removeItemtoCart,
    cartDiscount,
    cartCount,
    cartItem,
    cartTotal
}
return <CartContext.Provider value={value}>
    {children}
</CartContext.Provider>
}