const express = require('express');
const router = express.Router();

const users = [
  { id: '1', name: 'Rafal', imageUrl: 'https://www.interia.pl/Rafal-photo' },
  { id: '2', name: 'Marcin'},
  { id: '3', name: 'Tomasz'}
]

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.json(users)
});

router.get('/:id', (req, res, next) => {
  const { id } = req.params

  // fetch('https://ia.hit.interia.pl/sg/date?packSize=100&pers=1&suid=f38a3da4-129d-492c-8676-8b0a5cf9bc79&guid=58709790-7bcc-4656-9b57-5297f80bce57&sha1=4c25dccc2161179dd810a134ea56f0e37ef074e4&lsha1=4c25dccc2161179dd810a134ea56f0e37ef074e4')
  const user = users.filter(us => us.id === id)
  res.status(200).json(user)
})

module.exports = router;


// GET 
// NIE JEST POST
// PUT I PATCH
// // { id: 2, name: 'oki'}
// dla id = 2, name = "abba"