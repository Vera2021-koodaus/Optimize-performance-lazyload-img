// 网速慢的时候提高性能，浏览图片时候非常有用的技术点。
// based on data-src, select and loop all of the pics with lazyload tag.
// 选中所有加了设置了懒加载的图片然后遍历 。
const imgTargets=document.querySelectorAll('img[data-src]');
console.log(imgTargets)
// 观察图片有没有到viewport视窗里，到的，加载真图，不到的，加载能耗低的懒图。
const imgObserver=new IntersectionObserver(
    loadImg,{})

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

const observer=new IntersectionObserver(loadImg,
    {
        root:null,
        threshold:0,
        rootMargin:'100px'
    }
)

imgTargets.forEach(img=>imgObserver.observe(img))
