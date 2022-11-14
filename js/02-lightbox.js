import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

const galleryRef = document.querySelector(".gallery");
// console.log(galleryRef);

const imageMarkup = createGalleryItems(galleryItems);

galleryRef.insertAdjacentHTML("beforeend", imageMarkup);
// galleryRef.addEventListener("click", onImageClick);


function createGalleryItems(galleryItems) {
    return galleryItems.map(({ preview, original, description }) => {
        return `
            <a class="gallery__item" href="${original}">
                <img ${preview}" alt="${description}" />
            </a>
            `;
    })
        .join('');
 
}

let gallery = new SimpleLightbox('.gallery a');
gallery.on('nextImageLoaded.simplelightbox', function (event) {
    
	// do something…
});

// gallery.on('error.simplelightbox', function (e) {
// 	console.log(e); // some usefull information
// });