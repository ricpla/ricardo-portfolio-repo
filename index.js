const express = require('express');
const path = require('path');
const cors = require('cors');

const app = express();

// Settings
app.set('port', process.env.PORT || 5050);

// Middlewares
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(cors());

// Routes
/*app.get('/', (req, res) => {
    res.send('HOME');
});*/

// Static Files Routes
app.use('/', express.static(path.join(__dirname, 'public')));
app.use('/fundacion', express.static(path.join(__dirname, 'public/fundacion')));
app.use('/color-flipper', express.static(path.join(__dirname, 'public/color-flipper')));
app.use('/grupocomienza', express.static(path.join(__dirname, 'public/grupocomienza')));
app.use('/calculadoragastos', express.static(path.join(__dirname, 'public/calculadoragastos')));


// Start the server
app.listen(app.get('port'), () => {
    console.log('Server on port:', app.get('port'));
});