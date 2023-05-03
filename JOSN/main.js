const cards = document.querySelector(".container");
const but1 = document.querySelector(".but1");
const but2 = document.querySelector(".but2");
const but3 = document.querySelector(".but3");
function creatCard(thumbnail, category, title, description, price ){
cards.innerHTML+=
`<div class="card">
  <div class="image">
    <img src="${thumbnail}" alt="">
  </div>
  <div class="box">
    <p>${category}</p>
    <h3>${title}</h3>
    <p class="des">${description}</p>
    <p class="sal">${price}$</p>
    <a href="#">Add To Cart</a>
  </div>
</div>
`;
}

var mainData = [];
async function fetchProducts(x){
  var data =[];
  let res;
  await fetch("https://dummyjson.com/products")
  .then((respnse)=> respnse.json())
  .then((respnse)=> { data=respnse.products;
  console.log(data);
mainData = data; });
  
  data.forEach((item)=> {
    if (x == 1){
      if (item.id <= 10) {
        creatCard(item.thumbnail,item.category, item.title, item.description, item.price)
      }
    }
    if (x == 2){
      if (item.id > 10 && item.id <=20) {
        creatCard(item.thumbnail,item.category, item.title, item.description, item.price)
      }
    }
    if (x == 3){
      if (item.id > 20 && item.id <=30) {
        creatCard(item.thumbnail,item.category, item.title, item.description, item.price)
      }
    }
  });
}
fetchProducts(1);

but1.addEventListener('click', function(){
  cards.innerHTML= "";
  fetchProducts(1);
})
but2.addEventListener('click', function(){
  cards.innerHTML= "";
  fetchProducts(2);
})
but3.addEventListener('click', function(){
  cards.innerHTML= "";
  fetchProducts(3);
})


function search() {

  var input = document.getElementById("searchInput").value.toLowerCase();
  console.log(input);
  cards.innerHTML="";
  mainData.forEach((item)=> {
    // var filteredData = item.filter(function(item) {
    //   return item.toLowerCase().includes(input);
    // });
    // console.log("Filtered data: " + filteredData);
      if (item.title.toLowerCase().includes(input) && input != "") {
        // console.log(item.title);
        creatCard(item.thumbnail,item.category, item.title, item.description, item.price);
      }
      }); 
      if (input == ""){
        console.log("dfsbhsdhsdfhsf");
        cards.innerHTML= "";
        fetchProducts(1);
      }


		}
