import{h as u,L as g,s as r,i as k,n as b,j as y,o as L,p as v,d as f,l as B,e as n,f as S,g as E,c as x}from"./footer-1e233d4d.js";const s={shopListEmpty:document.querySelector(".shopping-list-empty"),shopListWrapper:document.querySelector(".shopping-list-card"),shopList:document.querySelector("#booksShopingList"),startMarkup:`<p class="shopping-list-empty-message">
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
  </picture>`,arrBtnsID:[]};async function l(){let e=u.load(g);if(e){if(!JSON.parse(e).length)return r(),s.shopListEmpty.insertAdjacentHTML("beforeend",s.startMarkup)}else return r(),s.shopListEmpty.insertAdjacentHTML("beforeend",s.startMarkup);s.shopListEmpty.style.display="none",e=JSON.parse(e);try{let o=[];for(let t=0;t<e.length;t+=1){const i=await k(e[t]);o.push(i)}const p=o.map(({_id:t,author:i,book_image:h,description:d,title:a,list_name:m})=>`<li class="sh-list-item">               
                    <img class="sh-list-book-img" src="${h}"" alt="Book's cover. ${a}" />
                    <div class="sh-list-item-main-wrapper">
                       <div class="sh-list-item-top-wrapper">
                         <div class="sh-list-titles">
                           <h2 class="sh-list-book-title">${a}</h2>
                           <h3 class="sh-list-book-category">${m}</h3>
                         </div>                      
                       <button class="sh-list-btn" data_id="${t}" type="button">
                         <svg class="sh-list-icon" width="16" height="16">
                           <use href="./img/sprite.svg#icon-trash"></use>
                         </svg>
                       </button>
                    </div>                       
                    <p class="sh-list-book-descr">${d}</p>
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
                </li>`).join("");r(),s.shopList.insertAdjacentHTML("beforeend",p),document.querySelectorAll(".sh-list-btn").forEach(t=>s.arrBtnsID.push(Object.values(t.attributes).find(i=>i.nodeName==="data_id").value)),s.arrBtnsID.forEach(t=>document.querySelector(`[data_id="${t}"]`).addEventListener("click",c)),console.log(s.arrBtnsID)}catch(o){b.exports.Notify.failure(o.message)}}async function c(e){y(e),s.arrBtnsID.forEach(o=>document.querySelector(`[data_id="${o}"]`).removeEventListener("click",c)),s.arrBtnsID=[],await l()}L();v();const I=document.querySelector(".button-registraition"),O=document.querySelector(".button-login");I.addEventListener("click",f);O.addEventListener("click",B);const _=document.getElementById("logOutButtonBurger"),q=document.getElementById("logOutButton");q.addEventListener("click",n);_.addEventListener("click",n);const w=document.querySelector(".user_board_signup");w.addEventListener("click",S);const $=document.querySelector(".close-modal");$.addEventListener("click",E);x();l();
