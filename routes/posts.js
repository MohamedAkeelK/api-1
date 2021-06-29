const express = require('express');
const router = express.Router();
const Post = require('../models/Post');

router.get('/', async (req, res) => {
    try {
        const posts = await Post.find();
        res.json(posts);
    } catch (err) {
        res.json({message: err});
    }
});

router.get('/:postId', async (req, res) => {
    try {
    const post = await Post.findById(req.params.postId);
    res.json(post);
    } catch(err) {
        res.json({ message: err });
    }
});

router.post('/', async (req, res) => {
    console.log(req.body);
    const post = new Post({
        title: req.body.title,
        description: req.body.description
    });

    post.save().then(() => console.log("Saved new user"));
    res.json(post);

    // try{
    //     const savedPost = await post.save();
    //     res.json(savedPost);
    // } catch (err) {
    //     res.json({message: err});
    //     console.log(err);
    // }
});

router.delete('/:postID', async (req, res) => {
    try {
        const removedPost = await Post.deleteOne( { _id: req.params.postID } );
        res.json(removedPost);
        console.log("deleted post");
    } catch (err) {
        res.json({message: err});
    }
});

router.patch('/:postId', async (req, res) => {
    try {
        const updatedPost = await Post.updateOne(
            { _id: req.params.postId },
            { $set: { title: req.body.title } }
        );
        res.json(updatedPost);
    } catch (err) {
        res.json({message: err});
    }
});


module.exports = router; 