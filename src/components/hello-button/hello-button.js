import './hello-button.scss';

export default class HelloButton {
  textClass = 'copy'
  buttonClass = 'button'

  render() {
    const body = document.querySelector('body')
    const button = document.createElement('button')
    button.classList.add(this.buttonClass)
    button.textContent = 'hello button'
    button.onclick = function() {
      const p = document.createElement('p')
      p.textContent = 'text content for paragraph'
      p.classList.add(this.textClass)
      body.appendChild(p)
    }.bind(this);
    body.appendChild(button)
  }
}