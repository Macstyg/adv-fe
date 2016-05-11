var express = require('express'),
    port    = process.env.PORT || 3000,
    path    = require('path'),
    app     = express();

app
  .use(express.static('public'))
  .get('*', (req, res) => {
    res.sendFile(path.join(__dirname + '/public/views/test.html'))
  })

  .listen(port);
console.log(`Server is running on port: ${port}`);
