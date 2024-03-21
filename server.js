//CREAT SERVER
const express = require("express")
const app = express()

const _PORT = 2000;

const cors = require("cors")
app.use(cors())

app.use(express.json())


//CONNECT TO DB

const mongoose = require("mongoose")
mongoose.connect(process.env.MONGO_URL);


//IMPORT ClIENT MODEL
const SensorModel = require('./models/Sensors')



//get request
app.get("/sensors", async (req, res) => {
    const sensors = await SensorModel.find();
    res.json(sensors)

})



//updating database esp 8266/32
app.post('/edit-sensor', async (req, res) => {
    const { sensorID, temp, fire, smoke } = req.body;

    try {
        await SensorModel.updateOne({ sensorID }, { temp },{ fire }, { smoke });

        // console.log(`Sensor ID: ${sensorID}, Fuite de gaz: ${étatGaz}`);
        res.json({ message: 'Data received and database updated successfully' });
    }
    catch (error) {
        console.error('Error updating database:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
});



app.listen(_PORT, () => {
    console.log("Server Works")

})