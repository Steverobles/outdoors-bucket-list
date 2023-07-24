const Backpacking = require('../models/backpacking')
const Outdoor = require('../models/outdoor')

module.exports = {
    new: newBackpackingTrail,
    create
}

async function newBackpackingTrail(req,res) {
    const backpacking = await Backpacking.find({}).sort('trail')
    res.render('backpacking/new', {title: 'Backpacking Trails', backpacking})
}

async function create(req,res) {
    try {
        await Backpacking.create(req.body)
    } catch(err) {
        console.log(err)
    }
    res.redirect('/backpacking/new')
}