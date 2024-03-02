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
    if (!isNoiseEnabled) return; // Stop generating noise if disabled
    var w = canvas.width,
        h = canvas.height,
        imageData = ctx.createImageData(w, h),
        pixels = imageData.data,
        n = pixels.length,
        i = 0;

    while (i < n) {
      var v = (Math.random() * 255) | 0;
      pixels[i++] = v; // Red
      pixels[i++] = v; // Green
      pixels[i++] = v; // Blue
      pixels[i++] = Math.random() < opacity ? (Math.random() * 256) | 0 : 0; // Alpha
    }

    ctx.putImageData(imageData, 0, 0);
  }

  function updateBlur() {
    if (Math.abs(currentBlurValue - targetBlurValue) < 0.5) {
      targetBlurValue = Math.random() * (15 - 3) + 2; // Choose a new target value when the current is close to the target
    }
    // Adjust the currentBlurValue to move towards the targetBlurValue
    currentBlurValue += (targetBlurValue - currentBlurValue) * 0.05; // Adjust the 0.05 to change the speed of transition
    document.getElementById('animated-text').style.filter = `blur(${currentBlurValue.toFixed(1)}px)`;
  }

  window.addEventListener('resize', resizeCanvas);
  resizeCanvas();

  setInterval(generateNoise, 20);
  setInterval(updateBlur, 200);
});
