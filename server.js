const express = require('express');
const app = express();
const port = 3009;
const postsRouter = require('./routers/posts')

app.use(express.json())

app.post('/', (req, res) => {
    console.log(req.body);
    
})

app.put('/:id', (req, res) => {
    res.send('Modifica integrale della pizza ' + req.params.id);
});

app.listen(port, () => {
    console.log(`server running on http://localhost:${port}`);
    
})

app.get('/', (req, res) => {
    res.send('welcome to our blog')
    
})

app.use('/api/v1/posts', postsRouter)