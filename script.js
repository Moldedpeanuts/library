const myLibrary = [];

function Book() {
    this.author = author;
    this.title = title;
    this.pages = pages;
    this.isRead = function () {
        // will add later
    };
}

function addBookToLibrary(author, title, pages, isRead) {
    const book = new Book(author, title, pages, isRead);
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
