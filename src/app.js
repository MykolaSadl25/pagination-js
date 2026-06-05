import debounce from "lodash.debounce";
const URL = "https://pixabay.com/api/";
const API_KEY = "55978698-0d602613e63391cce9d7defd1";
let currentPage = 1;
const limit = 9;
let search = "";

const listRef = document.querySelector(".list");
const btnLoadRef = document.querySelector(".button");
const inputRef = document.querySelector(".searchInput");

function getImages() {
    return fetch(`${URL}?key=${API_KEY}&q=${search}&image_type=photo&page=${currentPage}&per_page=${limit}&orientation=horizontal`).then(res=>res.json());
}

function render() {
    getImages().then(res=>{
        if (currentPage*limit >= res.totalHits) {
            btnLoadRef.disabled=true;
            btnLoadRef.textContent="No more images to show";
            btnLoadRef.classList.add("disabled-btn")
        }
        createItemsMarkup(res.hits)
    })
}



function createItemsMarkup(array) {
    const item = array.map(({largeImageURL,views,downloads,likes,comments,tags,name})=>{
        return `<li class="item">
  <img src="${largeImageURL}" alt="${tags}" class="image">
  <h2 class="title">${name}</h2>
  <ul class="stats">
    <li class="elem">
       <p class="views">Views:${views}</p>
    </li>
    <li class="elem">
       <p class="downloads">Downloads:${downloads}</p>
    </li>
    <li class="elem">
       <p class="likes">Likes:${likes}</p>
    </li>
    <li class="elem">
       <p class="comments">Comments:${comments}</p>
    </li>
  </ul>
</li>`
    }).join("");
    listRef.insertAdjacentHTML("beforeend",item)
}

btnLoadRef.addEventListener("click",()=>{
    currentPage+=1;
    console.log(currentPage);
    
    render()
});


inputRef.addEventListener("input",debounce((e)=>{
    search = e.target.value;
    if (search) {
        btnLoadRef.style.display="block"
    }
    else if(search==="") {
        currentPage=1
        listRef.innerHTML=""
    }
    render()
},500))

btnLoadRef.style.display="none"

// import debounce from "lodash.debounce";
// import * as basicLightbox from 'basiclightbox';
// import 'basiclightbox/dist/basicLightbox.min.css';

// const URL = "https://pixabay.com/api/";
// const API_KEY = "55978698-0d602613e63391cce9d7defd1";
// let currentPage = 1;
// const limit = 12;
// let search = "";
// let largeImage = null;
// let instance = null;

// const inputRef = document.querySelector(".input");
// const listRef = document.querySelector(".list");
// const element = document.querySelector(".element");

// inputRef.addEventListener("input",debounce((e)=>{
//     listRef.innerHTML="";
//     search=""
//     search = e.target.value.trim();
//     getImages().then(res=>createImages(res.hits));
// },500))
// function getImages() {
//     return fetch(`${URL}?key=${API_KEY}&q=${search}&image_type=photo&page=${currentPage}&per_page=${limit}&orientation=horizontal`).then(res=>res.json());
// }

// function createImages(array) {
//     const image = array.map(({previewURL,largeImageURL,tags})=>{
//         return `<li class="item" data-action="${largeImageURL}">
//    <img src="${previewURL}" alt="${tags}" class="image">
//  </li>`
//     }).join("");
//     listRef.insertAdjacentHTML("beforeend",image);
// }

// listRef.addEventListener("click",(e)=>{
//     if (e.target.nodeName !== "IMG") {
//         return;
//     }
    
//     largeImage = e.target.closest("li").dataset.action;

//     instance = basicLightbox.create(`
//     <div class="modal">
//         <img src="${largeImage}" alt="photo" class="image">
//     </div>
// `);

// instance.show()
// })


// window.addEventListener("keydown",(e)=>{
//     if (e.code==="Escape") {
//         instance.close()
//     }
// })

// const observer = new IntersectionObserver(([entries]) =>{
//     if (entries.isIntersecting  && inputRef.value !== "") {
//         currentPage += 1
//         getImages().then(res=>createImages(res.hits));
//     }
// },{
//     rootMargin: "50px",
// })

// observer.observe(element)