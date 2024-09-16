import express from 'express';
import storeRoutes from './store/routes/store.routes';
import bookingRoutes from './booking/routes/booking.routes';
import forumRoutes from './forum/routes/forum.routes';
import todoRoutes from './todo/routes/todo.routes';

const app = express();

// Middleware
app.use(express.json());

// Routes
app.use('/v1/store', storeRoutes);
app.use('/v1/booking', bookingRoutes);
app.use('/v1/forum', forumRoutes);
app.use('/v1/todo', todoRoutes);

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
