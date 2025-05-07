// Wait for DOM to load once, then run everything
document.addEventListener("DOMContentLoaded", function () {

    // 1. Hamburger menu toggle
    const hamburger = document.querySelector('.hamburger');  // This is the hamburger icon.
    const navMenu = document.querySelector('.nav-menu');  // This is the navigation menu.
    if (hamburger && navMenu) {
        hamburger.addEventListener('click', () => {
            navMenu.classList.toggle('active');  // Toggle the 'active' class to show/hide the menu.
        });
    }

    // 2. Learn More alert
    const learnMoreBtn = document.getElementById("learnMoreBtn");
    if (learnMoreBtn) {
        learnMoreBtn.addEventListener("click", function () {
            alert("Thank you for your interest! We will add more details soon.");
        });
    }

    // 3. Counter animation
    function animateCounters() {
        const counters = document.querySelectorAll('.counter');
        const duration = 5000, delay = 30, steps = duration / delay;

        counters.forEach(counter => {
            const target = +counter.getAttribute('data-target');
            const isAUM = target > 100000;
            let count = 0, increment = target / steps;

            const update = () => {
                count += increment;
                if (count >= target) {
                    count = target;
                    counter.innerText = isAUM ? '₹' + Math.floor(count).toLocaleString('en-IN') : Math.floor(count);
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
    animateCounters();

    // 4. Contact form basic validation
    const contactForm = document.getElementById("contactForm");
    if (contactForm) {
        contactForm.addEventListener("submit", function (event) {
            event.preventDefault();

            const name = document.getElementById("name")?.value;
            const email = document.getElementById("email")?.value;
            const message = document.getElementById("message")?.value;
            const mobile = document.getElementById("mobile")?.value;

            const errorMessage = document.getElementById("error-message");
            const successMessage = document.getElementById("success-message");
            const formMessage = document.getElementById("formMessage");

            // Reset all messages
            if (errorMessage) errorMessage.textContent = "";
            if (successMessage) successMessage.textContent = "";
            if (formMessage) formMessage.textContent = "";

            // Simple required fields check
            if (name === "" || email === "" || message === "") {
                if (formMessage) {
                    formMessage.textContent = "All fields are required!";
                    formMessage.style.color = "red";
                }
                return;
            }

            // Mobile validation
            const mobilePattern = /^[6-9][0-9]{9}$/;
            if (mobile && !mobilePattern.test(mobile)) {
                if (errorMessage) errorMessage.textContent = "❌ Please enter a valid 10-digit mobile number (starting with 6-9).";
                return;
            }

            // Email validation
            const allowedDomains = ["gmail.com", "yahoo.com", "outlook.com"];
            const emailMatch = email.match(/^[a-zA-Z0-9._%+-]+@([a-zA-Z0-9.-]+)$/);
            if (!emailMatch || !allowedDomains.includes(emailMatch[1])) {
                if (errorMessage) errorMessage.textContent = "❌ Please enter an email from genuine domains.";
                return;
            }

            // All good
            if (formMessage) {
                formMessage.textContent = "Message sent successfully!";
                formMessage.style.color = "green";
            }
            if (successMessage) {
                successMessage.textContent = "✅ Form submitted successfully!";
            }

            contactForm.reset();
        });
    }

    // 5. Slideshow logic
    const slides = document.querySelectorAll(".slide");
    if (slides.length > 0) {
        let index = 0;
        function changeSlide() {
            slides.forEach(slide => slide.classList.remove("active"));
            slides[index].classList.add("active");
            index = (index + 1) % slides.length;
        }
        setInterval(changeSlide, 4000);
    }

    // 6. Risk profiling form
    const riskForm = document.getElementById("riskProfileForm");
    if (riskForm) {
        riskForm.addEventListener("submit", function (e) {
            e.preventDefault();
            const form = new FormData(this);
            let scores = { low: 0, medium: 0, high: 0 };

            for (let [, value] of form.entries()) {
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
    }

    // 7. Dropdown link fix
    document.querySelectorAll('.dropdown-menu a').forEach(link => {
        link.addEventListener('click', function (event) {
            window.location.href = this.href;
        });
    });

});

// 8. Other calculator functions (remain outside DOMContentLoaded so they can be called anytime)
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
    const inflationRate = 6;
    const postRetirementReturn = 8;

    let yearsToRetirement = retirementAge - currentAge;
    let retirementYears = lifeExpectancy - retirementAge;

    let inflatedExpense = monthlyExpense * Math.pow(1 + inflationRate / 100, yearsToRetirement);
    let monthlyRate = postRetirementReturn / 100 / 12;
    let totalMonths = retirementYears * 12;

    let corpus = inflatedExpense * ((1 - Math.pow(1 + monthlyRate, -totalMonths)) / monthlyRate);

    document.getElementById("retirementResult").innerText = `Required Retirement Corpus: ₹${corpus.toFixed(2)}`;
}

function calculateEMI() {
    let principal = parseFloat(document.getElementById("loanAmount").value);
    let rate = parseFloat(document.getElementById("loanRate").value) / 100 / 12;
    let months = parseInt(document.getElementById("loanYears").value) * 12;

    let emi = (principal * rate * Math.pow(1 + rate, months)) / (Math.pow(1 + rate, months) - 1);
    document.getElementById("emiResult").innerText = `EMI: ₹${emi.toFixed(2)}`;
}
