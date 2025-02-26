import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

import '@fortawesome/fontawesome-free/css/all.min.css';

import { getImages } from './js/pixabay-api.js';
import { renderGallery } from './js/render-functions.js';

const refs = {
  searchForm: document.querySelector('.form'),
  gallery: document.querySelector('.gallery'),
  loader: document.querySelector('.loader'),
  loadMoreBtn: document.querySelector('.load-more-btn'),
};

let searchQuery;
let page = 1;

refs.searchForm.addEventListener('submit', submitFormHandler);
refs.loadMoreBtn.addEventListener('click', loadMoreHandler);

async function submitFormHandler(event) {
  event.preventDefault();

  refs.gallery.innerHTML = '';
  page = 1;
  hideLoadMoreBtn();

  searchQuery = event.target.elements.searchQuery.value.trim();

  if (searchQuery === '') {
    iziToast.error({
      title: 'Error',
      message: 'Your query can not be empty!',
      backgroundColor: '#ef4040',
      titleColor: '#fff',
      messageColor: '#fff',
      titleSize: '16px',
      titleLineHeight: '1.5',
      messageSize: '16px',
      messageLineHeight: '1.5',
      icon: 'fa fa-exclamation-circle',
      iconColor: '#fff',
      position: 'topRight',
    });

    return;
  } else {
    try {
      showLoader();
      const images = await getImages(searchQuery, page);
      if (images.hits.length === 0) {
        hideLoader();
        iziToast.info({
          title: 'Info',
          message:
            'Sorry, there are no images matching your search query. Please try again!',
          backgroundColor: '#ef4040',
          maxWidth: 500,
          titleColor: '#fff',
          messageColor: '#fff',
          titleSize: '16px',
          titleLineHeight: '1.5',
          messageSize: '16px',
          messageLineHeight: '1.5',
          icon: 'fa fa-exclamation-circle',
          iconColor: '#fff',
          position: 'topRight',
        });

        return;
      } else {
        page += 1;
        renderGallery(images.hits, refs.gallery);
        checkLoadMoreBtnStatus(images.total);
      }
      hideLoader();
    } catch (error) {
      console.log(error);
    }
  }
  event.target.reset();
}

async function loadMoreHandler() {
  try {
    showLoader();
    const images = await getImages(searchQuery, page);
    page += 1;

    checkLoadMoreBtnStatus(images.total);
    renderGallery(images.hits, refs.gallery);
    hideLoader();
    scrollPage();
  } catch (error) {
    console.log(error);
  }
}

function showLoadMoreBtn() {
  refs.loadMoreBtn.classList.remove('visually-hidden');
}

function hideLoadMoreBtn() {
  refs.loadMoreBtn.classList.add('visually-hidden');
}

function checkLoadMoreBtnStatus(total) {
  const perPage = 40;
  const totalPages = Math.ceil(total / perPage);

  if (totalPages < page) {
    hideLoadMoreBtn();
    iziToast.info({
      title: 'Info',
      message: "We're sorry, but you've reached the end of search results.",
      backgroundColor: '#b0e7f7',
      maxWidth: 500,
      titleColor: '#fff',
      messageColor: '#fff',
      titleSize: '16px',
      titleLineHeight: '1.5',
      messageSize: '16px',
      messageLineHeight: '1.5',
      icon: 'fa fa-exclamation-circle',
      iconColor: '#fff',
      position: 'topRight',
    });
  } else {
    showLoadMoreBtn();
  }
}

function showLoader() {
  refs.loader.classList.remove('visually-hidden');
}

function hideLoader() {
  refs.loader.classList.add('visually-hidden');
}

function scrollPage() {
  const scrollHeight =
    refs.gallery.children[0].getBoundingClientRect().height * 2;
  scrollBy({
    behavior: 'smooth',
    top: scrollHeight,
  });
}
