const express = require("express");
const route = express.Router();
const Post = require("../models/post.model");


posts=[
     {id:"1" , titre:'PC DE BUREAU ' , contenu :'PC DE BUREAU LENOVO THINKCENTRE NÉO 50T I3 12È GÉN 4GO 1TO - NOIR'},
     {id:"2" , titre: 'Laptop' , contenu :'Lenovo 2022 Newest Ideapad 3 Laptop, 15.6" HD Touchscreen, 11th Gen Intel Core i3-1115G4 Processor, 8GB DDR4 RAM, 256GB PCIe NVMe SSD, HDMI,'},
     {id:"3" , titre: 'Tablette' , contenu :'Lenovo - Tab P11 Plus - Tablet - 11" 2K Display - MediaTek Octa-Core Processor - 4GB Memory - 128GB Storage - Dolby Atmos -'},
     {id:"4" , titre: 'Casque' , contenu :'Lenovo 100 Headset - Stereo - USB - Wired - Over-The-Head - Binaural'}, 
];

// GET
route.get("/", (req, res) => {

  Post.find({})
  .then((posts) => {
    console.log(posts);
    res.status(200).json(posts);
  })
  .catch((err) => {
    res.status(404).json({ message: "posts not found!" });
    console.log("post non trouvé !");
  });

});



// GET/:id
route.get("/:id", (req, res) => {


  Post.findById(req.params.id)
    .then((monApp) => {
      console.log(monApp);
      res.status(200).json(monApp);
    })
    .catch((err) => {
      res.status(404).json({ message: "post not found!" });
      console.log("post non trouvé !");
    });


});

// POST
route.post("/", (req, res) => {
  Post.create({ "titre": req.body.titre, "contenu": req.body.contenu })
    .then((monApp) => {
        console.log(monApp);
        res.status(200).json(monApp);
      }
    );
});

// PUT
route.put("/:id", (req, res) => {


  Post.updateOne({_id:req.params.id},{titre:req.body.titre,contenu: req.body.contenu})
      .then((message) => {
        console.log(message);
        res.status(200).json(message);
      })
      .catch((err) => {
        res.status(404).json({  "post not found!" });
        console.log("post non trouvé !");
      });

  });

// DELETE
route.delete("/posts/:id", (req, res) => {


  Post.deleteOne({_id:req.params.id})
      .then((message) => {
        console.log(message);
        res.status(200).json(message);
      })
      .catch((err) => {
        res.status(404).json({  "post not found!" });
      console.log("post non trouvé !");
      });


  });

module.exports = route;