import BackToTop from './modules/BackToTop';
import RevealOnScroll from './modules/RevealOnScroll';

const backToTop = new BackToTop();
const revealOnScroll = new RevealOnScroll();

revealOnScroll.sr.reveal(".heading", { 
  distance: "10px",
  origin: "right",
  delay: 600,
  viewOffset: { bottom: -300 }
});

alert ('Webpack is functioning properly. Remove this alert in src/js/index.js');