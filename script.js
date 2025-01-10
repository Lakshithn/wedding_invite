// Countdown Timer
const weddingDate = new Date("2025-02-06T18:00:00");

// Function to update the countdown
function updateCountdown() {
    const now = new Date();
    const timeLeft = weddingDate - now;

    // If the wedding day has passed
    if (timeLeft <= 0) {
        document.getElementById("countdown").innerHTML = "<h2>The Big Day is Here!</h2>";
        return;
    }

    // Calculate remaining time
    const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
    const hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

    // Update the HTML elements with the calculated time
    document.getElementById("days").textContent = days;
    document.getElementById("hours").textContent = hours;
    document.getElementById("minutes").textContent = minutes;
    document.getElementById("seconds").textContent = seconds;
}

// Update the countdown every second
setInterval(updateCountdown, 1000);
