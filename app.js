const http = require('http');

// Crear servidor
http.createServer( (req, res ) => {

    res.write('Hola Mundo');
    res.end();

})
.listen( 8080 ); // Especificar el puerto

console.log('Escuchando el puerto', 8080);