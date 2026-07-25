const colors = [

"#ffd6e0",
"#d6f5ff",
"#fff0c2",
"#d9ffd6",
"#e8d6ff"

];


const heroes = [

"images/hero1.jpg",
"images/hero2.jpg",
"images/hero3.gif"

];


const texts = [

"Du glaubst das nicht? Lade die Seite nochmal 😏",

"Jeder Reload zeigt ein anderes Geheimnis.",

"Die Wahrheit versteckt sich zwischen den Bildern.",

"Willst du wirklich alles sehen?"

];



document.body.style.backgroundColor =
colors[Math.floor(Math.random()*colors.length)];



document.getElementById("heroImage").src =
heroes[Math.floor(Math.random()*heroes.length)];



document.getElementById("heroText").innerHTML =
texts[Math.floor(Math.random()*texts.length)];





function openPopup(){

document.getElementById("popup")
.style.display="flex";

}



function closePopup(){

document.getElementById("popup")
.style.display="none";

}
