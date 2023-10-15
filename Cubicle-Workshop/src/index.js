const express = require('express');
const handlebars = require('express-handlebars');
const path = require('path');

const { PORT } = require('./constants');

const app = express();

app.use(express.static(path.resolve(__dirname, 'public')));

app.engine('hbs', handlebars.engine({ 
    extname: 'hbs',
}));

app.set('view engine', 'hbs');
app.set('views', 'src/views');

app.get('/', (req, res) => {
    res.render('index');
});

app.listen(PORT, () => console.log(`Server is running on port ${PORT}...`));