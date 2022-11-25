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

  show () {
    GSAP.from(this.element, {
      autoAlpha: 0
    })
  }

  hide () {
    GSAP.to(this.element, {
      autoAlpha: 0
    })
  }
}
