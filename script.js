// Countdown Timer
const weddingDate = new Date("2025-02-06T18:00:00"); // Replace with your wedding date
const daysEl = document.getElementById("days");
const hoursEl = document.getElementById("hours");
const minutesEl = document.getElementById("minutes");
const secondsEl = document.getElementById("seconds");
const audio = document.getElementById("background-music");

// Function to play music when user interacts
    function playAudio() {
        audio.play().catch(error => {
            console.log("Autoplay blocked. User interaction needed.");
        });
    }

    // Attempt to play on load
    playAudio();

    // Add event listeners to ensure playback on any user interaction
    document.body.addEventListener("click", playAudio);
    document.body.addEventListener("touchstart", playAudio);

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


document.addEventListener("DOMContentLoaded", () => {
    const doors = document.getElementById("door-container");
    const mainContent = document.getElementById("main-content");
    doors.addEventListener("click", () => {
        document.body.classList.remove("locked-scroll");
        doors.classList.add("door-open");
        setTimeout(() => {
            doors.style.display = "none";
        }, 1500);
    });
});


// document.addEventListener("DOMContentLoaded", () => {
//     const doors = document.getElementById("door-container");

//     doors.addEventListener("click", () => {
//         document.body.classList.remove("locked-scroll");
//         doors.classList.add("door-open");

//         // Delay hiding the doors to ensure smooth animation
//         setTimeout(() => {
//             doors.style.display = "none";
//         }, 1500); // Adjust timing to match the door animation
//     });
    const doorContainer = document.getElementById('door-container');
    const mainContent = document.getElementById('main-content');

    // Handle door click to open
    doorContainer.addEventListener('click', () => {
        doorContainer.classList.add('door-open');
        setTimeout(() => {
            doorContainer.style.display = 'none'; // Hide the door section
            mainContent.style.display = 'block'; // Show the main content
        }, 1500); // Match the duration of the door opening animation
    });
// });

setInterval(updateCountdown, 1000);
updateCountdown();