import 'slick-carousel/slick/slick.css'; // импортируем стили Slick
import 'slick-carousel/slick/slick.js'; // импортируем скрипт Slick
import { supportUaArr } from './supportUaArr';
import $ from 'jquery';

const supportList = document.querySelector('.support-ua-list');

//ВАРИАНТ ДЛЯ ХОМ + ШОПИНГ СТРАНИЦ
// const supportLists = document.querySelectorAll('.support-ua-list');

function createMarkupSupportUa(arr) {
  const markup = arr
    .map(
      ({
        img,
        url,
        title,
        id,
      }) => `<li class="support-ua-item"><a target="_blank" class="support-ua-link" href="${url}">
  <span class="support-ua-num">${id}</span>
  <img class="support-img" src="${img}" alt="${title}">
  </a></li>
`
    )
    .join('');
  return markup;
}

export function supportMarkup() {
  supportList.insertAdjacentHTML(
    'beforeend',
    createMarkupSupportUa(supportUaArr)
  );
}

//ВАРИАНТ ДЛЯ ХОМ + ШОПИНГ СТРАНИЦ
// export function supportMarkup() {
//   for (let i = 0; i < supportLists.length; i++) {
//     supportLists[i].insertAdjacentHTML('beforeend', createMarkupSupportUa(supportUaArr));
//   }
// }

// document.addEventListener('DOMContentLoaded', function () {
//   $('.support-ua-list').slick({
//     vertical: true,
//     verticalSwiping: true,
//     prevArrow: false,
//     infinite: true,
//     speed: 400,
  
//     slidesToShow: 6,
//     nextArrow: $('.next'),
//   });
// });

$(document).ready(function () {
  $('.support-ua-list').slick({
    vertical: true,
    verticalSwiping: true,
    prevArrow: false,
    nextArrow: $('.next'),
    infinite: true,
    speed: 500,
    slidesToShow: 6,
    draggable: false,
  });
});
