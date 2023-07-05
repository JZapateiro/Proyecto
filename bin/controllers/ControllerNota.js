const mongoose = require('mongoose');
const Nota = require('../models/Nota');

class ControllerNota {
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


    async obtenerNotas(req, res) {
        try{
            const notas = await Nota.find({});
            res.json(notas);
        } catch(e){
            console.log('Error');
            console.log(e);
        }
    }
    async obtenerNota(res, id) {
        try{
            const nota = await Nota.findById(id);
            res.status(200).send(nota);
        } catch(e){
            console.log(e);
        }
    }
    async crearNota(res, body) {
        try{
            const nota = new Nota(body);
            await nota.save();
            res.status(200).send('Exito en crearNota!');
        } catch(err){
            console.error(err);
        }
    }
    async actualizarNota(res, id, body) {
        try{
        const nota = await Nota.findByIdAndUpdate(id, body);
        res.status(200).send('Exito en actualizarNota!');
    } catch (err){
        console.error(err);
    }
}
    async eliminarNota(res, id) {
        try{
            const nota = await Nota.findByIdAndDelete(id);
            res.status(200).send('Exito en eliminarNota!');
        } catch (err){
            console.error(err);
        }
    }

}
exports.controllerNota = new ControllerNota();