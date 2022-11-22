import About from 'pages/About'
import Collections from 'pages/Collections'
import Detail from 'pages/Detail'
import Home from 'pages/Home'

class App {
  constructor () {

  }

  createPages () {
    this.pages = {
      'home': new Home(),
      'collections': new Collections(),
      'detail': new Detail(),
      'about': new About()
    }
  }
}

new App()
