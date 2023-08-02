import { renderGallery } from './render-galery.js';
import { getData } from './fetch.js';
import { showAlertError } from './util.js';
import { getFilters } from './sort-photo.js';

let data = null;

try {
  data = await getData();
  renderGallery(data);
  getFilters();
} catch {
  showAlertError('Попробуйте перезагрузить страницу!');
}

export { data };
