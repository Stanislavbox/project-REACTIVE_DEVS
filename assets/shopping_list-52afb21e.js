import{h as d,L as m,s as i,i as u,o as g,d as k,l as b,e as n,f as y,g as L,c as v}from"./footer-76b57e67.js";const t={shopListEmpty:document.querySelector(".shopping-list-empty"),shopListWrapper:document.querySelector(".shopping-list-card"),shopList:document.querySelector("#booksShopingList"),startMarkup:`<p class="shopping-list-empty-message">
    This page is empty, add some books and proceed to order.
  </p>
  <picture class="shopping-list-empty-img">
    <source
      srcset="./img/books@2x.png 1x, ./img/books@2x.png 2x"
      media="(min-width:1440px)"
    />
    <source
      srcset="./img/books@2x.png 1x, ./img/books@2x.png 2x"
      media="(min-width:768px)"
    />
    <source
      srcset="./img/books.png 1x, ./img/books.png 2x"
      media="(max-width:767px)"
    />
    <img src="./img/books.png" alt="books" />
  </picture>`};async function f(){let s=d.load(m);if(s){if(!JSON.parse(s).length)return i(),t.shopListEmpty.insertAdjacentHTML("beforeend",t.startMarkup)}else return i(),t.shopListEmpty.insertAdjacentHTML("beforeend",t.startMarkup);t.shopListEmpty.style.display="none",s=JSON.parse(s);let l=[];for(let e=0;e<s.length;e+=1){const o=await u(s[e]);l.push(o)}const a=l.map(({_id:e,author:o,book_image:c,description:p,title:r,list_name:h})=>`<li class="sh-list-item">               
                    <img class="sh-list-book-img" src="${c}"" alt="Book's cover. ${r}" />
                    <div class="sh-list-item-main-wrapper">
                       <div class="sh-list-item-top-wrapper">
                         <div class="sh-list-titles">
                           <h2 class="sh-list-book-title">${r}</h2>
                           <h3 class="sh-list-book-category">${h}</h3>
                         </div>                      
                       <button class="sh-list-btn" data_id="${e}" type="button">
                         <svg class="sh-list-icon" width="16" height="16">
                           <use href="./img/sprite.svg#icon-trash"></use>
                         </svg>
                       </button>
                    </div>                       
                    <p class="sh-list-book-descr">${p}</p>
                    <div class="sh-list-item-bottom-wrapper">
                       <h3 class="sh-list-book-author">${o}</h3>
                       <ul class="sh-list-shops-list">
                         <li class="sh-list-shops-list-item">
                           <a href="" class="sh-list-shops-link sh-list-shops-amazon"></a>
                         </li>
                         <li class="sh-list-shops-list-item">
                            <a href="" class="sh-list-shops-link sh-list-shops-apple"></a>
                         </li>
                         <li class="sh-list-shops-list-item">
                           <a href="" class="sh-list-shops-link sh-list-shops-bs"></a>
                         </li>
                       </ul>
                    </div>                   
                  </div>
                </li>`).join("");i(),t.shopList.insertAdjacentHTML("beforeend",a)}g();const S=document.querySelector(".button-registraition"),B=document.querySelector(".button-login");S.addEventListener("click",k);B.addEventListener("click",b);const x=document.getElementById("logOutButtonBurger"),E=document.getElementById("logOutButton");E.addEventListener("click",n);x.addEventListener("click",n);const O=document.querySelector(".user_board_signup");O.addEventListener("click",y);const w=document.querySelector(".close-modal");w.addEventListener("click",L);v();f();
