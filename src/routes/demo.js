'use strict';
import express from 'express';

const router = express.Router();

// render a html page
//
router.get('/:id',  (req, res) => {
  let name = req.query.name;
  let id = req.params.id;
  res.render('./demo/index', { demoId: id, demo: `Hello ${name}` })
});

export default router;
