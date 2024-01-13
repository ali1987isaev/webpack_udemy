import image from './image.png';
import './image-page.scss';

export default class ImagePage {
  render() {
    const img = document.createElement('img')
    img.alt = 'test alt'
    img.classList.add('image')
    img.src = image
  
    const body = document.querySelector('body')
    body.appendChild(img)
  }
}