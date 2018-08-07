import { Router } from 'express';

const router = new Router();

router.get('/', (req, res) => {
  res.send('HELLO');
});

router.all('*', (request, response) => {
  console.log('Returning a 404 from the catch-all route', request);
  return response.sendStatus(404);
});

module.exports = router;
