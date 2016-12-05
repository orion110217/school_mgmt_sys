var express = require('express');
var app = express();
var reload = require('reload');
var teacherData = require('./data/schoolinfo.json');

app.set('port', process.env.PORT || 2000);
app.set('view engine', 'ejs');
app.set('views', 'app/views');
app.set('appData', teacherData);

app.use(express.static('app/public'));
var allTeachers = teacherData.teachers;

app.use(require('./routes/index'));
app.use(require('./routes/about'));
app.use(require('./routes/faculty'));

var server = app.listen(app.get('port'), function(){
    console.log('Listen at port ' + app.get('port'));
});

reload(server, app);
