document.addEventListener("DOMContentLoaded", function () {
    let canvas = document.getElementById("heartCanvas");
    let ctx = canvas.getContext("2d");
    let hearts = [];

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    function createHeart() {
        let x = Math.random() * canvas.width;
        let y = Math.random() * canvas.height;
        let size = Math.random() * 20 + 10;
        let speed = Math.random() * 2 + 1;
        hearts.push({ x, y, size, speed });
    }

    function drawHearts() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        ctx.fillStyle = "rgba(255, 0, 0, 0.7)";
        
        hearts.forEach((heart, i) => {
            ctx.beginPath();
            ctx.arc(heart.x, heart.y, heart.size, 0, Math.PI * 2);
            ctx.fill();
            heart.y += heart.speed;

            if (heart.y > canvas.height) {
                hearts.splice(i, 1);
                createHeart();
            }
        });

        requestAnimationFrame(drawHearts);
    }

    for (let i = 0; i < 50; i++) {
        createHeart();
    }

    drawHearts();
});

function showLoveMessage() {
    alert("I Love You! 💖 Happy Valentine's Day!");
    document.getElementById("bg-music").play();
}
