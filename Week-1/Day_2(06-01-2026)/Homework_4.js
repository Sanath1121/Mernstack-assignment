// ASSIGNMENT 4: 
// ------------
// Movie Streaming Platform

// You are working on a movie recommendation system.
// Tasks:
//     1. filter() only "Sci-Fi" movies
//     2. map() to return:
//             "Inception (8.8)"
//     3. reduce() to find average movie rating
//     4. find() movie "Joker"
//     5. findIndex() of "Avengers"
// Test data:
const movies = [
  { id: 1, title: "Inception", genre: "Sci-Fi", rating: 8.8 },
  { id: 2, title: "Joker", genre: "Drama", rating: 8.4 },
  { id: 3, title: "Avengers", genre: "Action", rating: 8.0 },
  { id: 4, title: "Interstellar", genre: "Sci-Fi", rating: 8.6 }
];

let result1=movies.filter(ele=>ele.genre=="Sci-Fi");
console.log(result1)

// let result2=movies.map(ele=>`${ele.title} (${ele.rating})`);
// console.log(result2)

let result3=movies.reduce((acc,ele)=>acc+ele.rating,0);
result3/=movies.length;
console.log(result3);

let result4=movies.find(ele=>ele=='Joker');
console.log(result4)

let result5=movies.findIndex(ele=>ele.title=='Avengers');
console.log(result5)