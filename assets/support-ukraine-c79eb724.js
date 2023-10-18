(function(){const i=document.createElement("link").relList;if(i&&i.supports&&i.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))s(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const o of t.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&s(o)}).observe(document,{childList:!0,subtree:!0});function r(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerpolicy&&(t.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?t.credentials="include":e.crossorigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function s(e){if(e.ep)return;e.ep=!0;const t=r(e);fetch(e.href,t)}})();const c={openBurgerBtn:document.querySelector(".burger-menu"),closeBurgerBtn:document.querySelector(".mobile-menu__button"),burger:document.querySelector(".mobile-menu-container"),themeSwitcher:document.querySelector('input[type="checkbox"]')};console.dir(c.themeSwitcher);const y=document.querySelector("body"),k=document.querySelector(".header-container"),L=document.querySelector(".icon-close-mobile"),u=document.querySelector(".icon-close-burger"),S=document.querySelector(".modal"),b=document.querySelector(".icon-close-modal"),m=document.querySelector(".menu-burger-icon"),w=document.querySelector(".basket-icon");document.querySelector(".shop-list-placeholder");const I=document.querySelector(".site-nav"),d="theme";let p;I.addEventListener("click",M);function M(n){if(!(!n.target.classList.contains("site-nav-item-home")||!n.target.classList.contains("site-nav-item-shop"))){if(n.target.classList.contains("active"))return;console.log(n.target)}}const h=localStorage.getItem(d);h==null&&(p="light",localStorage.setItem(d,JSON.stringify(p)),c.themeSwitcher.checked=!1);h&&(localStorage.getItem(d)==="dark"?(c.themeSwitcher.checked=!0,v()):c.themeSwitcher.checked=!1);c.themeSwitcher.addEventListener("change",x);function v(){y.classList.add("dark"),k.classList.add("dark"),L.classList.add("dark"),u.classList.add("dark"),m.classList.add("dark"),w.classList.add("dark"),S.classList.add("dark"),b.classList.add("dark")}function B(){y.classList.remove("dark"),k.classList.remove("dark"),L.classList.remove("dark"),u.classList.remove("dark"),m.classList.remove("dark"),w.classList.remove("dark"),S.classList.remove("dark"),b.classList.remove("dark")}c.themeSwitcher.addEventListener("change",x);function x(n){n.target.checked?(localStorage.setItem(d,"dark"),v()):(localStorage.setItem(d,"light"),B())}(()=>{const n=document.querySelector(".backdrop-header"),i=document.querySelector(".js-menu-container"),r=document.querySelector(".js-open-menu"),s=document.querySelectorAll(".js-close-menu"),e=document.querySelector(".mob-menu-close"),t=()=>{const o=r.getAttribute("aria-expanded")==="true"||!1;r.setAttribute("aria-expanded",!o),n.classList.toggle("is-hidden-mobile"),e.classList.toggle("is-hidden-burger"),m.classList.toggle("is-hidden-burger"),u.classList.toggle("is-hidden-burger");const g=o?"enableBodyScroll":"disableBodyScroll";bodyScrollLock[g](document.body)};r.addEventListener("click",t),s.forEach(o=>{o.addEventListener("click",t)}),window.matchMedia("(min-width: 768px)").addEventListener("change",o=>{o.matches&&(i.classList.remove("is-open"),n.classList.add("is-hidden-mobile"),m.classList.remove("is-hidden-burger"),u.classList.add("is-hidden-burger"),r.setAttribute("aria-expanded",!1),bodyScrollLock.enableBodyScroll(document.body))})})();const C=[{title:"Save the Children",url:"https://www.savethechildren.net/what-we-do/emergencies/ukraine-crisis",img:"../img/save-the-children.png",img2x:"../img/save-the-children-2x.png"},{title:"Project HOPE",url:"https://www.projecthope.org/country/ukraine/",img:"../img/project-hope.png",img2x:"../img/project-hope-2x.png"},{title:"International Medical Corps",url:"https://internationalmedicalcorps.org/country/ukraine/",img:"../img/international-medical-corps.png",img2x:"../img/international-medical-corps-2x.png"},{title:"RAZOM",url:"https://www.razomforukraine.org/",img:"../img/razom.png",img2x:"../img/razom-2x.png"},{title:"Action against hunger",url:"https://www.actionagainsthunger.org/location/europe/ukraine/",img:"../img/action-against-hunger.png",img2x:"../img/action-against-hunger-2x.png"},{title:"Serhiy Prytula Charity Foundation",url:"https://prytulafoundation.org/en",img:"../img/charity-foundation-sergiy-prytula.png",img2x:"../img/charity-foundation-sergiy-prytula-2x.png"},{title:"Medicins Sans Frontieres",url:"https://www.msf.org/ukraine",img:"../img/medecins-sans-frontieres.png",img2x:"../img/medecins-sans-frontieres-2x.png"},{title:"World vision",url:"https://www.wvi.org/emergencies/ukraine",img:"../img/world-vision.png",img2x:"../img/world-vision-2x.png"},{title:"UNITED24",url:"https://u24.gov.ua/uk",img:"../img/united24.png",img2x:"../img/united24-2x.png"}],f=document.querySelector(".list"),q=document.getElementById("toggleButton"),A=q.querySelector("svg use");let a=!0;function E(){f.innerHTML="";const n=a?0:3,i=a?6:9;C.slice(n,i).forEach((r,s)=>{const e=document.createElement("li"),t=document.createElement("a");t.target="_blank",t.rel="noopener noreferrer nofollow";const o=document.createElement("span"),g=(n+s+1).toString().padStart(2,"0");o.textContent=g;const l=document.createElement("img");l.src=r.img,l.srcset=`${r.img} 1x, ${r.img2x} 2x`,l.alt=r.title,l.classList.add("white-image"),t.href=r.url,o.classList.add("number"),t.appendChild(l),e.appendChild(o),e.appendChild(t),f.appendChild(e)}),a=!a,A.setAttribute("href",a?"./img/icon.svg#icon-support-ukr-scroll-up":"./img/icon.svg#icon-support-ukr-scroll-down")}q.addEventListener("click",E);E();
