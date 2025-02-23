import{a as c,S as f,i as l}from"./assets/vendor-U_JCc_sE.js";(function(){const i=document.createElement("link").relList;if(i&&i.supports&&i.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))n(e);new MutationObserver(e=>{for(const o of e)if(o.type==="childList")for(const a of o.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&n(a)}).observe(document,{childList:!0,subtree:!0});function t(e){const o={};return e.integrity&&(o.integrity=e.integrity),e.referrerPolicy&&(o.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?o.credentials="include":e.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function n(e){if(e.ep)return;e.ep=!0;const o=t(e);fetch(e.href,o)}})();const m="48965067-3962fe69a0505f7cd9cc5ea86",p=c.create({baseURL:"https://pixabay.com/api",params:{key:m,image_type:"photo",orientation:"horizontal",safeSearch:!0}});function u(r){const i={q:encodeURIComponent(r)};return p.get("",{params:i}).then(t=>t.data.hits)}const g=new f(".gallery a",{captionsData:"alt",captionDelay:250,close:"true"});function d(r){return console.log(r),r.map(t=>`<li class="gallery-item">
                <a class="gallery-link" href="${t.webformatURL}">
                  <img
                    class="gallery-image"
                    src="${t.webformatURL}"
                    alt="${t.tags.split(", ").filter((n,e,o)=>o.indexOf(n)===e).join(", ")}"
                  />
                  <ul class="image-info-list">
                    <li class=image-info-item>
                        <p class="info-title info-text">Likes</p>
                        <p class="info-text">${t.likes}</p>
                    </li>
                    <li class=image-info-item>
                        <p class="info-title info-text">Views</p>
                        <p class="info-text">${t.views}</p>
                    </li>
                    <li class=image-info-item>
                        <p class="info-title info-text">Comments</p>
                        <p class="info-text">${t.comments}</p>
                    </li>
                    <li class=image-info-item>
                        <p class="info-title info-text">Downloads</p>
                        <p class="info-text">${t.downloads}</p>
                    </li>
                  </ul>
                </a>
              </li>`).join("")}function y(r,i){i.innerHTML="",i.insertAdjacentHTML("beforeend",d(r)),g.refresh()}const s={searchForm:document.querySelector(".form"),gallery:document.querySelector(".gallery"),loadingMessage:document.querySelector(".loading-message")};s.searchForm.addEventListener("submit",h);function h(r){r.preventDefault(),s.gallery.innerHTML="";const i=r.target.elements.searchQuery.value.trim();if(i===""){l.error({title:"Error",message:"Your query can not be empty!",backgroundColor:"#ef4040",titleColor:"#fff",messageColor:"#fff",titleSize:"16px",titleLineHeight:"1.5",messageSize:"16px",messageLineHeight:"1.5",icon:"fa fa-exclamation-circle",iconColor:"#fff",position:"topRight"});return}else s.loadingMessage.innerHTML='<span class="loader"></span>',u(i).then(t=>{if(t.length===0){l.info({title:"Info",message:"Sorry, there are no images matching your search query. Please try again!",backgroundColor:"#ef4040",maxWidth:500,titleColor:"#fff",messageColor:"#fff",titleSize:"16px",titleLineHeight:"1.5",messageSize:"16px",messageLineHeight:"1.5",icon:"fa fa-exclamation-circle",iconColor:"#fff",position:"topRight"});return}else y(t,s.gallery);s.loadingMessage.textContent=""}).catch(t=>console.log(t));r.target.reset()}
//# sourceMappingURL=index.js.map
