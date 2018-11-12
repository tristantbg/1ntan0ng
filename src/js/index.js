import LazySizes from "./components/lazysizes";
import Loader from './components/loader';
import Links from './components/links';
import Embeds from './components/embeds';
import Menu from './components/menu';
import Projects from './components/projects';

const App = {
  init: async () => {
    await Loader.init();
    await Menu.init();
    await Projects.init();
    await Links.init();
    await Embeds.init();
    Loader.loaded();
  }
};

export default App;
