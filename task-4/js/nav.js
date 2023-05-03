let activeLink = null;
let job = document.getElementById('link2');
let link8 = document.getElementById('link8');
let link9= document.getElementById('link9');
let link10 = document.getElementById('link10');
let drop= document.getElementsByClassName('box');
let bool = 0;
let bol = 0;

var checkbox = document.getElementById("myCheckbox");
var elements = document.getElementsByClassName("elements");

// Check if the checkbox is checked
checkbox.addEventListener('change', function() {
  if (this.checked) {
    for (let elem of elements) {
      console.log(elements);
      elem.style.display = 'inherit';
    }
  }
  else{
    for (let elem of elements) {
      console.log(elements);
      elem.style.display = 'none';
    }
  }
})
const currentPath = window.location.pathname;
console.log(currentPath);
if(currentPath == '/html/index.html'){
  link8.classList.add('active');
}
if(currentPath == '/html/Search-Employee.html'){
  link9.classList.add('active');
}
if(currentPath == '/html/Companies.html'){
  link10.classList.add('active');
}
function changeLinkStyle(linkId) {
  const link = document.getElementById(linkId);
  // if (activeLink == link) {
  //   activeLink.classList.remove('active');
  //   activeLink=null;
  // }

  if (activeLink) {
    activeLink.classList.remove('active');
  }
  if (activeLink == link ) {
    bool++;
    console.log(bool);
  }
  if (activeLink !== link || bool==2) {
    link.classList.add('active');
    bool=0;
    activeLink = link;
  }
  if (link === job){
    bol++;
    for (let elem of drop) {
      console.log(drop);
      elem.style.display = 'inherit';
    }
  }
  if (link !== job || bol == 2){
    for (let elem of drop) {
      console.log(drop);
      elem.style.display = 'none';
  }
  bol=0;
  }

  if( linkId == 'link8' || linkId == 'link9' || linkId == 'link10'){
    const linkBox = document.getElementById(linkId);
    linkBox.classList.add('active');
    
  }

}
