// // // server.js
// // const express = require('express');
// // const mysql = require('mysql');
// // const cors = require('cors');
// // const app = express();
// // const PORT = 3000;

// // // Middleware
// // app.use(cors());
// // app.use(express.json());
// // app.use(express.static('public'));

// // // MySQL connection
// // const db = mysql.createConnection({
// //     host: 'localhost',
// //     user: 'root',
// //     password: 'root',
// //     database: 'seat_booking'
// // });

// // // Connect to database
// // db.connect((err) => {
// //     if (err) throw err;
// //     console.log('Connected to MySQL Database');
// // });

// // // Endpoint to get seats data
// // app.get('/api/seats', (req, res) => {
// //     const sql = 'SELECT * FROM seats';
// //     db.query(sql, (err, results) => {
// //         if (err) throw err;
// //         res.json(results);
// //     });
// // });

// // // Start server
// // app.listen(PORT, () => {
// //     console.log(`Server is running on http://localhost:${PORT}`);
// // });


// // server.js

// const express = require('express');
// // const mysql = require('mysql');
// const mysql = require('mysql2');

// const cors = require('cors');

// const app = express();
// const PORT = 3000;
// app.use(express.static('public'));
// app.use(cors());
// app.use(express.json());

// // MySQL database connection
// const db = mysql.createConnection({
//     host: 'localhost',
//     user: 'root', // replace with your MySQL username
//     password: 'root', // replace with your MySQL password
//     database: 'seat_booking' // replace with your database name
// });

// // Connect to the database
// db.connect((err) => {
//     if (err) throw err;
//     console.log('Connected to MySQL Database!');
// });

// // Get seat data
// app.get('/api/seats', (req, res) => {
//     const query = 'SELECT * FROM seats ORDER BY rownumber, seat_number';
//     db.query(query, (err, results) => {
//         if (err) throw err;
//         res.json(results);
//     });
// });

// // Start the server
// app.listen(PORT, () => {
//     console.log(`Server running on http://localhost:${PORT}`);
// });



// const express = require('express');
// const mysql = require('mysql');
// const cors = require('cors'); // Optional: for enabling CORS

// const app = express();
// const PORT = 3306;

// // Enable CORS if needed
// app.use(cors());

// // Create MySQL connection
// const db = mysql.createConnection({
//   host: '127.0.0.1',
//   user: 'root',  // Your MySQL username
//   password: 'root',  // Your MySQL password
//   database: 'seat_booking'  // Your database name
// });

// // Connect to the database
// db.connect((err) => {
//   if (err) {
//     console.error('Database connection failed: ' + err.stack);
//     return;
//   }
//   console.log('Connected to MySQL Database!');
// });

// // Middleware for JSON body parsing
// app.use(express.json());
// app.use(express.urlencoded({ extended: true }));

// // Log requests for debugging
// app.use((req, res, next) => {
//     console.log(`${req.method} request for '${req.url}'`);
//     next();
// });

// // Route to get all seats
// app.get('/api/seats', (req, res) => {
//     const query = 'SELECT * FROM seats ORDER BY rownumber, seat_number';
//     db.query(query, (err, results) => {
//         if (err) {
//             console.error('Error executing query: ', err); // Log the error
//             return res.status(500).json({ error: 'Database query error' });
//         }
//         res.json(results);
//     });
// });

// // Start the server
// app.listen(PORT, () => {
//     console.log(`Server running on http://localhost:${PORT}`);
// });



// server.js
const express = require('express');
const db = require('./firebaseConfig');
const path = require('path');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));

// Get all seats
app.get('/api/seats', async (req, res) => {
  try {
    const seatsSnapshot = await db.collection('seats').orderBy('rownumber').orderBy('seat_number').get();
    const seats = seatsSnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
    res.json(seats);
  } catch (error) {
    res.status(500).json({ error: 'Error fetching seats' });
  }
});

// Update seat status
app.post('/api/seats/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const { status } = req.body;
    await db.collection('seats').doc(id).update({ status });
    res.json({ success: true });
  } catch (error) {
    res.status(500).json({ error: 'Error updating seat' });
  }
});

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
