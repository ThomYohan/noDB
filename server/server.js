const express = require('express')

const EventsInArea = require('./controller/controller')

const app = express()
const port = 3366

app.use(express.json())

app.get('/api/events', EventsInArea.get)
app.post('/api/events', EventsInArea.create)
app.put('/api/events/:id', EventsInArea.update)
app.delete('/api/events/:id', EventsInArea.delete)

app.listen(port, () => {
    console.log('listening on port', port)
})