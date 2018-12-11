// *** STYLES FOR HEADER
document.getElementById('header').style.background = "rgba(0,0,0,0.69)";
document.getElementById('header').style.color = "#e6e6e6";
document.getElementById('header').style.padding = "30px";
document.getElementById('header').style.margin = "0 auto 15px";



// *** APPENDING HEADINGS TO THE HEADER
const firstHeading = document.createElement("h1");
const secondHeading = document.createElement("h3");
const nodeOne = document.createTextNode('Learn React JS');
const nodeTwo = document.createTextNode('with PentaStagiu Remote - ReactJS');
firstHeading.appendChild(nodeOne);
secondHeading.appendChild(nodeTwo);
var element = document.getElementById("header");
element.appendChild(firstHeading);
element.appendChild(secondHeading);



// *** COLOR CHANGE ON HOVER (HEADER)
window.onload = function headerColor() {
    const theHeader = document.querySelector('header');
    theHeader.onmouseover = function()
    {
        this.style.color = "#00d8ff";
    };

    theHeader.onmouseout = function()
    {
        this.style.color = "#dedede";
    };
    // *** LOGO ANIMATION
    function rotateLogo (){
        const theLogo = document.querySelector('.logo');
        theLogo.classList.add('rotate')
    }
    function stopLogo (){
        const theLogo = document.querySelector('.logo');
        theLogo.classList.remove('rotate')
    }
        document.querySelector('header').addEventListener('mouseover', rotateLogo);
    document.querySelector('header').addEventListener('mouseout', stopLogo)
};


// *** THE FORM * INVITES LIST
const form =  document.querySelector('#registrar');
const input = form.querySelector('input');
const ul = document.querySelector('#invitedList');

form.addEventListener('submit', function(e){
    e.preventDefault();
    const text = input.value;
    input.value = '';

    const li = document.createElement('li');
    li.textContent = text;
    const label = document.createElement('label');
    label.textContent = 'Confirmed';
    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    label.appendChild(checkbox);
    li.appendChild(label);
    ul.appendChild(li);
});

ul.addEventListener('change', function (e){
   const checkbox = event.target;
   const checked = checkbox.checked;
   const listItem = checkbox.parentNode.parentNode;
   if(checked){
       listItem.className = 'responded';
   } else {
       listItem.className = '';
   }

});
