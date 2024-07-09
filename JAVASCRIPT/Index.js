
window.addEventListener('scroll', function () {
    const header = document.getElementById('foundershead');
    const scrollPosition = window.scrollY;
    const documentHeight = document.documentElement.scrollHeight - window.innerHeight;
    const scrollPercentage = (scrollPosition / documentHeight) * 100;
    const blogheader = document.getElementById('bloghead');

    if (scrollPercentage > 0) {
        header.style.width = '55rem';
    } 
    if (scrollPosition >= 0) {
        blogheader.style.width = '55rem';
    }
    else {
        header.style.width = '0';
        blogheader.style.width = '10rem';
    }

});

window.addEventListener('scroll', function() {
    const container = document.querySelector('.container.border');
    const secondContainer = document.querySelector('.second-container');
    const scrollPosition = window.scrollY;

    if (scrollPosition > 850) { // Change 50 to the desired scroll position
        container.classList.add('centered');
    } else {
        container.classList.remove('centered');
    }

    if (scrollPosition > 1300) { // Change 500 to the desired scroll position for the second container
        secondContainer.classList.add('centered-right');
    } else {
        secondContainer.classList.remove('centered-right');
    }
});



//<--------------------------------------------- CARD BORDER -------------------------------------------------------------------------->

window.addEventListener('scroll', function () {
    const cards = document.querySelectorAll('.card');
    const windowHeight = window.innerHeight;

    cards.forEach(card => {
        const rect = card.getBoundingClientRect();
        if (rect.top < windowHeight && rect.bottom > 0) {
            card.classList.add('animated');
        } else {
            card.classList.remove('animated');
        }
    });
});


// <------------------------------------------------- AUTOCOPY -------------------------------------------------------------------->
document.getElementById('quote-para-name1').addEventListener('change', autocopy);

function autocopy() {

    var startname = document.getElementById('quote-para-name1');
    var endname = document.getElementById('quote-para-name2');

    endname.value = startname.value;
};

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
                serviceDescription = 'In Todays Interconnected World, The Threat Landscape Is Constantly Evolving, Making Robust Protection Imperative.Our Tailored Cybersecurity Services Offer A Fortress - Like Defense Against Malicious Actors, Ensuring Your Sensitive Data Remains Secure And Your Operations Uninterrupted.With Our Team Of Seasoned Experts, We Conduct Comprehensive Risk Assessments, Deploy Advanced Threat Detection Technologies, And Implement Proactive Measures To Fortify Your Digital Infrastructure.Rest Assured, With Guardian Fortitude Security Services By Your Side, Your Organization Can Navigate The Digital Realm With Confidence, Knowing That Your Cybersecurity Needs Are In Capable Hands.';
                break;
            case 'ArmedGuard':
                serviceDescription = 'Experience Unmatched Protection With Armed Guards From Guardian Fortitude Security Services. Our Armed Guards Are Meticulously Trained, Rigorously Vetted, And Highly Skilled To Provide Unparalleled Security Solutions. At Guardian Fortitude, We Prioritize Your Safety Above All Else, Offering Round-The-Clock Protection And Peace Of Mind. With A Strong Presence And Unwavering Dedication, Our Armed Guards Ensure The Utmost Safety And Fortitude For Your Premises. Trust In Guardian Fortitude Security Services For Robust Security Solutions That Exceed Expectations.';
                break;
            case 'UnarmedGuard':
                serviceDescription = 'Unarmed Guards Offer Enhanced Security Solutions For Your Premises. Guard Against Potential Threats With Our Professional Services. Trust Guardian Fortitude Security Services To Safeguard Your Assets And Ensure Peace Of Mind. Rest Assured With Our Trained And Diligent Personnel. Experience Top-Notch Protection Without Compromising Safety. Secure Your Property With Confidence Today!';
                break;
            case 'EventSecurity':
                serviceDescription = 'Guardian Fortitude Security Services Presents Event Security As An Unparalleled Safeguarding Solution, Meticulously Crafted To Ensure The Utmost Safety And Tranquility For Your Gatherings. Our Seasoned Professionals, Equipped With Cutting-Edge Technology And Profound Expertise, Stand As Stalwart Sentinels, Fortifying Every Facet Of Your Event With Unwavering Vigilance. From Crowd Control To Risk Mitigation, We Orchestrate A Seamless Security Framework, Tailored To Your Unique Requirements, Fostering An Environment Of Confidence And Reassurance. Entrust Your Event To Guardian Fortitude, Where Safeguarding Your Occasion Is Not Just A Duty, But A Commitment To Excellence.';
                break;
            case 'Survelliance':
                serviceDescription = 'Surveillance & Monitoring Is Not Merely A Service; Its A Comprehensive Shield Of Security Ensuring Vigilance And Safety. At Guardian Fortitude Security Services, We Offer State-Of-The-Art Surveillance & Monitoring Solutions Tailored To Your Needs. Our Vigilant Team Employs Advanced Technology To Meticulously Watch Over Your Premises, Safeguarding Against Potential Threats And Providing You With Peace Of Mind. With Our Round-The-Clock Monitoring, We Maintain A Watchful Eye, Ready To Respond Swiftly To Any Unusual Activity. Trust Guardian Fortitude Security Services To Be Your Steadfast Guardian, Ensuring The Safety And Security Of Your Assets And Loved Ones.';
                break;
            case 'ExecutiveProtection':
                serviceDescription = 'Our Executive Protection program stands as the pinnacle of safeguarding excellence, ensuring the utmost security for you and your assets. With a team of seasoned professionals trained in the art of protection, we guarantee unparalleled fortitude in shielding you from any potential threat. Our comprehensive approach encompasses meticulous planning, advanced risk assessment, and discreet yet vigilant surveillance to anticipate and neutralize any potential risks. Rest assured, with Guardian Fortitude Security Services by your side, your safety is our paramount priority.';
                break;
            case 'Detective':
                serviceDescription = 'Guardian Fortitude Security Services proudly presents Detective Services, an unparalleled solution for your investigative needs. Our adept team of professionals ensures meticulous attention to detail in every case, providing comprehensive insights and actionable intelligence. With a commitment to confidentiality and integrity, we uncover truths, resolve uncertainties, and safeguard your interests with unwavering dedication. Elevate your security posture and gain peace of mind with Guardian Fortitudes Detective Services—where reliability meets excellence.';
                break;
            case 'Consultation Services':
                serviceDescription = 'Guardian Fortitude Security Services presents Consultation Services, an Exclusive Offering designed to fortify your security infrastructure. Our team of Experts delivers Tailored Solutions, ensuring your unique needs are met with Precision and Care. With Comprehensive Assessments, we identify vulnerabilities and provide Strategic Recommendations to safeguard your assets. Trust in our Proven Expertise to guide you towards Enhanced Security Measures and Peace of Mind. Elevate your protection with Guardian Fortitudes Consultation Services today.';
                break;
            case 'Vehical Convoy':
                serviceDescription = 'Our meticulously trained personnel, equipped with state-of-the-art technology, guarantee a seamless and fortified convoy experience. With a focus on precision, vigilance, and reliability, our convoy services uphold the highest standards of security, safeguarding your assets during transit. Trust Guardian Fortitude Security Services to deliver unmatched fortitude and assurance for your convoy needs.';
                break;
            case 'AssaultTeam':
                serviceDescription = 'Guardian Fortitude Security Services is proud to introduce Assault Team, an unparalleled security service dedicated to safeguarding your assets. With Assault Team, rest assured that your safety is our priority. Our highly trained professionals are equipped with state-of-the-art technology and tactical expertise, ensuring swift and effective response to any threat. Gain peace of mind knowing that Guardian Fortitude is on the frontline, defending your fortitude. Elevate your security standards with Assault Team today.';
                break;
            case 'Extraction':
                serviceDescription = 'Guardian Fortitude Security Services proudly presents Extraction, a comprehensive security solution tailored to safeguard your assets and peace of mind. Our cutting-edge technology coupled with highly trained personnel ensures unparalleled protection for your premises. With Extraction, rest assured that your security needs are not just met, but exceeded. From risk assessment to implementation, we prioritize your safety above all else. Trust Guardian Fortitude Security Services to deliver excellence in every aspect of security provision. Elevate your protection standards with Extraction today.';
                break;
            case 'K9Unit':
                serviceDescription = 'Guardian Fortitude Security Services introduces the elite K9 Unit, an unparalleled asset in safeguarding your premises. With unmatched vigilance and unwavering loyalty, our meticulously trained canine companions stand as stalwart protectors, fortifying your security infrastructure. Trust in the heightened sensory acuity and swift response capabilities of our K9 Unit, ensuring an impenetrable shield against potential threats. Enhanced deterrence and rapid detection are assured with our expertly crafted canine security solutions. Elevate your security paradigm with Guardian Fortitudes esteemed K9 Unit, where safety meets unparalleled excellence.';
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
