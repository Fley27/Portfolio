const express = require("express");
const path = require("path");
const cors = require("cors");
const morgan = require('morgan');

const app = express();

app.use(express.json({ extended: false }));
app.use(cors());

let port = process.env.PORT || 5000; 


app.use(morgan('tiny'));
app.use('/api/email', require("./routes/email")); 

app.use(express.static('client/build'));

app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
});

app.listen(port, () => console.log(`Server runing on port ${port}`));