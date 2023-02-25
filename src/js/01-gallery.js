import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";
// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line

console.log(galleryItems);
const divElement = document.querySelector('div.gallery');

function createGalleryItems(itemsArr) {
    itemsArr.forEach(obj => {
        divElement.innerHTML += `
        <a class="gallery__link" href="${obj.original}" data-lightbox="lbox">
          <img
            class="gallery__image"
            src="${obj.preview}"
            data-source="${obj.original}"
            alt=""
            title="${obj.description}"
          />
        </a>`
    });
};

function selectImage(evt) {
    evt.preventDefault();
};

createGalleryItems(galleryItems);

divElement.addEventListener('click', selectImage);

var lightbox = new SimpleLightbox('.gallery a', { captionDelay: 250 });