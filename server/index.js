const express = require ('express');
const app = express();
const vacaCtrl = require ('./controllers/vacaCtrl')
const vChoiceCtrl = require('./controllers/vChoiceCtrl')


app.use(express.json());


app.get('/api/vacations', vacaCtrl.getVaca);
app.delete('/api/vacations/:id', vacaCtrl.deleteVaca);

app.get('/api/destination', vChoiceCtrl.getChoice);
app.post('/api/destination', vChoiceCtrl.postDest);


app.listen(2020, ()=> console.log('Server is running on 2020'));