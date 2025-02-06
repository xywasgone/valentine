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
    let loveMessage = document.createElement("div");
    loveMessage.id = "loveMessage";
    loveMessage.innerHTML = `
        <p>Ratih Bunga Aprilia Nirwana,</p>
        <p>Di hari yang penuh cinta ini, aku ingin mengungkapkan betapa berartinya dirimu dalam hidupku. Seperti bunga yang indah, kamu memberikan warna dan kehangatan dalam setiap hariku. Cintamu adalah anugerah yang aku syukuri setiap waktu.</p>
        <p>Semoga di hari Valentine ini, kita bisa terus bersama, saling mendukung, dan menjaga cinta ini hingga waktu yang tak terbatas. Kamu adalah kebahagiaan yang tak ternilai, dan aku merasa beruntung memilikimu dalam hidupku.</p>
        <p>Selamat Hari Valentine, sayang. Semoga cintaku selalu bisa membuatmu tersenyum, seperti kamu selalu membuatku bahagia.</p>
        <p><strong>Dengan segala cintaku,</strong><br>Arsyad</p>
    `;
    document.body.appendChild(loveMessage);
    
    let bgMusic = document.getElementById("bg-music");
    bgMusic.play();
}
