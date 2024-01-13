import HelloButton from './components/hello-button/hello-button.js';
import Heading from './components/heading/heading.js'

// import addImage from './add-image.js';
const helloButton = new HelloButton();
const heading = new Heading();

// addImage()
heading.render('hello');
helloButton.render();

if (process.env.NODE_ENV === 'production') {
  console.log('Production mode')
} else {
  console.log('Development mode')
}