const express = require('express');
const path = require('path');
const app = express();

app.use(express.static(path.join(__dirname, 'build')));

app.use(express.static('client/build'));

app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
});

let PORT = process.env.PORT || 6000; 


app.listen(PORT)
    .on('listening', () =>
    console.log(`Realtime server running on port ${PORT}`)
);