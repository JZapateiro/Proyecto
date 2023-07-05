const mongoose = require('mongoose');
const Progreso = require('../models/Progreso');

class ControllerProgreso {
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

    async obtenerProgresos(req, res) {
        try {
            const progresos = await Progreso.find({});
            res.json(progresos);
        } catch (e) {
            console.log('Error');
            console.log(e);
        }
    }
    async obtenerProgreso(res, id) {
        try {
            const progreso = await Progreso.findById(id);
            res.status(200).send(progreso);
        } catch (e) {
            console.log(e);
        }
    }
    async crearProgreso(res, body) {
        try {
            const progreso = new Progreso(body);
            await progreso.save();
            res.status(200).send('Exito en crearProgreso!');
        } catch (err) {
            console.error(err);
        }
    }
    async actualizarProgreso(res, id, body) {
        try {
            const progreso = await Evaluacion.findByIdAndUpdate(id, body);
            res.status(200).send('Exito en actualizarProgreso!');
        } catch (err) {
            console.error(err);
        }
    }

    async eliminarProgreso(res, id) {
        try {
            const progreso = await Progreso.findByIdAndDelete(id);
            res.status(200).send('Exito en eliminarProgreso!');
        } catch (err) {
            console.error(err);
        }
    }
}
exports.controllerProgreso = new ControllerProgreso();