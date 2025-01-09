// Countdown Timer
const countdown = () => {
    const weddingDate = new Date("February 6, 2025 18:00:00").getTime();
    const now = new Date().getTime();
    const diff = weddingDate - now;

    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((diff % (1000 * 60)) / 1000);

    document.getElementById("days").innerText = days;
    document.getElementById("hours").innerText = hours;
    document.getElementById("minutes").innerText = minutes;
    document.getElementById("seconds").innerText = seconds;

    if (diff < 0) {
        clearInterval(timerInterval);
        document.getElementById("countdown").innerHTML = "The Wedding is Happening!";
    }
};

const timerInterval = setInterval(countdown, 1000);
