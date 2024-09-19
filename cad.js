document.addEventListener('DOMContentLoaded', function() {
    // Initialize Google Maps autocomplete for accident location field
    var input = document.getElementById('accidentLocation');
    var autocomplete = new google.maps.places.Autocomplete(input);

    // Handle form submission
    document.getElementById('bookingForm').addEventListener('submit', function(event) {
        event.preventDefault();
        var accidentLocation = document.getElementById('accidentLocation').value;
        var ambulanceType = document.getElementById('ambulanceType').value;
        var hospital = document.getElementById('hospital').value;
        var name = document.getElementById('name').value;
        var age = document.getElementById('age').value;
        var bloodGroup = document.getElementById('bloodGroup').value;
        var phoneNumber = document.getElementById('phoneNumber').value;

        // Perform form validation (you can add more validation logic)
        if (!accidentLocation || !ambulanceType || !hospital || !name || !age || !bloodGroup || !phoneNumber) {
            alert('Please fill in all fields
