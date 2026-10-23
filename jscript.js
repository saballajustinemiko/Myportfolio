document.addEventListener("DOMContentLoaded", function () {
    const slider = document.getElementById("slider");
    const navLinks = document.querySelectorAll(".nav-link");

    const sectionIds = ["about", "achievement", "cpp-loops", "activities", "feedback"];

    function slideToSection(targetId) {
        const index = sectionIds.indexOf(targetId);
        if (index !== -1) {
            const translatePercentage = -(index * 20);
            slider.style.transform = translateX(${translatePercentage}%);

            navLinks.forEach((link) => {
                if (link.getAttribute("href") === #${targetId}) {
                    link.classList.add("active");
                } else {
                    link.classList.remove("active");
                }
            });
        }
    }

    navLinks.forEach((link) => {
        link.addEventListener("click", function (event) {
            event.preventDefault();
            const targetId = this.getAttribute("href").replace("#", "");
            slideToSection(targetId);
        });
    });

    const greetingElement = document.getElementById("dynamic-greeting");
    const currentHour = new Date().getHours();
    if (greetingElement) {
        if (currentHour < 12) {
            greetingElement.textContent = "Good Morning! Welcome to my Computing Dashboard!";
        } else if (currentHour < 18) {
            greetingElement.textContent = "Good Afternoon! Welcome to my Computing Dashboard!";
        } else {
            greetingElement.textContent = "Good Evening! Welcome to my Computing Dashboard!";
        }
    }

    const formElement = document.getElementById("student-form");
    if (formElement) {
        formElement.addEventListener("submit", function (event) {
            event.preventDefault();
            const nameInput = document.getElementById("student_name").value;
            alert(Thank you, ${nameInput}! Your form submission was processed successfully.);
            formElement.reset();
        });
    }
});
