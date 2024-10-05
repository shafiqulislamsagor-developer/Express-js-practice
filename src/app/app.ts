import express, { Request, Response } from 'express';


const app = express();

// parsers json file
app.use(express.json())

// parsers text file
app.use(express.text())

app.get('/', (req: Request, res: Response) => {
    res.send('hello world , I am back !!')
})

app.post('/', (req: Request, res: Response) => {
    console.log(req.body)
    res.json({
        message: 'hello from post request'
    })
})


export default app