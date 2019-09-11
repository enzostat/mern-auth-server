//require needed packages
let cors = require('cors')
let express = require('express');

//initiate app
let app = express();

//middleware
app.use(cors())
app.use(express.urlencoded({extended: false}))
app.use(express.json({limit: '10mb'}))


//controllers


//Routes
app.get('*', (req,res) => {
    res.status(404).send({message: 'Not Found'})
})


//export
app.listen(process.env.PORT || 3000)