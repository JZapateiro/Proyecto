const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const { ObjectId } = require('mongodb');

const progresoSchema = new Schema({
    id_usuario: ObjectId,
    id_contenido: ObjectId,
    id_actividad: ObjectId,
    id_evaluacion: ObjectId,
    progreso: Number,
   
    
})

var Progreso = mongoose.model('Progreso', progresoSchema);

module.exports = Progreso;