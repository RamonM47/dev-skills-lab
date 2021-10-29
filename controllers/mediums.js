import * as mediumsDb from "../data/mediums-db.js"

function index(req, res) {
  mediumsDb.find({}, function(error, mediums) {
    res.render('mediums/index', {
      mediums: mediums,
      error: error,
    })
  })
}

function show(req, res) {
  mediumsDb.findById(req.params.id, function(error, medium) {
    res.render("mediums/show", {
      medium,
      error
    })
  })
}

function newmedium(req, res) {
res.render("mediums/new")
}

function create(req, res) {
  mediumsDb.create(req.body, function(error, medium) {
    res.redirect("/mediums")
  })
}

function deletemedium(req, res) {
  mediumsDb.findByIdAndDelete(req.params.id, function(error, todo) {
    res.redirect("/mediums")
  })
}

export {
  index,
  show,
  newmedium,
  create,
  deletemedium
}