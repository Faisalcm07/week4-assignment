import express, { request, response } from "express"
import cors from "cors"
import dotenv from "dotenv"
import pg from "pg"
    
const app = express()
app.use(express.json())
app.use(cors())
dotenv.config()

const db = new pg.Pool({
    connectionString: process.env.DB_CONN 
})

app.get('/', (request, response) => {
    response.send('Hello there!')
})

app.get('/movies', async (request, response)=>{

    const data = await db.query(`SELECT * FROM favourite_movies`)
    const movies = data.rows 
    
    response.status(200).json(movies)})

app.post('/movies', async (request, response)=>{

    const userPost = request.body

    const query = await db.query(`INSERT INTO favourite_movies (name, movie) VALUES ($1, $2)`,[userPost.name, userPost.movie])
})

app.listen(3000, () => {
    console.log(`Server started on http://localhost:3000/`)
})