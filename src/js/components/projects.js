import App from '../index'
import Menu from './menu'
import Flickity from 'flickity'
import fullpage from 'fullpage.js'

const Projects = {
  flickitys: [],
  init: () => {
    Projects.items = document.querySelectorAll('.project-item')
    Projects.eventTargets()
    Projects.fullpage = new fullpage('#elevator', {
      licenseKey: 'OPEN-SOURCE-GPLV3-LICENSE',
      sectionSelector: 'section',
      autoScrolling: true,
      continuousVertical: true,
      css3: false,
      afterRender: function() {
        const currentId = fullpage_api.getActiveSection().anchor
        Menu.enableScrollToSection()
        Menu.selectCategory(currentId)
        Projects.loadSliders()
        Projects.pauseSliders()
        Projects.flickitys.forEach(f => {
          f.slider.reposition()
        })
        const currentSlider = Projects.flickitys.find(o => o.id === currentId)
        if (currentSlider) currentSlider.slider.playPlayer()

        document.addEventListener('lazybeforeunveil', function(e) {
          const slider = e.target.closest(".projects-slider")
          const currentSlider = Projects.flickitys.find(o => o.id === slider.dataset.id)
          if (currentSlider) {
            currentSlider.slider.reposition()
          }
        });
      },
      onLeave: function(origin, destination) {
        Projects.flickitys.forEach(f => {
          f.slider.pausePlayer()
        })
        const currentSlider = Projects.flickitys.find(o => o.id === destination.anchor)
        if (currentSlider) {
          currentSlider.slider.playPlayer()
          currentSlider.slider.reposition()
          Menu.selectCategory(destination.anchor)
        }
      },
    })
  },
  pauseSliders: _ => {
    Projects.flickitys.forEach(f => {
      f.slider.pausePlayer()
    })
  },
  loadSliders: _ => {
    Projects.sliders = document.querySelectorAll('.projects-slider');
    Projects.sliders.forEach(element => {
      Projects.flickity(element, {
        cellSelector: '.project-item',
        imagesLoaded: true,
        autoPlay: 3000,
        pauseAutoPlayOnHover: false,
        cellAlign: 'left',
        setGallerySize: true,
        adaptiveHeight: false,
        percentPosition: false,
        accessibility: true,
        wrapAround: true,
        freeScroll: true,
        prevNextButtons: false,
        pageDots: false,
        draggable: '>1'
      })
    })
  },
  flickity: (element, options) => {
    const flickityInstance = new Flickity(element, options);
    flickityInstance.caption = flickityInstance.element.parentNode.querySelector('.caption');
    flickityInstance.slideNumber = flickityInstance.element.parentNode.querySelector('.slide-number');
    Projects.flickitys.push({
      id: element.parentNode.parentNode.dataset.anchor,
      slider: flickityInstance
    });
    if (flickityInstance.slides.length < 1) return; // Stop if no slides

    flickityInstance.on('change', function() {
      if (this.selectedElement) {
        const caption = this.element.parentNode.querySelector('.caption');
        if (caption)
          caption.innerHTML = this.selectedElement.getAttribute('data-caption');
      }
      const adjCellElems = this.getAdjacentCellElements(1);
      for (let i = 0; i < adjCellElems.length; i++) {
        const adjCellImgs = adjCellElems[i].querySelectorAll('.lazy:not(.lazyloaded):not(.lazyload)')
        for (let j = 0; j < adjCellImgs.length; j++) {
          adjCellImgs[j].classList.add('lazyload')
        }
      }
    });
    flickityInstance.on('select', function() {
      if (this.selectedElement) {
        if (flickityInstance.caption)
          flickityInstance.caption.innerHTML = this.selectedElement.getAttribute('data-caption');
        if (flickityInstance.slideNumber)
          flickityInstance.slideNumber.innerHTML = `${this.selectedIndex + 1}/${this.cells.length}`;
        if (Projects.globalSlideNumber)
          Projects.globalSlideNumber.innerHTML = `${this.selectedIndex + 1}/${this.cells.length}`;
      }
    });
    // flickityInstance.on('staticClick', function(event, pointer, cellElement, cellIndex) {
    //   if (!cellElement) {
    //     return;
    //   } else {
    //     this.next();
    //   }
    // });
    // flickityInstance.element.addEventListener('mousemove', e => {
    //   flickityInstance.last_mouse_position = {
    //     x: event.pageX,
    //     y: event.pageY
    //   }
    //   flickityInstance.slideNumber.style.top = '0px'
    //   flickityInstance.slideNumber.style.left = '0px'
    //   flickityInstance.slideNumber.style.webkitTransform = `translate(${flickityInstance.last_mouse_position.x}px, ${flickityInstance.last_mouse_position.y}px)`
    //   flickityInstance.slideNumber.style.mozTransform = `translate(${flickityInstance.last_mouse_position.x}px, ${flickityInstance.last_mouse_position.y}px)`
    //   flickityInstance.slideNumber.style.msTransform = `translate(${flickityInstance.last_mouse_position.x}px, ${flickityInstance.last_mouse_position.y}px)`
    //   flickityInstance.slideNumber.style.oTransform = `translate(${flickityInstance.last_mouse_position.x}px, ${flickityInstance.last_mouse_position.y}px)`
    // })
    // flickityInstance.slideNumber.innerHTML = `${flickityInstance.selectedIndex + 1}/${flickityInstance.cells.length}`;
    return flickityInstance
  },
  accessibility: () => {
    const arrowLeft = document.querySelectorAll('[event-target=slider-previous]')
    for (let i = 0; i < arrowLeft.length; i++) {
      arrowLeft[i].addEventListener('click', () => {
        const flkty = Flickity.data(arrowLeft[i].closest('section').querySelector('.slider'))
        flkty.previous()
      })
    }
    const arrowRight = document.querySelectorAll('[event-target=slider-next]')
    for (let i = 0; i < arrowRight.length; i++) {
      arrowRight[i].addEventListener('click', () => {
        const flkty = Flickity.data(arrowRight[i].closest('section').querySelector('.slider'))
        flkty.next()
      })
    }
  },
  eventTargets: _ => {
    Projects.items.forEach(p => {
      p.addEventListener('mouseenter', e => {
        Menu.description.innerHTML = e.currentTarget.dataset.description
        Menu.credits.innerHTML = e.currentTarget.dataset.credits
      })
      p.addEventListener('mouseleave', e => {
        Menu.description.innerHTML = ''
        Menu.credits.innerHTML = ''
      })
    })
  }
};

export default Projects;