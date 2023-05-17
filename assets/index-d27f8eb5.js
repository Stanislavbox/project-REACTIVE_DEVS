import{a as g,n as l,r as m,s as r,b as c,c as T,o as $,p as E,d as O,l as _,e as p,f as k,g as q}from"./footer-414ffc43.js";const d={TOP_BOOKS:"https://books-backend.p.goit.global/books/top-books",listOfBooks:document.querySelector(".js-container")};async function b(t){try{const{data:e}=await g.get(`https://books-backend.p.goit.global/books/category?category=${t}`);return e}catch{l.exports.Notify.failure("Sorry, there is nothing here. Try again later.")}}function C({_id:t,title:e,author:o,description:n,book_image:a}){return`
  <li class="books-list-item" data_id=${t}>
    <div class="book-wrap">
      <div class="book-thumb">
        <img class="book-image" src="${a}" loading="lazy" alt="${n}"/>
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
  `}function w(t){return`
      <ul class="category-books-list js-book-list">
        ${t.map(e=>`
              ${C(e)}
          `).join("")}
      </ul>
    `}const M=document.querySelector(".js-container");function h(t){const e=w(t);M.innerHTML=e}const j=document.querySelector(".home-title");function f(t){const e=t.split(" ").slice(0,-1).join(" "),o=t.split(" "),n=o[o.length-1];j.innerHTML=`${e} <span class="home-title-accent">${n}</span>`}const u=document.querySelector(".back-to-top"),x=document.querySelector(".to-top-target"),I=new IntersectionObserver(H);function H(t){t.forEach(e=>{e.isIntersecting?u.classList.add("hidden"):u.classList.remove("hidden")})}function i(t){window.scroll({top:0,behavior:"smooth"})}I.observe(x);u.addEventListener("click",i);const N=document.querySelector(".js-container");N.addEventListener("click",U);async function U(t){if(!t.target.classList.contains("btn-see-more"))return;m(),r();const e=t.target.dataset.id,o=await b(e);f(e);const n=document.querySelectorAll(".category-btn"),a=document.querySelector(".active-category");for(const s of n)s.dataset.id===e&&(s.classList.add("active-category"),s.scrollIntoView({block:"center"}));a.classList.remove("active-category"),h(o),r(),i(),c()}async function A(){try{const{data:t}=await g.get("https://books-backend.p.goit.global/books/category-list");return t}catch{l.exports.Notify.failure("Sorry, there is nothing here. Try again later.")}}const F=document.querySelector(".categories-list");async function P(){try{(await A()).forEach(e=>{const{list_name:o}=e,n=`<li class="categories-list-item">
  <button type="button" class="category-btn" data-id="${e.list_name}">${e.list_name}</button>
</li>`;F.innerHTML+=`${n}`})}catch(t){console.log(t)}}P();async function v(t,e){return(await g.get(t)).data.map(s=>`<div class = "category-container"><h2 class="home-book-category">${s.list_name}</h2>
      <ul class="books-list js-book-list">
              ${s.books.slice(0,e).map(({title:y,book_image:B,author:L,_id:S})=>`<li class="book-item"  data_id=${S}>
                      <div class ="img-wrapper">
                          <img class = "book-img" src="${B}" alt="Poster of ${y}"/>
                          <a class = "overlay" href="http://"><span class = "text-overlay">QUICK VIEW</span></a>
                      </div>
                          <h3 class="book-name">${y}</h3>
                          <p class="author-name">${L}</p></li>`).join("")}
              </ul><button class="btn-see-more" type="button" data-id="${s.list_name}">SEE MORE</button></div>`).join("")}const K=document.querySelector(".home-title"),V=document.querySelector(".categories-list"),W=document.querySelector(".js-container");V.addEventListener("click",D);async function D(t){if(t.preventDefault(),!t.target.classList.contains("category-btn"))return;if(m(),t.target.classList.contains("all-categories-btn")){K.innerHTML='Best Sellers <span class="home-title-accent">Books</span>',r(),v(d.TOP_BOOKS).then(n=>{W.innerHTML=n,r(),i()}).catch(n=>l.exports.Notify.failure("Sorry, there is nothing here. Try again later.")).finally(()=>{c()});return}r();const e=t.target.dataset.id,o=await b(e);f(e),h(o),r(),i(),c()}const Q=document.querySelector(".categories");Q.addEventListener("click",z);function z(t){if(t.preventDefault(),t.target.nodeName!=="BUTTON")return;const e=t.target,o=document.querySelector(".active-category");o&&o!==e&&o.classList.remove("active-category"),e.classList.add("active-category"),e.scrollIntoView({block:"center"})}T();v(d.TOP_BOOKS).then(t=>{d.listOfBooks.insertAdjacentHTML("afterbegin",t),r()}).catch(t=>l.exports.Notify.failure("Sorry, there is nothing here. Try again later.")).finally(()=>c());$();E();const R=document.querySelector(".button-registraition"),G=document.querySelector(".button-login");R.addEventListener("click",O);G.addEventListener("click",_);const J=document.getElementById("logOutButtonBurger"),X=document.getElementById("logOutButton");X.addEventListener("click",p);J.addEventListener("click",p);const Y=document.querySelector(".burger_user_board_signup"),Z=document.querySelector(".user_board_signup");Z.addEventListener("click",k);Y.addEventListener("click",k);const tt=document.querySelector(".close-modal");tt.addEventListener("click",q);
