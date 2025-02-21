const myLibrary = [];

function Book(author, title, pages, date, isRead) {
    this.author = author;
    this.title = title;
    this.pages = pages;
    this.date = date;
    this.isRead = isRead;
}

function addBookToLibrary(author, title, pages, date, isRead) {
    const book = new Book(author, title, pages, date,  isRead);
    myLibrary.push(book);
}


// Button add book form
const contentDiv = document.querySelector('.content');
const newBookBtn = document.querySelector('.add');

newBookBtn.addEventListener('click', () => {
    contentDiv.innerHTML = `
    <div class="form-container">
        <form action method="POST">
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
});


// Archive
const archiveBtn = document.querySelector('.archive');
archiveBtn.addEventListener('click', () => [
    //
]);