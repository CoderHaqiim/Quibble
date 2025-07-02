const hamburger = document.querySelector('.hamburger')
const closeBtn = document.querySelector('#close-btn')
const sideBar = document.querySelector('.sidebar')
const cover = document.querySelector('.cover')

hamburger.onclick = () => openAside()
closeBtn.onclick = () => closeAside()
cover.onclick = () => closeAside()
sideBar.onclick = (e) =>{
    e.stopPropagation()
}

function openAside(){
    sideBar.style.animationName ="slide"
    cover.style.display = "flex"
}

function closeAside(){
    sideBar.style.animationName ="slide-away"
    setTimeout(()=>{
        cover.style.display = "none"
    },300)
}