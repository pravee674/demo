var express = require('express');
var app = express();
var cors = require('cors');
app.use(cors())
var data = [{image:'./nature.jpg',title:'Arctic sea ice extent hits record low for winter maximum',icontitle:'CNN'},
{image:'./pen.jpg',title:'Now battery for smartphones can now charge in a minute',icontitle:'Return'},
{image:'./phone.jpg',title:'The best Tropical plants you can grow indoors',icontitle:'CNN'}]
app.get('/info', function (req, res) {
   res.send(data);
})

var server = app.listen(8081, function () {
   var host = server.address().address
   var port = server.address().port
   
   console.log("Example app listening at http://%s:%s", host, port)
})