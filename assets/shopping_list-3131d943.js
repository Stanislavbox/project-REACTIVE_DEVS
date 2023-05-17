import{h as a,L as l,s as i,i as g,n as k,j as y,o as L,p as b,d as f,l as S,e as c,f as p,g as v,c as B}from"./footer-163cfa28.js";const s={shopListEmpty:document.querySelector(".shopping-list-empty"),shopList:document.querySelector("#booksShopingList"),startMarkup:`<p class="shopping-list-empty-message">
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
  </picture>`,arrBtnsID:[]};let t=a.load(l);async function x(){if(t){if(!JSON.parse(t).length)return s.shopList.style.display="none",i(),s.shopListEmpty.insertAdjacentHTML("beforeend",s.startMarkup)}else return s.shopList.style.display="none",i(),s.shopListEmpty.insertAdjacentHTML("beforeend",s.startMarkup);s.shopList.style.display="flex",t=JSON.parse(t);try{let e=[];for(let o=0;o<t.length;o+=1){const r=await g(t[o]);e.push(r)}const h=e.map(({_id:o,author:r,book_image:d,description:u,title:n,list_name:m})=>`<li class="sh-list-item">               
                    <img class="sh-list-book-img" src="${d}"" alt="Book's cover. ${n}" />
                    <div class="sh-list-item-main-wrapper">
                       <div class="sh-list-item-top-wrapper">
                         <div class="sh-list-titles">
                           <h2 class="sh-list-book-title">${n}</h2>
                           <h3 class="sh-list-book-category">${m}</h3>
                         </div>                      
                       <button class="sh-list-btn" data_id="${o}" type="button">
                         <svg class="sh-list-icon" width="16" height="16">
                           <use href="./img/sprite.svg#icon-trash"></use>
                         </svg>
                       </button>
                    </div>                       
                    <p class="sh-list-book-descr">${u}</p>
                    <div class="sh-list-item-bottom-wrapper">
                       <h3 class="sh-list-book-author">${r}</h3>
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
                </li>`).join("");i(),s.shopList.innerHTML=h,t.forEach(o=>document.querySelector(`[data_id="${o}"]`).addEventListener("click",E))}catch(e){k.exports.Notify.failure(e.message)}}async function E(e){if(i(),y(e),t=a.load(l),JSON.parse(t).length){e.currentTarget.closest(".sh-list-item").style.display="none",i();return}s.shopList.innerHTML="",s.shopList.style.display="none",s.shopListEmpty.innerHTML=s.startMarkup,i()}L();b();const _=document.querySelector(".button-registraition"),O=document.querySelector(".button-login");_.addEventListener("click",f);O.addEventListener("click",S);const M=document.getElementById("logOutButtonBurger"),I=document.getElementById("logOutButton");I.addEventListener("click",c);M.addEventListener("click",c);const T=document.querySelector(".burger_user_board_signup"),q=document.querySelector(".user_board_signup");q.addEventListener("click",p);T.addEventListener("click",p);const w=document.querySelector(".close-modal");w.addEventListener("click",v);B();x();
