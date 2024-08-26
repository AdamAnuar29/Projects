const express = require("express")
const router = express.Router()
var db = require("../lib_database")

// ---  CRUD for account table
// get all account
// Routes
router.get('/', (req, res) => {
  res.send('Welcome to the login system!');
});

// Login route
router.post('/login', (req, res) => {
  const { email, password } = req.body;

  db.get('SELECT * FROM student WHERE email = ? AND password = ?', [email, password], (err, row) => {
    if (err) {
      return res.status(500).json({ error: err.message });
    }

    if (!row) {
      return res.status(401).json({ error: 'Invalid username or password' });
    }

    res.json({ message: 'Login successful', student: row });
  });
});

// Register route
router.post('/register', (req, res) => {
  const { email, password } = req.body;

  db.run('INSERT INTO student (email, password) VALUES (?, ?)', [email, password], function(err) {
    if (err) {
      return res.status(500).json({ error: err.message });
    }

    res.json({ message: 'User registered successfully', student: { id: this.lastID, email: email } });
  });
});


// ---  CRUD for account table

module.exports = router
