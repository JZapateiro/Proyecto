const mongoose = require('mongoose');
const Actividad = require('../models/Actividades');

class ControllerActividad {
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


    async obtenerActividades(req, res) {
        try{
            const actividades = await Actividad.find({});
            res.json(actividades);
        } catch(e){
            res.status(500).send('Error en obtenerActividades');
            console.log('Error');
            console.log(e);
        }
    }
    async obtenerActividad(res, id) {
        try{
            const actividad = await Actividad.findById(id);
            res.status(200).send(actividad);
        } catch(e){
            res.status(500).send('Error en obtenerActividad');
            console.log(e);
        }
    }
    async crearActividad(res, body) {
        try{
            const actividad = new Actividad(body);
            await actividad.save();
            res.status(200).send('Exito en crearActividad!');
        } catch(err){
            console.error(err);
            res.status(500).send('Error en crearActividad');
        }
    }
    async actualizarActividad(res, id, body) {
        try{
            const actividad = await Actividad.findByIdAndUpdate(id, body);
            res.status(200).send('Exito en actualizarActividad!');
        } catch (err){
            console.error(err);
            res.status(500).send('Error en actualizarActividad');
        }
    }
    async eliminarActividad(res, id) {
       try{
        const actividad = await Actividad.findByIdAndDelete(id);
        res.status(200).send('Exito en eliminarActividad!');
       } catch(err){
           console.error(err);
           res.status(500).send('Error en eliminarActividad');
       }
    }
    
}
exports.controllerActividad = new ControllerActividad();