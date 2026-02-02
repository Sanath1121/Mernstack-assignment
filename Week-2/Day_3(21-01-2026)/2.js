// Problem Statement: Library Book Management System
// -------------------------------------------------
// Objective : Create a Book class and use it to manage a collection of books in a library.
// Requirements:
//   Create a Book class with the following:
//   Properties:
//       title (string)
//       author (string)
//       pages (number)
//       isAvailable (boolean, default: true)
//   Methods:
//       borrow() - Marks the book as not available
//       returnBook() - Marks the book as available
//       getInfo() - Returns a string with book details (e.g., "The Hobbit by J.R.R. Tolkien (310 pages)")
//       isLongBook() - Returns true if pages > 300, false otherwise
//   1. Create at least 5 book objects using the class:
//       Example: "Harry Potter", "1984", "The Hobbit", etc.
//   2. Perform the following operations:
//       i. Display info of all books
//       ii. Borrow 2 books and show their availability status
//       iii. Return 1 book and show updated status
//       iv. Count how many books are "long books" (more than 300 pages)
//       v. List all available books

class Book{
    title;
    author;
    pages;
    isAvailable=true;
constructor(title,author,pages,isAvailable){
    this.title=title;
    this.author=author;
    this.pages=pages;
    this.isAvailable=isAvailable;
}

borrow(){
    this.isAvailable=false;
}
returnBook(){
    this.isAvailable=true;
}
getInfo(){
    console.log("'",this.title,"/n","(",this.pages,"pages)","'");
}
isLongBook(){
    if (this.pages>100)
        return true;
    else
        return false;
}
}

let book1=new Book("Harry Potter","JK ",120,true);
let book2=new Book("1984","George Orwell",90,true);
let book3=new Book("The Hobbit","JRR Tolkien",150,true);
let book4=new Book("To Kill a Mockingbird","Harper Lee",80,true);
let book5=new Book("The Great Gatsby","F. Scott Fitzgerald",200,true);

book1.getInfo();
book2.getInfo();
book3.getInfo();
book4.getInfo();
book5.getInfo();

book1.borrow();
book3.borrow();
console.log(book1.isAvailable);
console.log(book3.isAvailable);

book1.returnBook();
console.log(book1.isAvailable);

let c=0;
[book1,book2,book3,book4,book5].filter(book=>book.isLongBook()).forEach(book=>c++);
console.log("Number of long books:",c);

a=[book1,book2,book3,book4,book5].filter(book=>book.isAvailable);
console.log(a);


