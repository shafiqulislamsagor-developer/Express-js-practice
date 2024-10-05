"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
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
userRouter.get('/create-user', (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const user = req.body;
        console.log(user);
        res.json({
            success: true,
            message: 'user created successfully',
            data: user
        });
    }
    catch (err) {
        // console.error(err);
        // res.status(500).json({
        //     success: false,
        //     message: 'Error creating user',
        //     data: null
        // })
        next(err);
    }
}));
courseRouter.get('/create-course', (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const course = req.body;
        res.json({
            success: true,
            message: 'course created successfully',
            data: course
        });
    }
    catch (err) {
        // console.error(err);
        // res.status(500).json({
        //     success: false,
        //     message: 'Error creating course',
        //     data: null
        // })
        next(err);
    }
}));
// middlewares
const logger = (req, res, next) => {
    // console.log(req)
    next();
};
app.get('/', logger, (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    // console.log(req.query)
    try {
        res.send('hello world , I am back !!');
    }
    catch (err) {
        // console.error(err);
        // res.status(500).json({
        //     success: false,
        //     message: 'Error',
        //     data: null
        // })
        next(err);
    }
}));
app.post('/', (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        console.log(req.body);
        res.json({
            message: 'hello from post request'
        });
    }
    catch (err) {
        // console.error(err);
        // res.status(500).json({
        //     message: 'Error from post request'
        // })
        next(err);
    }
}));
// Routes error handling
app.all("*", (req, res) => {
    res.status(404).json({
        success: false,
        message: 'Page not found'
    });
});
// global error handler
app.use((error, req, res, next) => {
    if (error) {
        res.status(400).json({
            success: false,
            message: error.message || 'Something went wrong',
        });
    }
});
exports.default = app;
