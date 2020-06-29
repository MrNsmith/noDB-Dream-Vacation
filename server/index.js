const express = require ('express');
const app = express();
const vacaCtrl = require ('./controllers/vacaCtrl')
const vChoiceCtrl = require('./controllers/vChoiceCtrl')


app.use(express.json());


app.get('/api/vacations', vacaCtrl.getVaca);

app.get('/api/destination', vChoiceCtrl.getChoice);
app.post('/api/destination', vChoiceCtrl.postDest);
app.put('/api/destination/:id', vChoiceCtrl.changeRating);
app.delete('/api/destination/:id', vChoiceCtrl.deleteVaca);


app.listen(2020, ()=> console.log('Server is running on 2020'));