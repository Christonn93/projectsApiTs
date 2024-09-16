"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const router = express_1.default.Router();
// Tasks
router.get('/tasks', (req, res) => {
    console.log(req.query);
    res.json({ message: 'Get all tasks' });
});
router.post('/tasks', (req, res) => {
    console.log(req.query);
    res.json({ message: 'Create a new task' });
});
router.put('/tasks/:id', (req, res) => {
    console.log(req.query);
    res.json({ message: `Update task with ID ${req.params.id}` });
});
router.delete('/tasks/:id', (req, res) => {
    console.log(req.query);
    res.json({ message: `Delete task with ID ${req.params.id}` });
});
// Users
router.get('/users', (req, res) => {
    console.log(req.query);
    res.json({ message: 'Get all users' });
});
router.post('/users', (req, res) => {
    console.log(req.query);
    res.json({ message: 'Add a new user' });
});
exports.default = router;
