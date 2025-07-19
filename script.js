// Function to load common header
async function loadHeader() {
    try {
        const response = await fetch('header.html');
        const headerHTML = await response.text();
        const headerPlaceholder = document.getElementById('header-placeholder');
        if (headerPlaceholder) {
            headerPlaceholder.innerHTML = headerHTML;
        }
    } catch (error) {
        console.error('Error loading header:', error);
    }
}

// Wait for DOM to load once, then run everything
document.addEventListener("DOMContentLoaded", function () {

    // Load common header first
    loadHeader().then(() => {
        // Initialize navigation after header is loaded
        initializeNavigation();
    });

});

// Function to initialize navigation functionality
function initializeNavigation() {
    // 1. Hamburger menu toggle - Enhanced for mobile responsiveness
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav-menu');
    
    if (hamburger && navMenu) {
        hamburger.addEventListener('click', (e) => {
            e.preventDefault();
            e.stopPropagation();
            navMenu.classList.toggle('active');
            hamburger.innerHTML = navMenu.classList.contains('active') ? '✕' : '&#9776;';
            
            // Force display state for mobile
            if (window.innerWidth <= 768) {
                if (navMenu.classList.contains('active')) {
                    navMenu.style.display = 'flex';
                } else {
                    navMenu.style.display = 'none';
                }
            }
        });
        
        // Close menu when clicking outside
        document.addEventListener('click', (e) => {
            if (!navMenu.contains(e.target) && !hamburger.contains(e.target)) {
                navMenu.classList.remove('active');
                hamburger.innerHTML = '&#9776;';
                
                // Force hide menu on mobile
                if (window.innerWidth <= 768) {
                    navMenu.style.display = 'none';
                    
                    // Reset dropdown icon state
                    if (dropdownContainer) {
                        dropdownContainer.classList.remove('active');
                        if (dropdownMenu) {
                            dropdownMenu.style.display = 'none';
                        }
                    }
                }
            }
        });
        
        // Close menu when clicking on nav links (mobile) - but only for actual navigation links
        navMenu.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', (e) => {
                // Only close menu on mobile and for actual navigation links
                if (window.innerWidth <= 768 && link.getAttribute('href') !== '#') {
                    navMenu.classList.remove('active');
                    hamburger.innerHTML = '&#9776;';
                    navMenu.style.display = 'none';
                    
                    // Reset dropdown icon state when navigating
                    if (dropdownContainer) {
                        dropdownContainer.classList.remove('active');
                        if (dropdownMenu) {
                            dropdownMenu.style.display = 'none';
                        }
                    }
                }
            });
        });
        
        // Handle window resize - moved to global resize handler below
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

    // 7. Dropdown link fix and mobile dropdown toggle
    document.querySelectorAll('.dropdown-menu a').forEach(link => {
        link.addEventListener('click', function (event) {
            window.location.href = this.href;
        });
    });
    
    // Mobile dropdown toggle for "Our Services" - only on mobile
    const dropdown = document.querySelector('.dropdown > a');
    const dropdownMenu = document.querySelector('.dropdown-menu');
    const dropdownContainer = document.querySelector('.dropdown');
    if (dropdown && dropdownMenu && dropdownContainer) {
        dropdown.addEventListener('click', function (e) {
            if (window.innerWidth <= 768) {
                e.preventDefault();
                e.stopPropagation();
                // Toggle dropdown visibility in mobile
                const isVisible = dropdownMenu.style.display === 'block';
                dropdownMenu.style.display = isVisible ? 'none' : 'block';
                
                // Toggle active class for icon rotation
                if (isVisible) {
                    dropdownContainer.classList.remove('active');
                } else {
                    dropdownContainer.classList.add('active');
                }
            }
        });
    }
    
    // Reset dropdown and menu states on window resize
    window.addEventListener('resize', function() {
        if (navMenu && hamburger) {
            if (window.innerWidth > 768) {
                // Reset mobile menu when switching to desktop
                navMenu.classList.remove('active');
                navMenu.style.display = '';
                hamburger.innerHTML = '&#9776;';
                
                // Reset dropdown to default desktop behavior
                if (dropdownMenu) {
                    dropdownMenu.style.display = '';
                }
                
                // Reset dropdown icon state
                if (dropdownContainer) {
                    dropdownContainer.classList.remove('active');
                }
            } else {
                // On mobile, make sure menu is hidden by default
                if (!navMenu.classList.contains('active')) {
                    navMenu.style.display = 'none';
                }
            }
        }
    });

    // Initialize proper state on page load
    if (window.innerWidth <= 768) {
        if (navMenu && !navMenu.classList.contains('active')) {
            navMenu.style.display = 'none';
                 }
     }
}

// Calculator functions remain outside for global access

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
