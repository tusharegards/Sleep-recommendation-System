const config = require('config')
const express = require('express')
const serverdebugger = require('debug')('app:server')
const dbdebugger = require('debug')('app:db')
const morgan = require('morgan')
const app = express()
const mongoose = require('mongoose')
const cors = require('cors')
const port = process.env.PORT||5000;


//configuration
serverdebugger('Application name:'+ config.get('name'))
serverdebugger('Mail password :'+ config.get('mail.password'))


//api routes
const cscore = require('./routes/cscore')
const user = require('./routes/user')
const auth = require('./routes/auth')
const dailySleep = require('./routes/dailySleep')
//const test = require('./routes/test')



if(app.get('env') === "development"){
//middlewares
if (!config.get('jwtPrivateKey')){
    console.log("FATAL ERROR: jwtPrivateKey is ot defined.");
    process.exit(1);
}

    app.use(morgan('tiny'))
    app.use(express.json())
    app.use(cors())
    serverdebugger('morgan enabled')
    

    const replicaDb= mongoose.connect('mongodb://localhost/replica',{
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    }).then(()=>{dbdebugger(`replica DB connected, happy data`)})
    .then(app.listen(port,()=>{serverdebugger(`Aloha!, Server running on home:// ${port}`)}))
    

app.use('/api/cscore',cscore)
app.use('/api/user',user)
app.use('/api/auth',auth)
app.use('/api/dailySleepUpdate',dailySleep)
//app.use('/api/test',test)
app.get('/',(req,res)=>{
    res.send("responding from root dir")
})



}

if(app.get('env')=== 'staging'){
    serverdebugger("staging env, nothing moved here yet");
}


if(app.get('env') === 'production'){

    const port = process.env.PORT||5000;
    app.listen(port,()=>{console.log(`Aloha!, Server running on home:// ${port}`)})

}




