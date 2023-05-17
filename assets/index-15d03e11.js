import{a as y,n as d,r as p,s as a,b as c,c as $,o as w,p as E,d as O,l as C,e as k,f as b,g as _}from"./footer-414ffc43.js";const u={TOP_BOOKS:"https://books-backend.p.goit.global/books/top-books",listOfBooks:document.querySelector(".js-container")};async function h(t){try{const{data:e}=await y.get(`https://books-backend.p.goit.global/books/category?category=${t}`);return e}catch{d.exports.Notify.failure("Sorry, there is nothing here. Try again later.")}}function q({_id:t,title:e,author:o,description:n,book_image:r}){return`
  <li class="books-list-item" data_id=${t}>
    <div class="book-wrap">
      <div class="book-thumb">
        <img class="book-image" src="${r}" loading="lazy" alt="${n}"/>
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
  `}function M(t){return`
      <ul class="category-books-list js-book-list">
        ${t.map(e=>`
              ${q(e)}
          `).join("")}
      </ul>
    `}const j=document.querySelector(".js-container");function f(t){const e=M(t);j.innerHTML=e}const x=document.querySelector(".home-title");function v(t){const e=t.split(" ").slice(0,-1).join(" "),o=t.split(" "),n=o[o.length-1];x.innerHTML=`${e} <span class="home-title-accent">${n}</span>`}const g=document.querySelector(".back-to-top"),I=document.querySelector(".to-top-target"),H=new IntersectionObserver(W);function W(t){t.forEach(e=>{e.isIntersecting?g.classList.add("hidden"):g.classList.remove("hidden")})}function l(t){window.scroll({top:0,behavior:"smooth"})}H.observe(I);g.addEventListener("click",l);const N=document.querySelector(".js-container");N.addEventListener("click",U);async function U(t){if(!t.target.classList.contains("btn-see-more"))return;p(),a();const e=t.target.dataset.id,o=await h(e);v(e);const n=document.querySelectorAll(".category-btn"),r=document.querySelector(".active-category");for(const s of n)s.dataset.id===e&&(s.classList.add("active-category"),s.scrollIntoView({block:"center"}));r.classList.remove("active-category"),f(o),a(),l(),c()}async function A(){try{const{data:t}=await y.get("https://books-backend.p.goit.global/books/category-list");return t}catch{d.exports.Notify.failure("Sorry, there is nothing here. Try again later.")}}const F=document.querySelector(".categories-list");async function P(){try{(await A()).forEach(e=>{const{list_name:o}=e,n=`<li class="categories-list-item">
  <button type="button" class="category-btn" data-id="${e.list_name}">${e.list_name}</button>
</li>`;F.innerHTML+=`${n}`})}catch(t){console.log(t)}}P();async function B(t,e){return(await y.get(t)).data.map(s=>`<div class = "category-container"><h2 class="home-book-category">${s.list_name}</h2>
      <ul class="books-list js-book-list">
              ${s.books.slice(0,e).map(({title:m,book_image:L,author:S,_id:T})=>`<li class="book-item"  data_id=${T}>
                      <div class ="img-wrapper">
                          <img class = "book-img" src="${L}" alt="Poster of ${m}"/>
                          <a class = "overlay" href="http://"><span class = "text-overlay">QUICK VIEW</span></a>
                      </div>
                          <h3 class="book-name">${m}</h3>
                          <p class="author-name">${S}</p></li>`).join("")}
              </ul><button class="btn-see-more" type="button" data-id="${s.list_name}">SEE MORE</button></div>`).join("")}const K=document.querySelector(".home-title"),R=document.querySelector(".categories-list"),V=document.querySelector(".js-container");R.addEventListener("click",D);async function D(t){if(t.preventDefault(),!t.target.classList.contains("category-btn"))return;if(p(),t.target.classList.contains("all-categories-btn")){K.innerHTML='Best Sellers <span class="home-title-accent">Books</span>',a();let n=1;window.innerWidth<759?n=1:window.innerWidth<1439?n=3:n=5,B(u.TOP_BOOKS,n).then(r=>{V.innerHTML=r,a(),l()}).catch(r=>d.exports.Notify.failure("Sorry, there is nothing here. Try again later.")).finally(()=>{c()});return}a();const e=t.target.dataset.id,o=await h(e);v(e),f(o),a(),l(),c()}const Q=document.querySelector(".categories");Q.addEventListener("click",z);function z(t){if(t.preventDefault(),t.target.nodeName!=="BUTTON")return;const e=t.target,o=document.querySelector(".active-category");o&&o!==e&&o.classList.remove("active-category"),e.classList.add("active-category"),e.scrollIntoView({block:"center"})}$();let i=1;window.innerWidth<767?i=1:window.innerWidth<1439?i=3:i=5;B(u.TOP_BOOKS,i).then(t=>{u.listOfBooks.insertAdjacentHTML("afterbegin",t),a()}).catch(t=>d.exports.Notify.failure("Sorry, there is nothing here. Try again later.")).finally(()=>c());w();E();const G=document.querySelector(".button-registraition"),J=document.querySelector(".button-login");G.addEventListener("click",O);J.addEventListener("click",C);const X=document.getElementById("logOutButtonBurger"),Y=document.getElementById("logOutButton");Y.addEventListener("click",k);X.addEventListener("click",k);const Z=document.querySelector(".burger_user_board_signup"),tt=document.querySelector(".user_board_signup");tt.addEventListener("click",b);Z.addEventListener("click",b);const et=document.querySelector(".close-modal");et.addEventListener("click",_);
