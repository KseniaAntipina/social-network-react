export const currentDate = () => {
    const newDate = new Date();
    return `${newDate.getDate()}.${newDate.getMonth()+1}.${newDate.getFullYear()}`;
}



