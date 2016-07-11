var express = require('express');
var app = express();
var validUrl = require('valid-url');

var port = process.env.PORT || 5000;
app.listen(port);

app.get('/addURL/*', function(req, res) {
  origUrl = req.params[0];
  if(validUrl.isUri(origUrl)){
    res.json({
      original_url: origUrl,
      short_url: "https://ms-url-shortener.herokuapp.com/shorten"
    });
  } else{
    res.json({
      error: "enter a valid URL format"
    });
  }
});

app.get('/shorten', function(req, res) {
  res.redirect(origUrl);
});
