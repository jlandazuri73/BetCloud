export function getYearCurrent() {
    const dateCurrent = new Date();
    const year = dateCurrent.getFullYear();
    return year;
}