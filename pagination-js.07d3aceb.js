var e,t="u">typeof globalThis?globalThis:"u">typeof self?self:"u">typeof window?window:"u">typeof global?global:{},i={},o=0/0,n=/^\s+|\s+$/g,l=/^[-+]0x[0-9a-f]+$/i,s=/^0b[01]+$/i,a=/^0o[0-7]+$/i,r=parseInt,c="object"==typeof t&&t&&t.Object===Object&&t,u="object"==typeof self&&self&&self.Object===Object&&self,f=c||u||Function("return this")(),p=Object.prototype.toString,d=Math.max,m=Math.min,y=function(){return f.Date.now()};function b(e){var t=typeof e;return!!e&&("object"==t||"function"==t)}function v(e){if("number"==typeof e)return e;if("symbol"==typeof(t=e)||t&&"object"==typeof t&&"[object Symbol]"==p.call(t))return o;if(b(e)){var t,i="function"==typeof e.valueOf?e.valueOf():e;e=b(i)?i+"":i}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(n,"");var c=s.test(e);return c||a.test(e)?r(e.slice(2),c?2:8):l.test(e)?o:+e}i=function(e,t,i){var o,n,l,s,a,r,c=0,u=!1,f=!1,p=!0;if("function"!=typeof e)throw TypeError("Expected a function");function g(t){var i=o,l=n;return o=n=void 0,c=t,s=e.apply(l,i)}function h(e){var i=e-r,o=e-c;return void 0===r||i>=t||i<0||f&&o>=l}function j(){var e,i,o,n=y();if(h(n))return w(n);a=setTimeout(j,(e=n-r,i=n-c,o=t-e,f?m(o,l-i):o))}function w(e){return(a=void 0,p&&o)?g(e):(o=n=void 0,s)}function $(){var e,i=y(),l=h(i);if(o=arguments,n=this,r=i,l){if(void 0===a)return c=e=r,a=setTimeout(j,t),u?g(e):s;if(f)return a=setTimeout(j,t),g(r)}return void 0===a&&(a=setTimeout(j,t)),s}return t=v(t)||0,b(i)&&(u=!!i.leading,l=(f="maxWait"in i)?d(v(i.maxWait)||0,t):l,p="trailing"in i?!!i.trailing:p),$.cancel=function(){void 0!==a&&clearTimeout(a),c=0,o=r=n=a=void 0},$.flush=function(){return void 0===a?s:w(y())},$};let g=1,h="",j=document.querySelector(".list"),w=document.querySelector(".button"),$=document.querySelector(".searchInput");function T(){fetch(`https://pixabay.com/api/?key=55978698-0d602613e63391cce9d7defd1&q=${h}&image_type=photo&page=${g}&per_page=9&orientation=horizontal`).then(e=>e.json()).then(e=>{let t;9*g>=e.totalHits&&(w.disabled=!0,w.textContent="No more images to show",w.classList.add("disabled-btn")),t=e.hits.map(({largeImageURL:e,views:t,downloads:i,likes:o,comments:n,tags:l,name:s})=>`<li class="item">
  <img src="${e}" alt="${l}" class="image">
  <h2 class="title">${s}</h2>
  <ul class="stats">
    <li class="elem">
       <p class="views">Views:${t}</p>
    </li>
    <li class="elem">
       <p class="downloads">Downloads:${i}</p>
    </li>
    <li class="elem">
       <p class="likes">Likes:${o}</p>
    </li>
    <li class="elem">
       <p class="comments">Comments:${n}</p>
    </li>
  </ul>
</li>`).join(""),j.insertAdjacentHTML("beforeend",t)})}w.addEventListener("click",()=>{console.log(g+=1),T()}),$.addEventListener("input",((e=i)&&e.__esModule?e.default:e)(e=>{(h=e.target.value)?w.style.display="block":""===h&&(g=1,j.innerHTML=""),T()},500)),w.style.display="none";
//# sourceMappingURL=pagination-js.07d3aceb.js.map
