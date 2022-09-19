const express = require('express');
const hbs = require('hbs');

const app = express();
const port = 8080;

//* HANDLEBARS

// Configurar template engine
app.set('view engine', 'hbs');

// Definir carpeta de partials (hbs)
hbs.registerPartials( __dirname + '/views/partials/' );

// Servir contenido estático (carpeta public)
app.use( express.static('public') );


app.get('/', (req, res) => {
    // Renderizar vista con template engine
    res.render('home', {
        nombre: 'Angel Travieso',
        titulo: 'Curso de Node',
    });
});


app.get('/generic', (req, res) => {
    res.render('generic', {
        nombre: 'Angel Travieso',
        titulo: 'Curso de Node',
    });
});

app.get('/elements', (req, res) => { 
    res.render('elements', {
        nombre: 'Angel Travieso',
        titulo: 'Curso de Node',
    });
});


app.get('/*', (req, res) => {
    // res.send('404 | Page not found');
    // Indicar ruta absoluta
    res.sendFile( __dirname + '/public/404.html' );    
});



app.listen(port, () => {
    console.log(`The server is running at port: ${port}`);
})