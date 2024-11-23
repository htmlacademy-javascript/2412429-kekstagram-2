import { generatePhotos } from './data.js';
import { render } from './render.js';

const photos = generatePhotos();
render(photos);

console.log(photos);
