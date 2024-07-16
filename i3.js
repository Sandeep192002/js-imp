const books = [
    { title: "The Hobbit", author: "J.R.R. Tolkien", alreadyRead: true },
    { title: "The Lord of the Rings", author: "J.R.R. Tolkien", alreadyRead: false },
    { title: "Pride and Prejudice", author: "Jane Austen", alreadyRead: true },
    { title: "To Kill a Mockingbird", author: "Harper Lee", alreadyRead: false },
  ];
  
  // Iterate through books and display title and author
  for (const book of books) {
    console.log('${book.title} by ${book.author}');
  }
  
  // Iterate through books and display reading status
  