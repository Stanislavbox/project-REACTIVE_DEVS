import{a as m,n as c,r as f,s as i,b as g,c as E,o as O,p as _,d as q,l as w,e as v,f as B,g as C}from"./footer-163cfa28.js";const a={TOP_BOOKS:"https://books-backend.p.goit.global/books/top-books",listOfBooks:document.querySelector(".js-container"),target:document.querySelector(".js-guard")};async function L(t){try{const{data:e}=await m.get(`https://books-backend.p.goit.global/books/category?category=${t}`);return e}catch{c.exports.Notify.failure("Sorry, there is nothing here. Try again later.")}}function M({_id:t,title:e,author:o,description:r,book_image:s}){return`
  <li class="books-list-item" data_id=${t}>
    <div class="book-wrap">
      <div class="book-thumb">
        <img class="book-image" src="${s}" loading="lazy" alt="${r}"/>
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
  `}function x(t){return`
      <ul class="category-books-list js-book-list">
        ${t.map(e=>`
              ${M(e)}
          `).join("")}
      </ul>
    `}const I=document.querySelector(".js-container");function S(t){const e=x(t);I.innerHTML=e}const j=document.querySelector(".home-title");function $(t){const e=t.split(" ").slice(0,-1).join(" "),o=t.split(" "),r=o[o.length-1];j.innerHTML=`${e} <span class="home-title-accent">${r}</span>`}const h=document.querySelector(".back-to-top"),H=document.querySelector(".to-top-target"),N=new IntersectionObserver(P);function P(t){t.forEach(e=>{e.isIntersecting?h.classList.add("hidden"):h.classList.remove("hidden")})}function y(t){window.scroll({top:0,behavior:"smooth"})}N.observe(H);h.addEventListener("click",y);const U=document.querySelector(".js-container");U.addEventListener("click",A);async function A(t){if(!t.target.classList.contains("btn-see-more"))return;f(),i();const e=t.target.dataset.id,o=await L(e);$(e);const r=document.querySelectorAll(".category-btn"),s=document.querySelector(".active-category");for(const n of r)n.dataset.id===e&&(n.classList.add("active-category"),n.scrollIntoView({block:"center"}));s.classList.remove("active-category"),S(o),i(),y(),g()}async function K(){try{const{data:t}=await m.get("https://books-backend.p.goit.global/books/category-list");return t}catch{c.exports.Notify.failure("Sorry, there is nothing here. Try again later.")}}const F=document.querySelector(".categories-list");async function W(){try{(await K()).forEach(e=>{const{list_name:o}=e,r=`<li class="categories-list-item">
  <button type="button" class="category-btn" data-id="${e.list_name}">${e.list_name}</button>
</li>`;F.innerHTML+=`${r}`})}catch(t){console.log(t)}}W();let l=2,d=0,u=[];async function T(t){const o=(await m.get(t)).data;for(let s=d;s<l;s+=1)u.push(o[s]);return l+=2,d+=2,u.map(s=>`<div class = "category-container"><h2 class="home-book-category">${s.list_name}</h2>
      <ul class="books-list js-book-list">
              ${s.books.map(({title:n,book_image:p,author:b,_id:k})=>`<li class="book-item"  data_id=${k}>
                      <div class ="img-wrapper">
                          <img class = "book-img" src="${p}" alt="Poster of ${n}"/>
                          <a class = "overlay" href="http://"><span class = "text-overlay">QUICK VIEW</span></a>
                      </div>
                          <h3 class="book-name">${n}</h3>
                          <p class="author-name">${b}</p></li>`).join("")}
              </ul><button class="btn-see-more" type="button" data-id="${s.list_name}">SEE MORE</button></div>`).join("")}function V(t,e){t.forEach(o=>{o.isIntersecting&&Q(a.TOP_BOOKS).then(r=>{a.listOfBooks.insertAdjacentHTML("beforeend",r),e.observe(a.target)}).catch(r=>{console.log(r),c.exports.Notify.failure("Sorry, there is nothing here. Try again later.")}).finally(()=>g())})}async function Q(t){const o=(await m.get(t)).data;for(let s=d;s<l;s+=1)u.length===17&&(observer.unobserve(a.target),c.exports.Notify.warning("We are sorry, but you've reached the end of the list of books. ")),u.push(o[s]);const r=u.slice(d,l).map(s=>`<div class = "category-container"><h2 class="home-book-category">${s.list_name}</h2>
      <ul class="books-list js-book-list">
              ${s.books.map(({title:n,book_image:p,author:b,_id:k})=>`<li class="book-item"  data_id=${k}>
                      <div class ="img-wrapper">
                          <img class = "book-img" src="${p}" alt="Poster of ${n}"/>
                          <a class = "overlay" href="http://"><span class = "text-overlay">QUICK VIEW</span></a>
                      </div>
                          <h3 class="book-name">${n}</h3>
                          <p class="author-name">${b}</p></li>`).join("")}
              </ul><button class="btn-see-more" type="button" data-id="${s.list_name}">SEE MORE</button></div>`).join("");return l+=2,d+=2,r}const R=document.querySelector(".home-title"),D=document.querySelector(".categories-list"),z=document.querySelector(".js-container");D.addEventListener("click",G);async function G(t){if(t.preventDefault(),!t.target.classList.contains("category-btn"))return;if(f(),t.target.classList.contains("all-categories-btn")){R.innerHTML='Best Sellers <span class="home-title-accent">Books</span>',i(),T(a.TOP_BOOKS).then(r=>{z.innerHTML=r,i(),y()}).catch(r=>c.exports.Notify.failure("Sorry, there is nothing here. Try again later.")).finally(()=>{g()});return}i();const e=t.target.dataset.id,o=await L(e);$(e),S(o),i(),y(),g()}const J=document.querySelector(".categories");J.addEventListener("click",X);function X(t){if(t.preventDefault(),t.target.nodeName!=="BUTTON")return;const e=t.target,o=document.querySelector(".active-category");o&&o!==e&&o.classList.remove("active-category"),e.classList.add("active-category"),e.scrollIntoView({block:"center"})}E();let Y=new IntersectionObserver(V,Z);var Z={root:null,rootMargin:"200px",threshold:1};T(a.TOP_BOOKS).then(t=>{a.listOfBooks.insertAdjacentHTML("afterbegin",t),Y.observe(a.target),i()}).catch(t=>c.exports.Notify.failure("Sorry, there is nothing here. Try again later.")).finally(()=>g());O();_();const tt=document.querySelector(".button-registraition"),et=document.querySelector(".button-login");tt.addEventListener("click",q);et.addEventListener("click",w);const ot=document.getElementById("logOutButtonBurger"),st=document.getElementById("logOutButton");st.addEventListener("click",v);ot.addEventListener("click",v);const rt=document.querySelector(".burger_user_board_signup"),nt=document.querySelector(".user_board_signup");nt.addEventListener("click",B);rt.addEventListener("click",B);const at=document.querySelector(".close-modal");at.addEventListener("click",C);
