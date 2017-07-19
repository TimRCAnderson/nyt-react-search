var express = require('express');
var router = express.Router();
var Article = require("../models/article");
var request = require("request");

/* GET users listing. */
router.get('/saved', function(req, res) {
  Article.find(function(err, doc) {
    if(err)
    {
      console.log(err);
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
      console.log(err);
    }
    else
    {
      console.log(doc);
      res.json(doc)
    }
  });
});

router.delete('/saved', function(req, res) {
  Article.deleteOne(req.body, function(err, doc) {
    if(err)
    {
      console.log(err);
    }
    else
    {
      res.json(doc)
    }
  });
});

router.post("/search/", function(req, res) {
  console.log(req.body);
  console.log(req.url);
  console.log(req.params);
  var searchParams = {
    "api-key": "d856b3a8c95445e681b06ed3654fbd3c"
  }
  if(req.body.searchTerm)
  {
    searchParams.q = req.body.searchTerm;
  }
  if(req.body.beginDate)
  {
    searchParams.begin_date = req.body.beginDate;
  }
  if(req.body.endDate)
  {
    searchParams.end_date = req.body.endDate;
  }
  request.get({
    url: "https://api.nytimes.com/svc/search/v2/articlesearch.json",
    qs: searchParams
  }, function(err, response, body) {
    if(err)
    {
      console.log(err);
      res.render("error", err);
    }
    else
    {
      body = JSON.parse(body);
      res.json(body);
    }
  });
});

module.exports = router;
