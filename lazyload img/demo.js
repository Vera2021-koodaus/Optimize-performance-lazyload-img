const allLazyimgs=document.querySelectorAll('img[data-src]');
console.log(allLazyimgs) 

const imgObserver=new IntersectionObserver(loadImg,{})

function loadImg(entries,observer){
    const [entry]=entries;
    console.log(entry)
    if(!entry.isIntersecting)return;
    entry.target.src=entry.target.dataset.src;
    entry.target.addEventListener(
        'load', function(){
            entry.target.classList.remove('lazy-img')
        }
    )
    observer.unobserve(entry.target)
}

const  observer=new IntersectionObserver(loadImg,
    {
        root:null,
        threshold:0,
        rootMargin:'100px'
    })

allLazyimgs.forEach(
    img=>imgObserver.observe(img)
)

