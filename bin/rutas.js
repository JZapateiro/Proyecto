const express = require('express')
const app = express()

const { controllerUsuario } = require('./controllers/ControllerUsuarios')
const { controllerActividad } = require('./controllers/ControllerActividades')
const { controllerContenido } = require('./controllers/ControllerContenido')
const { controllerEvaluacion } = require('./controllers/ControllerEvaluacion')
const { controllerProgreso } = require('./controllers/ControllerProgreso')
const { controllerNota } = require('./controllers/ControllerNota')

app.use(express.json());

app.get('/usuarios', (req, res) => {
    controllerUsuario.obtenerUsuarios(req, res);
});
app.get('/usuarios/:id', (req, res) => {
    const id = req.params.id;
    controllerUsuario.obtenerUsuario(res, id);
});
app.post('/usuarios', (req, res) => {
    controllerUsuario.crearUsuario(res, req.body);
});
app.put('/usuarios/:id', (req, res) => {
    const id = req.params.id;
    controllerUsuario.actualizarUsuario(res, id, req.body);
});
app.delete('/usuarios/:id', (req, res) => {
    const id = req.params.id;
    controllerUsuario.eliminarUsuario(res, id);
});

app.get('/actividades', (req, res) => {
    controllerActividad.obtenerActividades(req, res);
});
app.get('/actividades/:id', (req, res) => {
    const id = req.params.id;
    controllerActividad.obtenerActividad(res, id);
});
app.post('/actividades', (req, res) => {
    controllerActividad.crearActividad(res, req.body);
});
app.put('/actividades/:id', (req, res) => {
    const id = req.params.id;
    controllerActividad.actualizarActividad(res, id, req.body);
});
app.delete('/actividades/:id', (req, res) => {
    const id = req.params.id;
    controllerActividad.eliminarActividad(res, id);
});

app.get('/contenido', (req, res) => {
    controllerContenido.obtenerContenidos(req, res);
});
app.get('/contenido/:id', (req, res) => {
    const id = req.params.id;
    controllerContenido.obtenerContenido(res, id);
});
app.post('/contenido', (req, res) => {
    controllerContenido.crearContenido(res, req.body);
});
app.put('/contenido/:id', (req, res) => {
    const id = req.params.id;
    controllerContenido.actualizarContenido(res, id, req.body);
});
app.delete('/contenido/:id', (req, res) => {
    const id = req.params.id;
    controllerContenido.eliminarContenido(res, id);
});
app.get('/evaluacion', (req, res) => {
    controllerEvaluacion.obtenerEvaluaciones(req, res);
});
app.get('/evaluacion/:id', (req, res) => {
    const id = req.params.id;
    controllerEvaluacion.obtenerEvaluacion(res, id);
});
app.post('/evaluacion', (req, res) => {
    controllerEvaluacion.crearEvaluacion(res, req.body);
});
app.put('/evaluacion/:id', (req, res) => {
    const id = req.params.id;
    controllerEvaluacion.actualizarEvaluacion(res, id, req.body);
});
app.delete('/evaluacion/:id', (req, res) => {
    const id = req.params.id;
    controllerEvaluacion.eliminarEvaluacion(res, id);
});
app.get('/progreso' , (req, res) => {
    controllerProgreso.obtenerProgresos(req, res);
});
app.get('/progreso/:id', (req, res) => {
    const id = req.params.id;
    controllerProgreso.obtenerProgreso(res, id);
});
app.post('/progreso', (req, res) => {
    controllerProgreso.crearProgreso(res, req.body);
});
app.put('/progreso/:id', (req, res) => {
    const id = req.params.id;
    controllerProgreso.actualizarProgreso(res, id, req.body);
});
app.delete('/progreso/:id', (req, res) => {
    const id = req.params.id;
    controllerProgreso.eliminarProgreso(res, id);
});
app.get('/nota', (req, res) => {
    controllerNota.obtenerNotas(req, res);
});
app.get('/nota/:id', (req, res) => {
    const id = req.params.id;
    controllerNota.obtenerNota(res, id);
});
app.post('/nota', (req, res) => {
    controllerNota.crearNota(res, req.body);
});
app.put('/nota/:id', (req, res) => {
    const id = req.params.id;
    controllerNota.actualizarNota(res, id, req.body);
});
app.delete('/nota/:id', (req, res) => {
    const id = req.params.id;
    controllerNota.eliminarNota(res, id);
});
exports.app = app;