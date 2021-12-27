import express from 'express'
import cors from 'cors'
import bodyParser from 'body-parser'
import searchRoute from './routes/search.js'

const app = express()

app.use(cors())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.use('/api/search', searchRoute)

app.listen(3000, () => {
  console.log('Server initialized')
})
