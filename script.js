document.addEventListener('DOMContentLoaded', function() {
  var canvas = document.getElementById('noiseCanvas');
  var ctx = canvas.getContext('2d');
  const textElement = document.getElementById('animated-text');
  let isNoiseEnabled = true;
  var audio = document.getElementById('audioPlayer');
  var volumeSlider = document.getElementById('volumeSlider');
  var titleDisplay = document.getElementById('titleDisplay');

  function updateVolume() {
      audio.volume = volumeSlider.value / 100;
  }

  volumeSlider.addEventListener('input', updateVolume);
  updateVolume();

  function resizeCanvas() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    if (isNoiseEnabled) {
      generateNoise();
    }
  }

  function generateNoise(opacity = 0.2) {
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

  function addNoise() {
    textElement.style.color = `rgba(0,0,0,${Math.random()})`;
    textElement.style.textShadow = `0 0 ${Math.random() * 10}px rgba(0,0,0,${Math.random()})`;
  }

  function toggleNoise() {
    isNoiseEnabled = !isNoiseEnabled;
    document.getElementById('noiseToggleButton').textContent = `[BG NOISE: ${isNoiseEnabled ? 'ON' : 'OFF'}]`;
    if (!isNoiseEnabled) {
      ctx.clearRect(0, 0, canvas.width, canvas.height); // Clear the canvas if noise is disabled
    } else {
      generateNoise();
    }
  }

  window.addEventListener('resize', resizeCanvas);
  resizeCanvas();

  document.getElementById('noiseToggleButton').addEventListener('click', toggleNoise);

  setInterval(addNoise, 100);
  setInterval(generateNoise, 50);
});



// Function to replace the [BD] link with the streaming player
document.getElementById('bdLink').addEventListener('click', function(e) {
    e.preventDefault();
    // Hide the BD link
    this.style.display = 'none';
    // Show the player container
    document.getElementById('player').style.display = 'block';
    // Initialize the streaming player
    var player = document.getElementById('streamPlayer');
    player.src = 'https://www.bassdrive.com/pop-up/';
    player.play();
    // TODO: Implement volume control and track title display
});

// Additional functionality to be implemented here
