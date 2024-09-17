const express = require('express');
const bodyParser = require('body-parser');
const { sequelize } = require('./models'); // Importar Sequelize para sincronizar la base de datos
const postRoutes = require('./routes/posts'); // Importar las rutas que crearás después

const app = express();
const port = 3000;

// Middleware para analizar las solicitudes JSON
app.use(bodyParser.json());

// Montar las rutas de las publicaciones
app.use('/api', postRoutes);

// Manejo de rutas no encontradas
app.use((req, res, next) => {
  res.status(404).json({ message: 'Ruta no encontrada' });
});

// Manejo de errores
app.use((err, req, res, next) => {
  res.status(500).json({ message: 'Error del servidor' });
});

// Sincronizar la base de datos y arrancar el servidor
sequelize.sync().then(() => {
  app.listen(port, () => {
    console.log(`Servidor funcionando en http://localhost:${port}`);
  });
});