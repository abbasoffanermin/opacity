let opc = document.querySelector("#opc")
let dv = document.querySelector("div")
let brd = document.querySelector("#brd")
let imgs = document.querySelectorAll("img")




opc.addEventListener("input", (e) => {
  dv.style.opacity =opc.value
  localStorage.setItem('opacity',opc.value)
opc=localStorage.getItem('opacity')
 
})
brd.addEventListener("input", (e) => {
  for (let i = 0;i <imgs.length;i++) {
  imgs[i].style.borderRadius=brd.value+'%'
  }
localStorage.setItem('borderR',brd.value+'%')
localStorage.getItem('borderR')
})


