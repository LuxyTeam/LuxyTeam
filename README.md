<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Imagen Aleatoria</title>
</head>
<body>
  <div align="center">
    <!-- Imagen animada -->
    <img id="randomImage" src="" alt="Random Animation" width="200"/>
    
    <!-- Saludo -->
    <h2>Hi there 👋</h2>
    
    <!-- Descripción o introducción (opcional) -->
    <p>Welcome to Luxy Team's GitHub profile!</p>
    
    <!-- Contador de visitas -->
    <p align="center">
      <img src="https://komarev.com/ghpvc/?username=LuxyTeam&style=flat-square" alt="Profile Views" />
    </p>

    <!-- Estadísticas de GitHub -->
    <h3>GitHub Stats 🌟</h3>
    <img src="https://github-readme-stats.vercel.app/api?username=LuxyTeam&theme=chartreuse-dark&count_private=true&show_icons=true&cache_seconds=1800" alt="Luxy Team GitHub Stats" width="450"/>

    <!-- Lenguajes más usados -->
    <h3>Top Languages</h3>
    <a href="https://github.com/LoliKillers/LoliKillers">
      <img src="https://github-readme-stats.vercel.app/api/top-langs/?username=LuxyTeam&theme=chartreuse-dark&layout=compact" alt="Top Langs" width="350"/>
    </a>
  </div>

  <script>
    // Array con las URLs de las imágenes
    const images = [
      'https://cdn.discordapp.com/attachments/1279599167802708018/1280728644423122954/1725419901829-966.gif?ex=66d922ff&is=66d7d17f&hm=d3fbd037cbb79a6154089bc98520bf5f53f1a94deeadd01b29af35341eab757a&',
      'https://cdn.discordapp.com/attachments/1279599167802708018/1280730325483388948/Ahsoka_1.gif?ex=66d92490&is=66d7d310&hm=98735cd3fffd34dee2979d547c9bd62ce46a63c02c7041b7899e820deae2e889&',
      'https://cdn.discordapp.com/attachments/1279599167802708018/1280730605272698973/STAR_WARS__THE_CLONE_WARS___Season_7_Episode_11__Shattered__1_4_Ahsoka_Tano.gif?ex=66d924d3&is=66d7d353&hm=5cc81fe8054054c4aa8a715d3e8edc55ad3a37d1ff59c4fbf58ec8d9efd31b41&'
    ];

    // Función para seleccionar una imagen al azar
    function getRandomImage() {
      const randomIndex = Math.floor(Math.random() * images.length);
      return images[randomIndex];
    }

    // Actualiza el atributo src de la imagen
    document.getElementById('randomImage').src = getRandomImage();
  </script>
</body>
</html>
