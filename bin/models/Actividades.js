const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const { ObjectId } = require('mongodb');

const actividadesSchema = new Schema({
    id_usuario: ObjectId,
    id_contenido: ObjectId,
    nombre: String,
    progreso: Number,
})

var Actividad = mongoose.model('Actividad', actividadesSchema);

module.exports = Actividad;