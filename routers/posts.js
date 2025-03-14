const express = require('express');
const router = express.Router();
const postController = require('../controllers/postControllers'); 

// GET all posts
router.get('/', postController.index);
//show
router.get('/:id', postController.show);

//create
router.post('/', postController.store)

//update
router.put('/:id', postController.update)

//modify
router.patch('/:id', postController.modify)

//delete
router.delete('/:id', postController.destroy)

module.exports = router;