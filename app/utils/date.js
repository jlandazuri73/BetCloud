// Año actual
export function getYearCurrent() {
    const dateCurrent = new Date();
    const year = dateCurrent.getFullYear();
    return year;
}


// Diferencia en dias a partir de una fecha pasada
export function calculateDaysDifference(pastDate = "") {
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

// Fecha de los 7 dias anteriores al actual
export function getLast7DaysDates() {
    const resultados = [];
    const hoy = new Date();

    for (let i = 7; i >= 1; i--) {
        const fecha = new Date();
        fecha.setDate(hoy.getDate() - i);

        const dia = fecha.getDate().toString().padStart(2, '0');
        const mes = (fecha.getMonth() + 1).toString().padStart(2, '0'); // Se suma 1 porque enero es 0
        const anio = fecha.getFullYear().toString().slice(-4);

        const fechaFormateada = `${anio}-${mes}-${dia}`;
        resultados.unshift(fechaFormateada); // Agregar la fecha al principio del array
    }

    return resultados;
}


// Array de meses del año en letras
export function getMonthInLetters() {
    return ["ENERO", "FEBRERO", "MARZO", "ABRIL", "MAYO", "JUNIO", "JULIO", "AGOSTO", "SEPTIEMBRE", "OCTUBRE", "NOVIEMBRE", "DICIEMBRE"];
}