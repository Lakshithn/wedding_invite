// Countdown Timer
const weddingDate = new Date("2025-02-06T18:00:00");
const daysEl = document.getElementById("days");
const hoursEl = document.getElementById("hours");
const minutesEl = document.getElementById("minutes");
const secondsEl = document.getElementById("seconds");

// Audio and Music Toggle
const audio = document.getElementById("background-music");
const musicToggle = document.getElementById("music-toggle");

// Music Toggle Button Event Listener
musicToggle.addEventListener("click", (e) => {
  e.stopPropagation();
  if (audio.paused) {
    audio.play().then(() => {
      musicToggle.textContent = "Pause Music";
    }).catch(error => {
      console.log("Error playing audio:", error);
    });
  } else {
    audio.pause();
    musicToggle.textContent = "Play Music";
  }
});

// Updated door opening event to trigger audio.play()
document.addEventListener("DOMContentLoaded", () => {
  const doors = document.getElementById("door-container");
  const mainContent = document.getElementById("main-content");

  doors.addEventListener("click", () => {
    document.body.classList.remove("locked-scroll");
    doors.classList.add("door-open");
    
    // Fade out the door text quickly
    doorText.style.opacity = "0";
    // Play audio when main content is revealed
    audio.play().catch(error => {
      console.log("Audio play error:", error);
    });

    // Delay hiding the door container for the animation
    setTimeout(() => {
      doors.style.display = "none";
    }, 1500);
  });
});

function updateCountdown() {
  const now = new Date();
  const diff = weddingDate - now;

  if (diff <= 0) {
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
updateCountdown();


// VERSION 3
// // Countdown Timer
// const weddingDate = new Date("2025-02-06T18:00:00");
// const daysEl = document.getElementById("days");
// const hoursEl = document.getElementById("hours");
// const minutesEl = document.getElementById("minutes");
// const secondsEl = document.getElementById("seconds");

// // Audio and Music Toggle
// const audio = document.getElementById("background-music");
// const musicToggle = document.getElementById("music-toggle");

// // Attempt to play audio on DOMContentLoaded (user gesture required on mobile)
// document.addEventListener("DOMContentLoaded", () => {
//   audio.play().catch(error => {
//     console.log("Autoplay blocked. User interaction needed.");
//   });
// });

// // Music Toggle Button Event Listener
// musicToggle.addEventListener("click", (e) => {
//   e.stopPropagation(); // Prevent the click from triggering other listeners
//   if (audio.paused) {
//     audio.play().then(() => {
//       musicToggle.textContent = "Pause Music";
//     }).catch(error => {
//       console.log("Error playing audio:", error);
//     });
//   } else {
//     audio.pause();
//     musicToggle.textContent = "Play Music";
//   }
// });

// function updateCountdown() {
//   const now = new Date();
//   const diff = weddingDate - now;

//   if (diff <= 0) {
//     document.getElementById("countdown").innerHTML = `
//       <h2 class="fancy-font">The Big Day is Here!</h2>
//       <p>We can't wait to celebrate with you!</p>`;
//     return;
//   }

//   const days = Math.floor(diff / (1000 * 60 * 60 * 24));
//   const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
//   const minutes = Math.floor((diff / (1000 * 60)) % 60);
//   const seconds = Math.floor((diff / 1000) % 60);

//   daysEl.textContent = days;
//   hoursEl.textContent = hours;
//   minutesEl.textContent = minutes;
//   secondsEl.textContent = seconds;
// }

// document.addEventListener("DOMContentLoaded", () => {
//   const doors = document.getElementById("door-container");
//   const mainContent = document.getElementById("main-content");

//   doors.addEventListener("click", () => {
//     document.body.classList.remove("locked-scroll");
//     doors.classList.add("door-open");

//     // Delay hiding the door container for the animation
//     setTimeout(() => {
//       doors.style.display = "none";
//     }, 1500);
//   });
// });

// setInterval(updateCountdown, 1000);
// updateCountdown();

// VERSION 2

// Countdown Timer
// const weddingDate = new Date("2025-02-06T18:00:00");
// const daysEl = document.getElementById("days");
// const hoursEl = document.getElementById("hours");
// const minutesEl = document.getElementById("minutes");
// const secondsEl = document.getElementById("seconds");
// const audio = document.getElementById("background-music");
// const musicToggle = document.getElementById("music-toggle");

// function playAudio() {
//     audio.play().catch(error => {
//         console.log("Autoplay blocked. User interaction needed.");
//     });
// }

// // Attempt to play on load and on user interaction
// playAudio();
// document.body.addEventListener("click", playAudio);
// document.body.addEventListener("touchstart", playAudio);

// // Music Toggle Button Event Listener
// musicToggle.addEventListener("click", () => {
//     if (audio.paused) {
//         audio.play();
//         musicToggle.textContent = "Pause Music";
//     } else {
//         audio.pause();
//         musicToggle.textContent = "Play Music";
//     }
// });

// function updateCountdown() {
//     const now = new Date();
//     const diff = weddingDate - now;
//     if (diff <= 0) {
//         document.getElementById("countdown").innerHTML = `
//             <h2 class="fancy-font">The Big Day is Here!</h2>
//             <p>We can't wait to celebrate with you!</p>`;
//         return;
//     }
//     const days = Math.floor(diff / (1000 * 60 * 60 * 24));
//     const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
//     const minutes = Math.floor((diff / (1000 * 60)) % 60);
//     const seconds = Math.floor((diff / 1000) % 60);
//     daysEl.textContent = days;
//     hoursEl.textContent = hours;
//     minutesEl.textContent = minutes;
//     secondsEl.textContent = seconds;
// }

// document.addEventListener("DOMContentLoaded", () => {
//     const doors = document.getElementById("door-container");
//     const mainContent = document.getElementById("main-content");
//     doors.addEventListener("click", () => {
//         document.body.classList.remove("locked-scroll");
//         doors.classList.add("door-open");
//         setTimeout(() => {
//             doors.style.display = "none";
//         }, 1500);
//     });
// });

// setInterval(updateCountdown, 1000);
// updateCountdown();

// VERSION 1

// // Countdown Timer
// const weddingDate = new Date("2025-02-06T18:00:00"); // Replace with your wedding date
// const daysEl = document.getElementById("days");
// const hoursEl = document.getElementById("hours");
// const minutesEl = document.getElementById("minutes");
// const secondsEl = document.getElementById("seconds");
// const audio = document.getElementById("background-music");
// const musicToggle = document.getElementById("music-toggle");
// // Function to play music when user interacts
//     function playAudio() {
//         audio.play().catch(error => {
//             console.log("Autoplay blocked. User interaction needed.");
//         });
//     }

//     // Attempt to play on load
//     playAudio();
//     document.body.addEventListener("click", playAudio);
//     document.body.addEventListener("touchstart", playAudio);

//     // Music Toggle Button Event Listener
//     musicToggle.addEventListener("click", () => {
//         if (audio.paused) {
//             audio.play();
//             musicToggle.textContent = "Pause Music";
//         } else {
//             audio.pause();
//             musicToggle.textContent = "Play Music";
//         }
//     });

// function updateCountdown() {
//     const now = new Date();
//     const diff = weddingDate - now;

//     if (diff <= 0) {
//         // Countdown complete
//         document.getElementById("countdown").innerHTML = `
//             <h2 class="fancy-font">The Big Day is Here!</h2>
//             <p>We can't wait to celebrate with you!</p>`;
//         return;
//     }

//     const days = Math.floor(diff / (1000 * 60 * 60 * 24));
//     const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
//     const minutes = Math.floor((diff / (1000 * 60)) % 60);
//     const seconds = Math.floor((diff / 1000) % 60);

//     daysEl.textContent = days;
//     hoursEl.textContent = hours;
//     minutesEl.textContent = minutes;
//     secondsEl.textContent = seconds;
// }


// document.addEventListener("DOMContentLoaded", () => {
//     const doors = document.getElementById("door-container");
//     const mainContent = document.getElementById("main-content");
//     doors.addEventListener("click", () => {
//         document.body.classList.remove("locked-scroll");
//         doors.classList.add("door-open");
//         setTimeout(() => {
//             doors.style.display = "none";
//         }, 1500);
//     });
// });

//     const doorContainer = document.getElementById('door-container');
//     const mainContent = document.getElementById('main-content');

//     // Handle door click to open
//     doorContainer.addEventListener('click', () => {
//         doorContainer.classList.add('door-open');
//         setTimeout(() => {
//             doorContainer.style.display = 'none'; // Hide the door section
//             mainContent.style.display = 'block'; // Show the main content
//         }, 1500); // Match the duration of the door opening animation
//     });
// // });

// setInterval(updateCountdown, 1000);
// updateCountdown();