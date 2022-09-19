const http = require('http');

// Crear servidor
http.createServer( (req, res ) => {

    // console.log(req);

    /*
        CODIGOS HTTP
        404: no existe el recurso solicitado
        200: peticion exitosa
        201: se creó un registro
    */
    
    // Indicar al navegador que es un archivo a descargar y este es el nombre 
    res.setHeader('Content-Disposition', 'attachment; filename=lista.csv');

    // Reescribir codigo de respuesta
    res.writeHead(200, {
        // 'Content-Type': 'text/plain', // Retornamos un archivo de texto
        // 'Content-Type': 'application/json', // Retornamos un JSON
        'Content-Type': 'application/csv', // Retornamos un CSV
    });

    const persona = {
        id: 1,
        nombre: 'Angel',
    }

    // Se debe serializar si la respuesta es un objeto
    // res.write( JSON.stringify( persona ) );

    res.write( 'id, nombre\n' );
    res.write( '1, Angel\n' );
    res.write( '2, Juan\n' );
    res.write( '3, Maria\n' );
    res.write( '4, Pedro\n' );

    res.end();

})
.listen( 8080 ); // Especificar el puerto

console.log('Escuchando el puerto', 8080);