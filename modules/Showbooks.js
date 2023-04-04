class BookShelf {
  constructor(title, author) {
    this.title = title;
    this.author = author;
  }
}
let bookArray = [];
const bookList = document.querySelector('.book-list');

class ShowBooks {
  static addBooks(title, author) {
    const bookTitle = title;
    const bookAuthor = author;
    if (bookTitle !== '' && bookAuthor !== '') {
      const arrayObj = new BookShelf(bookTitle, bookAuthor);
      bookArray.push(arrayObj);
      localStorage.setItem('Books', JSON.stringify(bookArray));
    }
  }

  static remove(selector) {
    const bookIndex = selector;
    bookArray.splice(bookIndex, 1);
    localStorage.setItem('Books', JSON.stringify(bookArray));
    ShowBooks.showBook();
  }

  static showBook() {
    const books = ShowBooks.checkLocalStorage();
    const rmv = document.querySelector('.remove');

    let showBook = '';
    books.forEach((book, i) => {
      showBook += `
        <div class="book-space">
          <div class="book-des">
            <p>"${book.title}"</p>
            <p>by</p>
            <p>${book.author}</p>
          </div>
          <button class="remove" data-index="${i}">Remove</button>
        </div> 
      `;
    });
    bookList.innerHTML = showBook;
    const removeButtons = document.querySelectorAll('.remove');
    removeButtons.forEach((button) => {
      button.addEventListener('click', () => {
        const { index } = button.dataset;
        ShowBooks.remove(index);
      });
    });
  }

  static checkLocalStorage() {
    if (localStorage.getItem('Books') == null) {
      bookArray = [];
    } else {
      bookArray = JSON.parse(localStorage.getItem('Books'));
    }
    return bookArray;
  }
}

export { BookShelf, ShowBooks };
