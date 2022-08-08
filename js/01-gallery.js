import { galleryItems } from './gallery-items.js';

// Change code below this line


const galleryEl = document.querySelector(".gallery")
galleryEl.addEventListener("click", openGalleryLargeImage)


const renderGallery = (galleryItems) => {
 const result = galleryItems.map(({ description, original, preview }) =>
        `<div class="gallery__item">
  <a class="gallery__link" href="large-image.jpg">
    <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
    />
  </a>
</div>`).join("");

    return result
}


const insertGalleryItems = (string) => {
  galleryEl.insertAdjacentHTML("beforeend", string);
};

insertGalleryItems(renderGallery(galleryItems))


function openGalleryLargeImage(e) {
    e.preventDefault();

  if (e.target.nodeName !== "IMG") {
    return;
  }
    
   const originalItem = e.target.dataset.source;

  if (originalItem) {
    const originalImage = basicLightbox.create(`<img src="${originalItem}">`, {
      onShow: () => window.addEventListener('keydown', onEscKeyPress),
      onClose: () => window.removeEventListener('keydown', onEscKeyPress),
    });
    

    originalImage.show()
    
    function onEscKeyPress (e) {
    if (e.key === 'Escape') { 
      originalImage.close();
  }
  }
}
}
 







