const express = require('express');
const app = express();
const port = 8080;


// Servir contenido estático (carpeta public)
app.use( express.static('public') );


// app.get('/', (req, res) => {
// //   res.send('Home Page');
// });


app.get('/generic', (req, res) => {
    res.sendFile( __dirname + '/public/generic.html' );
});

app.get('/elements', (req, res) => { 
    res.sendFile( __dirname + '/public/elements.html' );
});


app.get('/*', (req, res) => {
    // res.send('404 | Page not found');
    // Indicar ruta absoluta
    res.sendFile( __dirname + '/public/404.html' );    
});



app.listen(port, () => {
    console.log(`The server is running at port: ${port}`);
})