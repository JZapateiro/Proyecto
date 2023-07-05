const mongoose = require('mongoose');
const Evaluacion = require('../models/Evaluacion');

class ControllerEvaluacion {
    constructor() {
        this.connect();
    }
    async connect() {
        try {
            await mongoose.connect('mongodb://cabarcasrodo97:B6EP9VGiTeKl6IRo@ac-9cowwrw-shard-00-00.dme3sy6.mongodb.net:27017,ac-9cowwrw-shard-00-01.dme3sy6.mongodb.net:27017,ac-9cowwrw-shard-00-02.dme3sy6.mongodb.net:27017/?ssl=true&replicaSet=atlas-d2q9us-shard-0&authSource=admin&retryWrites=true&w=majority',
                { useNewUrlParser: true }
            );
           
        } catch (e) {
            res.status(500).send('Error');
            console.log('Error');
            console.log(e);
        }
    }


    async obtenerEvaluaciones(req, res) {
        try {
            const evaluaciones = await Evaluacion.find({});
            res.json(evaluaciones);
        } catch (e) {
            res.status(500).send('Error en obtenerEvaluaciones');
            console.log('Error');
            console.log(e);
        }
    }
    async obtenerEvaluacion(res, id) {
        try {
            const evaluacion = await Evaluacion.findById(id);
            res.status(200).send(evaluacion);
        } catch (e) {
            res.status(500).send('Error en obtenerEvaluacion');
            console.log(e);

        }
    }
    async crearEvaluacion(res, body) {
        try {
            const evaluacion = new Evaluacion(body);
            await evaluacion.save();
            res.status(200).send('Exito en crearEvaluacion!');
        } catch (err) {
            console.error(err);
            res.status(500).send('Error en crearEvaluacion');
        }
    }
    async actualizarEvaluacion(res, id, body) {
        try {
            const evaluacion = await Evaluacion.findByIdAndUpdate(id, body);
            res.status(200).send('Exito en actualizarEvaluacion!');
        } catch (err) {
            console.error(err);
            res.status(500).send('Error en actualizarEvaluacion');
        }
    }
    async eliminarEvaluacion(res, id) {
        try {
            const evaluacion = await Evaluacion.findByIdAndDelete(id);
            res.status(200).send('Exito en eliminarEvaluacion!');
        } catch (err) {
            console.error(err);
            res.status(500).send('Error en eliminarEvaluacion');
        }
    }
    
}

exports.controllerEvaluacion = new ControllerEvaluacion();