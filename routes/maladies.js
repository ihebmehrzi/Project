const express = require("express");
const router = express.Router();
const maladie = require("../models/maladie");

router.get("/", (req, res) => {
    maladie.find()
    .then(maladies => res.json(maladies))
    .catch(err => console.log(err.message));
});


router.post("/", (req, res) => {
  const { NomMaladie } = req.body;
  let newMaladie = new maladie({
    NomMaladie
  });
  newMaladie
    .save()
    .then(data => res.json(data))
    .catch(err => console.log(err.message));
});

// router.delete("/:id", (req, res) => {
//   movie.findByIdAndDelete(req.params.id)
//     .then(data => {
//       if (!data) {
//         res.json({ msg: "Movie Not found" });
//       } else {
//         res.json({ msg: "Movie Deleted!" });
       
//       }
//     })
//     .catch(err => console.error(err.message));
// });


// router.put("/:id", (req, res) => {
//   let newInfo = req.body;
//   movie.findByIdAndUpdate(
//     req.params.id,
//     { $set: { ...newInfo } },
//     (err, data) => {
//       if (err) throw err;
//       else {
//         if (!data) {
//           res.json({ msg: "Not Found" });
//         } else {
//           movie.findById(req.params.id)
//             .then(mv => res.json(mv))
//             .catch(err => console.error(err.message));
//         }
//       }
//     }
//   );
// });



// router.get("/:id", (req, res) => {
//   movie.findById(req.params.id)
//     .then(mv => {
//       if (!mv) {
//         res.json({ msg: "Movie Not Found" });
//       } else {
//         res.json(mv);
//       }
//     })
//     .catch(err => console.error(err.message));
// });


module.exports = router;