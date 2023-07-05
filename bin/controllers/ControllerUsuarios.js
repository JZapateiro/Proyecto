const mongoose = require('mongoose');
const Usuario = require('../models/Usuario');

class ControllerUsuario {
    constructor() {
        this.connect();
    }
    async connect() {
        try {
            await mongoose.connect('mongodb://cabarcasrodo97:B6EP9VGiTeKl6IRo@ac-9cowwrw-shard-00-00.dme3sy6.mongodb.net:27017,ac-9cowwrw-shard-00-01.dme3sy6.mongodb.net:27017,ac-9cowwrw-shard-00-02.dme3sy6.mongodb.net:27017/?ssl=true&replicaSet=atlas-d2q9us-shard-0&authSource=admin&retryWrites=true&w=majority',
                { useNewUrlParser: true }
            );
            console.log('Conectado a la base de datos');
           
        } catch (e) {
            res.status(500).send('Error');
            console.log('Error');
            console.log(e);
        }
    }



    async obtenerUsuarios(req, res) {
        try {
            const usuarios = await Usuario.find({});
            res.json(usuarios);
        } catch (e) {
            res.status(500).send('Error en obtenerUsuarios');
            console.log('Error');
            console.log(e);
        }
    }

    async obtenerUsuario(res, id) {
        try {
            const usuario = await Usuario.findById(id);
            res.status(200).send(usuario);
        } catch (e) {
            res.status(500).send('Error en obtenerUsuario');
            console.log(e);

        }
    }
    async crearUsuario(res, body) {
        try {
            const usuario = new Usuario(body);
            await usuario.save();
            res.status(200).send('Exito en crearUsuario!');
        } catch (err) {
            console.error(err);
            res.status(500).send('Error en crearUsuario');
        }
    }
    async actualizarUsuario(res, id, body) {
        try {
            const usuario = await Usuario.findByIdAndUpdate(id, body);
            res.status(200).send('Exito en actualizarUsuario!');
        } catch (err) {
            console.error(err);
            res.status(500).send('Error en actualizarUsuario');
        }
    }
    async eliminarUsuario(res, id) {
        try {
            const usuario = await Usuario.findByIdAndDelete(id);
            res.status(200).send('Exito en eliminarUsuario!');
        } catch (err) {
            console.error(err);
            res.status(500).send('Error en eliminarUsuario');
        }
    }
}
exports.controllerUsuario = new ControllerUsuario();