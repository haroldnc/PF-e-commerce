const Hiring = require('../models/Hiring');
const User = require('../models/User');
const Publication = require('../models/Publications');
const DataWorker = require('../models/DataWorkers');
const nodemailer = require('nodemailer');

const addHiring = async (req, res) => {
    const { idUser, idWorker, idPublication } = req.body;
    try {
        const hiring = await Hiring.create({ idUser, idWorker, idPublication });
            res.status(200).json({ 
                ok: true,
                msg: 'Hiring added successfully',
                hiring
            });

        const user = await User.findById(idUser);
        const worker = await User.findById(idWorker);
        const dataWorker = await DataWorker.find({"userId": idWorker});
        const publication = await Publication.findById(idPublication);
        if (!dataWorker.phone) dataWorker.phone = 'No phone';

        // enviar email de contacto al usuario con datos del worker
        const transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: 'nachoburgos1995@gmail.com',
                pass: 'mtlsdatewtbcwhbf'
            }
        });
        const mailOptionsUser = {
            from: "Wixxer <",
            to: user.email,
            subject: 'Hiring confirmation',
            text: 'Hello ' + user.firstName + ' ' + user.lastName + '\n\n' +
                'Thank you for using Wixxer to hire a job service according to your needs.\n\n' +
                'Below we leave you the contact information of the contracted worker:\n\n' +
                'Name:' + ' ' + worker.firstName + ' ' + worker.lastName + '\n\n' +
                'Email:' + ' ' +  worker.email + '\n\n' +
                'Phone:' + ' ' +  dataWorker.phone + '\n\n' +
                'Publication ID:' + ' ' +  publication.id + '\n\n' +
                'Post Title:' + ' ' +  publication.title + '\n\n' +
                'Description:' + ' ' +  publication.description + '\n\n' +
                'Price:' + ' U$S ' +  publication.price + '\n\n' +
                'Thank you,\n' +
                'Wixxer  Team'
        };
        transporter.sendMail(mailOptionsUser, function (error, info) {
            if (error) {
                console.log(error);
            } else {
                console.log('Email sent: ' + info.response);
            }
        });

        // enviar email de contacto al worker con datos del user
        const mailOptionsWorker = {
            from: "Wixxer <",
            to: worker.email,
            subject: 'Hiring confirmation',
            text: 'Hello ' + worker.firstName + ' ' + worker.lastName + '\n\n' +
                'Thank you for using Wixxer to offer your professional services.\n\n' +
                'Below we leave the contact information of the user who contracted their services:\n\n' +
                'Name:' + ' ' +  user.firstName + ' ' + user.lastName + '\n\n' +
                'Email:' + ' ' +  user.email + '\n\n' +
                'Publication ID:' + ' ' +  publication.id + '\n\n' +
                'Post Title:' + ' ' +  publication.title + '\n\n' +
                'Description:' + ' ' +  publication.description + '\n\n' +
                'Price:' + ' ' +  publication.price + '\n\n' +
                'Thank you,\n' +
                'Wixxer  Team'
        };
        transporter.sendMail(mailOptionsWorker, function (error, info) {
            if (error) {
                console.log(error);
            } else {
                console.log('Email sent: ' + info.response);
            }
        });
    }
    catch (error) {
        res.status(422).json({ 
            ok: false,
            msg: 'Error adding hiring',
            error: error.message
         });
    };
};

const getAllHirings = async (req, res) => {
    try {
        const hirings = await Hiring.find()
        res.status(200).json({ 
            ok: true,
            hirings
        });
    } catch (error) {
        res.status(422).json({ 
            ok: false,
            error: error.message
         });
    };
};

const getHiringsByUser = async (req, res) => {
    const { idUser } = req.params;
    try {
        const hirings = await Hiring.find({ idUser })
            .populate('idUser', {firstName: 1, lastName: 1, image: 1})
            .populate('idWorker', {firstName: 1, lastName: 1, image: 1})
            .populate('idPublication', {title: 1, price: 1})
        res.status(200).json({ 
            ok: true,
            hirings
        });
    } catch (error) {
        res.status(422).json({ 
            ok: false,
            msg: 'Error getting hirings by user',
            error: error.message
         });
    };
};

const getHiringsByPublication = async (req, res) => {
    const { idPublication } = req.params;
    try {
        const hirings = await Hiring.find({ idPublication })
        res.status(200).json({ 
            ok: true,
            hirings
        });
    } catch (error) {
        res.status(422).json({ 
            ok: false,
            msg: 'Error getting hirings by publication',
        });
    };
};

const getHiringsByWorker = async (req, res) => {
    const { idWorker } = req.params;
    try {
        const hirings = await Hiring.find({ idWorker })
            .populate('idUser', {firstName: 1, lastName: 1, image: 1})
            .populate('idWorker', {firstName: 1, lastName: 1, image: 1})
            .populate('idPublication', {title: 1, price: 1})
        res.status(200).json({
            ok: true,
            hirings
        });
    } catch (error) {
        res.status(422).json({
            ok: false,
            msg: 'Error getting hirings by worker',
            error: error.message
        });
    };
};

const deleteHiring = async (req, res) => {
    const { id } = req.params;
    try {
        const hiring = await Hiring.findByIdAndDelete(id);
        res.status(200).json({
            ok: true,
            msg: 'Hiring deleted successfully',
            hiring
        });
    } catch (error) {
        res.status(422).json({
            ok: false,
            msg: 'Error deleting hiring',
            error: error.message
        });
    };
};

module.exports = { 
    addHiring, 
    getAllHirings, 
    getHiringsByUser, 
    getHiringsByPublication, 
    getHiringsByWorker,
    deleteHiring
};