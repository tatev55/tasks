// 1. Create a User object that contains properties for name, age, and email. Include methods to greet (returns a greeting message) and updateEmail.

// const user = {
//     name: 'Jon',
//     age: 30,
//     email: 'tatevmargaryan555@gmail.com',
//     greet: function(){
//         return `Hello ${this.name}`
//     },

//     updateEmail: function(email){
//         this.email = email;
//     }
    
// };

// console.log(user.greet());
// user.updateEmail("newalice@example.com");
// console.log(user.email);


// 2. Create an array of workers objects with properties for name and age. Write a function that takes an age as a parameter and returns an array of users older than that age


// const workers = [
//     { name: "Alice", age: 25 },
//     { name: "Bob", age: 30 },
//     { name: "Charlie", age: 22 },
//     { name: "Max", age: 47 }
//   ];
  
//   function filterUsersByAge(minAge) {
//     return workers.filter(obj => obj.age > minAge);
//   };

// const olderUsers = filterUsersByAge(24);
// console.log(olderUsers);

//3. Modify the book objects to include a pagesRead property. Write a function that calculates and returns the total number of pages read from all books.
  

// const collection = [
//     { title: "The Great Gatsby", pages: 180, pagesRead: 100 },
//     { title: "1984", pages: 328, pagesRead: 50 },
//     { title: "To Kill a Mockingbird", pages: 281, pagesRead: 281 }
//   ];
  
//   function countTotalPagesRead() {
//     return  collection.reduce((acc, book) => acc + book.pagesRead, 0);
    
//   }
  
//   const totalRead = countTotalPagesRead();
//   console.log(totalRead);


//4. Create an array of book objects, where each book has properties such as title, author, pages, and isRead. 
//    Write a function to add a new book and a function to list all books with their read status.


// const library = [
//     {
//         title: 'The Count of Monte Cristo',
//         author: 'Alexandre Dumas',
//         pages: 1276 ,
//         read: 'yes'

//     }, 
    
//     {
//         title: ' Jane Eyre',
//         author: 'Charlotte Bronte',
//         pages: 1847 ,
//         read: 'yes'
//     }, 

//     {
//         title: 'One Hundred Years of Solitude',
//         author: 'Gabriel Garcia Markes',
//         pages: 422 ,
//         read: 'yes'
//     }, 

//     {
//         title: 'The Picture of Dorian Gray',
//         author: 'Oscar Wilde',
//         pages:  336 ,
//         read: 'yes'

//     }, 

//     {
//         title: 'Pride and Prejudice',
//         author: 'Jane Austen',
//         pages:  416 ,
//         read: 'yes'

//     }
// ];


// function addNewBook(title, author, pages, read) {
//     const addBook = {
//         title: title,
//         author: author,
//         pages: pages,
//         read: read
//     };
    
//     library.push(addBook);
// }

// function listBooks() {
//     library.forEach(book => {
//         console.log(`Title: ${book.title}, Author: ${book.author}, Pages: ${book.pages}, Read: ${book.read}`);
//     });
// }


// addNewBook("The Great Gatsby", "F. Scott Fitzgerald", 180, 'yes');
// addNewBook("1984", "George Orwell", 328, 'no');
// console.log(listBooks());



//.........................................................
// 5. Extra: Grouping Library Functions into One Object

//structure

// Example usage:
// librarySystem.books // book[]
// librarySystem.listBooks(); :print in console: 'Title: string, Author: string, Pages: number, Read: true/false || yes/no'
// librarySystem.addNewBook(book); // :newBook
// librarySystem.getBookById(bookId); // :book | undefined
// librarySystem.updateBook(bookId, book); // :book
// librarySystem.deleteBook(bookId); // :true/false
// librarySystem.getBooksByAvailableStatus(status); // :book[] returns all available or unavailable books according to the filter

// Book Entity (shape of a book)
// book {
//   title: string;
//   author: string;
//   year: number;
//   isAvailable: boolean;
// }


//solution

// const books = [
//     {
//         id: 1,
//         title: 'The Picture of Dorian Gray',
//         author: 'Oscar Wilde',
//         pages: 336,
//         isAvailable: true
//     },  

//     {
//         id: 2,
//         title: 'Pride and Prejudice',
//         author: 'Jane Austen',
//         pages:  416 ,
//         isAvailable: true   
//     },

//     {   
//         id: 3,
//         title: ' Jane Eyre',
//         author: 'Charlotte Bronte',
//         pages: 1847 ,
//         isAvailable: false
//     }

// ]



// const librarySystem = {
//     books: books,
//     listBooks() {
//         this.books.forEach(book => {
//             console.log(`Title: ${book.title}, Author: ${book.author}, Pages: ${book.pages},isAvailable : ${book.isAvailable} `);
//         });
        
//     },
//     addNewBook(book) {
//         if (book.title && book.author){
//             this.books.push(book);
//             return book;
//         } 
//         console.log("Book title and author are required!");
//         return undefined;
        
//     },
//     getBookById(bookId) {
//         return this.books.find(book => book.id === bookId);
//     },
//     updateBook(bookId, book) {
//         for (let i = 0; i < this.books.length; i++) {
//             if (this.books[i].id === bookId) { 
//                 this.books[i] = { ...this.books[i], ...book }; 
//                 return this.books[i]; 
//             }
//         }
//         return undefined; 
//     },
//     deleteBook(bookId) {
//         for (let i = 0; i < this.books.length; i++) {
//             if (this.books[i].id === bookId) { 
//                 this.books.splice(i, 1); 
//                 return true; 
//             }
//         }
//         return false; 
//     },
//     getBooksByAvailableStatus(status) {
//         return this.books.filter(book => book.isAvailable === status);
//     }

// };




// console.log(librarySystem);
// librarySystem.listBooks();
// const newBook = librarySystem.addNewBook({id: 4, title: "The Great Gatsby", author: 'F. Scott Fitzgerald', pages: 180, read: true});
// console.log(newBook);
// console.log(librarySystem.getBookById(2));
// const updateBook = librarySystem.updateBook(3, {id: 4, title: "1984", author: 'George Orwell', pages: 328, read: false});
// console.log(librarySystem);
// console(librarySystem.deleteBook(3)); //true
// console.log(librarySystem.getBooksByAvailableStatus(false))


