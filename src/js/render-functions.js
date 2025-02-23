import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

const lightbox = new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionDelay: 250,
  close: 'true',
});

function galleryMarkup(images) {
  console.log(images);
  const markup = images
    .map(
      image => `<li class="gallery-item">
                <a class="gallery-link" href="${image.webformatURL}">
                  <img
                    class="gallery-image"
                    src="${image.webformatURL}"
                    alt="${image.tags
                      .split(', ')
                      .filter(
                        (value, index, self) => self.indexOf(value) === index
                      )
                      .join(', ')}"
                  />
                  <ul class="image-info-list">
                    <li class=image-info-item>
                        <p class="info-title info-text">Likes</p>
                        <p class="info-text">${image.likes}</p>
                    </li>
                    <li class=image-info-item>
                        <p class="info-title info-text">Views</p>
                        <p class="info-text">${image.views}</p>
                    </li>
                    <li class=image-info-item>
                        <p class="info-title info-text">Comments</p>
                        <p class="info-text">${image.comments}</p>
                    </li>
                    <li class=image-info-item>
                        <p class="info-title info-text">Downloads</p>
                        <p class="info-text">${image.downloads}</p>
                    </li>
                  </ul>
                </a>
              </li>`
    )
    .join('');

  return markup;
}

export function renderGallery(images, gallery) {
  gallery.innerHTML = '';
  gallery.insertAdjacentHTML('beforeend', galleryMarkup(images));
  lightbox.refresh();
}
