(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))l(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const i of t.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&l(i)}).observe(document,{childList:!0,subtree:!0});function n(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerpolicy&&(t.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?t.credentials="include":e.crossorigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function l(e){if(e.ep)return;e.ep=!0;const t=n(e);fetch(e.href,t)}})();const u={openBurgerBtn:document.querySelector(".burger-menu"),closeBurgerBtn:document.querySelector(".mobile-menu__button"),burger:document.querySelector(".mobile-menu-container"),themeSwitcher:document.querySelector('input[type="checkbox"]')},p=document.querySelector("body"),y=document.querySelector(".header-container"),f=document.querySelector(".icon-close-mobile"),k=document.querySelector(".icon-close-burger"),b=document.querySelector(".modal"),S=document.querySelector(".icon-close-modal"),L=document.querySelector(".menu-burger-icon"),w=document.querySelector(".basket-icon");document.querySelector(".shop-list-placeholder");const E=document.querySelector(".site-nav"),d="theme";let g;E.addEventListener("click",M);function M(o){if(!(!o.target.classList.contains("site-nav-item-home")||!o.target.classList.contains("site-nav-item-shop"))){if(o.target.classList.contains("active"))return;console.log(o.target)}}const m=localStorage.getItem(d);console.log(m);m==null&&(g="light",localStorage.setItem(d,JSON.stringify(g)),u.themeSwitcher.checked=!1);m&&(localStorage.getItem(d)==="dark"?(u.themeSwitcher.checked=!0,v(),console.log("1111111")):(u.themeSwitcher.checked=!1,console.log("222222")));u.themeSwitcher.addEventListener("change",B);function v(){p.classList.add("dark"),y.classList.add("dark"),f.classList.add("dark"),k.classList.add("dark"),L.classList.add("dark"),w.classList.add("dark"),b.classList.add("dark"),S.classList.add("dark")}function I(){p.classList.remove("dark"),y.classList.remove("dark"),f.classList.remove("dark"),k.classList.remove("dark"),L.classList.remove("dark"),w.classList.remove("dark"),b.classList.remove("dark"),S.classList.remove("dark")}function B(o){const r=o.target.checked;console.log(r),r?(localStorage.setItem(d,"dark"),v()):(localStorage.setItem(d,"light"),I())}(()=>{const o=document.querySelector(".backdrop-header"),r=document.querySelector(".js-menu-container"),n=document.querySelector(".js-open-menu"),l=document.querySelectorAll(".js-close-menu"),e=document.querySelector(".burger-menu"),t=document.querySelector(".mob-menu-close"),i=()=>{const s=n.getAttribute("aria-expanded")==="true"||!1;n.setAttribute("aria-expanded",!s),e.classList.toggle("is-hidden-burger"),r.classList.toggle("is-open"),o.classList.toggle("is-hidden-mobile"),t.classList.toggle("is-hidden-burger");const c=s?"enableBodyScroll":"disableBodyScroll";bodyScrollLock[c](document.body)};n.addEventListener("click",i),l.forEach(s=>{s.addEventListener("click",i)}),window.matchMedia("(min-width: 768px)").addEventListener("change",s=>{s.matches&&(r.classList.remove("is-open"),o.classList.add("is-hidden-mobile"),n.setAttribute("aria-expanded",!1),bodyScrollLock.enableBodyScroll(document.body))})})();const C=[{title:"Save the Children",url:"https://www.savethechildren.net/what-we-do/emergencies/ukraine-crisis",img:"../img/save-the-children.png",img2x:"../img/save-the-children-2x.png"},{title:"Project HOPE",url:"https://www.projecthope.org/country/ukraine/",img:"../img/project-hope.png",img2x:"../img/project-hope-2x.png"},{title:"International Medical Corps",url:"https://internationalmedicalcorps.org/country/ukraine/",img:"../img/international-medical-corps.png",img2x:"../img/international-medical-corps-2x.png"},{title:"RAZOM",url:"https://www.razomforukraine.org/",img:"../img/razom.png",img2x:"../img/razom-2x.png"},{title:"Action against hunger",url:"https://www.actionagainsthunger.org/location/europe/ukraine/",img:"../img/action-against-hunger.png",img2x:"../img/action-against-hunger-2x.png"},{title:"Serhiy Prytula Charity Foundation",url:"https://prytulafoundation.org/en",img:"../img/charity-foundation-sergiy-prytula.png",img2x:"../img/charity-foundation-sergiy-prytula-2x.png"},{title:"Medicins Sans Frontieres",url:"https://www.msf.org/ukraine",img:"../img/medecins-sans-frontieres.png",img2x:"../img/medecins-sans-frontieres-2x.png"},{title:"World vision",url:"https://www.wvi.org/emergencies/ukraine",img:"../img/world-vision.png",img2x:"../img/world-vision-2x.png"},{title:"UNITED24",url:"https://u24.gov.ua/uk",img:"../img/united24.png",img2x:"../img/united24-2x.png"}],h=document.querySelector(".list"),x=document.getElementById("toggleButton"),A=x.querySelector("svg use");let a=!0;function q(){h.innerHTML="";const o=a?0:3,r=a?6:9;C.slice(o,r).forEach((n,l)=>{const e=document.createElement("li"),t=document.createElement("a");t.target="_blank",t.rel="noopener noreferrer nofollow";const i=document.createElement("span"),s=(o+l+1).toString().padStart(2,"0");i.textContent=s;const c=document.createElement("img");c.src=n.img,c.srcset=`${n.img} 1x, ${n.img2x} 2x`,c.alt=n.title,c.classList.add("white-image"),t.href=n.url,i.classList.add("number"),t.appendChild(c),e.appendChild(i),e.appendChild(t),h.appendChild(e)}),a=!a,A.setAttribute("href",a?"./img/icon.svg#icon-support-ukr-scroll-up":"./img/icon.svg#icon-support-ukr-scroll-down")}x.addEventListener("click",q);q();
