require('dotenv').config()
const express = require('express')
const hbs = require('hbs');

const app = express()

//Handlebars
app.set('view engine','hbs')
hbs.registerPartials(__dirname + '/views/partials');

app.use(express.static('public'))

app.get('/', function (req, res) {
    res.render('home',{
        nombre:'Edwin De Thomas',
        titulo: 'Curso de Nodejs'
    })
})
app.get('/generic', function (req, res) {
    res.render('generic',{
        nombre:'Edwin De Thomas',
        titulo: 'Curso de Nodejs'
    })
})
app.get('/elements', function (req, res) {
    res.render('elements',{
        nombre:'Edwin De Thomas',
        titulo: 'Curso de Nodejs'
    })
})

app.listen(process.env.PORT)