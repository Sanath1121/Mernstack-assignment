// Initial data:

// 🎯 Tasks
//   1. Add ₹500 to the total
//   2. Add ₹1200 to the total
//   3. Apply a ₹200 discount
//   4. Add 18% GST
//   5. Print the final bill amount

let totalAmount = 0;

totalAmount+=500;
console.log('$',totalAmount)

totalAmount+=1200;
console.log('$',totalAmount)

totalAmount-=200;
console.log('$',totalAmount)

totalAmount+=(totalAmount*0.18)
console.log('$',totalAmount)

console.log('Final bill $',totalAmount)

