document.addEventListener('DOMContentLoaded', function(){

    const cast=document.getElementById("year");
    const castReturn=document.getElementById("yearReturn");

    cast.addEventListener("keyup",function(){
        let tmpYear = year.value;
            yearReturn.innerHTML=tmpYear;
            //Appeler la page php
            //Ajout avec {} la méthode utilisée dans form, l'encodage et les variables que l'on veut envoyer à cette page
            fetch("cast.php",{
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




//Fin de mon js
})