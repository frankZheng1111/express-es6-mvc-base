'use strict';
import express from 'express';
import Demo from '../models/demo'

const router = express.Router();

// render a html page
//
router.get('/:id',  (req, res) => {
  let name = req.query.name;
  let id = req.params.id;
  let demo = new Demo(name);
  res.render('./demo/index', { demoId: id, demo: demo.demoMessage })
});

export default router;
