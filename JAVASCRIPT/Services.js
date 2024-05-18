// document.addEventListener("DOMContentLoaded", () => {
//   let custUpto = 0;
//   let guardsUpto = 0;
//   let dispatchUpto = 0;
//   let safehouseUpto = 0;
//   let serverUpto = 0;
//   let consultUpto = 0;

//   const custCounts = setInterval(() => {
//     let custCount = document.getElementById("custcounter");
//     custCount.innerHTML = ++custUpto;
//     if (custUpto === 100000) {
//       clearInterval(custCounts);
//     }
//   }, 10);

//   const guardsCounts = setInterval(() => {
//     let guardsCount = document.getElementById("guardscounter");
//     guardsCount.innerHTML = ++guardsUpto;
//     if (guardsUpto === 3000) {
//       clearInterval(guardsCounts);
//     }
//   }, 10);

//   const dispatchCounts = setInterval(() => {
//     let dispatchCount = document.getElementById("dispatchcounter");
//     dispatchCount.innerHTML = ++dispatchUpto;
//     if (dispatchUpto === 1000) {
//       clearInterval(dispatchCounts);
//     }
//   }, 10);

//   const safehouseCounts = setInterval(() => {
//     let safehouseCount = document.getElementById("safehousecounter");
//     safehouseCount.innerHTML = ++safehouseUpto;
//     if (safehouseUpto === 1200) {
//       clearInterval(safehouseCounts);
//     }
//   }, 10);

//   const serverCounts = setInterval(() => {
//     let serverCount = document.getElementById("servercounter");
//     serverCount.innerHTML = ++serverUpto;
//     if (serverUpto === 800) {
//       clearInterval(serverCounts);
//     }
//   }, 10);

//   const consultCounts = setInterval(() => {
//     let consultCount = document.getElementById("consultcounter");
//     consultCount.innerHTML = ++consultUpto;
//     if (consultUpto === 5000) { 
//       clearInterval(consultCounts);
//     }
//   }, 10);
// });


document.addEventListener("DOMContentLoaded", () => {
  let custUpto = 0;
  let guardsUpto = 0;
  let serverUpto = 0;


  const custCounts = setInterval(() => {
    let custCount = document.getElementById("custcounter");
    custCount.innerHTML = custUpto += 1231;
    if (custUpto >= 100000) {
      clearInterval(custCounts);
    }
  }, 30);

  const guardsCounts = setInterval(() => {
    let guardsCount = document.getElementById("guardscounter");
    guardsCount.innerHTML = guardsUpto += 712;
    if (guardsUpto >= 50000) {
      clearInterval(guardsCounts);
    }
  }, 30);

  const serverCounts = setInterval(() => {
    let serverCount = document.getElementById("servercounter");
    serverCount.innerHTML = serverUpto += 8;
    if (serverUpto >= 800) {
      clearInterval(serverCounts);
    }
  }, 30);
});


// <-----------------------------------------------SLIDER ----------------------------------------------------------->
var sliderCounter = 0;
var sliderContent = [
  "Defend",
  "Attack",
  "Protect",
  "Observe",
  "Secure"
];
var slider = document.querySelector("#slider");
var sliderValue = document.querySelector("#sliderValue");

function slide() {
  if (sliderCounter >= sliderContent.length) {
    sliderCounter = 0;
  }

  sliderValue.innerHTML = "";

  sliderValue.classList.remove("holder-animation");
  void sliderValue.offsetWidth;
  sliderValue.classList.add("holder-animation");

  for (i = 0; i < sliderContent[sliderCounter].length; i++) {
    let letterDiv = document.createElement("div");
    letterDiv.innerHTML = sliderContent[sliderCounter][i];

    if (letterDiv.innerHTML == " ") {
      letterDiv.innerHTML = "&nbsp;";
    }
    letterDiv.classList.add("start");
    letterDiv.classList.add("animation");
    letterDiv.style.animationDelay = i / 10 + "s";
    sliderValue.appendChild(letterDiv);
  }

  sliderCounter++;
}

slide();
setInterval(slide, 2000);
