(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))g(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const i of t.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&g(i)}).observe(document,{childList:!0,subtree:!0});function o(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerpolicy&&(t.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?t.credentials="include":e.crossorigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function g(e){if(e.ep)return;e.ep=!0;const t=o(e);fetch(e.href,t)}})();const l={openBurgerBtn:document.querySelector(".burger-menu"),closeBurgerBtn:document.querySelector(".mobile-menu__button"),burger:document.querySelector(".mobile-menu-container"),themeSwitcher:document.querySelector('input[type="checkbox"]')};console.dir(l.themeSwitcher);const u=document.querySelector("body"),p=document.querySelector(".header-container");console.log("++++++",u);const a="theme";let d;const m=localStorage.getItem(a);console.log(m);m==null&&(d="light",localStorage.setItem(a,JSON.stringify(d)),l.themeSwitcher.checked=!1);m&&(localStorage.getItem(a)==="dark"?(l.themeSwitcher.checked=!0,f(),console.log("1111111")):(l.themeSwitcher.checked=!1,console.log("222222")));l.themeSwitcher.addEventListener("change",x);function f(){u.classList.add("dark"),p.classList.add("dark")}function S(){u.classList.remove("dark"),p.classList.remove("dark")}function x(r){const n=r.target.checked;console.log(n),n?(localStorage.setItem(a,"dark"),f()):(localStorage.setItem(a,"light"),S())}const v=[{title:"Save the Children",url:"https://www.savethechildren.net/what-we-do/emergencies/ukraine-crisis",img:"../img/save-the-children.png",img2x:"../img/save-the-children-2x.png"},{title:"Project HOPE",url:"https://www.projecthope.org/country/ukraine/",img:"./img/project-hope.png",img2x:"./img/project-hope-2x.png"},{title:"International Medical Corps",url:"https://internationalmedicalcorps.org/country/ukraine/",img:"./img/international-medical-corps.png",img2x:"./img/international-medical-corps-2x.png"},{title:"RAZOM",url:"https://www.razomforukraine.org/",img:"./img/razom.png",img2x:"./img/razom-2x.png"},{title:"Action against hunger",url:"https://www.actionagainsthunger.org/location/europe/ukraine/",img:"./img/action-against-hunger.png",img2x:"./img/action-against-hunger-2x.png"},{title:"Serhiy Prytula Charity Foundation",url:"https://prytulafoundation.org/en",img:"./img/charity-foundation-sergiy-prytula.png",img2x:"./img/charity-foundation-sergiy-prytula-2x.png"},{title:"Medicins Sans Frontieres",url:"https://www.msf.org/ukraine",img:"./img/medecins-sans-frontieres.png",img2x:"./img/medecins-sans-frontieres-2x.png"},{title:"World vision",url:"https://www.wvi.org/emergencies/ukraine",img:"./img/world-vision.png",img2x:"./img/world-vision-2x.png"},{title:"UNITED24",url:"https://u24.gov.ua/uk",img:"./img/united24.png",img2x:"./img/united24-2x.png"}],h=document.querySelector(".list"),y=document.getElementById("toggleButton"),b=y.querySelector("svg use");let s=!0;function w(){h.innerHTML="";const r=s?0:3,n=s?6:9;v.slice(r,n).forEach((o,g)=>{const e=document.createElement("li"),t=document.createElement("a");t.target="_blank",t.rel="noopener noreferrer nofollow";const i=document.createElement("span"),k=(r+g+1).toString().padStart(2,"0");i.textContent=k;const c=document.createElement("img");c.src=o.img,c.srcset="${charity.img} 1x, ${charity.img2x} 2x",c.alt=o.title,c.classList.add("white-image"),t.href=o.url,i.classList.add("number"),t.appendChild(c),e.appendChild(i),e.appendChild(t),h.appendChild(e)}),s=!s,b.setAttribute("href",s?"./img/icon.svg#icon-support-ukr-scroll-up":"./img/icon.svg#icon-support-ukr-scroll-down")}y.addEventListener("click",w);w();
