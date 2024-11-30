const bigPicture = document.querySelector('.big-picture');
const body = document.body;
const closeButton = bigPicture.querySelector('.big-picture__cancel');
const socialCommentsContainer = bigPicture.querySelector('.social__comments');
const socialCommentCount = bigPicture.querySelector('.social__comment-count');
const commentsLoader = bigPicture.querySelector('.comments-loader');

const renderComments = (comments) => {
  socialCommentsContainer.innerHTML = '';
  const fragment = document.createDocumentFragment();

  comments.forEach(({ avatar, name, message }) => {
    const commentElement = document.createElement('li');
    commentElement.classList.add('social__comment');

    commentElement.innerHTML = `
      <img
        class="social__picture"
        src="${avatar}"
        alt="${name}"
        width="35"
        height="35"
      >
      <p class="social__text">${message}</p>
    `;

    fragment.appendChild(commentElement);
  });

  socialCommentsContainer.appendChild(fragment);
};


const openBigPicture = ({ url, description, likes, comments }) => {
  bigPicture.querySelector('.big-picture__img img').src = url;
  bigPicture.querySelector('.social__caption').textContent = description;
  bigPicture.querySelector('.likes-count').textContent = likes;
  bigPicture.querySelector('.social__comment-total-count').textContent = comments.length;
  bigPicture.querySelector('.social__comment-shown-count').textContent = comments.length;

  renderComments(comments);

  socialCommentCount.classList.add('hidden');
  commentsLoader.classList.add('hidden');

  bigPicture.classList.remove('hidden');
  body.classList.add('modal-open');

  document.addEventListener('keydown', onEscKeydown);
};

const closeBigPicture = () => {
  bigPicture.classList.add('hidden');
  body.classList.remove('modal-open');
  document.removeEventListener('keydown', onEscKeydown);
};

const onEscKeydown = (evt) => {
  if (evt.key === 'Escape') {
    evt.preventDefault();
    closeBigPicture();
  }
};

closeButton.addEventListener('click', closeBigPicture);


const initFullView = (photos) => {
  const pictureElements = document.querySelectorAll('.picture');

  pictureElements.forEach((element, index) => {
    element.addEventListener('click', () => {
      openBigPicture(photos[index]);
    });
  });
};

export { initFullView };
