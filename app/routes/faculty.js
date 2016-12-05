var express = require('express');
var router = express.Router();
var app = express();


router.get('/faculty', function ( req, res ){

  var data = req.app.get('appData');
  var pageTeachers = data.teachers;

  res.render('faculty', {
    pageID : 'faculty',
    pageName : 'Faculty',
    teachers: pageTeachers
  });
});

module.exports = router;
