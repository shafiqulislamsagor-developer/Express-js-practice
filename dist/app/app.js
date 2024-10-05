"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const app = (0, express_1.default)();
// parsers json file
app.use(express_1.default.json());
// parsers text file
app.use(express_1.default.text());
// router
const userRouter = express_1.default.Router();
const courseRouter = express_1.default.Router();
// use Router
app.use('/api/v1/users', userRouter);
app.use('/api/v1/course', courseRouter);
userRouter.get('/create-user', (req, res) => {
    const user = req.body;
    console.log(user);
    res.json({
        success: true,
        message: 'user created successfully',
        data: user
    });
});
courseRouter.get('/create-course', (req, res) => {
    const course = req.body;
    res.json({
        success: true,
        message: 'course created successfully',
        data: course
    });
});
// middlewares
const logger = (req, res, next) => {
    // console.log(req)
    next();
};
app.get('/:userId/:name/:year', logger, (req, res) => {
    // console.log(req.query)
    res.send('hello world , I am back !!');
});
app.post('/', (req, res) => {
    console.log(req.body);
    res.json({
        message: 'hello from post request'
    });
});
exports.default = app;
