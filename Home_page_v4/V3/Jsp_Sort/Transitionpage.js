const h1=document.querySelector("h1")
h1.innerHTML=h1.textContent.replace(/\S/g,"<span>$&</span>")
let delay=0
document.querySelectorAll('span').forEach((span, index)=>{
    delay+=0.1
    if (index==15)delay+=0.3
    span.style.setProperty('--delay',`${delay}s`)
})