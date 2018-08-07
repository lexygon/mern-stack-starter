import { Router } from 'express';
import { passport } from 'passport';

const router = new Router();

router.post('/login',
  passport.authenticate('local', {
    successRedirect: '/',
    failureRedirect: '/login',
    failureFlash: true,
  }));
