import express from 'express';
const router = express.Router();

// Tasks
router.get('/tasks', (req, res) => {
  res.json({ message: 'Get all tasks' });
});

router.post('/tasks', (req, res) => {
  res.json({ message: 'Create a new task' });
});

router.put('/tasks/:id', (req, res) => {
  res.json({ message: `Update task with ID ${req.params.id}` });
});

router.delete('/tasks/:id', (req, res) => {
  res.json({ message: `Delete task with ID ${req.params.id}` });
});

// Users
router.get('/users', (req, res) => {
  res.json({ message: 'Get all users' });
});

router.post('/users', (req, res) => {
  res.json({ message: 'Add a new user' });
});

export default router;
