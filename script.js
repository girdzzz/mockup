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

const storyColors = [

  "#FFFFFF",
  "#EEF3EE",
  "#F5EFE6",
  "#E8EFE8",
  "#FAF7F0"

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

//document.querySelectorAll(".chapter")
//    .forEach(chapter => {
//      chapter.style.backgroundColor =
//          colors[Math.floor(Math.random()*colors.length)];
//    });

document.querySelectorAll(".chapter")
    .forEach((chapter,index)=>{

      chapter.style.backgroundColor =
          storyColors[index % storyColors.length];

    });

document.getElementById("randomImage").src = images[Math.floor(Math.random()*images.length)];

function openPopup() {
  document.getElementById("helpPopup").style.display = "flex";
}

function continueStory(){
  document.getElementById("helpPopup").style.display="none";
  document.getElementById("story").scrollIntoView({
    behavior:"smooth"
  });
}

function launchConfetti() {

  const container =
      document.getElementById("confetti-container");

  const symbols = [
    "❤️",
    "💕",
    "🎉",
    "✨",
    "💍",
    "🥒",
    "😽",
    "🎤",
    "🎉",
    "💗"
  ];

  for(let i = 0; i < 200; i++) {

    const item =
        document.createElement("div");

    item.className="confetti";

    item.innerHTML =
        symbols[
            Math.floor(Math.random()*symbols.length)
            ];

    item.style.left =
        Math.random()*100 + "%";

    item.style.animationDelay =
        Math.random()*10 + "s";

    container.appendChild(item);

    setTimeout(()=>{
      item.remove();
    },15000);
  }
}

const finalChapter =
    document.getElementById("finalChapter");

const observer =
    new IntersectionObserver((entries)=>{
      entries.forEach(entry=>{
        if(entry.isIntersecting){
          launchConfetti();
        }
      });
    }, {
      threshold:0.5
    });
observer.observe(finalChapter);