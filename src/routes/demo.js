'use strict';
import express from 'express';

const router = express.Router();

// render a html page
//
router.get('/',  (req, res) => {
  let name = req.query.name;
  res.render('./demo/index', { demo: `Hello ${name}` })
});

export default router;
