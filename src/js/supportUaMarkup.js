import { supportUaArr } from './supportUaArr';

const supportList = document.querySelector('.support-ua-block');

function createMarkupSupportUa(arr) {
  const markup = arr
    .map(
      ({ img, url, title, id }) => `        <div class="support-ua-list">
  <li class="support-ua-item"><a class="support-ua-link" href="${url}">
  <span class="support-ua-num">${id}</span>
  <img class="support-img" src="${img}" alt="${title}">
  </a></li>
 </div>`
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


