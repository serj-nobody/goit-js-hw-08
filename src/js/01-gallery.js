import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";

import { galleryItems } from './gallery-items';


const gallery = document.querySelector('.gallery');
const galleryMarkup = createGalleryMarkup(galleryItems);

function createGalleryMarkup(gallery) {
  return gallery.map(({ preview, original, description }) => {
    return `
    <div class="gallery__item">
      <a class="gallery__image" href="${original}">
        <img class="gallery__image" src="${preview}" alt="${description}" />
      </a>
    </div>`
  }).join('');
}

gallery.insertAdjacentHTML('afterbegin', galleryMarkup);

const lightbox = new SimpleLightbox('.gallery div a', {
  overlay: true,
  overlayOpacity: 0.8,
  captions: true,
  captionsData: 'alt',
  captionDelay: 250,
});
