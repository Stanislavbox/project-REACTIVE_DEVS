import{a as y,n as d,r as p,s as a,b as c,c as S,o as T,d as $,l as w,e as E,f as O,g as C}from"./footer-75dc83f1.js";const u={TOP_BOOKS:"https://books-backend.p.goit.global/books/top-books",listOfBooks:document.querySelector(".js-container")};async function k(t){try{const{data:e}=await y.get(`https://books-backend.p.goit.global/books/category?category=${t}`);return e}catch{d.exports.Notify.failure("Sorry, there is nothing here. Try again later.")}}function q({_id:t,title:e,author:o,description:n,book_image:s}){return`
  <li class="books-list-item" data_id=${t}>
    <div class="book-wrap">
      <div class="book-thumb">
        <img class="book-image" src="${s}" loading="lazy" alt="${n}"/>
        <div class="book-image-overlay" aria-label="${e}">
          <p class="book-image-overlay-text">Quick view</p>
        </div>
      </div>
      <div class="book-item-meta">
        <h3 class="book-title">${e}</h3>
        <p class="book-author">${o}</p>
      </div>
    </div>
    </li>
  `}function _(t){return`
      <ul class="category-books-list js-book-list">
        ${t.map(e=>`
              ${q(e)}
          `).join("")}
      </ul>
    `}const M=document.querySelector(".js-container");function b(t){const e=_(t);M.innerHTML=e}const j=document.querySelector(".home-title");function h(t){const e=t.split(" ").slice(0,-1).join(" "),o=t.split(" "),n=o[o.length-1];j.innerHTML=`${e} <span class="home-title-accent">${n}</span>`}const g=document.querySelector(".back-to-top"),x=document.querySelector(".to-top-target"),H=new IntersectionObserver(I);function I(t){t.forEach(e=>{e.isIntersecting?g.classList.add("hidden"):g.classList.remove("hidden")})}function l(t){window.scroll({top:0,behavior:"smooth"})}H.observe(x);g.addEventListener("click",l);const W=document.querySelector(".js-container");W.addEventListener("click",N);async function N(t){if(!t.target.classList.contains("btn-see-more"))return;p(),a();const e=t.target.dataset.id,o=await k(e);h(e);const n=document.querySelectorAll(".category-btn"),s=document.querySelector(".active-category");for(const r of n)r.dataset.id===e&&(r.classList.add("active-category"),r.scrollIntoView({block:"center"}));s.classList.remove("active-category"),b(o),a(),l(),c()}async function A(){try{const{data:t}=await y.get("https://books-backend.p.goit.global/books/category-list");return t}catch{d.exports.Notify.failure("Sorry, there is nothing here. Try again later.")}}const F=document.querySelector(".categories-list");async function P(){try{(await A()).forEach(e=>{const{list_name:o}=e,n=`<li class="categories-list-item">
  <button type="button" class="category-btn" data-id="${e.list_name}">${e.list_name}</button>
</li>`;F.innerHTML+=`${n}`})}catch(t){console.log(t)}}P();async function f(t,e){return(await y.get(t)).data.map(r=>`<div class = "category-container"><h2 class="home-book-category">${r.list_name}</h2>
      <ul class="books-list js-book-list">
              ${r.books.slice(0,e).map(({title:m,book_image:v,author:L,_id:B})=>`<li class="book-item"  data_id=${B}>
                      <div class ="img-wrapper">
                          <img class = "book-img" src="${v}" alt="Poster of ${m}"/>
                          <a class = "overlay" href="http://"><span class = "text-overlay">QUICK VIEW</span></a>
                      </div>
                          <h3 class="book-name">${m}</h3>
                          <p class="author-name">${L}</p></li>`).join("")}
              </ul><button class="btn-see-more" type="button" data-id="${r.list_name}">SEE MORE</button></div>`).join("")}const U=document.querySelector(".home-title"),K=document.querySelector(".categories-list"),R=document.querySelector(".js-container");K.addEventListener("click",V);async function V(t){if(t.preventDefault(),!t.target.classList.contains("category-btn"))return;if(p(),t.target.classList.contains("all-categories-btn")){U.innerHTML='Best Sellers <span class="home-title-accent">Books</span>',a();let n=1;window.innerWidth<759?n=1:window.innerWidth<1439?n=3:n=5,f(u.TOP_BOOKS,n).then(s=>{R.innerHTML=s,a(),l()}).catch(s=>d.exports.Notify.failure("Sorry, there is nothing here. Try again later.")).finally(()=>{c()});return}a();const e=t.target.dataset.id,o=await k(e);h(e),b(o),a(),l(),c()}const D=document.querySelector(".categories");D.addEventListener("click",Q);function Q(t){if(t.preventDefault(),t.target.nodeName!=="BUTTON")return;const e=t.target,o=document.querySelector(".active-category");o&&o!==e&&o.classList.remove("active-category"),e.classList.add("active-category"),e.scrollIntoView({block:"center"})}S();let i=1;window.innerWidth<767?i=1:window.innerWidth<1439?i=3:i=5;f(u.TOP_BOOKS,i).then(t=>{u.listOfBooks.insertAdjacentHTML("afterbegin",t),a()}).catch(t=>d.exports.Notify.failure("Sorry, there is nothing here. Try again later.")).finally(()=>c());T();const z=document.querySelector(".button-registraition"),G=document.querySelector(".button-login");z.addEventListener("click",$);G.addEventListener("click",w);const J=document.getElementById("logOutButton");J.addEventListener("click",E);const X=document.querySelector(".user_board_signup");X.addEventListener("click",O);const Y=document.querySelector(".close-modal");Y.addEventListener("click",C);
