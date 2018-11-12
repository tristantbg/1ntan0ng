const Menu = {
  init: () => {
    Menu.categories = document.querySelectorAll('header .category')
    Menu.description = document.getElementById('project-description')
    Menu.credits = document.getElementById('project-credits')
  },
  enableScrollToSection: _ => {
    Menu.categories.forEach(c => {
      c.addEventListener('click', e => {
        e.preventDefault()
        fullpage_api.moveTo(e.currentTarget.dataset.id)
      })
    })
  },
  selectCategory: id => {
    Menu.categories.forEach( c => {
      if (c.dataset.id === id) {
        c.classList.add('active')
      } else {
        c.classList.remove('active')
      }
    });
  }
};

export default Menu;