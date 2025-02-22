const myLibrary = [];
const contentDiv = document.querySelector('.content');

function Book(author, title, pages, date, isRead) {
    this.author = author;
    this.title = title;
    this.pages = pages;
    this.date = date;
    this.isRead = isRead;
}

function addBookToLibrary(book) {
    myLibrary.push(book);
}

const testBook1 = new Book('JK Rowling', 'Harry Potter', '55432', '12/20/1994', false);
addBookToLibrary(testBook1);

const testBook2 = new Book('Unknown', 'Blood Meridian', '434343', '12/2/1878', true);
addBookToLibrary(testBook2);

// Loops Library
function displayBooks() {
    myLibrary.forEach((book, index) => {
        const bookCard = document.createElement('div');
        bookCard.classList.add('book-card');
        bookCard.innerHTML = `
            <h3>${book.title}</h3>
            <p>Author: ${book.author}</p>
            <p>Pages: ${book.pages}</p>
            <p>Published: ${book.date}</p>
            <p>Read: ${book.isRead ? 'Yes' : 'No'}</p>
        `
        contentDiv.appendChild(bookCard);
    });
}

// Button add book form
const newBookBtn = document.querySelector('.add');

newBookBtn.addEventListener('click', () => {
    contentDiv.innerHTML = `
    <div class="form-container">
        <form class="book-form" action method="POST">
            <label for="title">Title</label>
            <input type="text" name="title" id="title" required>

            <label for="author">Author</label>
            <input type="text" name="author" id="author" required>

            <label for="date">Publication Date</label>
            <input type="date" name="date" id="date"  required>
            
            <label for="pages">Pages</label>
            <input type="number" name="pages" id="pages" required>

            <fieldset>
                <legend>Have you read the book?</legend>
                <div>
                    <input type="radio" id="book_is_read" name="read_book" value="true" checked>
                    <label for="book_is_read">Yes</label>
                </div>
                <div>
                    <input type="radio" id="book_not_read" name="read_book" value="false">
                    <label for="book_not_read">Not yet</label>
                </div>
            </fieldset>
            <button type="submit" class="submit-button">Add New Book</button>
        </form>
    </div>
    `

    // Prevent default behavior of form 
    const form = document.querySelector('.book-form');
    form.addEventListener('submit', (event) => {
        event.preventDefault();
    });

    const submitBtn = document.querySelector('.submit-button');
    submitBtn.addEventListener('click', () => {
        displayBooks();
    }); 
});
