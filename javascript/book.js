const booklist = document.querySelector('#listOfBooks');
const bookTitle = document.querySelector('#bookTitle');
const bookAuthor = document.querySelector('#bookAuthor');
const addBook = document.querySelector('form > button[type=button]');

function updateLocalStorage(data) {
  localStorage.setItem('data', JSON.stringify(data));
  console.log(data);
}

class BooksArray extends Array {
  static get() {
    return Array;
  }
  removeBook(id) {
    booksArray = booksArray.filter((ele, index) => index !== id);
  }
}

class Book {
  constructor(title, author) {
    this.title = title;
    this.author = author;
  }
  pushBook() {
    booksArray.push(this);
  }
}

let booksArray = new BooksArray(...(JSON.parse(localStorage.getItem('data')) || []));

const addUI = () => {
  updateLocalStorage(booksArray);
  booklist.innerHTML = booksArray
    .map(
      (ele, id) => `<li>
                     <h3>${ele.title}</h3>
                     <p>${ele.author}</p>
                     <button type="button"
                     onClick="removeUI(${id})">remove</button>
                     <hr>
                    </li>
  `,
    )
    .join('');
};

addUI();

/* eslint-disable */
const removeUI = (id) => {
  booksArray.removeBook(id);
  //  booksArray = booksArray.filter((ele, index) => index !== id);
  addUI();
};

addBook.addEventListener('click', (e) => {
  e.preventDefault();
  const bookObj = new Book(bookTitle.value, bookAuthor.value);
  bookObj.pushBook();
  addUI();
});
