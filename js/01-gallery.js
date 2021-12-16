import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

const galleryEl = document.querySelector('.gallery');

galleryEl.innerHTML = craeteGalleryMarkup(galleryItems);

galleryEl.addEventListener('click', onImageClick);


function craeteGalleryMarkup(galleryItems) {
    return galleryItems.map(({ preview, original, description }) => {
        return `
        <div class="gallery__item">
            <a class = "gallery__link" href ="${original}">
                <img
                    class = "gallery__image"
                    src = "${preview}"
                    data-source = "${original}"
                    alt = "${description}"
                />
            </a>
        </div>`
    }).join('');
}

function onImageClick(e) {
    e.preventDefault();
    if (e.target.nodeName !== 'IMG') {
        return;
    }
    
    const instance = basicLightbox.create(`<img src="${e.target.dataset.source}"> `);
    instance.show();  
    window.addEventListener('keydown', onEscKeyPress);

    function onEscKeyPress(e) {
        if (e.code === 'Escape') {
            instance.close();
            window.removeEventListener('keydown', onEscKeyPress);
    }
}
}
