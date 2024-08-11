document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('submitButton').addEventListener('click', calculateBMI);

    function calculateBMI() {
        const name = document.getElementById('name').value;
        const age = document.getElementById('age').value;
        const height = document.getElementById('height').value;
        const weight = document.getElementById('weight').value;
        const gender = document.getElementById('gender').value;

        if (name === '' || age === '' || height === '' || weight === '' || gender === 'Select') {
            alert('Please fill in all fields');
            return;
        }

        const bmi = (weight / (height * height)*10000).toFixed(5);

        let category = '';

        if (bmi < 18.5) {
            category = 'Underweight';
        } else if (bmi >= 18.5 && bmi < 24.9) {
            category = 'Normal weight';
        } else if (bmi >= 25 && bmi < 29.9) {
            category = 'Overweight';
        } else {
            category = 'Obesity';
        }

        document.getElementById('result').innerHTML = `
            <h2>Result</h2>
            <p>Name: ${name}</p>
            <p>Age: ${age}</p>
            <p>Height: ${height} meters</p>
            <p>Weight: ${weight} kilograms</p>
            <p>Gender: ${gender}</p>
            <p>BMI: ${bmi}</p>
            <p>Category: ${category}</p>
        `;
    }
});
