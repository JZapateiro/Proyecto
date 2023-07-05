const { app } = require('./bin/rutas')
const port = 3000

app.listen(port, () => {
  console.log(`Servidor corriendo en el puerto: ${port}`)
})
