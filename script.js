document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

function setGreeting() {
    const greetingElement = document.getElementById('greeting');
    const hours = new Date().getHours();
    let greetingText = '';

    if (hours < 12) {
        greetingText = 'Good Morning!';
    } else if (hours < 18) {
        greetingText = 'Good Afternoon!';
    } else {
        greetingText = 'Good Evening!';
    }

    greetingElement.textContent = greetingText;
}

// Call the function when the page loads
window.onload = setGreeting;
