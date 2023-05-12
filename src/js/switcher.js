const switcher = document.querySelector('.js-switcher');

switcher.addEventListener('click', switchTheme)

export function switchTheme(){
  const body = document.querySelector('.page');
  body.classList.toggle('dark')
}