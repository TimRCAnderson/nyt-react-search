var express = require('express');
var router = express.Router();
var Article = require("../models/article");

/* GET users listing. */
router.get('/saved', function(req, res) {
  Article.find({}, function(err, doc) {
    if(err)
    {
      res.render("error", err)
    }
    else
    {
      res.json(doc);
    }
  })
});

router.post('/saved', function(req, res) {
  var newsArticle = new Article(req.body);
  newsArticle.save(function(err, doc) {
    if(err)
    {
      res.render("error", err)
    }
    else
    {
      res.json(doc)
    }
  });
});

router.delete('/saved', function(req, res) {
  Article.deleteOne({_id: req.body.id}, function(err, doc) {
    if(err)
    {
      res.render("error", err)
    }
    else
    {
      res.json(doc)
    }
  });
});

module.exports = router;
