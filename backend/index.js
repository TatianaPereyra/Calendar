//Importa la libreria descargada
const express = require('express');
const app = express();

//Puerto donde se reciben peticiones
const PORT = 3001;

//Ruta de prueba para la raiz del proyecto
app.get('/', (req, res) => {
  res.send('Backend funcionando');
});

//Prende el servidor para escuchar peticiones en el puerto definido
app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});