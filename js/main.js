import { generatePhotos } from './data.js';
import { render } from './render.js';
import { initFullView } from './big-picture.js';

const photos = generatePhotos();
render(photos);
initFullView(photos);

console.log(photos);

