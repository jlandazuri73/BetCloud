// Año actual
export function getYearCurrent() {
    const dateCurrent = new Date();
    const year = dateCurrent.getFullYear();
    return year;
}


// Diferencia en dias a partir de una fecha pasada
export function calculateDaysDifference(pastDate) {
    if (!pastDate || pastDate?.trim()?.length == 0) return null;
    // Convert the past date into a Date object
    const pastDateObject = new Date(pastDate);

    // Get the current date
    const currentDate = new Date();

    // Calculate the difference in milliseconds
    const differenceInMilliseconds = currentDate - pastDateObject;

    // Convert the difference from milliseconds to days
    const differenceInDays = Math.floor(differenceInMilliseconds / (1000 * 60 * 60 * 24));

    return parseInt(differenceInDays);
}