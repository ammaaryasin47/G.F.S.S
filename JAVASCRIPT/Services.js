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

//<-------------------------------------------------------- DYNAMIC SERVICE ------------------------------------------------------------------->

function toggleOptions(serviceId) {
  const dynamicOptions = document.getElementById('dynamicOptions');
  const serviceCheckbox = document.getElementById(serviceId);

  if (serviceCheckbox.checked) {
    let optionsDiv = document.createElement('div');
    optionsDiv.classList.add('optionsDiv');
    optionsDiv.setAttribute('id', serviceId + 'Options');

    switch (serviceId) {
      case 'ARMEDGUARDSid': 
        optionsDiv.innerHTML = `
                  <label for="gender">Preferred Gender of Guards:</label>
                  <select id="gender" name="gender">
                      <option value="male" selected>Male</option>
                      <option value="female">Female</option>
                      <option value="no_preference">No Preference</option>
                  </select>
              `;
        break;

        case 'UNARMEDGUARDSid':
        optionsDiv.innerHTML = `
                  <label for="unarmedgender">Preferred Gender of Guards:</label>
                  <select id="unarmedgender" name="unarmedgender">
                      <option value="male" selected>Male</option>
                      <option value="female">Female</option>
                      <option value="no_preference">No Preference</option>
                  </select>
              `;
        break;

      case 'VIPPROTECTIONid':
        optionsDiv.innerHTML = `
                    <label for="protection">Number Of Guards:</label>
                    <select id="protection" name="protection">
                        <option value="one">1</option>
                        <option value="Two" selected>2</option>
                        <option value="Squad"> 4 Guards</option>
                        <option value="Team"> 4 Guards + 2 Snipers</option>
                        <option value="Team"> 4 Guards + 2 Drones</option>
                        <option value="no_preference">No Preference</option>
                    </select>
                `;
        break;

      case 'CONVOYid':
        optionsDiv.innerHTML = `
                    <label for="vehicle">Preferred Convoy Vehicle:</label>
                    <select id="vehicle" name="vehicle">
                        <option value="onesedan">1 Sedan</option>
                        <option value="onesuv">1 SUV</option>
                        <option value="twosuv" selected>2 SUV</option>
                        <option value="onepcv">1 PCV</option>
                        <option value="twopcv">2 PCV</option>
                    </select>
                `;
        break;

      case 'ASSAULTTEAMid':
        optionsDiv.innerHTML = `
                    <label for="assault">Number Of Operatives:</label>
                    <select id="assault" name="assault">
                        <option value="Squad" selected> 4 Ground Operatives</option>
                        <option value="Squad+Sniper"> 4 Ground Operatives + 2 Snipers</option>
                        <option value="TwoSquads+Sniper"> 8 Ground Operatives+ 2 Snipers</option>
                        <option value="ThreeSquads+Sniper"> 12 Ground Operatives+ 4 Snipers</option>
                        <option value="no_preference">No Preference</option>
                    </select>
                `;
        break;

        case 'EXTRACTIONid':
        optionsDiv.innerHTML = `
                    <label for="extraction">Preferred Vehical Of Extraction:</label>
                    <select id="extraction" name="extraction">
                        <option value="SUV" selected>Armored SUV</option>
                        <option value="PCV">Personnel Carrying Vehical</option>
                        <option value="LCH">Light Combat Helicopter</option>
                        <option value="no_preference">No Preference</option>
                    </select>
                `;
        break;
      // Add more cases for other services as needed
    }
    dynamicOptions.appendChild(optionsDiv);
  } else {
    const optionsDiv = document.getElementById(serviceId + 'Options');
    if (optionsDiv) {
      dynamicOptions.removeChild(optionsDiv);
    }
  }
}

//<-------------------------------------------------------- SERVICE TENURE ------------------------------------------------------------------->

document.getElementById('confirm-button').addEventListener('click', function () {
  const startDateTime = document.getElementById('start-date-time').value;
  const endDateTime = document.getElementById('end-date-time').value;

  if (startDateTime && endDateTime) {
    const startDate = new Date(startDateTime);
    const endDate = new Date(endDateTime);

    const formatDate = (date) => date.toISOString().split('T')[0];
    const formatTime = (date) => date.toTimeString().split(' ')[0].slice(0, 5);

    document.getElementById('output-start-date').innerText = `Service starts on: ${formatDate(startDate)}`;
    document.getElementById('output-start-time').innerText = `Start time: ${formatTime(startDate)}`;
    document.getElementById('output-end-date').innerText = `Service ends on: ${formatDate(endDate)}`;
    document.getElementById('output-end-time').innerText = `End time: ${formatTime(endDate)}`;
  } else {
    document.getElementById('output-start-date').innerText = '';
    document.getElementById('output-start-time').innerText = '';
    document.getElementById('output-end-date').innerText = '';
    document.getElementById('output-end-time').innerText = '';
    alert('Please select both start and end date and time.');
  }
});

// <-----------------------------------------------------SUMMARY ------------------------------------------------------------------------>

document.getElementById('confirm-button').addEventListener('click', function() {
  const name = document.getElementById('NAMEid').value;
  const company = document.getElementById('COMPANYid').value;
  const email = document.getElementById('EMAILid').value;
  const phone = document.getElementById('PHONEid').value;
  const latitude = document.getElementById('LATid').value;
  const longitude = document.getElementById('LONGid').value;

  const startDateTime = new Date(document.getElementById('start-date-time').value);
  const endDateTime = new Date(document.getElementById('end-date-time').value);

  const startDate = startDateTime.toLocaleDateString();
  const startTime = startDateTime.toLocaleTimeString();
  const endDate = endDateTime.toLocaleDateString();
  const endTime = endDateTime.toLocaleTimeString();

  const services = [
      'CYBERSECid', 'ARMEDGUARDSid', 'UNARMEDGUARDSid', 'EVENTSECURITYid', 'VIPPROTECTIONid',
      'DETECTIVEid', 'CONSULTATIONid', 'CONVOYid', 'ASSAULTTEAMid', 'EXTRACTIONid', 'K9UNITid'
  ].filter(id => document.getElementById(id).checked)
   .map(id => document.querySelector(`label[for="${id}"]`).innerText)
   .join(', ');

  const summaryText = `
      Mr./Mrs. <span class="bold-underline">${name}</span>, Representing <span class="bold-underline">${company}</span>,
      We Appreciate The Opportunity To Serve You,
      Your Email Address Is <span class="bold-underline">${email}</span>, 
      And We Can Contact You At <span class="bold-underline">${phone}</span>,
      We Understand That Your Location Is At Latitude <span class="bold-underline">${latitude}</span>
      And Longitude <span class="bold-underline">${longitude}</span>,
      We Are Delighted To Be Providing You With Our <span class="bold-underline">${services}</span>,
      We Are Pleased To Confirm That The Service Tenure Will Commence On <span class="bold-underline">${startDate} ${startTime}</span>
      And Will Conclude On <span class="bold-underline">${endDate} ${endTime}</span>,
      Kindly Procede To The Payments Page And Complete The Procedures .
  `.replace(/,/g, '.</p><p>'); // Replace each comma with a closing and opening p tag.

  document.getElementById('summary-text').innerHTML = `<p>${summaryText}</p>`;
});

// Example function to get location
document.getElementById('get-location').addEventListener('click', function() {
  if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(function(position) {
          document.getElementById('LATid').value = position.coords.latitude;
          document.getElementById('LONGid').value = position.coords.longitude;
      });
  } else {
      alert("Geolocation is not supported by this browser.");
  }
});
