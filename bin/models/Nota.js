const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const { ObjectId } = require('mongodb');

const notaSchema = new Schema({
    id_usuario: ObjectId,
    id_contenido: ObjectId,
    id_actividad: ObjectId,
    id_evaluacion: ObjectId,
    nota_actividad: Number,
    nota_evaluacion: Number,
   
    
})

var  Nota = mongoose.model('Nota', notaSchema);

module.exports = Nota;