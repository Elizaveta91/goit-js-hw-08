// Add imports above this line
import { galleryItems } from './gallery-items';
import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";
// Change code below this line

const imgGalleryRef = document.querySelector(".gallery");
const galleryMarkUp = createMakrUp(galleryItems);
imgGalleryRef.innerHTML = galleryMarkUp;

imgGalleryRef.addEventListener("click", onImageClick);

let lightbox = new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionDelay: 250,
});

function createMakrUp(galleryItems) {
  return galleryItems
    .map(({ preview, original, description }) => {
      return `<div class="gallery__item">
  <a class="gallery__link" href="${original}">
    <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"/>
  </a>
</div>`;
    })
    .join("");
} 

const instance = basicLightbox.create(`<img class="modal-img" src="">`, {
  onShow: instance => {
    window.addEventListener("keydown", onEscCloseModal);
  },
  onClose: instance => {
    window.removeEventListener("keydown", onEscCloseModal);
  },
});

function onImageClick(event) {
  event.preventDefault();
  if (event.target.nodeName !== "IMG") {
    return;
  }
  instance.element().querySelector('img').src=event.target.dataset.source;
  instance.show();
}

function onEscCloseModal(event) {
  if (event.code === "Escape") {
    instance.close();
    return;
  }
}
