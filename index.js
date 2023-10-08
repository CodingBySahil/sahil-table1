let btn = document.getElementById("btn")
let body = document.querySelector("body")
let header = document.querySelector("header")

btn.addEventListener("click",()=>{
    console.log("hii")
    if(btn.className.includes("bg-black")){
        btn.classList.remove("bg-black")
        btn.classList.add("bg-white")
        body.classList.remove("bg-black")
        body.classList.add("bg-white")
        header.classList.remove("bg-white")
        header.classList.add("bg-black")
    }
    else{
        btn.classList.remove("bg-white")
        btn.classList.add("bg-black")
        body.classList.remove("bg-white")
        body.classList.add("bg-black")
        header.classList.remove("bg-black")
        header.classList.add("bg-white")
    }
})