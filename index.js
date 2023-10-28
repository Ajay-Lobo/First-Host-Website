const express = require('express');const app = express();

// Add your routes and middleware here

app.use(express.json());
app.use(express.static('react-app/dist'));
const port = process.env.PORT || 8080;
app.listen(port, () => console.log(`Listening port ${port}`));




app.get('/api/pirates/:id',(req, res)=>{
    const id = req.params.id;
    const pirate = getPirate(id);
    if(!pirate){
        res.status(404).send({error:`Pirate ${id} not found`});
    }
    else{
        res.send({data:pirate});
    }
    
})

function getPirate(id){
 const pirates = [
        {id: 1, name:'Jack Sparrow',age:30},
        {id: 2,name:'Black Beard',age:40},
        {id:3,name:'Captain Hook',age:50}
 ];
 return pirates.find(p=>p.id==id);
}