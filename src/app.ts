import express from 'express';
import { Pool } from 'pg';

import storeRoutes from '@store/routes/store.routes';
import bookingRoutes from '@booking/routes/booking.routes';
import forumRoutes from '@forum/routes/forum.routes';
import todoRoutes from '@todo/routes/todo.routes';

const app = express();

// Middleware
app.use(express.json());

// Routes
app.use('/v1/store', storeRoutes);
app.use('/v1/booking', bookingRoutes);
app.use('/v1/forum', forumRoutes);
app.use('/v1/todo', todoRoutes);

// Start the server
const port = process.env.PORT || 3000;

const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
