const switcher = document.querySelector('.js-switcher');
const elementsTheme = document.querySelector('.page');

switcher.addEventListener('click', switchTheme)

export function switchTheme(){
  if (localStorage.getItem('theme') === 'dark'){

    localStorage.removeItem('theme');
  }else{
     localStorage.setItem('theme', 'dark')
  }
    addClassJsDarkTheme()
  }

  function addClassJsDarkTheme(){
    try{
      if(localStorage.getItem('theme') === 'dark'){
        elementsTheme.classList.add('js-dark-theme')
        switcher.checked = true;
      }else{
        elementsTheme.classList.remove('js-dark-theme')
      }
    }catch(error){}
  }
  addClassJsDarkTheme()