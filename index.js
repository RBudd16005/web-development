const express = require('express')
const bodyParser = require('body-parser')
const path = require('path')
const PORT = process.env.PORT || 5000

express()
  .use(express.static(path.join(__dirname, 'public')))
  .use(bodyParser.urlencoded({extended:true}))
  .set('views', path.join(__dirname, 'views'))
  .set('view engine', 'ejs')
  .get('/', (req, res) => res.render('pages/postal'))
  .post('/results', function(req, res){ 
    const postage = req.params.postage;
    const weight = req.params.weight;
    res.render('pages/results', postage, weight);
  })
  .listen(PORT, () => console.log(`Listening on ${ PORT }`))
