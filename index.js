import{a as y,S as L,i as f}from"./assets/vendor-iQ3dbmWf.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))l(t);new MutationObserver(t=>{for(const i of t)if(i.type==="childList")for(const c of i.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&l(c)}).observe(document,{childList:!0,subtree:!0});function r(t){const i={};return t.integrity&&(i.integrity=t.integrity),t.referrerPolicy&&(i.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?i.credentials="include":t.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function l(t){if(t.ep)return;t.ep=!0;const i=r(t);fetch(t.href,i)}})();const x="48965067-3962fe69a0505f7cd9cc5ea86",b=y.create({baseURL:"https://pixabay.com/api",params:{key:x,image_type:"photo",orientation:"horizontal",safeSearch:!0,per_page:40}});async function u(e,o){const r={q:encodeURIComponent(e),page:o};return(await b.get("",{params:r})).data}const S=new L(".gallery a",{captionsData:"alt",captionDelay:250,close:"true"});function C(e){return e.map(r=>`<li class="gallery-item">
                <a class="gallery-link" href="${r.webformatURL}">
                  <img
                    class="gallery-image"
                    src="${r.webformatURL}"
                    alt="${r.tags.split(", ").filter((l,t,i)=>i.indexOf(l)===t).join(", ")}"
                  />
                  <ul class="image-info-list">
                    <li class=image-info-item>
                        <p class="info-title info-text">Likes</p>
                        <p class="info-text">${r.likes}</p>
                    </li>
                    <li class=image-info-item>
                        <p class="info-title info-text">Views</p>
                        <p class="info-text">${r.views}</p>
                    </li>
                    <li class=image-info-item>
                        <p class="info-title info-text">Comments</p>
                        <p class="info-text">${r.comments}</p>
                    </li>
                    <li class=image-info-item>
                        <p class="info-title info-text">Downloads</p>
                        <p class="info-text">${r.downloads}</p>
                    </li>
                  </ul>
                </a>
              </li>`).join("")}function m(e,o){o.insertAdjacentHTML("beforeend",C(e)),S.refresh()}const s={searchForm:document.querySelector(".form"),gallery:document.querySelector(".gallery"),loader:document.querySelector(".loader"),loadMoreBtn:document.querySelector(".load-more-btn")};let n,a=1;s.searchForm.addEventListener("submit",v);s.loadMoreBtn.addEventListener("click",w);async function v(e){if(e.preventDefault(),s.gallery.innerHTML="",a=1,g(),n=e.target.elements.searchQuery.value.trim(),n===""){f.error({title:"Error",message:"Your query can not be empty!",backgroundColor:"#ef4040",titleColor:"#fff",messageColor:"#fff",titleSize:"16px",titleLineHeight:"1.5",messageSize:"16px",messageLineHeight:"1.5",icon:"fa fa-exclamation-circle",iconColor:"#fff",position:"topRight"});return}else try{h();const o=await u(n,a);if(o.hits.length===0){d(),f.info({title:"Info",message:"Sorry, there are no images matching your search query. Please try again!",backgroundColor:"#ef4040",maxWidth:500,titleColor:"#fff",messageColor:"#fff",titleSize:"16px",titleLineHeight:"1.5",messageSize:"16px",messageLineHeight:"1.5",icon:"fa fa-exclamation-circle",iconColor:"#fff",position:"topRight"});return}else a+=1,m(o.hits,s.gallery),p(o.total);d()}catch(o){console.log(o)}e.target.reset()}async function w(){try{h();const e=await u(n,a);a+=1,p(e.total),m(e.hits,s.gallery),d(),H()}catch(e){console.log(e)}}function M(){s.loadMoreBtn.classList.remove("visually-hidden")}function g(){s.loadMoreBtn.classList.add("visually-hidden")}function p(e){Math.ceil(e/40)<a?(g(),f.info({title:"Info",message:"We're sorry, but you've reached the end of search results.",backgroundColor:"#b0e7f7",maxWidth:500,titleColor:"#fff",messageColor:"#fff",titleSize:"16px",titleLineHeight:"1.5",messageSize:"16px",messageLineHeight:"1.5",icon:"fa fa-exclamation-circle",iconColor:"#fff",position:"topRight"})):M()}function h(){s.loader.classList.remove("visually-hidden")}function d(){s.loader.classList.add("visually-hidden")}function H(){const e=s.gallery.children[0].getBoundingClientRect().height*2;scrollBy({behavior:"smooth",top:e})}
//# sourceMappingURL=index.js.map
