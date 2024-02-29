const textElement = document.getElementById('animated-text');

function addNoise() {
    textElement.style.color = `rgba(0,0,0,${Math.random()})`;
    textElement.style.textShadow = `0 0 ${Math.random() * 10}px rgba(0,0,0,${Math.random()})`;
}

setInterval(addNoise, 100);
