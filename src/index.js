const express = require('express');
const app = express();
const path = require('path')


//settings
app.set('port', 4000);
app.set('views', path.join(__dirname,'/views'));
app.set('view engine', 'ejs');

//middlewares


//routes
app.get('/', (req, res) => {
    res.render('index.ejs',{title: 'Inicio'});
});

app.get('/contact', (req, res) => {
    res.render('contact.ejs',{title: 'Contacto'});
});

app.get('/about', (req, res) => {
    res.render('about.ejs',{title: 'Sobre mi'});
});


//static files


//listening the server
app.listen(app.get('port'), () => {
    console.log('Servidor iniciado en puerto: ', app.get('port'));
});

