const Hiking = require('../models/outdoor')
const Backpacking = require('../models/backpacking')

module.exports = {
    new: newHikingTrail,
    create
}

async function newHikingTrail(req,res) {
    const hiking = await Hiking.find({}).sort('trail')
    res.render('outdoors/new', {title: 'Hiking Trails', hiking})
}

async function create(req,res) {
    try {
        await Hiking.create(req.body)
    } catch(err) {
        console.log(err)
    }
    res.redirect('/outdoors/new')
}