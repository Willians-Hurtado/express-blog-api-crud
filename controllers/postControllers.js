const posts = require('../data/post')

function index(req, res) {
    res.json(posts);

}

function show(req, res) {
    res.send(`show the post with id: ${req.params.id}`)
}

function store(req, res) {
    res.send('create a new post')
}

function update(req, res) {
    res.send(`update the post with id: ${req.params.id}`)
}

function modify(req, res) {
    res.send(`modify the post with id: ${req.params.id}`)
}

function destroy(req, res) {
    res.send(`delete the post with id: ${req.params.id}`)
}

module.exports = {
    index,
    show,
    store,
    update,
    modify,
    destroy
}