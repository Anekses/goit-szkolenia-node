const express = require('express')
const app = express()

const myRouter = require('./router');

app.use('/api', myRouter)

app.all('/todos', (req, res, next) => {
    console.log('todos')
    next()
})

app.get('/todos', (req, res, next) => {
    res.send('todos!')
})

const someFunction = (req, res) => {
    res.send('GET')
}

app
    .route('/blog')
    .get(someFunction)
    .post((req, res) => {
        res.send('Add something')
    })
    .put((req, res) => {
        res.send('Update something')
    })
    .delete((req, res) => {
        res.send('delete')
    })

    

app.use(express.json())

app.use((request, response, next) => {
    console.log('Hej hej, middleware')
    // setTimeout(() => {
        next()

    // }, 3000)
})

app.get('/', (request, response) => {
    response.send('Hej hej, witamy!')
})

// app.get('/user', (request, response, next) => {
//     response.send('Hej Dawid!')
//     next()
// })

// app.get('/user/:userId', (request, response) => {
//     // response.send(`Hej 
//     // ${request.params.userId}. 
//     // Skip: ${request.query.skip}, 
//     // limit: ${request.query.limit}
//     // `)
//     // console.log(request.headers)

//     response.send({
//         userId: request.params.userId,
//         skip: request.query.skip,
//         limit: request.query.limit
//     })
// })

// app.post('/user/:userId', (req, res) => {
//     // console.log(req)
//     res.send(req.body)
// })


app.listen(3000, () => {
    console.log('Example App is working on port 3000!')
})