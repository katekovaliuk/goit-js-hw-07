import { galleryItems } from './gallery-items.js';
// Change code below this line

// console.log(galleryItems);


// Закриття з клавіатури
// УВАГА
// Наступний функціонал не обов'язковий для здавання завдання, але буде хорошою додатковою практикою.

// Додай закриття модального вікна після натискання клавіші Escape. Зроби так, щоб прослуховування клавіатури було тільки доти, доки відкрите модальне вікно. Бібліотека basicLightbox містить метод для програмного закриття модального вікна.

const galleryRef = document.querySelector(".gallery");
// console.log(galleryRef);

const imageMarkup = createGalleryItems(galleryItems);

galleryRef.insertAdjacentHTML("beforeend", imageMarkup);
galleryRef.addEventListener("click", onImageClick);



function createGalleryItems(galleryItems) {
    return galleryItems.map(({ preview, original, description }) => {
        return `
            <div class="gallery__item">     
            <a class="gallery__link" href="${original}">
                <img
                class="gallery__image"
                src="${preview}"
                data-source="${original}"
                alt="${description}"
                />
            </a>
            </div>
            `;
    })
        .join('');
 
}

function onImageClick(event) {
    event.preventDefault();
    console.log(event.target.dataset.source);

    let modalWindow;
    modalWindow = basicLightbox.create(`
    <img src="${event.target.dataset.source}"> width ="800" height="600"`);

    modalWindow.show();
};

