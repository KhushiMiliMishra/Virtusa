function calculateAge(dobString) {
    const [day, month, year] = dobString.split("-").map(Number);
    const today = new Date();
    let age = today.getFullYear() - year;
    const birthdayThisYear = new Date(
        today.getFullYear(),
        month - 1,
        day
    );
    if (today < birthdayThisYear) {
        age--;
    }
    return age;
}

console.log(calculateAge("15-08-2002"));