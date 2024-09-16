"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const router = express_1.default.Router();
// Posts
router.get("/posts", (req, res) => {
    console.log(req.query);
    res.json({ message: "Get all forum posts" });
});
router.post("/posts", (req, res) => {
    console.log(req.query);
    res.json({ message: "Create a new forum post" });
});
router.put("/posts/:id", (req, res) => {
    console.log(req.query);
    res.json({ message: `Update forum post with ID ${req.params.id}` });
});
router.delete("/posts/:id", (req, res) => {
    console.log(req.query);
    res.json({ message: `Delete forum post with ID ${req.params.id}` });
});
// Users
router.get("/users", (req, res) => {
    console.log(req.query);
    res.json({ message: "Get all forum users" });
});
router.get("/users/:id", (req, res) => {
    console.log(req.query);
    res.json({ message: `Get user details for ID ${req.params.id}` });
});
router.post("/users", (req, res) => {
    console.log(req.query);
    res.json({ message: "Add a new user to the forum" });
});
exports.default = router;
