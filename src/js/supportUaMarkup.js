import 'slick-carousel/slick/slick.css'; // импортируем стили Slick
import 'slick-carousel/slick/slick.js'; // импортируем скрипт Slick
import { supportUaArr } from './supportUaArr';
import $ from 'jquery';

const supportList = document.querySelector('.support-ua-list');

function createMarkupSupportUa(arr) {
  const markup = arr
    .map(
      ({
        img,
        url,
        title,
        id,
      }) => `<li class="support-ua-item"><a class="support-ua-link" href="${url}">
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

document.addEventListener('DOMContentLoaded', function() {
  $('.support-ua-list').slick({
    vertical: true,
    verticalSwiping: true,
    prevArrow: false,
    infinite: true,
    speed: 400,
    slidesToShow: 6,
    nextArrow:
    '<button type="button" class="support-icon-btn"><svg width="22" class="support-icon-next" height="22"><use  href="./img/sprite.svg#icon-scroll-down"></use></svg></button>',
  });
});

// $(document).ready(function () {
//   $('.support-ua-list').slick({
//     vertical: true,
//     verticalSwiping: true,
//     prevArrow: false,
   
//     infinite: true,
//     speed: 400,
//     slidesToShow: 6,
//   });
// });
