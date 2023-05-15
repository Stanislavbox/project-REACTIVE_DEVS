import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick.js'; 
import { supportUaArr } from './supportUaArr';
import $ from 'jquery';

const supportList = document.querySelector('.support-ua-list');
const isRetina = window.devicePixelRatio > 1;

function createMarkupSupportUa(arr) {
  const markup = arr
    .map(
      ({
        img,
        imgX2,
        url,
        title,
        id,
      }) => `<li class="support-ua-item"><a target="_blank" class="support-ua-link" href="${url}">
  <span class="support-ua-num">${id}</span>
  <img class="support-img" src="${isRetina ? imgX2 : img}" alt="${title}">
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



$(document).ready(function () {
  $('.support-ua-list').slick({
    vertical: true,
    verticalSwiping: true,
    prevArrow: false,
    nextArrow: $('.next'),
    infinite: true,
    speed: 400,
    slidesToScroll: 1,
    slidesToShow: 6,
    draggable: false,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
        },
      },
    ],
  });
});
