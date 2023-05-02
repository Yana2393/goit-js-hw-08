// Add imports above this line
import SimpleLightbox from "simplelightbox";
console.log(SimpleLightbox);
import "simplelightbox/dist/simple-lightbox.min.css";
import { galleryItems } from './gallery-items';
// Change code below this line

console.log(galleryItems);

const galleryList = document.querySelector('.gallery');

const newGallery = galleryItems
    .map(({ preview, original, description }) => `
        <li class="gallery__item">
            <a class="gallery__link" href="${original}">
                <img class="gallery__image"
                src="${preview}" 
                alt="${description}" />
            </a>
        </li>
    `)
    .join('');
galleryList.insertAdjacentHTML("beforeend", newGallery)

const lightbox = new SimpleLightbox('.gallery a', {
    captionsData: 'alt',
    captionDelay: 250
});
console.log(galleryItems);

// test