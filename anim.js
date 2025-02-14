// Sincronizar las letras con la canción
var audio = document.querySelector("audio");
var lyrics = document.querySelector("#lyrics");

// Array de objetos que contiene cada línea y su tiempo de aparición en segundos
var lyricsData = [
  { text: "I found a love", time: 0.5 },
  { text: "for me", time: 1.5 },
  { text: "Darling, just dive right in", time: 7.0 },
  { text: "and follow my lead", time: 10.5 },
  { text: "Well, I found a girl", time: 15.0 },
  { text: "beautiful and sweet", time: 18.5 },
  { text: "I never knew you were", time: 21.5 },
  { text: "the someone waiting for me", time: 24.5 },
  { text: "Cause we were just kids", time: 28.0 },
  { text: "when we fell in love", time: 29.0 },
  { text: "Not knowing what it was", time: 33.0 },
  { text: "I will not give you up this time", time: 39.5 },
  { text: "But darling, just kiss me slow", time: 44.5 },
  { text: "Your heart is all I own", time: 48.0 },
  { text: "And in your eyes", time: 50.5 },
  { text: "you're holding mine", time: 53.5 },
  { text: "Baby, I'm dancin' in the dark", time: 61.5 },
  { text: "with you between my arms", time: 67.0 },
  { text: "Barefoot on the grass", time: 71.0 },
  { text: "while listenin' to our favourite song", time: 73.0 },
  { text: "When you said you looked a mess", time: 78.0 },
  { text: "I whispered underneath my breath", time: 81.5 },
  { text: "But you heard it,", time: 83.5 },
  { text: `"Darling, you look perfect tonight"`, time: 88.0 }
];

// Animar las letras
function updateLyrics() {
  var time = Math.floor(audio.currentTime);
  var currentLine = lyricsData.find(
    (line) => time >= line.time && time < line.time + 6
  );

  if (currentLine) {
    // Calcula la opacidad basada en el tiempo en la línea actual
    var fadeInDuration = 0.1; // Duración del efecto de aparición en segundos
    var opacity = Math.min(1, (time - currentLine.time) / fadeInDuration);

    // Aplica el efecto de aparición
    lyrics.style.opacity = opacity;
    lyrics.innerHTML = currentLine.text;
  } else {
    // Restablece la opacidad y el contenido si no hay una línea actual
    lyrics.style.opacity = 0;
    lyrics.innerHTML = "";
  }
}

setInterval(updateLyrics, 1000);

//funcion titulo
// Función para ocultar el título después de 216 segundos
function ocultarTitulo() {
  var titulo = document.querySelector(".titulo");
  titulo.style.animation =
    "fadeOut 3s ease-in-out forwards"; /* Duración y función de temporización de la desaparición */
  setTimeout(function () {
    titulo.style.display = "none";
  }, 3000); // Espera 3 segundos antes de ocultar completamente
}

// Llama a la función después de 216 segundos (216,000 milisegundos)
setTimeout(ocultarTitulo, 216000);