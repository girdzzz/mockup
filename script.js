const colors = [
  "#FFB3BA",
  "#BAFFC9",
  "#BAE1FF",
  "#FFFFBA",
  "#D5BAFF",
  "#FFC6A5",
  "#F8D7DA", // zart rot
  "#D4EDDA", // zart grün
  "#D1ECF1", // türkis
  "#FFF3CD", // creme
  "#E2D9F3", // lavendel
  "#FADADD", // babyrosa
  "#CDEAC0", // salbei
  "#FFD8A8"  // pfirsich
];

const images = [
  "images/gib20.png",
  "images/mircostripper.png",
  "images/BrustOP.png",
  "images/COCKtail.png",
  "images/dubisteingeladen.png",
  "images/wuhu.png",
  "images/brautstyling.png",
  "images/shotspende.png",
  "images/braut1.jpeg",
  "images/braut2.jpeg",
  "images/braut3.jpeg",
  "images/braut4.jpeg",
  "images/braut5.jpeg",
  "images/braut6.jpeg",
  "images/braut7.jpeg"
];

document.body.style.backgroundColor = colors[Math.floor(Math.random()*colors.length)];

document.getElementById("story").style.backgroundColor = colors[Math.floor(Math.random()*colors.length)];

document.querySelectorAll(".chapter")
    .forEach(chapter => {
      chapter.style.backgroundColor =
          colors[Math.floor(Math.random()*colors.length)];
    });

document.getElementById("randomImage").src = images[Math.floor(Math.random()*images.length)];

function openPopup() {
  document.getElementById("helpPopup").style.display = "flex";
}

function continueStory(){
  document.getElementById("helpPopup").style.display="none";
  document.getElementById("startScreen").style.display="none";
  document.getElementById("story").style.display="block";
  window.scrollTo({
    top:0,
    behavior:"smooth"
  });
}

