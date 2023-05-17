import{h as g,L as k,s as r,i as b,n as y,j as L,o as v,p as B,d as f,l as S,e as a,f as l,g as E,c as x}from"./footer-163cfa28.js";const s={shopListEmpty:document.querySelector(".shopping-list-empty"),shopListWrapper:document.querySelector(".shopping-list-card"),shopList:document.querySelector("#booksShopingList"),startMarkup:`<p class="shopping-list-empty-message">
    This page is empty, add some books and proceed to order.
  </p>
  <picture class="shopping-list-empty-img">
    <source
      srcset="img/books@2x.png 1x, img/books@2x.png 2x"
      media="(min-width:1440px)"
    />
    <source
      srcset="img/books@2x.png 1x, img/books@2x.png 2x"
      media="(min-width:768px)"
    />
    <source
      srcset="img/books.png 1x, img/books.png 2x"
      media="(max-width:767px)"
    />
    <img src="img/books.png" alt="books" />
  </picture>`,arrBtnsID:[]};async function c(){let e=g.load(k);if(e){if(!JSON.parse(e).length)return r(),s.shopListEmpty.insertAdjacentHTML("beforeend",s.startMarkup)}else return r(),s.shopListEmpty.insertAdjacentHTML("beforeend",s.startMarkup);s.shopListEmpty.style.display="none",e=JSON.parse(e);try{let o=[];for(let t=0;t<e.length;t+=1){const i=await b(e[t]);o.push(i)}const d=o.map(({_id:t,author:i,book_image:h,description:u,title:n,list_name:m})=>`<li class="sh-list-item">               
                    <img class="sh-list-book-img" src="${h}"" alt="Book's cover. ${n}" />
                    <div class="sh-list-item-main-wrapper">
                       <div class="sh-list-item-top-wrapper">
                         <div class="sh-list-titles">
                           <h2 class="sh-list-book-title">${n}</h2>
                           <h3 class="sh-list-book-category">${m}</h3>
                         </div>                      
                       <button class="sh-list-btn" data_id="${t}" type="button">
                         <svg class="sh-list-icon" width="16" height="16">
                           <use href="./img/sprite.svg#icon-trash"></use>
                         </svg>
                       </button>
                    </div>                       
                    <p class="sh-list-book-descr">${u}</p>
                    <div class="sh-list-item-bottom-wrapper">
                       <h3 class="sh-list-book-author">${i}</h3>
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
                </li>`).join("");r(),s.shopList.insertAdjacentHTML("beforeend",d),document.querySelectorAll(".sh-list-btn").forEach(t=>s.arrBtnsID.push(Object.values(t.attributes).find(i=>i.nodeName==="data_id").value)),s.arrBtnsID.forEach(t=>document.querySelector(`[data_id="${t}"]`).addEventListener("click",p)),console.log(s.arrBtnsID)}catch(o){y.exports.Notify.failure(o.message)}}async function p(e){L(e),s.arrBtnsID.forEach(o=>document.querySelector(`[data_id="${o}"]`).removeEventListener("click",p)),s.arrBtnsID=[],await c()}v();B();const _=document.querySelector(".button-registraition"),I=document.querySelector(".button-login");_.addEventListener("click",f);I.addEventListener("click",S);const O=document.getElementById("logOutButtonBurger"),q=document.getElementById("logOutButton");q.addEventListener("click",a);O.addEventListener("click",a);const w=document.querySelector(".burger_user_board_signup"),$=document.querySelector(".user_board_signup");$.addEventListener("click",l);w.addEventListener("click",l);const M=document.querySelector(".close-modal");M.addEventListener("click",E);x();c();
