// Hands-On 1: Shallow Copy (Controlled Mutation Use Case)
// -------------------------------------------------------
// 🧪 Given Data:
//               const user = {
//                 id: 101,
//                 name: "Ravi",
//                 preferences: {
//                   theme: "dark",
//                   language: "en"
//                 }
//               };

// 🎯 Task
//     1. Create a shallow copy of user
//     2. Change:
//           i. name in the copied object
//           ii. preferences.theme in the copied object
//           iii .Log both original and copied objects
//           iv. Observe what changes and what doesn’t











// Hands-On 2: Deep Copy (Isolation & Safety Use Case)
// ---------------------------------------------------

// 🧪 Given Data:
//                 const order = {
//                   orderId: "ORD1001",
//                   customer: {
//                     name: "Anita",
//                     address: {
//                       city: "Hyderabad",
//                       pincode: 500085
//                     }
//                   },
//                   items: [
//                     { product: "Laptop", price: 70000 }
//                   ]
//                 };

// 🎯 Task:
//       1. Create a deep copy of order
//       2. Modify in copied object:
//             i. customer.address.city
//             ii. items[0].price
//             iii. Verify original object remains unchanged

const order = {
    orderId: "ORD1001",
    customer: {
        name: "Anita",
        address: {
            city: "Hyderabad",
            pincode: 500085
            }
        },
    items: [
    { product: "Laptop", price: 70000 }
    ]
};

/* Shallow copy creates a new object and copies the values of the original object's properties to
the new object. However, it does not create copies of nested objects within the original object.
This means that changes made to nested objects in the shallow copy will reflect in the original
object as well. */
Shallow Copy
console.log("Before any copy:\n", order);
const shallowCopy=Object.assign({},order);
shallowCopy.orderId="1002";
shallowCopy.customer.name="Sanath";
shallowCopy.customer.address.city="Mumbai";
console.log("After shallow copy:\n"); 
console.log(`Original`); //orderID same to 1001, name change to sanath, state to Mumbai
console.log(order)
console.log("Shallow copy"); //orderID change to 1002, name change to sanath, state to mumbai
console.log(shallowCopy)
// /* Deep copy creates a new object and recursively copies all properties of the original object,
// including nested objects, to ensure complete isolation. This means that any changes made to the
// deep copy will not affect the original object, providing a safe and independent copy of the data. */
// Deep Copy
console.log("Before deep copy:\n", order);
const deepCopy=JSON.parse(JSON.stringify(order));
deepCopy.orderId="1003";
deepCopy.customer.name="Jaswanth";
deepCopy.customer.address.city="Delhi";
console.log("After deep copy:\n");
console.log("Original:"); //orderID same as 1001, name same as sanath, state is same as mumbai
console.log(order);
console.log("Deep copy"); //orderID change to 1003, name change to Jaswanth, state change to delhi
console.log(deepCopy);


