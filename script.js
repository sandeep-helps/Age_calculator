function calculateAge() {
    const birthdate = document.getElementById('birthdate').value;
    if (!birthdate) {
        alert('Please enter your birthdate.');
        return;
    }

    const birthDate = new Date(birthdate);
    const today = new Date();

    let age = today.getFullYear() - birthDate.getFullYear();
    const monthDifference = today.getMonth() - birthDate.getMonth();
    const dayDifference = today.getDate() - birthDate.getDate();

    // Adjust age if birthdate hasn't occurred yet this year
    if (monthDifference < 0 || (monthDifference === 0 && dayDifference < 0)) {
        age--;
    }

    document.getElementById('ageDisplay1').innerText = `Total Years: \t ${age} `;
    document.getElementById('ageDisplay2').innerText = `Total Months: \t  ${age*12} `;
    document.getElementById('ageDisplay3').innerText = `Total Weeks:\t  ${age*12*52}`;
    document.getElementById('ageDisplay4').innerText = `Total Days:\t  ${age*365}`;
    document.getElementById('ageDisplay5').innerText = `Total Hours: \t ${age*365*24}`;
    document.getElementById('ageDisplay6').innerText = `Total MInitus:\t  ${age*365*24*60}`;
    document.getElementById('ageDisplay7').innerText = `Total Second:\t  ${age*365*24*60*60}`;
    
}