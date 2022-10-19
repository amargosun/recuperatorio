const express = require('express');
const path = require('path');
const methodOverride = require('method-override');
const app = express();

app.listen('3001', () => console.log('Servidor corriendo en el puerto 3001'));

const moviesRoutes = require('./routes/moviesRoutes');
const userRoutes = require('./routes/userRoutes');
const acceso = require('./middlewares/acceso');

const session = require('express-session');
app.use(session({
    secret : 'topSecret',
    resave: true,
    saveUninitialized: true,
}))
app.use(acceso)

app.set('views', path.resolve(__dirname, './views'));
app.set('view engine', 'ejs');

app.use(express.static(path.resolve(__dirname, '../public')));
app.use(express.urlencoded({ extended: false }));
app.use(methodOverride('_method'));
app.use('/', moviesRoutes);
app.use(userRoutes);
