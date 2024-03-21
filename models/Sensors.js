const {Schema, model} = require("mongoose")

const SensorSchema = new Schema({
    sensorID: {
        type: Number,
    },
    GPS: {
        type: String,
    },
    temp: {
        type: Number,
    },
    fire: {
        type: Boolean,
    },
    smoke: {
        type: Boolean,
    },
})

const SensorModel = model("sensors", SensorSchema)

module.exports = SensorModel