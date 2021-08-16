const express = require('express');
const app = express();
const cors = require('cors');
const mongoose = require('mongoose');
const userRoutes = express.Router();
const PORT = 8000;

let User = require('./models/user')

app.use(cors());
app.use(express.json());
app.use('/users', userRoutes);

mongoose.connect('mongodb+srv://aromero:Cronometro11@clusterlightout.ficwy.mongodb.net/ClusterLightOut?retryWrites=true&w=majority', 
                { useNewUrlParser: true }).then(db => console.log("La conexion fue exitosa"))
                                          .catch(err => console.error(err))

const connection = mongoose.connection

connection.once('open', function () {
    console.log("MongoDB database connection established successfully")
});

// First of all we need to add an endpoint which is delivering all available user items:
userRoutes.get( '/', async (req, res) => {
    const users = await User.find()
    res.json(users);
});

userRoutes.route('/:id').get(function(req, res) {
        let id = req.params.id;
        User.findById(id, function(err, user) {
        res.json(user);
    });
});
   
userRoutes.route('/add').post(function(req, res) {
    let user = new User(req.body)
    user.save()
        .then( user => {
            res.status(200).json({'user': 'user added successfully'});
        })
        .catch( err => {
            res.status(400).send('adding new user failed')
        })
})

app.listen(PORT, function() {
    console.log("Server is running on Port: " + PORT);
});
