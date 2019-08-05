class Container {
    create(container) {
      const div = document.createElement('div')
      div.className = 'container'
      container.appendChild(div) 
      return div
    }
  }

class Header {
    create(container, headerText) {
      const h1 = document.createElement('h1')
      h1.innerText = headerText
      h1.className = 'header'
      container.appendChild(h1)
    }
}
const container = new Container();
const el = container.create(document.body);

const header = new Header();
header.create(el, 'Setting up webpack 4');