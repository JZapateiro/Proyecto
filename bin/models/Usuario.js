const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const usuarioSchema = new Schema({
    nombre: String,
    apellido: String,
    email: String,
    password: String,
    genero: String,
    tipo_usuario: String,
})

var Usuario = mongoose.model('Usuario', usuarioSchema);

module.exports = Usuario;