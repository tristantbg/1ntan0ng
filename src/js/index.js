import LazySizes from "./components/lazysizes";
import Loader from './components/loader';
import Links from './components/links';
import Embeds from './components/embeds';
import Menu from './components/menu';
import Projects from './components/projects';
import {
    disableBodyScroll,
    enableBodyScroll,
    clearAllBodyScrollLocks
} from 'body-scroll-lock'
const App = {
    init: async () => {
        await Loader.init();
        await App.sizeSet();
        await App.targets();
        await Menu.init();
        await Projects.init();
        await Links.init();
        await Embeds.init();
        Loader.loaded();
        window.addEventListener('resize', App.sizeSet)
    },
    sizeSet: () => {
        App.width = (window.innerWidth || document.documentElement.clientWidth)
        App.height = (window.innerHeight || document.documentElement.clientHeight)
        App.isMobile = App.width <= 767
    },
    targets: _ => {
        const aboutContainer = document.getElementById('about')
        const about = document.querySelectorAll('[event-target=about]')
        if (document.body.getAttribute('page-type') != 'about') {
            about.forEach(el => {
                el.addEventListener('click', e => {
                    e.preventDefault()
                    document.body.classList.toggle('about')
                    if (document.body.classList.contains('about')) {
                        disableBodyScroll(aboutContainer)
                    } else {
                        enableBodyScroll(aboutContainer)
                    }
                })
            })
        }
    }
};
export default App;
