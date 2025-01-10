// Countdown Timer
const weddingDate = new Date("2025-02-06T18:00:00"); // Replace with your wedding date
const daysEl = document.getElementById("days");
const hoursEl = document.getElementById("hours");
const minutesEl = document.getElementById("minutes");
const secondsEl = document.getElementById("seconds");

function updateCountdown() {
    const now = new Date();
    const diff = weddingDate - now;

    if (diff <= 0) {
        // Countdown complete
        document.getElementById("countdown").innerHTML = `
            <h2 class="fancy-font">The Big Day is Here!</h2>
            <p>We can't wait to celebrate with you!</p>`;
        return;
    }

    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
    const minutes = Math.floor((diff / (1000 * 60)) % 60);
    const seconds = Math.floor((diff / 1000) % 60);

    daysEl.textContent = days;
    hoursEl.textContent = hours;
    minutesEl.textContent = minutes;
    secondsEl.textContent = seconds;
}

setInterval(updateCountdown, 1000);

// Audio Toggle
const audio = document.getElementById("background-music");
window.addEventListener('load', () => {
    audio.play().catch(err => console.log("Autoplay blocked. User interaction required."));
});
// const audioToggle = document.getElementById("audio-toggle");

//     audioToggle.addEventListener("click", () => {
//         if (audio.paused) {
//             audio.play();
//             audioToggle.textContent = "🔊";
//         } else {
//             audio.pause();
//             audioToggle.textContent = "🔇";
//         }
//     });

updateCountdown();