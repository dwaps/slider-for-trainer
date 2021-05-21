import {
  NB_SLIDES,
  SLIDES_CONFIG,
  slideFilePath,
  slidesContainer,
} from './constants';

const { mainTransition } = SLIDES_CONFIG;

export function loadSlides() {
  for (let i = 1; i <= NB_SLIDES; i++) {
    const section = document.createElement('section');
    section.setAttribute('data-transition', mainTransition);
    section.innerHTML = `<img src="${slideFilePath(i)}" alt="">`;
    <HTMLDivElement>slidesContainer?.appendChild(section);
  }
}
