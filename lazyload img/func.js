const allImgs=document.querySelectorAll('img[data-src]');
const imgObserver=new IntersectionObserver(loadImg,{})

function loadImg(entries,observer){
    const [entry]=entries;
    if(!entry.isIntersecting)return; 
    entry.target.src=entry.target.dataset.src;
    entry.target.classList.remove('lazy-img')
    observer.unobserve(entry.target)
}


const observer=new IntersectionObserver(loadImg,
    {
        root:null,
        threshold:0,
        rootMargin:'100px'
    })


    allImgs.forEach(img=>imgObserver.observe(img))