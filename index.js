const express = require('express')
const bodyParser = require('body-parser')
const path = require('path')
const PORT = process.env.PORT || 5000
//const urlencodedParser = bodyParser.urlencoded({ extended: false })

express()
  .use(express.static(path.join(__dirname, 'public')))
  .set('views', path.join(__dirname, 'views'))
  .set('view engine', 'ejs')
  .get('/', (req, res) => res.render('pages/postal'))
  //.post('/results', urlencodedParser, function(req, res){ console.log(req.body); })
  .listen(PORT, () => console.log(`Listening on ${ PORT }`))
