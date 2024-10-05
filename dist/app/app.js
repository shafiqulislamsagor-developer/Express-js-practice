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
app.get('/', (req, res) => {
    res.send('hello world , I am back !!');
});
app.post('/', (req, res) => {
    console.log(req.body);
    res.json({
        message: 'hello from post request'
    });
});
exports.default = app;
