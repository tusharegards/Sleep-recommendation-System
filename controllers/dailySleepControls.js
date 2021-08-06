const {dailyVitals} = require('../models/dailysleepmodel')


const sleepUpdate = (req,res) => {
    let duration = parseInt(req.body.duration)
    let sleepRating = parseInt(req.body.sleepRating)
    let noiseExposure = parseInt(req.body.noiseExposure)
    let screenTime = parseInt(req.body.screenTime)
    let waterIntake = parseInt(req.body.waterIntake)
    let drugIntake = parseInt(req.body.drugIntake)

    const dailySleepVital = new dailyVitals(req.body);
    
    try{
         dailySleepVital.save();

// logic main
        const sleepScore = (duration+sleepRating+noiseExposure+screenTime+waterIntake+drugIntake)/10

         res.send({sleepScore})
    }catch(err){
        res.sendStatus(404).json("error found in updating daily sleep data")
    }
}

module.exports = sleepUpdate