var express = require('express');
var app = express();
var cors = require('cors');
app.use(cors())
var data = [{image:'',title:'Arctic sea ice extent hits record low for winter maximum'},
{image:'',title:'Now battery for smartphones can now charge in a minute'},
{image:'',title:'The best Tropical plants you can grow indoors'}]
app.get('/info', function (req, res) {
   res.send(data);
})

var server = app.listen(8081, function () {
   var host = server.address().address
   var port = server.address().port
   
   console.log("Example app listening at http://%s:%s", host, port)
})