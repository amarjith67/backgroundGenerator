let color1 = document.querySelector('.color1')
let color2 = document.querySelector('.color2')
let css = document.querySelector('.css')
let body = document.getElementById('body')
let content = document.querySelector('.dropdown-content')

color1.setAttribute('value','#FF0000');
color2.setAttribute('value','#0000FF');


body.style.background=`linear-gradient(to right, ${color1.value} ,${color2.value})`

function setGradient(){
  body.style.background=`linear-gradient(to right, ${color1.value} ,${color2.value})`
  css.textContent = body.style.background
}

content.addEventListener('click',(event)=>{
    let orientation = event.target.innerText;
    console.log(orientation)
    body.style.background=`linear-gradient(to ${orientation}, ${color1.value} ,${color2.value})`
    css.textContent = `linear-gradient(to ${orientation}, ${color1.value} ,${color2.value})`
})

color1.addEventListener('input',setGradient)

color2.addEventListener('input',setGradient)
