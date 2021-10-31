const slots = document.querySelectorAll("td");


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