// *** STYLES FOR HEADER
document.getElementById('header').style.background = "rgba(0,0,0,0.69)"
document.getElementById('header').style.color = "#e6e6e6"
document.getElementById('header').style.padding = "30px"
document.getElementById('header').style.margin = "0 auto 15px";



// *** APPENDING HEADINGS TO THE HEADER
const firstHeading = document.createElement("h1");
const secondHeading = document.createElement("h3");
const nodeOne = document.createTextNode('Learn React JS');
const nodeTwo = document.createTextNode('with PentaStagiu Remote - ReactJS');
firstHeading.appendChild(nodeOne);
secondHeading.appendChild(nodeTwo)
var element = document.getElementById("header");
element.appendChild(firstHeading);
element.appendChild(secondHeading);



// *** LOGO ANIMATION
function rotateLogo (){
     const theLogo = document.querySelector('.logo');
     theLogo.classList.add('rotate')
    }
function stopLogo (){
    const theLogo = document.querySelector('.logo');
    theLogo.classList.remove('rotate')
}

document.querySelector('.logo').addEventListener('mouseover', rotateLogo)
document.querySelector('.logo').addEventListener('mouseout', stopLogo)