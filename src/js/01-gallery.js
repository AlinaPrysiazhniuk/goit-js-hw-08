// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line
import 'simplelightbox/dist/simple-lightbox.min.css';

import simpleLightbox from 'simplelightbox';

console.log(galleryItems);

const galleryContainer = document.querySelector('.gallery');

function creatGallery(images) {
  return images
    .map(
      image =>
        `<a class="gallery__item" href="${image.original}">
        <img
            class="gallery__image"
            src="${image.preview}"
            alt="${image.description}"
         />
         </a>`
    )
    .join('');
}

const addGallery = creatGallery(galleryItems);
galleryContainer.innerHTML = addGallery;

console.log(galleryContainer);

galleryContainer.addEventListener('click', onImageClick);

function onImageClick(event) {
  event.preventDefault();
  if (event.target.nodeName !== 'IMG') {
    return;
  }

  const intance = new SimpleLightbox('.gallery a');
  intance.on('show.simplelightbox');

  galleryContainer.addEventListener('keydown', offEscapeClose);

  function offEscapeClose() {
    if (event.code === 'Escape') {
      instance.close();
      galleryContainer.removeEventListener('click', offEscapeClose);
    }
  }
}
