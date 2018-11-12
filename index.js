import './www/site/plugins/embed/assets/css/embed.css';
import './src/css/app.styl';
import 'nodelist-foreach-polyfill';
import App from './src/js';

document.addEventListener("DOMContentLoaded", () => {
  App.init();
});
