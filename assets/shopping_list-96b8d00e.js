import{h as l,L as u,s as n,i as d,o as m,d as g,l as h,e as k,f as b,g as y,c as L}from"./footer-477c0461.js";const p={shopListEmpty:document.querySelector(".shopping-list-empty"),shopListWrapper:document.querySelector(".shopping-list-card"),shopList:document.querySelector("#booksShopingList"),startMarkup:`<p class="shopping-list-empty-message">
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
    <img src="./images/books-mob-min.png" alt="books" />
  </picture>`};async function S(){let o=l.load(u);if(!JSON.parse(o).length>0||!o)return n(),p.shopListEmpty.insertAdjacentHTML("beforeend",p.startMarkup);p.shopListEmpty.style.display="none",o=JSON.parse(o);let t=[];for(let s=0;s<o.length;s+=1){const e=await d(o[s]);t.push(e)}const r=t.map(({_id:s,author:e,book_image:a,description:c,title:i})=>`<button class="popup-book-close-btn js-popup-close" data_id=${s} type="button">
      <svg class="popup-book-close-icon js-popup-close" width="24" height="24">
        <use class="js-popup-close" href="./img/sprite.svg#icon-shopping"></use>
      </svg>
    </button>
    <div class="popup-book-wrapper">
      <img class="popup-book-cover" src="${a}"" alt="Book's cover. ${i}" />
      <div class="popup-book-inner">
        <h2 class="popup-book-title">${i}</h2>
        <h3 class="popup-book-author">${e}</h3>
        <p class="popup-book-description">${c}</p>
        <ul class="list popup-book-shops-list">
          <li class="popup-book-shops-item">
            <a
              href=""
              class="popup-book-shops-link popup-shop-icon-rectungular popup-shop-amazon"
            ></a>
          </li>
          <li class="popup-book-shops-item">
            <a
              href=""
              class="popup-book-shops-link popup-shop-icon-sqr popup-shop-apple"
            ></a>
          </li>
          <li class="popup-book-shops-item">
            <a
              href=""
              class="popup-book-shops-link popup-shop-icon-sqr popup-shop-bs"
            ></a>
          </li>
        </ul>
      </div>
    </div>`).join("");n(),p.shopList.insertAdjacentHTML("beforeend",r)}m();const f=document.querySelector(".button-registraition"),v=document.querySelector(".button-login");f.addEventListener("click",g);v.addEventListener("click",h);const x=document.getElementById("logOutButton");x.addEventListener("click",k);const E=document.querySelector(".user_board_signup");E.addEventListener("click",b);const B=document.querySelector(".close-modal");B.addEventListener("click",y);L();S();
