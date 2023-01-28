

document.addEventListener("scroll", ()=>{
    if(window.scrollY > 0){
        document.querySelector("header").classList.add("minimize")
    }else{
        document.querySelector("header").classList.remove("minimize")
    }
})