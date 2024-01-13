import './heading.scss';

export default class Heading {
  render(pageName) {
    const body = document.querySelector('body')
    const h1 = document.createElement('h1')
    h1.classList.add('heading')
    h1.classList.add('sdfasdfds')
    h1.textContent = `Webpack is awesome! This is ${pageName} page`
    body.appendChild(h1)
  }
}