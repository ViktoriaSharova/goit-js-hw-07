import { galleryItems } from './gallery-items.js';
// Change code below this line
const container = document.querySelector('.gallery');

const markup = createMarkup(galleryItems)

container.insertAdjacentHTML('beforeend', markup);
container.addEventListener('click', handleGalleryClick);

function createMarkup (arr) {
    return arr.map(({ preview, original, description }) => {
        return `<li data-preview="${preview}" class="gallery__item js-gallery-item">
                  <a class="gallery__link" href="${original}">
                    <img class="gallery__image"
                     src="${preview}"
                     data-source="${original}"
                    alt="${description}">
                  </a>
                </li>`
    }).join('');
}


function handleGalleryClick(event) {
  if (event.target === event.currentTarget){
    return;
  }
  
  const targetElement = event.target.closest('.js-gallery-item');
  const galleryPreview = targetElement.dataset.preview;
  const galleryInfo = galleryItems.find(gallery => gallery.preview === galleryPreview);
  
  const instance = basicLightbox.create(` 
    <div class="modal">
    <img src="${galleryInfo.original}" alt="${galleryInfo.description}" />
    </div>
  `); 
  instance.show();

}

console.log(galleryItems);
