// // Created: 06-Jan-26

// ASSIGNMENT 1:
// -------------
// You are building a shopping cart summary for an e-commerce website.

// Tasks:
    
// Use filter() to get only inStock products
// Use map() to create a new array with:  { name, totalPrice }
// Use reduce() to calculate grand total cart value
// Use find() to get details of "Mouse"
// Use findIndex() to find the position of "Keyboard"

// Test Data : 
const cart = [
  { id: 101, name: "Laptop", price: 60000, quantity: 1, inStock: true },
  { id: 102, name: "Mouse", price: 800, quantity: 2, inStock: true },
  { id: 103, name: "Keyboard", price: 1500, quantity: 1, inStock: false },
  { id: 104, name: "Monitor", price: 12000, quantity: 1, inStock: true }
];

let inStockProduct=cart.filter(element=>element.inStock==true);
console.log(inStockProduct);

let result1=inStockProduct.map(element=>{
return {name:element.name, totalPrice:element.price*element.quantity}
});
console.log(result1);

let result2=cart.reduce((acc,ele)=>acc+(ele.quantity*ele.price),0)
console.log(result2)

let result3=cart.find(ele=>ele.name=="Mouse");
console.log(result3);

let found=cart.findIndex(ele=>ele.name=="Keyboard")
console.log(found)

