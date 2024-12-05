document.getElementById('periodForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const startDate = new Date(document.getElementById('start').value);
    const cycleLength = parseInt(document.getElementById('cycleLength').value);

    if (isNaN(cycleLength) || cycleLength <= 0) {
        alert("Please enter a valid cycle length.");
        return;
    }

    const nextPeriodStart = new Date(startDate);
    nextPeriodStart.setDate(startDate.getDate() + cycleLength);

    const outputDiv = document.getElementById('output');
    outputDiv.innerHTML = `<p>Your next period is expected to start on: <strong>${nextPeriodStart.toDateString()}</strong></p>`;
});