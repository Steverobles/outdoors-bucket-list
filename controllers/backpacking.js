const Backpacking = require('../models/backpacking')
const Outdoor = require('../models/outdoor')
const User = require('../models/user')

module.exports = {
    // viewBackpackingTrails,
    new: newBackpackingTrail,
    make,
    delete:deleteBackpackingTrail,
    edit,
    update
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

async function make(req,res) {
    try {
        const user = await User.findOne({googleId:res.locals.user.googleId})
        req.body.userId = user._id
        await Backpacking.create(req.body)
    } catch(err) {
        console.log(err)
    }
    res.redirect('/backpacking/new')
}

async function edit(req, res) {
    try {
      const backpacking = await Backpacking.findById(req.params.id);
      res.render('backpacking/edit', { backpacking });
     
    } catch (err) {
      console.log(err);
      res.status(500).send('Internal Server Error');
    }
  }

//   async function update(req, res) {
//     try {
//       await Backpacking.findByIdAndUpdate(req.params.id, req.body);
//       res.redirect('/backpacking');
//     } catch (err) {
//       console.log(err);
//       res.status(500).send('Internal Server Error');
//     }
//   }
async function update(req, res) {
    try {
      await Backpacking.findByIdAndUpdate(req.params.id, req.body);
      res.redirect('/outdoors/' + req.params.id);
    } catch (err) {
      console.log(err);
      res.status(500).send('Internal Server Error');
    }
  }