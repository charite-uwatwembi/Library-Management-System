// Library Management System

const library = [];

// Function to add books to the library
const addBook = (title, author) => {
    const newBook = {
        title: title,
        author: author,
        availability: true,
        holder: '',
    };
    library.push(newBook);
    console.log(`Book '${title}' by ${author} has been added to the library.`);
};

// Function to display the list of available books
const displayAvailableBooks = () => {
    console.log('Available Books:');
    library.forEach(book => {
        if (book.availability) {
            console.log(`${book.title} by ${book.author}`);
        }
    });
};

// Function to borrow a book
const borrowBook = (title, borrower) => {
    const book = library.find(book => book.title === title);

    if (book) {
        if (book.availability) {
            book.availability = false;
            book.holder = borrower;
            console.log(`${borrower} has borrowed the book '${title}'.`);
        } else {
            console.log(`Sorry, the book '${title}' is currently unavailable.`);
        }
    } else {
        console.log(`Book '${title}' not found in the library.`);
    }
};

// Function to return a borrowed book
const returnBook = (title) => {
    const book = library.find(book => book.title === title);

    if (book) {
        if (!book.availability) {
            book.availability = true;
            book.holder = '';
            console.log(`The book '${title}' has been returned.`);
        } else {
            console.log(`This book is not currently borrowed.`);
        }
    } else {
        console.log(`Book '${title}' not found in the library.`);
    }
};

// Example usage:

// Adding books to the library
addBook('The Great Gatsby', 'F. Scott Fitzgerald');
addBook('To Kill a Mockingbird', 'Harper Lee');
addBook('1984', 'George Orwell');

// Displaying available books
displayAvailableBooks();

// Borrowing a book
borrowBook('The Great Gatsby', 'John Doe');

// Displaying available books after borrowing
displayAvailableBooks();

// Returning a borrowed book
returnBook('The Great Gatsby');

// Displaying available books after returning
displayAvailableBooks();
