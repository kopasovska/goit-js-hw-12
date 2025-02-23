import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

import '@fortawesome/fontawesome-free/css/all.min.css';

import { getImages } from './js/pixabay-api.js';
import { renderGallery } from './js/render-functions.js';

const refs = {
  searchForm: document.querySelector('.form'),
  gallery: document.querySelector('.gallery'),
  loadingMessage: document.querySelector('.loading-message'),
};

refs.searchForm.addEventListener('submit', submitFormHandler);

function submitFormHandler(event) {
  event.preventDefault();
  refs.gallery.innerHTML = '';

  const searchQuery = event.target.elements.searchQuery.value.trim();

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
    refs.loadingMessage.innerHTML = '<span class="loader"></span>';
    getImages(searchQuery)
      .then(images => {
        if (images.length === 0) {
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
          renderGallery(images, refs.gallery);
        }
        refs.loadingMessage.textContent = '';
      })
      .catch(error => console.log(error));
  }
  event.target.reset();
}
