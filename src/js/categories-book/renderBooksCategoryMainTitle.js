const homeTitleEl = document.querySelector('.home-title');

// Colorize the last word in a category title
export function renderMainTitle(id) {
  //
  const allWordsButLast = id.split(' ').slice(0, -1).join(' ');

  const words = id.split(' ');
  const lastWord = words[words.length - 1];

  homeTitleEl.innerHTML = `${allWordsButLast} <span class="home-title-accent">${lastWord}</span>`;
}
