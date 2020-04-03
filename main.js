document.addEventListener('DOMContentLoaded', function(){

    const year=document.getElementById("year");
    const yearReturn=document.getElementById("yearReturn");

    year.addEventListener("keyup",function(){
        let tmpYear = year.value;
            yearReturn.innerHTML=tmpYear;
            //Appeler la page php
            //Ajout avec {} la méthode utilisée dans form, l'encodage et les variables que l'on veut envoyer à cette page
           fetch("year.php",{
                method:"POST",
                headers:{"Content-Type":'application/x-www-form-urlencoded'},
                body:"tmpYear="+tmpYear
            }).then(function(response){
                return response.text();
            }).then(function(text){
                //console.log(text);
                yearReturn.innerHTML=text;
            })
    })

    const cast=document.getElementById("cast");
    const returnCast=document.getElementById("returnCast");

    cast.addEventListener("keyup", function(){
        let tmpCast=cast.value;
        //console.log("debug");
          returnCast.innerHTML=tmpCast;
          fetch("year.php",{
                method:"POST",
                headers: {"Content-Type":'application/x-www-form-urlencoded'},
                body:"tmpCast="+tmpCast
            }).then(function(response){
                return response.text();
            }).then(function(text){
                //console.log(text);
                returnCast.innerHTML=text;
            })
    })




//Fin de mon js
})