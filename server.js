const express = require("express");

const app = express();

app.get("/api/timestamp/:date", (req, res) => {
    const date = req.params.date;
    const dateInfo = {unix: null, utc: null};
    if(date.length === 10){     //Date in format : YYYY-MM-DD
        const UTCDate = new Date(date);
        dateInfo.utc = UTCDate.toUTCString();
        dateInfo.unix = Math.round(UTCDate.getTime()/1000);
        res.json(dateInfo);
    } else {        //Unix format
        const unixTimeStamp = parseInt(date);
        dateInfo.unix = unixTimeStamp;
        dateInfo.utc = new Date(unixTimeStamp).toUTCString();
        res.json(dateInfo);
    }
});

app.listen(5000);
