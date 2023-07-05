const mongoose = require('mongoose');
const Contenido = require('../models/Contenido');

class ControllerContenido {
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

    async obtenerContenidos(req, res) {
        try{
            const contenidos = await Contenido.find({});
            res.json(contenidos);
        } catch(e){
            res.status(500).send('Error en obtenerContenidos');
            console.log('Error');
            console.log(e);
        }
    }
    async obtenerContenido(res, id) {
        try{
            const contenido = await Contenido.findById(id);
            res.status(200).send(contenido);
        } catch(e){
            res.status(500).send('Error en obtenerContenido');
            console.log(e);

        }
    }
    async crearContenido(res, body) {
        try{
            const contenido = new Contenido(body);
            await contenido.save();
            res.status(200).send('Exito en crearContenido!');
        } catch(err){
            console.error(err);
            res.status(500).send('Error en crearContenido');
        }
    }
    async actualizarContenido(res, id, body) {
        try{
            const contenido = await Contenido.findByIdAndUpdate(id, body);
            res.status(200).send('Exito en actualizarContenido!');
        } catch(err){
            console.error(err);
            res.status(500).send('Error en actualizarContenido');
        }
    }
    async eliminarContenido(res, id) {
        try{
            const contenido = await Contenido.findByIdAndDelete(id);
            res.status(200).send('Exito en eliminarContenido!');
        } catch(err){
            console.error(err);
            res.status(500).send('Error en eliminarContenido');
        }
    }
}
 exports.controllerContenido = new ControllerContenido();