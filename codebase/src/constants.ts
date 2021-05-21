// const themesDark = ['dark','blood','league','moon','night'];
// const themesLight = ['beige','serif','simple','sky','solarized','white'];

// export const DARK_THEME_KEY = 'darkTheme';
// export function getTheme(dark: boolean) {
//   const th = new Map();
//   const themes = dark ? themesDark : themesLight;
//   themes.forEach((t,i) => th.set(i,t));
//   return th;
// }
// export function getThemePath(theme: Map<number, string>) {
//   // DEV MODE
//   // return `./node_modules/reveal.js/dist/theme/${theme.get(+(Math.random()*(theme.size-1)).toFixed())}.css`;
//   return `/assets/theme/${theme.get(+(Math.random()*(theme.size-1)).toFixed())}.css`;
// }

// DEV MODE
// export const slideFilePath = (nb: number) => `./public/slide-${nb}.png`;
export const NB_SLIDES = 14;
export const slidesContainer = document.querySelector('.slides');
export const slideFilePath = (nb: number) => `./slide-${nb}.png`;

export const SLIDER_CONFIG = {
  slideNumber: true,
  controls: true,
  progress: true,
};
export const SLIDES_CONFIG = {
  mainTransition: 'fade',
};
