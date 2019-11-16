const express = require('express')
const bodyParser = require('body-parser')
const path = require('path')
const PORT = process.env.PORT || 5000

express()
  .use(express.static(path.join(__dirname, 'public')))
  .use(bodyParser.urlencoded({extended:false}))
  .set('views', path.join(__dirname, 'views'))
  .set('view engine', 'ejs')
  .get('/', (req, res) => res.render('pages/postal'))
  .post('/results', function(req, res){ 
    res.render('pages/results', {results: req.body});
  })
  .listen(PORT, () => console.log(`Listening on ${ PORT }`))
