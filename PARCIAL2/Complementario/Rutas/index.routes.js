const { Router } = require('express');
const express = require('express');
const { MONGO_URI } = require('../config');
const router = Router();
const mongoose = require('mongoose');
const { Sistemas } = require('../models');
router.use(express.json());


mongoose.connect(MONGO_URI).then(console.log("DB CONECT......"));

router.get('/', async(req, res) => {

    const re = await Sistemas.find();
    console.log(res.json(re));
});


router.post('/', async(req, res) => {
    await Sistemas.create(req.body);
    res.json({
        message: 'Dato guardado correctamente'
    });
    console.log(req.body);
    res.end();
});

router.delete('/:id', async(req, res) => {
    const { id } = req.params;
    res.json({
        message: 'Los datos se eliminaron correctamente'
    });
    await Sistemas.findByIdAndDelete(id);
    res.end();
});


router.put('/:id', async(req, res) => {
    const { id } = req.params;
    await Sistemas.findByIdAndUpdate(id, req.body);
    res.json({
        message: 'Los datos se actualizaron correctamente'
    });
    res.end();
});



module.exports = router;
