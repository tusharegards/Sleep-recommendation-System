const mongoose = require('mongoose')

const genVitalSchema = new mongoose.Schema({
    height:{
        type:Number,
        min:100,
        max:230,
    },
    weight:{
        type:Number,
    },
    gender:{
        type:String,
    },
    age:{
        type:String,
    },
    onMedication:{
        type:Boolean,
    }
})

const genVital = mongoose.model('genVitals', genVitalSchema)

exports.genVitals = genVital;