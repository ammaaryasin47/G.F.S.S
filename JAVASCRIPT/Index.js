document.getElementById('quote-para-name1').addEventListener('change', autocopy);

function autocopy() {

  var startname = document.getElementById('quote-para-name1');
  var endname = document.getElementById('quote-para-name2');

  endname.value = startname.value;
};

function digitalClock() {
  var date, time;
  date = new Date()
  time = date.toLocaleTimeString()
  document.getElementById("clock").innerHTML = time;
}
setInterval(function () {
  digitalClock()
}, 1000);

document.addEventListener("DOMContentLoaded", function () {
  var namePlates = document.querySelectorAll(".NamePlate h1");

  namePlates.forEach(function (namePlate) {
    namePlate.style.left = "3rem"; // Slide in from the left
  });
});

//<---------------------------------------------------- FORM ---------------------------------------------------------------->

document.addEventListener('DOMContentLoaded', (event) => {
  emailjs.init("mPtxfekfXl_jZzpZy"); // Replace with your EmailJS public key

  function sendEmail(event) {
      event.preventDefault();
      const name = document.getElementById('quote-para-name1').value;
      const address = document.querySelector('input[placeholder="ADDRESS"]').value;
      const service = document.querySelector('.quote-para-drop').value;
      const contactNo = document.querySelector('input[placeholder="CONTACT NO."]').value;
      const userEmail = document.querySelector('input[placeholder="EMAIL"]').value;

      // Validate email format
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(userEmail)) {
          alert('Please enter a valid email address.');
          return;
      }

      // Define the service description
      let serviceDescription;
      switch (service) {
          case 'CyberSecurity':
              serviceDescription = 'Our Cyber Security services provide comprehensive protection against online threats, ensuring your digital assets are secure.';
              break;
          case 'ArmedGuard':
              serviceDescription = 'Our Armed Guards are highly trained professionals equipped to handle various security scenarios, providing you with maximum protection.';
              break;
          case 'UnarmedGuard':
              serviceDescription = 'Our Unarmed Guards offer a visible security presence, maintaining safety and order in various environments.';
              break;
          case 'EventSecurity':
              serviceDescription = 'Our Event Security services ensure the safety and smooth operation of your events, with customized plans to meet your needs.';
              break;
          case 'Survelliance':
              serviceDescription = 'Our Surveillance and Monitoring services utilize advanced technology to keep a watchful eye on your premises, 24/7.';
              break;
          case 'ExecutiveProtection':
              serviceDescription = 'Our Executive Protection services provide high-profile individuals with personal security, ensuring their safety at all times.';
              break;
          case 'Detective':
              serviceDescription = 'Our Detective Services offer professional investigative solutions, helping you uncover the truth with discretion and efficiency.';
              break;
          case 'Consultation Services':
              serviceDescription = 'Our Consultation Services provide expert advice and strategic planning to enhance your security measures.';
              break;
          case 'Vehical Convoy':
              serviceDescription = 'Our Vehicle Convoy Service ensures safe and secure transportation for high-value assets and individuals.';
              break;
          case 'AssaultTeam':
              serviceDescription = 'Our Special Assault Team is ready to respond to high-risk situations, providing rapid and effective intervention.';
              break;
          case 'Extraction':
              serviceDescription = 'Our Extraction services are designed to safely remove individuals from dangerous or hostile environments.';
              break;
          case 'K9Unit':
              serviceDescription = 'Our K9 Unit employs trained dogs for various security tasks, including detection and patrol.';
              break;
          default:
              serviceDescription = 'We offer a range of specialized security services tailored to your needs.';
      }

      const templateParams = {
          to_name: name,
          from_name: 'Management',
          service: service,
          service_paragraph: serviceDescription,
          user_email: userEmail
      };

      emailjs.send('service_s65l3by', 'template_vmhcyvr', templateParams)
          .then(function (response) {
              console.log('SUCCESS!', response.status, response.text);
              alert('Email sent successfully!');
          }, function (error) {
              console.log('FAILED...', error);
              alert('Failed to send email. Please try again.');
          });
  }

  const sendButton = document.querySelector('.quote-send');
  sendButton.addEventListener('click', sendEmail);
});

function autocopy() {
  document.getElementById('quote-para-name2').value = document.getElementById('quote-para-name1').value;
}
