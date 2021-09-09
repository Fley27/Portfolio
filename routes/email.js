const express = require("express");
const nodemailer = require("nodemailer");
const router = express.Router();

if (process.env.NODE_ENV !== 'production') {
    require('dotenv').config();
}

router.post("/subscription", async (req, res) => {
    try {
        const {email} = req.body;
    
            let transporter = nodemailer.createTransport({
                host: "smtp.gmail.com",
                port: 587,
                secure: false, // true for 465, false for other ports
                auth: {
                user: `fjvm.cj@gmail.com`, // email of the app
                pass: `Jolie1963`, // password of the app
                },
            });

            let info = await transporter.sendMail({
                from: '"Alif Languages Services  👻" <support@mathgame.com>', // sender address
                to: `fenleymenelas@gmail.com`, // list of receivers
                subject: "Subscription from Alif", // Subject line
                text: `Email: ${email}`
            });
            return res.json({msg: "Your request has been sent successfully"});
    } catch (error) {
        console.log(error);
        return res
        .status(500)
        .json({ msg: `Server :  ${error}` });
    }
})

router.post("/message", async (req, res) => {
    try {
        const {email, name, phoneNumber, message} = req.body;
    
            let transporter = nodemailer.createTransport({
                host: "smtp.gmail.com",
                port: 587,
                secure: false, // true for 465, false for other ports
                auth: {
                user: `fjvm.cj@gmail.com`, // email of the app
                pass: `Jolie1963`, // password of the app
                },
            });

            let info = await transporter.sendMail({
                from: '"Alif Languages Services  👻" <support@mathgame.com>', // sender address
                to: `fenleymenelas@gmail.com`, // list of receivers
                subject: "Message From Alif", // Subject line
                text: `Name: ${name} \n\n Email: ${email} \n\n Phone Number: ${phoneNumber}\n\n` +
                `Message\n\n\ ${message}`
            });
            return res.json({msg: "Your request has been sent successfully"});
    } catch (error) {
        console.log(error);
        return res
        .status(500)
        .json({ msg: `Server :  ${error}` });
    }
})

router.post("/", async (req, res) => {
    try {
        const {email, name, subject, message} = req.body;
    
            let transporter = nodemailer.createTransport({
                host: "smtp.gmail.com",
                port: 587,
                secure: false, // true for 465, false for other ports
                auth: {
                user: `fjvm.cj@gmail.com`, // email of the app
                pass: `Jolie1963`, // password of the app
                },
            });

            let info = await transporter.sendMail({
                from: '"Fenley Portfolio  👻" <support@fenley.com>', // sender address
                to: `fenleymenelas@gmail.com`, // list of receivers
                subject: `${subject}`, // Subject line
                text: `Name: ${name} \n\n Email: ${email} \n\n` +
                `Message\n\n\ ${message}`
            });
            return res.json({msg: "Your request has been sent successfully"});
    } catch (error) {
        console.log(error);
        return res
        .status(500)
        .json({ msg: `Server :  ${error}` });
    }
})

module.exports = router;