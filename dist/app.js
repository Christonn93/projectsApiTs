"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const store_routes_1 = __importDefault(require("./store/routes/store.routes"));
const booking_routes_1 = __importDefault(require("./booking/routes/booking.routes"));
const forum_routes_1 = __importDefault(require("./forum/routes/forum.routes"));
const todo_routes_1 = __importDefault(require("./todo/routes/todo.routes"));
const app = (0, express_1.default)();
// Middleware
app.use(express_1.default.json());
// Routes
app.use('/v1/store', store_routes_1.default);
app.use('/v1/booking', booking_routes_1.default);
app.use('/v1/forum', forum_routes_1.default);
app.use('/v1/todo', todo_routes_1.default);
// Start the server
const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
