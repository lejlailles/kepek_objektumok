window.addEventListener("load", init);

function ID(nev) {
    return document.getElementById(nev);
}

function $(nev) {
    return document.querySelectorAll(nev);
}



var kepObj1 = {
    kep: "8.jpg",
    cim: "Cím 1",
    leiras: "1. kép leírása"


};

var kepObj2 = {
    kep: "9.jpg",
    cim: "Cím 2",
    leiras: "2. kép leírása"

};

var kepObj3 = {
    kep: "10.jpg",
    cim: "Cím 3",
    leiras: "3. kép leírása"

};

var objektumTomb = [kepObj1,kepObj2,kepObj3];

function init() {
    beTolt(0);
    $("#bal")[0].addEventListener("click",balra);
    $("#jobb")[0].addEventListener("click",jobbra);
    

    var elem = '<div id="1" class="kepTarolo"><img src="" alt=""/> <h1></h1> <p></p> </div>';
    for (var i = 0; i < objektumTomb.length; i++) {
        $('article')[0].innerHTML += elem;


    }




    var kepElemCim = $(".kepTarolo h1");
    var kepElem = $(".kepTarolo");
    var kepElemTartalom = $(".kepTarolo p");
    var kep = $(".kepTarolo img");

    for (var i = 0; i < kep.length; i++) {
        $("article div")[i].id = i; 
        kep[i].src = objektumTomb[i].kep;
        kepElemCim[i].innerHTML = objektumTomb[i].cim;
        kepElemTartalom[i].innerHTML = objektumTomb[i].leiras;

    }

    for (var i = 0; i < kepElemCim.length; i++) {

        kepElem[i].addEventListener("mouseover", formazFel);
        kepElem[i].addEventListener("mouseleave", formazLe);
        kepElem[i].addEventListener("click", nagyKepBetolt);



    }



}


function formazFel() {

    this.classList.add("kepTaroloAktiv");

}
function formazLe() {

    this.classList.remove("kepTaroloAktiv");

}

function nagyKepBetolt() {
   var id=this.id;
    
        beTolt(id);
        
   
 
 
    console.log(this.id);
}

function beTolt(index) {
    $("#nagykep img")[0].src = objektumTomb[index].kep;
    $("#nagykep h1")[0].innerHTML = objektumTomb[index].cim;
    $("#nagykep p")[0].innerHTML = objektumTomb[index].leiras;
}

function balra(){
    
}

function jobbra(){
    
}






