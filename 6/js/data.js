import {getRandomArrayElement} from './util.js';
import {getRandomInteger} from './util.js';

const DESCRIPTION_LIST = [
  'говорят, там пляж',
  'нет, это не море, это что, океан?',
  'какого цвета купальник?',
  'мы?',
  'у владельца этой машины есть все кроме моего номера телефона',
  'и за это 10 евро?',
  'вот такого цвета хочу себе маникюр',
  'ловим самолет',
  'доказываю что место под еще одну пару обуви есть!',
  'пошла загорать',
  'у этого владельца машины тоже все есть кроме моего номера',
  'лосось с.. чем? я тоже не понимаю',
  'котогири?',
  'а вот и новая пара обуви',
  'куда то лечу',
  'фотка моих бывших одноклассников',
  'кажется, это импала?',
  'теперь я могу не натыкаться на всякие предметы пока занимаюсь ночным дожором',
  'эти пальмы слишком идеально посажены, мне не нравится',
  'кушаю',
  'кажется, что все таки это океан',
  'членистоногие, они мне нравятся только в тарелке, а так жуткие',
  'завтра будет болеть голова, но сегодня не будет',
  'кормим бегемота машиной, ну и что?',
  'новая фотография с отпуска'
];

const MESSAGE = [
  'Всё отлично!',
  'В целом всё неплохо. Но не всё.',
  'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.',
  'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
  'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
  'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!'
];

const NAMES = [
  'Чанэ',
  'Сабер',
  'Мартис',
  'Франко',
  'Лилия',
  'Эсмеральда',
  'Чичи',
  'Иритель',
  'Хилос',
  'Баксий',
  'Мелиса',
  'Лолита',
  'Кармила',
  'Грейнджер',
  'Харит',
  'Лейла',
  'Мия',
  'Матильда',
  'Эстес',
  'Халид',
  'Нана',
  'Одетта',
  'Ланселот',
  'Фанни',
  'Линг'
];

const GENERATE_PHOTO_COUNT = 25;

const generateCommentItem = (index) => ({
  id: index + 1,
  avatar: `img/avatar-${getRandomInteger(1, 6)}.svg`,
  message: getRandomArrayElement(MESSAGE),
  name: getRandomArrayElement(NAMES)
});

const generateComments = () => {
  const comments = [];
  const numberOfComments = getRandomInteger(0, 30);

  for (let i = 0; i < numberOfComments; i++) {
    comments.push(generateCommentItem(i));
  }

  return comments;
};

const generatePhotoItem = (i) => ({
  id: i,
  url: `photos/${i}.jpg`,
  description: getRandomArrayElement(DESCRIPTION_LIST),
  likes: getRandomInteger(15, 200),
  comments: generateComments()
});

const generatePhotos = Array.from({ length: GENERATE_PHOTO_COUNT }, (_, i) => generatePhotoItem(i + 1));

export {generatePhotos};

// console.log(JSON.stringify(generatePhotos, null, 1));
