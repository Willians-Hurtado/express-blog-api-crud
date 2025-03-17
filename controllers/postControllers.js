const posts = require('../data/post')

function index(req, res) {
    res.json(posts);

}

function show(req, res) {
    res.json(`show the post with id: ${req.params.id}`)
}

function store(req, res) {
    console.log(req.body);
    
    res.send('create a new post')
}

function update(req, res) {
    res.send(`update the post with id: ${req.params.id}`)
}

function modify(req, res) {
    res.send(`modify the post with id: ${req.params.id}`)
}

const destroy = (req, res) => {
    const postId = Number(req.params.id)

    const post = posts.find(post => post.id === postId)
    console.log(post);

    if(!post){
        return res.status(404).json({
            error: '404 not found',
            message: 'post not found'
        })
    }
    
    posts.splice(posts.indexOf(post), 1)
    console.log(post);
    res.sendStatus(204)
    
}

module.exports = {
    index,
    show,
    store,
    update,
    modify,
    destroy
}