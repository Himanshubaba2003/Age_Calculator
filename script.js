function calculateAge() {
    let userInput = document.getElementById("date");
    let result = document.getElementById("result");

    if (userInput.value) {
        let birthDate = new Date(userInput.value);
        let today = new Date();

        let years = today.getFullYear() - birthDate.getFullYear();
        let months = today.getMonth() - birthDate.getMonth();
        let days = today.getDate() - birthDate.getDate();

        // Adjust years and months
        if (months < 0 || (months === 0 && today.getDate() < birthDate.getDate())) {
            years--;
            months += 12;
        }

        // Adjust days
        if (today.getDate() < birthDate.getDate()) {
            let prevMonthLastDay = new Date(today.getFullYear(), today.getMonth(), 0).getDate();
            days = prevMonthLastDay - birthDate.getDate() + today.getDate();
            months--;
        }

        result.innerHTML = `You are <span>${years}</span> years, <span>${months}</span> months, and <span>${days}</span> days old.`;
    } else {
        result.innerHTML = "Please enter your birthdate.";
    }
}
