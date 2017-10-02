// 'use strict';

const express = require('express');
const controller = require('./list.controller');

const router = express.Router();

router.get('/', controller.getLists);
router.post('/', controller.createList);
router.put('/:id', controller.editList);
router.delete('/:id', controller.removeList);

module.exports = router;
