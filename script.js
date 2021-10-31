/*
const firstRow= document.getElementById("firstRow");
console.log(firstRow)

function getData() {
    const url= "https://react.millergroup.it/jsonHash.php"
    const response = fetch(url)
    const data = response.json()

var data = JSON.parse(this.response)

data.forEach(RagioneSociale => {
    console.log(RagioneSociale)
})
}
console.log(getData()) 


var queryString = '';

var encriptedQuery = btoa(decodedStringBtoA);
console.log(encodedStringBtoA);

var request = new XMLHttpRequest()

var sql= "https://react.millergroup.it/jsonHash.php";

request.open('POST', sql, true)
request.onload = function () {
  // Begin accessing JSON data here
  var data = JSON.parse(this.response)

  if (request.status >= 200 && request.status < 400) {
    data.forEach(RagioneSociale => {
      console.log(RagioneSociale)
    })
  } else {
    console.log('error')
  }
}

request.send()

var url = "https://reqbin.com/echo/post/json";

var xhr = new XMLHttpRequest();
xhr.open("POST", url);

xhr.setRequestHeader("Accept", "application/json");
xhr.setRequestHeader("Content-Type", "application/json");

xhr.onreadystatechange = function () {
   if (xhr.readyState === 4) {
      console.log(xhr.status);
      console.log(xhr.responseText);
   }};*/

const slots = document.querySelectorAll("td");
const tableRow = document.querySelector(".ttt");

const query= "SELECT * FROM drinks"


function getUser() {
    $.ajax({
        method: 'POST',
        url:"https://www.thecocktaildb.com/api/json/v1/1/random.php",
        dataType: 'json',
        //data: JSON.stringify(sql : 'SELECT strDrink FROM drinks'),
        success: function(totDrink, textStatus) {
            console.log(textStatus);
            const drink = totDrink.drinks[0];
            slots.forEach((element) => {
                let infoDrink = element.getAttribute("data-type");
                if (infoDrink == "strDrinkThumb") {
                    let cocktailImg = document.createElement("img");
                    cocktailImg.src= `${ drink[infoDrink]}`;
                    cocktailImg.style= "width: 150px"
                    element.append(cocktailImg);
                    console.log(element)
                }else{
                    element.innerHTML = drink[infoDrink]
                }
            });
        },
        error: function(error){
            console.error(error);
        }
    });
};
getUser();