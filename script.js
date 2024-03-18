document.addEventListener('DOMContentLoaded', function() {
  var canvas = document.getElementById('noiseCanvas');
  var ctx = canvas.getContext('2d');
  let isNoiseEnabled = true;
  let currentBlurValue = Math.random() * (15 - 3) + 2;
  let targetBlurValue = Math.random() * (15 - 3) + 2;

  function resizeCanvas() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    if (isNoiseEnabled) {
      generateNoise();
    }
  }

  function generateNoise(opacity = 0.8) {
    if (!isNoiseEnabled) return;
    var w = canvas.width,
        h = canvas.height,
        imageData = ctx.createImageData(w, h),
        pixels = imageData.data,
        n = pixels.length,
        i = 0;

    while (i < n) {
      var v = (Math.random() * 255) | 0;
      pixels[i++] = v;
      pixels[i++] = v;
      pixels[i++] = v;
      pixels[i++] = Math.random() < opacity ? (Math.random() * 256) | 0 : 0;
    }

    ctx.putImageData(imageData, 0, 0);
  }

  function updateBlur() {
    if (Math.abs(currentBlurValue - targetBlurValue) < 0.5) {
      targetBlurValue = Math.random() * (15 - 3) + 2;
    }
    currentBlurValue += (targetBlurValue - currentBlurValue) * 0.05;
    document.getElementById('animated-text').style.filter = `blur(${currentBlurValue.toFixed(1)}px)`;
  }

  function randomIntFromInterval(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
  }
  
  function applyGlitchEffect() {
    const elements = document.querySelectorAll('.glitch');
    elements.forEach(el => {
      // Losowe przesunięcia dla ::before
      const xRandBefore = randomIntFromInterval(-15, 15);
      const yRandBefore = randomIntFromInterval(-15, 15);
  
      // Losowe przesunięcia dla ::after
      const xRandAfter = randomIntFromInterval(-15, 15);
      const yRandAfter = randomIntFromInterval(-15, 15);
  
      el.classList.add('active');
  
      // Ustawianie zmiennych CSS dla ::before
      el.style.setProperty('--x-translate-before', `${xRandBefore}px`);
      el.style.setProperty('--y-translate-before', `${yRandBefore}px`);
  
      // Ustawianie zmiennych CSS dla ::after
      el.style.setProperty('--x-translate-after', `${xRandAfter}px`);
      el.style.setProperty('--y-translate-after', `${yRandAfter}px`);
  
      setTimeout(() => {
        el.classList.remove('active');
      }, 200); // Trwałość efektu
    });
  }
  
  
  function triggerGlitch() {
    for (let i = 0; i < 5; i++) {
      setTimeout(applyGlitchEffect, i * 200);
    }
  }

  setInterval(triggerGlitch, randomIntFromInterval(10000, 15000));

  window.addEventListener('resize', resizeCanvas);
  resizeCanvas();

  setInterval(generateNoise, 20);
  setInterval(updateBlur, 200);
});
