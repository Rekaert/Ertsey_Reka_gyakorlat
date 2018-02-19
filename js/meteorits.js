function getData(url, callbackFunc) {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            callbackFunc(this);
        }
    };
    xhttp.open("GET", url, true);
    xhttp.send();
}

function successAjax(xhttp) {
    // itt a json content, benne a data változóban
    var data = xhttp.responseText;
    // Innen, ide dolgozz... Itt hívd meg a függvényeid stb. A json file tartalma innen érhető csak
    // Live servert használd mindig
    var jsonContent = JSON.parse(data);
    console.log(jsonContent);
    //  createTable(jsonContent);

}

getData('/js/meteorits.json', successAjax);

//1. A meteoritok adatainak táblázatba töltése

function createTable(datas) {
    console.log(datas);
    var table = "";
    for (var i = 0; i < datas.length; i++) {
        table += '<tr>';
        for (var j in datas[i]) {
            table += `<td> ${datas[i][j]} </td>`;
        }
        table += '</tr>';
        document.querySelector('#meteor tbody').innerHTML = table;
    }
}

//2. A mass értékének megjelenítése 2 tizedesjegy pontossággal, átalakítva stringből számmá
/*
for (var i = 0; i < jsonContent.length; i++) {
    jsonContent[i].mass.parseFloat().toFixed(2);
    jsonContent[i].year.dot;
}*/

//2. új dátumformátum létrehozása
/*
Date.prototype.dot = function () {

    var date = [
        this.getFullYear(),
        addZero(this.getMonth() + 1),
        addZero(this.getDate)
    ];
    return date.join('. ');

    // Ha a hónap vagy nap egyjegyű szám, akkor adjon hozzá 0-át

    function addZero(num) {
        return num > 10 ? num : '0' + num;
    }
}*/

//5. Táblázat alá kiíratni: 
// Az összes meteorit összsúlya
//A legkönyebb meteorit súlya (a reclat kulcs tartalmazza a súly értéket?)


var metSum = 0;
var min = jsonContent[0].reclat;
for (var i = 0; i < jsonContent[i].length; i++) {
    metSum += jsonContent[i].reclat;
}



var min = jsonContent[0].reclat;
for (var i = 0; i < jsonContent[i].length; i++)




/* 
    A kapott JSON file a Föld-be csapódott meteoritok adatait tartalmazza.

    FELADATOK:
    1. Írasd ki egy táblázatba a következő adatait a meteoritoknak:
        id
        mass
        name
        nametype
        recclass
        reclat
        reclong
        year



     Pozitív, ha ezeket az elemeket nem az innerHTML segítségével hozod létre. 

    2. A táblázatban formázd a tömeget 2 tizedes jegy pontosan. Ha kell kerekíts a legközelebbi egészre.
       A matamatikai kerekítés szabályait használd. Ha valahol egész érték van, ott is legyen a 00 kiiratva
       az egész érték után .
       Formázd a dátumot az alábbi formátumba: 1990. 01. 02. 
    
    3. A táblázat fejlécére kattintva növekvő sorrendbe lehessen rendezni a táblázat adatait az alábbi
       meteorit tulajdonságok szerint: id, mass, name, és reclass.
       Az id és a mass szerinti rendezés számok alapján rendezzen.

    4.  Valósítsd meg a rendezést úgy, hogy nem csak növekvő, hanem csökkenő sorrendbe is lehessen az adatokat rendezni.
        Ha az adatok még nincsenek rendezve, akkor az adott fejlév/tulajdonság alapján növekvő sorrendbe rendezze az adatokat kattintásra.
        Amennyiben még egyszer ugyanarra a fejlécre kattintanak, akkor a sorrend legyen csökkenő. És így tovább....
        Amennyiben egy új fejlécre kattintanak, először mindig növekvő sorrend szerint legyenek az  adatok rendezve.

    5. A táblázat alá az alábbi adatokat ki kell iratni/számolni:

        Az összes meteorit összsúlya
        A legkönyebb meteorit súlya
        A legnehezebb meteorit súlya
        A meteoritok súlyának átlaga
        Hány darab meteorit csapódott be 1990-ben
        Hány darab meteorit súlya legalább 10000

        Ezeket az elemeket ne az innerHTML segítségével hozd létre. Használd az ismert node metódusokat. KÖTELEZŐEN!

    6. Legyen szép a táblázat és az adatok. HAsználj CSS-t a formázáshoz.

    7. Töltsd fel az elkészült fileokat egy github repoba, és küld el a repo elérhetőségét.

    8. Szusszanj egyet.

*/