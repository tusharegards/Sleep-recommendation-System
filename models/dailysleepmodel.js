const mongoose = require('mongoose')


const dailySleepSchema = new mongoose.Schema({
    duration:{
        type: Number,
        required: true,
    },
    sleepRating:{
        type: Number,
        required: true
    },
    noiseExposure:{
        type: Number,
    },
    screenTime:{
        type:Number
    },
    waterIntake:{
        type:Number
    },
    drugIntake:{
        type:Number
    },
})

const dailyVital = mongoose.model('dailyVitals', dailySleepSchema);

exports.dailyVitals = dailyVital;