// ASSIGNMENT 5: 
// -------------
// Bank Transaction Analyzer

// You are building a bank statement summary.
// Tasks:
//     1. filter() all credit transactions
//     2. map() to extract only transaction amounts
//     3. reduce() to calculate final account balance
//     4. find() the first debit transaction
//     5. findIndex() of transaction with amount 10000
// Test data:
const transactions = [
  { id: 1, type: "credit", amount: 5000 },
  { id: 2, type: "debit", amount: 2000 },
  { id: 3, type: "credit", amount: 10000 },
  { id: 4, type: "debit", amount: 3000 }
];

let result1=transactions.filter(ele=>ele.type=="credit");
console.log(result1);

let result2=transactions.map(ele=>ele.amount)
console.log(result2)

let result3=transactions.reduce((acc,ele)=>acc+ele.amount,0);
console.log(result3);

let result4=transactions.find(ele=>ele.type=="debit");
console.log(result4);

let result5=transactions.findIndex(ele=>ele.amount==10000);
console.log(result5);

