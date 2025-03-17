const posts = require('../data/post')

function index(req, res) {
    res.json(posts);

}

function show(req, res) {
    res.json(`show the post with id: ${req.params.id}`)
}

function store(req, res) {
    
    const newId = posts[posts.length - 1].id + 1;
    
    const newPost = {
    id: newId,
    title: req.body.title,
    slug: req.body.slug,
    content:req.body.content,
    image: req.body.image,
    tags: req.body.tags
    }
    
    posts.push(newPost);
    
    console.log(posts);
    
    
    res.status(201);
    res.json(newPost);
}

function update(req, res) {
    
    const id = parseInt(req.params.id)
  
    const post = posts.find(post => post.id === id);
    
    if (!post) {
    res.status(404);
    return res.json({
    error: "Not Found",
    message: "post non trovato"
    })
    }
   
    post.title = req.body.title;
    post.slug = req.body.slug;
    post.content = req.body.content;
    post.image = req.body.image;
    post.tags = req.body.tags;
 
    console.log(posts)
    
    res.json(post);
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