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

userRouter.get('/create-user', async (req: Request, res: Response, next: NextFunction) => {
    try {
        const user = req.body;
        console.log(user);
        res.json({
            success: true,
            message: 'user created successfully',
            data: user
        })
    } catch (err) {
        // console.error(err);
        // res.status(500).json({
        //     success: false,
        //     message: 'Error creating user',
        //     data: null
        // })
        next(err);
    }
})

courseRouter.get('/create-course', async (req: Request, res: Response, next: NextFunction) => {
    try {
        const course = req.body;
        res.json({
            success: true,
            message: 'course created successfully',
            data: course
        })
    } catch (err) {
        // console.error(err);
        // res.status(500).json({
        //     success: false,
        //     message: 'Error creating course',
        //     data: null
        // })
        next(err);
    }
})

// middlewares
const logger = (req: Request, res: Response, next: NextFunction) => {
    // console.log(req)
    next()
}

app.get('/', logger, async (req: Request, res: Response, next: NextFunction) => {
    // console.log(req.query)
    try {
        res.send('hello world , I am back !!')
    } catch (err) {
        // console.error(err);
        // res.status(500).json({
        //     success: false,
        //     message: 'Error',
        //     data: null
        // })
        next(err);
    }
})

app.post('/', async (req: Request, res: Response, next: NextFunction) => {
    try {
        console.log(req.body)
        res.json({
            message: 'hello from post request'
        })
    } catch (err) {
        // console.error(err);
        // res.status(500).json({
        //     message: 'Error from post request'
        // })
        next(err);
    }
})

// Routes error handling
app.all("*", (req: Request, res: Response) => {
    res.status(404).json({
        success: false,
        message: 'Page not found'
    })
})

// global error handler
app.use((error: any, req: Request, res: Response, next: NextFunction) => {
    if (error) {
        res.status(400).json({
            success: false,
            message: error.message || 'Something went wrong',
        })
    }
})


export default app