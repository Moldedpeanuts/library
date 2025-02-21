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
        <form method="POST">
            <label for="title">Title</label>
            <input type="text" name="title" id="title" required>
            <label for="author">Author</label>
            <input type="text" name="author" id="author" required>
            <label for="date">Publication Date</label>
            <input type="date" name="date" id="date"  required>
            <label for="pages">Pages</label>
            <input type="number" name="pages" id="pages" required>
        </form>
    </div>
    `
});
