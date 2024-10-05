import express, { NextFunction, Request, Response } from 'express';


const app = express();

// parsers json file
app.use(express.json())

// parsers text file
app.use(express.text())

// router
const userRouter = express.Router();
const courseRouter = express.Router();

// use Router
app.use('/api/v1/users', userRouter)
app.use('/api/v1/course', courseRouter)

userRouter.get('/create-user', (req: Request, res: Response) => {
    const user = req.body;
    console.log(user);
    res.json({
        success: true,
        message: 'user created successfully',
        data: user
    })
})

courseRouter.get('/create-course', (req: Request, res: Response) => {
    const course = req.body;
    res.json({
        success: true,
        message: 'course created successfully',
        data: course
    })
})

// middlewares
const logger = (req: Request, res: Response, next: NextFunction) => {
    // console.log(req)
    next()
}

app.get('/:userId/:name/:year', logger, (req: Request, res: Response) => {
    // console.log(req.query)
    res.send('hello world , I am back !!')
})

app.post('/', (req: Request, res: Response) => {
    console.log(req.body)
    res.json({
        message: 'hello from post request'
    })
})


export default app