import {getProductById,getAllProducts,getProductsByCategory,searchProducts,reduceStock,checkStock} from './product.js';

let cartItems = [];

export function addToCart(productId, quantity){
    console.log(getProductById(productId)); //Get product details.
    console.log(checkStock(productId, quantity)==true ? "In Stock" : "Out of Stock"); //Check Stock availability
    if(cartItems.find(item=>item.productId==productId)){
        cartItems.find(item=>item.productId==productId);
        return "Error";
    }
    else{
        cartItems.push(getProductById(productId))
        return "Success";
        }
}

export function removeFromCart(productId) {
    console.log(cartItems.find(product=>product.id==productId))
    return  cartItems.splice(cartItems.findIndex(item=>item.id==productId),1);
    // Remove product from cart
}

export function updateQuantity(productId, newQuantity){
    let n=cartItems.findIndex(product=>product.id==productId);
    if(n>-1)
        cartItems[n]={quantity:newQuantity};
}

export function getCartItems() {
return cartItems;// Return all cart items with product details
}

export function getCartTotal() {
let total=0;
total=cartItems.reduce((acc,c)=>acc+=(c.price*c.stock),0);// Calculate total price of all items in cart
return total;// Return total
}

export function clearCart() {
cartItems=null;
return cartItems;// Empty the cart
}

