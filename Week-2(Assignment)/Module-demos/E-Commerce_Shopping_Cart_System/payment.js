//payment.js - Payment processing
import { reduceStock } from './product.js';
import { getCartItems, getCartTotal, clearCart, updateQuantity } from './cart.js';
import { applyDiscount } from './discount.js';
import { get } from 'http';

// TODO: Implement these functions

export function processPayment(paymentMethod, couponCode = null) {
// 1. Get cart items and total
    console.log(getCartItems());
// 2. Apply discount if coupon provided
    let cartTotal=getCartTotal();
    let cartItems=getCartItems();
    let finalDetails;
    if(couponCode){
        finalDetails=applyDiscount(cartTotal,couponCode,cartItems);
        
    }
// 3. Validate payment method (card/upi/cod)
    let paymentValidity=validatePaymentMethod(paymentMethod);
// 4. Process payment (simulate)
    if(paymentValidity){
        console.log('Payment Successful');
    }
    else
        console.log('Payment Unsuccessful');
// 5. Reduce stock for all items
    for(let p of cartItems)
        reduceStock(p.id,p.quantity);
    
// 6. Clear cart
    clearCart();
// 7. Generate order summary
    let items = cartItems.map(item => item.name);
    return{
    orderId: generateOrderId(),
    items: cartItems.map(item => item.name),
    subtotal: cartTotal,
    discount: couponCode && finalDetails ? finalDetails.discount : 0,
    total: couponCode && finalDetails ? finalDetails.total : cartTotal,
    paymentMethod: paymentMethod,
    status: paymentValidity ? 'success' : 'failed',
    message: paymentValidity ? 'Payment processed successfully.' : 'Payment failed. Invalid payment method.'
    }
    }

export function validatePaymentMethod(method) {
// Check if method is valid (card/upi/cod)
const validMethods=['card','upi','cod'];
if(validMethods.includes[method])
    return true;
else
    return false;
}

function generateOrderId(){
// Generate random order ID
return 'ORD' + Date.now();
}

