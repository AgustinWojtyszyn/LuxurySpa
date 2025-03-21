const express = require('express');
const path = require('path');
const app = express();
const port = 8080;  // Cambiado el puerto a 8080

app.use('/styles', express.static(path.join(__dirname, 'styles')));
app.use('/scripts', express.static(path.join(__dirname, 'scripts')));

// Ruta principal para el archivo HTML
app.get('/', (req, res) => {
  console.log('Se recibió una solicitud para la ruta principal');
  res.sendFile(path.join(__dirname, 'index', 'index_v2.html'));
});

// Iniciar el servidor en el puerto 3000
app.listen(port, () => {
  console.log(`Servidor corriendo en http://localhost:${port}`);
});
