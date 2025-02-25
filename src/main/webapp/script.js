function updateCountdown() {
    const targetDate = new Date('March 14, 2025 10:00:00').getTime();
    const now = new Date().getTime();
    const timeLeft = targetDate - now;

    if (timeLeft > 0) {
        const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
        const hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);
        document.getElementById('countdown').innerHTML = days + "d " + hours + "h " + minutes + "m " + seconds + "s";
    } else {
        document.getElementById('countdown').innerHTML = "Time's up!";
    }
}

setInterval(updateCountdown, 1000);
updateCountdown();

async function fetchImages() {
    let response = await fetch('/images');
    let imageList = await response.json();

    setInterval(() => {
        let imgSrc = imageList[Math.floor(Math.random() * imageList.length)];
        let img = document.createElement("img");
        img.src = "/images/testimages/" + imgSrc;
        img.classList.add("image-container");

        let size = Math.floor(Math.random() * 100) + 150;
        img.style.width = size + "px";
        img.style.height = size + "px";
        img.style.position = "absolute";
        img.style.left = Math.random() * window.innerWidth + "px";
        img.style.top = Math.random() * window.innerHeight + "px";

        document.getElementById("image-wrapper").appendChild(img);
        setTimeout(() => img.classList.add("visible"), 100);

        setTimeout(() => {
            img.remove();
        }, 5000);
    }, 3000);
}

fetchImages();
