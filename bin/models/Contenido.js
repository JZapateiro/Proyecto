const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const { ObjectId } = require('mongodb');

const contenidoSchema = new Schema({
    titulo: String,
    descripcion: String,
    fuente: String,
    id_usuario: ObjectId,
    url: String,
})

var Contenido = mongoose.model('Contenido', contenidoSchema);

module.exports = Contenido;