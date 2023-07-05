const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const { ObjectId } = require('mongodb');

const evaluacionSchema = new Schema({
    id_usuario: ObjectId,
    id_contenido: ObjectId,
    tipo: String,
    estado: String,
   
    
})

var Evaluacion = mongoose.model('Evaluacion', evaluacionSchema);

module.exports = Evaluacion;