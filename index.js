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
    var postage = req.body.postage;
    var weight = req.body.weight;
    var price = 0;
    switch(postage){
      case 1:
        price = 0.55 + ((weight - 1) * 0.15);
        postage = "Letters (Stamped)"
        break;
      case 2:
        price = 0.50 + ((weight - 1) * 0.15);
        postage = "Letters (Metered)";
        break;
      case 3:
        price = 1 + ((weight - 1) * 0.15);
        postage = "Large Envelopes (Flats)";
        break;
      case 4:
        var add = 0;
        for (i = 0; i < weight; i++) {
          if (i % 4 == 0)
          {
            add += 0.73;
          }
        }
        price = add + 3.66;
        postage = "First-Class Package Service—Retail";
        break;
    }
    res.render('pages/results', {rprice: price, rpostage: postage});
  })
  .listen(PORT, () => console.log(`Listening on ${ PORT }`))
