import ImagePage from './components/image-page/image-page.js';
import Heading from './components/heading/heading.js';

const heading = new Heading();
const image = new ImagePage();

heading.render('image');
image.render();