const express = require('express');
const router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', 
    { title: 'NY page',
      content: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae nobis iure, recusandae voluptatem porro earum. Magnam nemo, esse voluptates laboriosam debitis ipsum aut cumque, itaque dolorem repellat a? Veritatis, natus!
      Adipisci, ab. Aliquid aspernatur ea, labore commodi eaque ullam praesentium molestiae illo veniam, non ratione odio obcaecati totam nostrum quia consequuntur inventore corporis nihil reprehenderit ipsum laboriosam illum deserunt beatae!
      Consequatur, necessitatibus. Ratione odit aspernatur, eligendi id, dolor accusantium quidem magni, laudantium optio cum deserunt praesentium doloribus consequatur laboriosam neque minus omnis! Veritatis iusto nisi delectus praesentium modi suscipit fugiat?
      Consequatur ipsum consectetur vitae minima officia atque doloremque eius corporis quam cupiditate, dolores nesciunt voluptatibus provident perspiciatis. Tempora, minima labore! Dolorem quo dolores, magni eius aperiam temporibus inventore quibusdam minus.
      Tempora vero veritatis magni earum, quo soluta! Nisi in, minus rerum non adipisci esse, dignissimos molestias eius asperiores distinctio assumenda expedita vel aliquid fuga nihil quisquam facere totam dolore quibusdam.`,
      teacher: 'Alex Litvinenko'
    }
 );
});

module.exports = router;
