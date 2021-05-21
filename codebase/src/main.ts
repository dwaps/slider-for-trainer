import Reveal from 'reveal.js';
import 'reveal.js/dist/reset.css';
import 'reveal.js/dist/reveal.css';
import 'reveal.js/dist/theme/black.css';
import 'animate.css';
import './style.css'

import { SLIDER_CONFIG } from './constants';
import { loadSlides } from './load-slides';
// import SwitchButton from './switch-theme';


// setTimeout(() => {
//   document.body.classList.add('appears');
// }, 5000);

// SwitchButton;

// initCSS();
loadSlides();

const deck = new Reveal();
const { slideNumber, controls, progress } = SLIDER_CONFIG;
deck.initialize({ slideNumber, controls, progress, });
