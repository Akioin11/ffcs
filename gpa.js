const points = {
    'S': 10,
    'A': 9,
    'B': 8,
    'C': 7,
    'D': 6,
    'E': 5,
    'F': 0,
    'x': 0 
};

document.getElementById('submitgpa').addEventListener('click', function() {
    let totalPoints = 0;
    let totalCredits = 0;

    for (let i = 1; i <= 6; i++) {
        let grade = document.getElementById('g' + i).value;
        let credit = parseInt(document.getElementById('c' + i).value);

        if (grade !== 'x' && credit !== 'x' && !isNaN(credit) && credit > 0) {
            if (grade in points) {
                totalPoints += points[grade] * credit;
                totalCredits += credit;
            }
        }
    }

    let gpa = 0;
    if (totalCredits > 0) {
        gpa = totalPoints / totalCredits;
    }

    let resultMessage = totalCredits > 0 ? 'GPA: ' + gpa.toFixed(2) : 'Please select valid grades and credits.';
    document.getElementById('resultsgpa').innerText = resultMessage;
});

document.getElementById('reload').addEventListener('click', function() {
    location.reload();
});
