const http = require('http');

// Crear servidor
http.createServer( (req, res ) => {

    // Indicar al navegador que es un archivo a descargar y este es el nombre 
    // res.setHeader('Content-Disposition', 'attachment; filename=lista.csv');

    // Reescribir codigo de respuesta
    // Retornamos un archivo de texto
    res.writeHead(200, { 'Content-Type': 'text/plain' });

    res.write( 'Hola Mundo' );
    res.end();

})
.listen( 8080 ); // Especificar el puerto

console.log('Escuchando el puerto', 8080);