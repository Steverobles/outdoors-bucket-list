const Hiking = require('../models/outdoor')
const Backpacking = require('../models/backpacking')

module.exports = {
    index,
    new: newHikingTrail,
    create,
    delete: deleteHike
}

async function deleteHike(req,res) {
    try {
        const id = req.params.id
        await Hiking.findOneAndDelete({ _id:id})
        res.redirect('/outdoors')
    } catch(err) {
        console.log(err)
        res.status(500).send('Internal Server Error')
    }
}


async function index(req, res) {
    const hiking = await Hiking.find({})
    let backpacking 
    try {
         backpacking = await Backpacking.find({})
    } catch(err) {
        res.status(500).send('Internal Server Error')
    }
    res.render('outdoors/index', {title: 'Your Bucket', hiking, backpacking})
   
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