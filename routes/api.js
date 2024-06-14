// routes/users.js
const express = require('express');
const router = express.Router();

// Middleware para verificar el token Bearer
function verifyToken(req, res, next) {
    // Obtener el header de autorización
    const bearerHeader = req.headers['authorization'];

    // Verificar que el header de autorización existe
    if (typeof bearerHeader !== 'undefined') {
        const bearerToken = bearerHeader.split(' ')[1]; // Dividir en el espacio y obtener el token
        req.token = bearerToken;
        // Aquí podrías agregar una verificación más compleja del token
        if (bearerToken === "") { // Cambia esto por tu lógica de validación de tokens
            next(); // Continuar si el token es válido
        } else {
            res.sendStatus(403); // Forbidden
        }
    } else {
        // Si no hay header de autorización, retornar 403 Forbidden
        res.sendStatus(403);
    }
}

// Ruta que requiere autenticación
router.get('/banderin', verifyToken, (req, res) => {
    // Contenido protegido que solo se muestra si el token es válido
    res.send("Acceso concedido al contenido protegido de banderín. Ole ole!!!");
});

// export the router module so that server.js file can use it
module.exports = router;
