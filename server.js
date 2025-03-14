const express = require('express');
const app = express();
const port = 3009;
const postsRouter = require('./routers/posts')

app.listen(port, () => {
    console.log(`server running on http://localhost:${port}`);
    
})

app.get('/', (req, res) => {
    res.send('welcome to our blog')
    
})

app.use('/api/v1/posts', postsRouter)