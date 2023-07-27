const Hiking = require('../models/outdoor')
const Backpacking = require('../models/backpacking')
const User = require('../models/user')

module.exports = {
    index,
    show,
    new: newHikingTrail,
    create,
    delete: deleteHike,
    edit,
    update
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
    let hiking
    let backpacking 
    try {
        const user = await User.findOne({googleId:res.locals.user.googleId})
        console.log(user)
        hiking = await Hiking.find({userId:user._id})
        
         backpacking = await Backpacking.find({userId:user._id})
    } catch(err) {
        res.status(500).send('Internal Server Error')
    }
    res.render('outdoors/index', {title: 'Your Bucket', hiking, backpacking})
   
}

async function show(req,res) {
    const hiking = await Hiking.findById(req.params.id)
    const backpacking = await Backpacking.findById(req.params.id)
    res.render('outdoors/show', {hiking, backpacking})
}


async function newHikingTrail(req,res) {
    const hiking = await Hiking.find({}).sort('trail')
    res.render('outdoors/new', {title: 'Hiking Trails', hiking})
}

async function create(req,res) {
    try {
        const user = await User.findOne({googleId:res.locals.user.googleId})
        req.body.userId = user._id
        await Hiking.create(req.body)
    } catch(err) {
        console.log(err)
    }
    res.redirect('/outdoors/new')
}

async function edit(req, res) {
    try {
      const hiking = await Hiking.findById(req.params.id);
      res.render('outdoors/edit', { hiking });
    } catch (err) {
      console.log(err);
      res.status(500).send('Internal Server Error');
    }
  }

  async function update(req, res) {
    try {
      await Hiking.findByIdAndUpdate(req.params.id, req.body);
      res.redirect('/outdoors/' + req.params.id);
    } catch (err) {
      console.log(err);
      res.status(500).send('Internal Server Error');
    }
  }