var canvas = document.getElementById("myCanvas");

// Set the canvas size to the size of the window
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

// Get the canvas context
var ctx = canvas.getContext("2d");

// Create a background gradient
var backgroundGradient = ctx.createRadialGradient(
  canvas.width / 2,
  canvas.height / 2,
  0,
  canvas.width / 2,
  canvas.height / 2,
  canvas.width / 2
);
backgroundGradient.addColorStop(0, "#fff");

// Set the background gradient as the canvas background
ctx.fillStyle = backgroundGradient;
ctx.fillRect(0, 0, canvas.width, canvas.height);

// Define the planets
var planets = [
  { x: 200, y: 250, radius: 50, color: "orange", speed: 0.4 },
  { x: 400, y: 100, radius: 50, color: "purple", speed: 0.2 },
  { x: 900, y: 200, radius: 60, color: "rgba(0, 128, 0, 0.581)", speed: 0.3 },
  { x: 800, y: 350, radius: 25, color: "orange", speed: 0.4 },
  { x: 300, y: 400, radius: 30, color: "purple", speed: 0.2 },
  { x: 100, y: 500, radius: 80, color: "rgba(0, 128, 0, 0.581)", speed: 0.1 },
  { x: 300, y: 650, radius: 10, color: "purple", speed: 0.25 },
  { x: 400, y: 800, radius: 70, color: "rgba(0, 128, 0, 0.581)", speed: 0.2 },
];

// Define the animation loop function
function animate() {
  // Clear the canvas
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  // Draw the background gradient
  ctx.fillStyle = backgroundGradient;
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  // Update and draw the planets
  for (var i = 0; i < planets.length; i++) {
    var planet = planets[i];
    planet.x += planet.speed;
    if (planet.x > canvas.width + planet.radius) {
      planet.x = -planet.radius;
    }
    ctx.beginPath();
    ctx.arc(planet.x, planet.y, planet.radius, 0, 2 * Math.PI, false);
    ctx.fillStyle = planet.color;
    ctx.fill();
  }

  // Request the next animation frame
  requestAnimationFrame(animate);
}

// Start the animation loop
animate();
