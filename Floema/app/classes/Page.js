export default class Page {
  constructor ({element, elements, id}) {
    this.selector = element
    this.selectorChildren = elements
    this.id = id
  }

  create () {
    this.element = document.querySelector(this.selector)
    this.elements = {}

    each(this.selectorChildren, entry => {

    })
  }
}
