# Book Library
This project is designed to demonstrate HTML, CSS and vanilla JavaScript skills with a practical application - a dynamic book library. The project utilizes the concept of OOP in JavaScript to manage book data, allowing for interactivity and efficient management of a list of books.


## Table of Contents
- [Project Overview](#project-overview)
- [Features](#features)
- [Technologies Used](#technologies-used)
- [How to Use](#how-to-use)
- [Getting Started](#getting-started)
- [Future Improvements](#future-improvements)
- [Acknowledgements](#acknowledgements)


## Project Overview

The Book Library allows users to:

- Add new books with details such as author, title, pages, and read status.
- Display a list of books stored in a dynamic array.
- Toggle the read status of books.
- Remove books from the list.

This project focuses on separating the logic for data storage and DOM manipulation, making it flexible for future enhancements, such as persisting data between page reloads.


## Features

- **Book Object Constructor** : Each book is represented by an object with properties.
- **Unique IDs** : Each book gets a unique identifier generated using `crypto.randomUUID()`.
- **Add New Book** : Users can add new books to the library using a form.
- **Display Books** : Books are displayed dynamically on the page with options to toggle the read status and remove books.
- **Toggle Read Status** : A button that allows users to toggle the "read" status of each book.


## Technologies Used

- **HTML** : Markup structure for the page.
- **Vanilla CSS** : Styling for the app.
- **Vanilla JavaScript** : Core functionality, including OOP programming for the book constructor, array manipulation, event handling and DOM manipulation.


## How to Use

1. Open the app in your browser.
2. Click on the **New Book** button to open a form.
3. Fill out the form with book details and click **Add Book** to add it to the library.
4. Books will appear in a list, each with a button to toggle the read status or remove the book altogether.
5. You can add, remove and toggle books freely to manage your online library.


## Getting Started

To get a copy of the project running on your local machine:

### Prerequisites

- A modern web browser.

### Clone the Repository

```bash
git clone https://github.com/moldedpeanuts/book-library.git
```

## Future Improvements

- **Data Persistence with Local Storage** : Implement localStorage to save books between page reloads.
- **Backend Integration** : Set up a backend to store book data persistently, allowing users to have their own account and access their book library from multiple devices.
- **Book Details Page**: Add a detailed view page for each book with a description, reviews and a rating system.
- **Mobile Responsiveness**: Improve the UI for better mobile usability.
- **User Authentication** : Allow users to create accounts and save their library data securely.


## Acknowledgements

- This project was created as part of The Odin Project's Full Stack JavaScript curriculum.
- Inspired by real-world applications that manage user-generated data and interactions, this project simulates a functional and maintainable library system.