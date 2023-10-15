import { getBooksById } from './axios-fetch';

//const modal = document.querySelector('.modal');
//const modalOpen = document.querySelector('.modal-open');
//const marcupModal = document.querySelector('.marcup');
const body = document.body;
const backdrop = document.querySelector('.js-backdrop');
const modalClose = document.querySelector('.close-btn-modal');
const modalBtn = document.querySelector('.btn-add-local');
const addLocal = document.querySelector('.add-local');
const removeLocal = document.querySelector('.remove-local');
const p = document.querySelector('.text-modal');

const DATA_KEY = 'user-books'; // localStorage
const bookList = JSON.parse(localStorage.getItem(DATA_KEY)) ?? [];

const containerFromMarcup = document.querySelector('.add-books-backend');

// -------  Modal -----////

backdrop.addEventListener('click', onBackdropClick);
modalClose.addEventListener('click', onCloseModal);
window.addEventListener('keydown', onEscKeyPress);

function onCloseModal() {
  backdrop.classList.add('is-hidden');
  window.removeEventListener('keydown', onEscKeyPress);
  body.classList.remove('disasble-scroll');
}

function onBackdropClick(e) {
  if (e.currentTarget === e.target) {
    onCloseModal();
  }
}

function onEscKeyPress(e) {
  if (e.code === 'Escape') {
    onCloseModal();
  }
}

// ------- add Id Books ---- //

const listAddBook = document.querySelector('.list-books-by-category');
const listTopBook = document.querySelector('.container-best-books');

listAddBook.addEventListener('click', onClick);
listTopBook.addEventListener('click', onClick);

modalBtn.addEventListener('click', onAddLocal);

function onClick(evt) {
  backdrop.classList.remove('is-hidden');
  window.addEventListener('keydown', onEscKeyPress);
  body.classList.add('disasble-scroll');

  if (!evt.target.classList.contains('js-target')) {
    return;
  }
  const bookId =
    evt.target.dataset.bookId ?? evt.target.closest('li').dataset.bookId;
  const findIndexBookLocalStorage = bookList.findIndex(
    book => book._id === `${bookId}`
  );

  if (findIndexBookLocalStorage !== -1) {
    addLocal.hidden = true;
    removeLocal.hidden = false;
    p.hidden = false;
  } else {
    addLocal.hidden = false;
    removeLocal.hidden = true;
    p.hidden = true;
  }

  getBooksById(bookId)
    .then(data => {
      let imgBook = data.book_image;
      let nameBook = data.title;
      let description = data.description;
      let author = data.author;
      let id = data._id;
      let urlAmazon = data.buy_links[0].url;
      let urlShop = data.buy_links[1].url;

      containerFromMarcup.innerHTML = marcup(
        imgBook,
        nameBook,
        description,
        author,
        id,
        urlAmazon,
        urlShop
      );

      // console.log('###', data);
      bookList.push({ ...data });

      // console.log('***', id);
    })
    .catch(rej => console.log(rej));
}

function marcup(
  imgBook,
  nameBook,
  description,
  author,
  id,
  urlAmazon,
  urlShop
) {
  return `
  <div class="backend-box" data-book="${id}">
  <img class="img-book" src="${imgBook}" alt="${nameBook}" />
  <div>
 <h2 class="title-book">${nameBook}</h2>
 <h4 class="author-book">${author}</h4>
 <p class="descr-book">${description}</p>
 <ul class="modal-img-list">
        <li>
          <a href="${urlAmazon}" target="_blank" rel="noopener noreferrer nofollow">
            <picture>
              <source
                srcset="
                  ./img/shop-logo-amazon.png 1x,
                  ./img/shop-logo-amazon.png 2x
                "
              />
              
              <img
                class="img-modal-amazon hover-img"
                src="./img/shop-logo-amazon.png"
                alt="link-amazon"
              />
            </picture>
          </a>
        </li>
        <li>
          <a href="${urlShop}" target="_blank" rel="noopener noreferrer nofollow">
            <picture>
              
              <source
                srcset="./img/shop-logo.png 1x, ./img/shop-logo.png 2x"
              />
              <img
                class="img-modal-bookshop hover-img"
                src="./img/shop-logo.png"
                alt="link-amazon"
              />
            </picture>
          </a>
        </li>
      </ul>
 </div>
 </div>
  `;
}

//------ Local Storage -----//

function onAddLocal(evt) {
  const text = evt.target.textContent;
  const add = 'add to shopping list';

  const bookId = containerFromMarcup.childNodes[1].dataset.book;
  console.log(`ID book ====== ***`, bookId);

  if (text === add) {
    addLocal.hidden = false;
    removeLocal.hidden = true;
    p.hidden = true;

    localStorage.setItem(DATA_KEY, JSON.stringify(bookList));

    onCloseModal();
  }

  //  ======  ТУТ ПРОПИСАТИ ФУНКЦІЮ ПОШУКУ ТА ВИДАЛЕННЯ З
  // *********
}
