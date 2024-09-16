import express from 'express';
const router = express.Router();

// Posts
router.get('/posts', (req, res) => {
  res.json({ message: 'Get all forum posts' });
});

router.post('/posts', (req, res) => {
  res.json({ message: 'Create a new forum post' });
});

router.put('/posts/:id', (req, res) => {
  res.json({ message: `Update forum post with ID ${req.params.id}` });
});

router.delete('/posts/:id', (req, res) => {
  res.json({ message: `Delete forum post with ID ${req.params.id}` });
});

// Users
router.get('/users', (req, res) => {
  res.json({ message: 'Get all forum users' });
});

router.get('/users/:id', (req, res) => {
  res.json({ message: `Get user details for ID ${req.params.id}` });
});

router.post('/users', (req, res) => {
  res.json({ message: 'Add a new user to the forum' });
});

export default router;
