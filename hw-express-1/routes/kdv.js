const express = require('express');
const router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('kdv', 
    { title: `
        «Как дать ребёнку всё без 
        денег и связей»
      `,
      time: ' 19:00 по Киеву / 20:00 по Москве',
      date: '27 марта 2018'
    }
 );
});

module.exports = router;
