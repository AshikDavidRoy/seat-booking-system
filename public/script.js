// script.js

const seatMap = document.getElementById('seat-map');
let selectedSeats = [];

// Fetch seat data from server
async function fetchSeats() {
    const response = await fetch('http://localhost:3000/api/seats');
    const seats = await response.json();
    createSeatMap(seats);
}

function createSeatMap(seats) {
    const rows = {};

    // Create rows and seats
    seats.forEach(seat => {
        // Create row if it doesn't exist
        if (!rows[seat.rownumber]) {
            const rowDiv = document.createElement('div');
            rowDiv.className = 'row';
            rowDiv.id = `row-${seat.rownumber}`;
            seatMap.appendChild(rowDiv);
            rows[seat.rownumber] = rowDiv;
        }

        // Create seat div
        const seatDiv = document.createElement('div');
        seatDiv.className = `seat ${seat.status}`;
        seatDiv.textContent = `${seat.seat_number}`;
        seatDiv.onclick = () => toggleSeatSelection(seatDiv, seat);

        rows[seat.rownumber].appendChild(seatDiv);
    });
}

function toggleSeatSelection(seatDiv, seat) {
    if (seat.status === "available") {
        seatDiv.classList.toggle('selected');
        if (seatDiv.classList.contains('selected')) {
            selectedSeats.push(seat);
            seat.status = 'selected'; // Update status to selected
        } else {
            selectedSeats = selectedSeats.filter(s => s.id !== seat.id);
            seat.status = 'available'; // Reset status back to available
        }
        document.getElementById('book-btn').disabled = selectedSeats.length === 0;
    }
}

function openBookingForm() {
    document.getElementById('overlay').style.display = 'flex';
    document.getElementById('booking-form').style.display = 'block';

    const studentContainer = document.getElementById('student-names-container');
    studentContainer.innerHTML = '';

    // Dynamically create fields for students based on selected seats count
    selectedSeats.slice(1).forEach((_, index) => {
        const label = document.createElement('label');
        label.textContent = `Student ${index + 1} Name:`;
        const input = document.createElement('input');
        input.type = 'text';
        input.placeholder = `Enter Student ${index + 1}'s Name`;
        studentContainer.appendChild(label);
        studentContainer.appendChild(input);
    });
}

function closeBookingForm() {
    document.getElementById('overlay').style.display = 'none';
    document.getElementById('booking-form').style.display = 'none';
}

function confirmBooking() {
    const teacherName = document.getElementById('teacher-name').value;
    const studentNames = Array.from(document.getElementById('student-names-container').querySelectorAll('input')).map(input => input.value);

    if (!teacherName || studentNames.includes('')) {
        alert('Please fill out all fields.');
        return;
    }

    // Simulate booking confirmation
    alert(`Booking Confirmed:\nTeacher: ${teacherName}\nStudents: ${studentNames.join(', ')}`);
    closeBookingForm();

    // Update selected seats to unavailable (for demonstration, not saving to database)
    selectedSeats.forEach(seat => {
        seat.status = 'unavailable';
        const seatDiv = document.querySelector(`#row-${seat.rownumber} .seat:nth-child(${seat.seat_number})`);
        seatDiv.classList.remove('available', 'selected');
        seatDiv.classList.add('unavailable');
        seatDiv.onclick = null; // Disable click for booked seats
    });

    // Clear selected seats after booking
    selectedSeats = [];
    document.getElementById('book-btn').disabled = true;
}

// Fetch seats on page load
window.onload = fetchSeats;
