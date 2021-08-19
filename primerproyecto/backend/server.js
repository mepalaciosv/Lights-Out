const express = require('express');
const bcrypt = require('bcryptjs');
const app = express();
const cors = require('cors');
const mongoose = require('mongoose');
const userRoutes = express.Router();
const PORT = 8000;

let User = require('./models/user')

app.use(cors());
app.use(express.json());
app.use('/users', userRoutes);

mongoose.connect('mongodb+srv://aromero:Cronometro11@clusterlightout.ficwy.mongodb.net/ClusterLightOut', 
                { useNewUrlParser: true }).then(db => console.log("La conexion fue exitosa"))
                                          .catch(err => console.error(err))

const connection = mongoose.connection
connection.once('open', function () {
    console.log("MongoDB database connection established successfully")
});

// First of all we need to add an endpoint which is delivering all available user items:
userRoutes.get('/', async (req, res) => {
    const users = await User.find()
    res.json(users);
});

userRoutes.get('/validateRegister', async (req, res) => {

    let username = req.query.username;
    let email = req.query.email;
    
    const users = await User.find( { $or: [{ username: username }, {email: email}] })
    if (users.length > 0) {
        res.status(250).send("El username/email ya está en uso");
    } else {
        res.status(200).send("El usuario se puede registrar")
    }
});
   
userRoutes.route('/add').post( async (req, res) => {
    let user = new User(req.body)
    user.save()
        .then( user => {
            res.status(200).json({'userId': user.id, 'userName': user.username});
        })
        .catch( err => {
            res.status(400).send('adding new user failed')
        })
})

userRoutes.route('/update/:id').post( async (req, res) => {

    User.findById(req.params.id, (err, user) => {
        if (!user){
            res.status(404).send("data is not found")
        } else {
            user.games = user.games + Number(req.query.games);
            user.clues = user.clues + Number(req.query.clues);
            user.wins = user.wins + Number(req.query.wins);
            user.solutions = user.solutions + Number(req.query.solutions);
            user.save()
                .then(user => { res.json('user updated!')} )
                .catch( err => { res.status(400).send(err)})
        }
    })

})

userRoutes.route('/find/:id').get( async (req, res) => {

    User.findById(req.params.id, (err, user) => {
        if (!user){
            res.status(404).send("data is not found")
        } else {
            res.status(200).json(user)
        }
    })

})

userRoutes.route('/findUser/:username/:password').get( async (req, res) => {

    let username = req.params.username
    let password = req.params.password

    const users = await User.find( { username: username })

    if (users.length === 0) {
        console.log("data is not found")
        res.send("data is not found")
    } else {
        const result = await bcrypt.compare(password, users[0].password)

        if (result) {
            console.log("password correct")
            res.status(200).json(users[0])
        } else {
            console.log("password incorrect")
            res.send("password incorrect")
        }
    }
})

app.listen(PORT, function() {
    console.log("Server is running on Port: " + PORT);
});
