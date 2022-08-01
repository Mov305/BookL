const booklist = document.querySelector('#listOfBooks');
const bookTitle = document.querySelector('#bookTitle');
const bookAuthor = document.querySelector('#bookAuthor');
const addBook = document.querySelector('form > button[type=button]');

let booksArray = [];

const addUI = () => {
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

/* eslint-disable */
const removeUI = (id) => {
  booksArray = booksArray.filter((ele, index) => index !== id);
  addUI();
};

addBook.addEventListener('click', (e) => {
  e.preventDefault();
  const bookObj = {
    title: bookTitle.value,
    author: bookAuthor.value,
  };
  booksArray.push(bookObj);
  addUI();
});
