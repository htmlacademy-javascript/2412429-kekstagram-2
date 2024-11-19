import { generatePhotos } from './data.js';

const render = (photos) => {
  const picturesContainer = document.querySelector('.pictures');
  const pictureTemplate = document.querySelector('#picture').content.querySelector('.picture');
  const fragment = document.createDocumentFragment();

  photos.forEach(({ url, description, likes, comments }) => {
    const pictureElement = pictureTemplate.cloneNode(true);
    pictureElement.querySelector('.picture__img').src = url;
    pictureElement.querySelector('.picture__img').alt = description;
    pictureElement.querySelector('.picture__likes').textContent = likes;
    pictureElement.querySelector('.picture__comments').textContent = comments.length;
    fragment.appendChild(pictureElement);
  });

  picturesContainer.appendChild(fragment);
};

const photos = generatePhotos();

render(photos);

export { render };
