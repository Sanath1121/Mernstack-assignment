// Available coupons

import {getProductById,getAllProducts,getProductsByCategory,searchProducts,reduceStock,checkStock} from './product.js';
import {clearCart,getCartTotal,getCartItems,addToCart} from './cart.js'


const coupons = {
'WELCOME10': { type: 'percentage', value: 10, minAmount: 1000 },
'FLAT500': { type: 'flat', value: 500, minAmount: 5000 },
'ELECTRONICS20': { type: 'percentage', value: 20, minAmount: 10000, category: 'electronics' }
};

// TODO: Implement these functions

export function validateCoupon(couponCode, cartTotal, cartItems) {
// 1. Check if coupon exists
    if(!coupons[couponCode]){
        return false;
    }
    else{
        if(coupons[couponCode].minAmount<=cartTotal)
        {
            return true;
        }
        else{
            return false;
        }
    }
// 2. Check minimum amount requirement
// 3. Check category requirement (if any)
// Return { valid: true/false, message: '...' }
}

export function calculateDiscount(couponCode, cartTotal) {
// Calculate discount amount based on coupon type
let discount=0;
if(!coupons[couponCode])
{
    return false;
}
else{
if((coupons[couponCode].type=='percentage') && coupons[couponCode].minAmount <= cartTotal)
    return (coupons[couponCode].value/100)*cartTotal;
else if((coupons[couponCode].type=='flat') && coupons[couponCode].minAmount <= cartTotal)
    return coupons[couponCode].value;
else
    return 0;
}
// Return discount amount
}

export function applyDiscount(cartTotal, couponCode, cartItems) {
    if(validateCoupon(couponCode,cartTotal,cartItems))
    {
        const discountAmount = calculateDiscount(couponCode,cartTotal);
        return { 
            originalTotal: cartTotal, 
            discount: discountAmount, 
            finalTotal: cartTotal - discountAmount,
            message: 'Coupon applied successfully'
            };
    }
    else {
        return { 
            originalTotal: cartTotal, 
            discount: 0, 
            finalTotal: cartTotal,
            message: 'Invalid or expired coupon'
        };
        // 1. Validate coupon
        // 2. If valid, calculate discount
        // 3. Return final amount and discount details
    }
}  