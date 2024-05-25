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

//<--------------------------------------------------- GEOLOCATION ----------------------------------------------------->

function getLocation() {
  if (!navigator.geolocation) {
    console.log('Geolocation API not supported by this browser.');
  } else {
    console.log('Checking location...');
    navigator.geolocation.getCurrentPosition(success, error);
  }
}

function success(position) {
  const latitude = position.coords.latitude;
  const longitude = position.coords.longitude;
  console.log('Latitude:', latitude);
  console.log('Longitude:', longitude);

  const latInput = document.getElementById('LATid');
  const longInput = document.getElementById('LONGid');
  
  latInput.value = latitude;
  longInput.value = longitude;

  // Add a class to the labels to trigger the animation
  document.querySelector('.LATh6 label').classList.add('moved');
  document.querySelector('.LONGh6 label').classList.add('moved');
  
  reverseGeocode(latitude, longitude);
}


function error() {
  console.log('Geolocation error!');
}

function reverseGeocode(lat, lon) {
  const url = `https://nominatim.openstreetmap.org/reverse?format=jsonv2&lat=${lat}&lon=${lon}&addressdetails=1`;

  fetch(url)
    .then(response => response.json())
    .then(data => {
      if (data.address) {
        const address = formatAddress(data.address);
        document.getElementById('ADDRESSid').value = address;
      } else {
        console.log('Geocoding error: No address found');
      }
    })
    .catch(error => console.log('Geocoding fetch error:', error));
}

function formatAddress(address) {
  const road = address.road || '';
  const neighbourhood = address.neighbourhood || '';
  const suburb = address.suburb || '';
  const city = address.city || address.town || address.village || '';
  const state = address.state || '';
  const postcode = address.postcode || '';
  const country = address.country || '';

  return [road, neighbourhood, suburb, city, state, postcode, country].filter(Boolean).join(', ');
}

function geocodeAddress() {
  const address = document.getElementById('ADDRESSid').value;
  if (!address.trim()) return; // Don't make a request for empty input

  const url = `https://nominatim.openstreetmap.org/search?format=json&q=${encodeURIComponent(address)}&limit=1`;

  fetch(url)
    .then(response => response.json())
    .then(data => {
      if (data.length > 0) {
        const { lat, lon } = data[0];
        const latInput = document.getElementById('LATid');
        const longInput = document.getElementById('LONGid');
        
        latInput.value = lat;
        longInput.value = lon;

        latInput.dispatchEvent(new Event('focus')); // Trigger focus to apply transition
        latInput.dispatchEvent(new Event('input')); // Trigger input to apply transition

        longInput.dispatchEvent(new Event('focus')); // Trigger focus to apply transition
        longInput.dispatchEvent(new Event('input')); // Trigger input to apply transition
      } else {
        console.log('Geocoding error: No coordinates found for the given address');
      }
    })
    .catch(error => console.log('Geocoding fetch error:', error));
}

let typingTimer;
const doneTypingInterval = 1000; // Time in ms, 1 second

document.getElementById('ADDRESSid').addEventListener('input', () => {
  clearTimeout(typingTimer);
  typingTimer = setTimeout(geocodeAddress, doneTypingInterval);
});

document.getElementById('ADDRESSid').addEventListener('keydown', () => {
  clearTimeout(typingTimer);
});

document.getElementById('get-location').addEventListener('click', getLocation);