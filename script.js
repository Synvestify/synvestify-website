// JavaScript to add interactivity
document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("learnMoreBtn").addEventListener("click", function() {
        alert("Thank you for your interest! We will add more details soon.");
    });
});
function animateCounters() {
    const counters = document.querySelectorAll('.counter');
    const duration = 5000; // total animation duration in ms
    const delay = 30;      // delay between updates in ms
    const steps = duration / delay;

    counters.forEach(counter => {
        const target = +counter.getAttribute('data-target');
        const isAUM = target > 100000; // assume AUM is larger than 1 lakh
        let count = 0;

        const increment = target / steps;

        const update = () => {
            count += increment;

            if (count >= target) {
                count = target;
                counter.innerText = isAUM ? '₹' + Math.floor(count).toLocaleString('en-IN') : Math.floor(count);

                // Restart with fade
                setTimeout(() => {
                    counter.style.transition = 'opacity 1s';
                    counter.style.opacity = 0;

                    setTimeout(() => {
                        count = 0;
                        counter.innerText = isAUM ? '₹0' : '0';
                        counter.style.opacity = 1;
                        update();
                    }, 1000);
                }, 3000);
            } else {
                counter.innerText = isAUM ? '₹' + Math.floor(count).toLocaleString('en-IN') : Math.floor(count);
                setTimeout(update, delay);
            }
        };

        update();
    });
}

document.addEventListener('DOMContentLoaded', animateCounters);


document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("contactForm").addEventListener("submit", function(event) {
        event.preventDefault(); // Prevent page refresh

        // Get form values
        let name = document.getElementById("name").value;
        let email = document.getElementById("email").value;
        let message = document.getElementById("message").value;

        // Simple validation check
        if (name === "" || email === "" || message === "") {
            document.getElementById("formMessage").textContent = "All fields are required!";
            document.getElementById("formMessage").style.color = "red";
            return;
        }

        // Show success message
        document.getElementById("formMessage").textContent = "Message sent successfully!";
        document.getElementById("formMessage").style.color = "green";

        // Clear form fields
        document.getElementById("contactForm").reset();
    });
});

document.addEventListener("DOMContentLoaded", function () {
    let index = 0;
    const slides = document.querySelectorAll(".slide");
    const totalSlides = slides.length;

    function changeSlide() {
        slides.forEach(slide => slide.classList.remove("active")); // Hide all images
        slides[index].classList.add("active"); // Show the current image
        index = (index + 1) % totalSlides; // Loop back after the last image
    }

    setInterval(changeSlide, 4000); // Change every 4 seconds
});

document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("contactForm").addEventListener("submit", function (event) {
        let email = document.getElementById("email").value.trim();
        let mobile = document.getElementById("mobile").value.trim();
        let errorMessage = document.getElementById("error-message");
        let successMessage = document.getElementById("success-message");

        errorMessage.textContent = ""; // Reset messages
        successMessage.textContent = "";

        // Mobile number validation (must be exactly 10 digits, starting with 6-9)
        let mobilePattern = /^[6-9][0-9]{9}$/;
        if (!mobilePattern.test(mobile)) {
            event.preventDefault(); // Only prevent if validation fails
            errorMessage.textContent = "❌ Please enter a valid 10-digit mobile number (starting with 6-9).";
            return;
        }

        // Allowed email domains
        let allowedDomains = ["gmail.com", "yahoo.com", "outlook.com"];

        // Email validation and domain check
        let emailPattern = /^[a-zA-Z0-9._%+-]+@([a-zA-Z0-9.-]+)$/;
        let emailMatch = email.match(emailPattern);

        if (!emailMatch || !allowedDomains.includes(emailMatch[1])) {
            event.preventDefault(); // Only prevent if validation fails
            errorMessage.textContent = "❌ Please enter an email from genuine domains.";
            return;
        }

        // ✅ Validation passed — allow form to submit to Formspree.
        successMessage.textContent = "✅ Form submitted successfully!"; // This may or may not be seen because page will redirect after submission.
    });
});

document.querySelectorAll('.dropdown-menu a').forEach(link => {
    link.addEventListener('click', function(event) {
        window.location.href = this.href;  // Forces navigation
    });
});

function toggleInvestmentFields() {
    let investmentType = document.getElementById("investmentType").value;
    document.getElementById("sipFields").style.display = (investmentType === "sip") ? "block" : "none";
    document.getElementById("lumpsumFields").style.display = (investmentType === "lumpsum") ? "block" : "none";
}

function calculateSIP() {
    let amount = parseFloat(document.getElementById("sipAmount").value);
    let rate = parseFloat(document.getElementById("sipRate").value) / 100 / 12;
    let months = parseInt(document.getElementById("sipYears").value) * 12;

    let futureValue = amount * (((Math.pow(1 + rate, months) - 1) / rate) * (1 + rate));
    document.getElementById("investmentResult").innerText = `Future Value: ₹${futureValue.toFixed(2)}`;
}

function calculateLumpsum() {
    let amount = parseFloat(document.getElementById("lumpsumAmount").value);
    let rate = parseFloat(document.getElementById("lumpsumRate").value) / 100;
    let years = parseInt(document.getElementById("lumpsumYears").value);

    let futureValue = amount * Math.pow((1 + rate), years);
    document.getElementById("investmentResult").innerText = `Future Value: ₹${futureValue.toFixed(2)}`;
}

function calculateRetirementCorpus() {
    let currentAge = parseInt(document.getElementById("currentAge").value);
    let retirementAge = parseInt(document.getElementById("retirementAge").value);
    let monthlyExpense = parseFloat(document.getElementById("monthlyExpenses").value);

    const lifeExpectancy = 85;
    const inflationRate = 6; // % per year
    const postRetirementReturn = 8; // % per year

    let yearsToRetirement = retirementAge - currentAge;
    let retirementYears = lifeExpectancy - retirementAge;

    // Adjust monthly expenses for inflation
    let inflatedExpense = monthlyExpense * Math.pow(1 + inflationRate / 100, yearsToRetirement);

    // Convert annual return to monthly return
    let monthlyRate = postRetirementReturn / 100 / 12;
    let totalMonths = retirementYears * 12;

    // Present Value of an annuity (to maintain monthly income for retirementYears)
    let corpus = inflatedExpense * ((1 - Math.pow(1 + monthlyRate, -totalMonths)) / monthlyRate);

    document.getElementById("retirementResult").innerText = 
        `Required Retirement Corpus: ₹${corpus.toFixed(2)}`;
}

function calculateEMI() {
    let principal = parseFloat(document.getElementById("loanAmount").value);
    let rate = parseFloat(document.getElementById("loanRate").value) / 100 / 12;
    let months = parseInt(document.getElementById("loanYears").value) * 12;

    let emi = (principal * rate * Math.pow(1 + rate, months)) / (Math.pow(1 + rate, months) - 1);
    document.getElementById("emiResult").innerText = `EMI: ₹${emi.toFixed(2)}`;
}

document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("riskProfileForm").addEventListener("submit", function (e) {
      e.preventDefault();
      const form = new FormData(this);
      let scores = { low: 0, medium: 0, high: 0 };
  
      for (let [key, value] of form.entries()) {
        scores[value]++;
      }
  
      let risk = Object.entries(scores).reduce((a, b) => (a[1] > b[1] ? a : b))[0];
      let message = {
        low: "🟢 Conservative Investor – You prefer safety and stability in your investments.",
        medium: "🟡 Moderate Investor – You seek a balance of risk and returns.",
        high: "🔴 Aggressive Investor – You're comfortable with risk for higher returns."
      };
  
      document.getElementById("riskResult").innerText = message[risk];
    });
  });
  