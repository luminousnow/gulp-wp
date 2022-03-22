import * as nodePath from "path"; // імпорт модуля з node_modules

const rootFolder = nodePath.basename(nodePath.resolve()); // отримуємо назву каталогу проекта
const buildFolder = "./dist"; // каталог зібраного проекту
const sourceFolder = "./src"; // каталог з файлами розробки проекту

export const path = {
  // Шляхи файлів готового проекту
  build: {
    html: `${buildFolder}/`,
    css: `${buildFolder}/assets/css/`,
    js: `${buildFolder}/assets/js/`,
    img: `${buildFolder}/assets/img/`,
    svg: `${buildFolder}/assets/img/svg/`,
    fonts: `${buildFolder}/assets/fonts/`,
  },

  // Шляхи файлів розробки
  src: {
    html: `${sourceFolder}/*.html`,
    scss: `${sourceFolder}/assets/scss/style.scss`,
    js: `${sourceFolder}/assets/js/script.js`,
    img: `${sourceFolder}/assets/img/**/*.{jpg,jpeg,png,svg,ico,gif,webp}`,
    svg: `${sourceFolder}/assets/img/svg/**/*.svg`,
    ico: `${sourceFolder}/assets/img/**/*.ico`,
  },

  // Шляхи файлів за якими ведеться спостереження
  watch: {
    html: `${sourceFolder}/**/*.html`,
    scss: `${sourceFolder}/assets/scss/**/*.scss`,
    js: `${sourceFolder}/assets/js/**/*.js`,
    img: [
      `${sourceFolder}/assets/img/**/*.{jpg,jpeg,png,gif,svg,ico,webp}`,
      `!${sourceFolder}/assets/img/svg/*.svg`,
    ],
    svg: `${sourceFolder}/assets/img/**/*.svg`,
  },

  clean: buildFolder,
  rootFolder,
  buildFolder,
  sourceFolder,
  ftp: ``, // назва каталогу на віддаленому сервері
};