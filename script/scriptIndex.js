

document.addEventListener("scroll", ()=>{
    console.log(window.scrollY)
    if(window.scrollY > 0){
        document.querySelector("header").classList.add("minimize")
    }else{
        document.querySelector("header").classList.remove("minimize")
    }
})