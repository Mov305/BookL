const booklist = document.querySelector('#listOfBooks');
const bookTitle = document.querySelector('#bookTitle');
const bookAuthor = document.querySelector('#bookAuthor');
const addBook = document.querySelector('form > button[type=button]');

function updateLocalStorage(data) {
  localStorage.setItem('data', JSON.stringify(data));
}

let booksArray = JSON.parse(localStorage.getItem('data')) || [];

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
