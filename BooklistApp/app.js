//Book class: represents books
class Book{
    constructor(title, author, isbn) {
        this.title = title;
        this.author = author
        this.isbn = isbn
    }
}

//UI class: Handle UI tasks
class UI{
    static displayBooks(){
       const storedbooks = [
           {
               title: 'Book One',
               author: 'John Doe',
               isbn: '3434434'
           },
           {
               title: 'Book Two',
               author: 'Jane Doe',
               isbn: '45545'
           }
       ];

       const books = storedbooks;

       books.forEach((book) => UI.addBookToList(book));
    }

    static addBookToList(book){
        const list = document.querySelector('#book-list');
        const row = document.createElement(('tr'));
        row.innerHTML = `
            <td>${book.title}</td>
            <td>${book.author}</td>
            <td>${book.isbn}</td>
            <td><a href="#" class="btn btn-danger btn-sm delete">X</a></td>
        `;
        list.appendChild(row);
    }
}

//Store class: Handles storage

//Event: display books
document.addEventListener('DOMContentLoaded', UI.displayBooks);

//Event: Add a book

//Event: Remove a Book