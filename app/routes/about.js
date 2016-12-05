var express = require('express');
var router = express.Router();

router.get('/about', function ( req, res ){

  res.render('about', {
    pageID : 'about',
    pageName : 'About'
  });
});

module.exports = router;
