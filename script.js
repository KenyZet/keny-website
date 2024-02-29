document.addEventListener('DOMContentLoaded', function() {
  var canvas = document.getElementById('noiseCanvas');
  var ctx = canvas.getContext('2d');
  const textElement = document.getElementById('animated-text');

  function resizeCanvas() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    generateNoise();
  }

  function generateNoise(opacity = 0.2) {
    var w = canvas.width,
        h = canvas.height,
        imageData = ctx.createImageData(w, h),
        pixels = imageData.data,
        n = pixels.length,
        i = 0;

    while (i < n) {
      var v = (Math.random() * 255) | 0;
      pixels[i++] = v;        // Red
      pixels[i++] = v;        // Green
      pixels[i++] = v;        // Blue
      pixels[i++] = Math.random() < opacity ? (Math.random() * 256) | 0 : 0;
    }

    ctx.putImageData(imageData, 0, 0);
  }

  function addNoise() {
    textElement.style.color = `rgba(0,0,0,${Math.random()})`;
    textElement.style.textShadow = `0 0 ${Math.random() * 10}px rgba(0,0,0,${Math.random()})`;
  }

  window.addEventListener('resize', resizeCanvas);
  resizeCanvas();

  setInterval(addNoise, 100);
  setInterval(generateNoise, 50);
});
