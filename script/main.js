function start() {
    Clock();
    Img();
    Datum();
}
function Clock(){
    var today = new Date();
    var h = today.getHours();
    var m = today.getMinutes();
	var s = today.getSeconds();
	
    m = checkTime(m);
    document.getElementById('time').innerHTML =
        h + ":" + m + ":" + s;
    var t = setTimeout(Clock, 500);
}
function checkTime(i) {
    if (i < 10) {i = "0" + i};
    return i;
}

function Img(){
    var today = new Date();
    var h = today.getHours();
    console.log(h);

    if(h>=6 && h<=7) {
        document.getElementById('img').style.backgroundImage = "url('img/morning1.jpg')";
        document.getElementById('img').style.backgroundPositionY = "-210px";
        document.getElementById('welcome').innerHTML = "Bonjour !";
    }
    if(h>=8 && h<=9) {
        document.getElementById('img').style.backgroundImage = "url('img/morning2.jpg')";
        document.getElementById('img').style.backgroundPositionY = "-210px";
        document.getElementById('welcome').innerHTML = "Bonjour !";
    }	
    if(h>=10 && h<=11) {
        document.getElementById('img').style.backgroundImage = "url('img/day1.jpg')";
        document.getElementById('img').style.backgroundPositionY = "-250px";
        document.getElementById('welcome').innerHTML = "Bonne matinée !";
    }	
    if(h>=12 && h<=14) {
        document.getElementById('img').style.backgroundImage = "url('img/day2.jpg')";
        document.getElementById('img').style.backgroundPositionY = "-320px";
        document.getElementById('welcome').innerHTML = "Bonne journée !";
    }
    if(h>=15 && h<=17) {
        document.getElementById('img').style.backgroundImage = "url('img/day3.jpg')";
        document.getElementById('img').style.backgroundPositionY = "-230px";
        document.getElementById('welcome').innerHTML = "Bonne après-midi !";
    }	
    if(h>=18 && h<=19) {
        document.getElementById('img').style.backgroundImage = "url('img/noon1.jpg')";
        document.getElementById('img').style.backgroundPositionY = "-150px";
        document.getElementById('welcome').innerHTML = "Bonne fin de journée !";
    }
    if(h>=20 && h<=23) {
        document.getElementById('img').style.backgroundImage = "url('img/night1.jpg')";
        document.getElementById('img').style.backgroundPositionY = "-240px";
        document.getElementById('welcome').innerHTML = "Bonne soirée !";
    }
    if(h>=0 && h<=5) {
        document.getElementById('img').style.backgroundImage = "url('img/night2.jpg')";
        document.getElementById('img').style.backgroundPositionY = "-240px";
        document.getElementById('welcome').innerHTML = "Bonne nuit !";
    }	
}
function Datum(){
    var today = new Date();

    var weekday = new Array(7);
    weekday[0]=  "Dimanche";
    weekday[1] = "Lundi";
    weekday[2] = "Mardi";
    weekday[3] = "Mercredi";
    weekday[4] = "Jeudi";
    weekday[5] = "Vendredi";
    weekday[6] = "Samedi";

    var day = weekday[today.getDay()];

    var d = today.getDate();

    var month = new Array(12);
    month[0] = "Janvier";
    month[1] = "Février";
    month[2] = "Mars";
    month[3] = "Avril";
    month[4] = "Mai";
    month[5] = "Juin";
    month[6] = "Juillet";
    month[7] = "Août";
    month[8] = "Septembre";
    month[9] = "Octobre";
    month[10] = "Novembre";
    month[11] = "Décembre";

    var m = month[today.getUTCMonth()];
    var y = today.getUTCFullYear();
	
    var total = day + " ∙ " + d + " ∙ " + m + " ∙ " + y;
    console.log(total);

    document.getElementById('datum').innerHTML = total;
}
