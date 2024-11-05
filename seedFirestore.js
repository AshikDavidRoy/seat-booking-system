// const admin = require('firebase-admin');
// const serviceAccount = require('./firebaseServiceAccount.json'); // Ensure the path is correct

// // Initialize Firebase Admin SDK
// admin.initializeApp({
//   credential: admin.credential.cert(serviceAccount)
// });

// const db = admin.firestore();

// // Define the function to seed the database
// async function seedSeats(rows, seatsPerRow) {
//   const seatsCollection = db.collection('seats');

//   for (let row = 1; row <= rows; row++) {
//     for (let seat = 1; seat <= seatsPerRow; seat++) {
//       const seatData = {
//         rownumber: row,
//         seat_number: seat,
//         status: 'available' // Set initial status
//       };
      
//       // Add each seat to Firestore
//       await seatsCollection.add(seatData);
//       console.log(`Added seat row ${row}, seat ${seat}`);
//     }
//   }
//   console.log('Seeding complete!');
// }

// // Call the function with the desired number of rows and seats per row
// seedSeats(10, 10) // Adjust the row and seat counts as needed
//   .then(() => process.exit())
//   .catch((error) => {
//     console.error('Error seeding data:', error);
//     process.exit(1);
//   });
