const Backpacking = require('../models/backpacking')
const Outdoor = require('../models/outdoor')

module.exports = {
    // viewBackpackingTrails,
    new: newBackpackingTrail,
    create,
    delete:deleteBackpackingTrail
}


async function deleteBackpackingTrail(req,res) {
    try {
        const id = req.params.id
        await Backpacking.findOneAndDelete({ _id:id})
        res.redirect('/outdoors')
    } catch(err) {
        console.log(err)
        res.status(500).send('Internal Server Error')
    }
}

// async function viewBackpackingTrails(req, res) {
//     try {
//         const backpacking = await Backpacking.find({})
//         res.render('outdoors/index', {title: 'Your Bucket', backpacking})
//     } catch(err) {
//         res.status(500).send('Internal Server Error')
//     }
// }


async function newBackpackingTrail(req,res) {
    try{
    const backpacking = await Backpacking.find({}).sort('trail')
    res.render('backpacking/new', {backpacking})
    } catch (err) {
        console.log(err)
        res.status(500).send('Internal Server Error')
    }
}

async function create(req,res) {
    try {
        await Backpacking.create(req.body)
    } catch(err) {
        console.log(err)
    }
    res.redirect('/backpacking/new')
}