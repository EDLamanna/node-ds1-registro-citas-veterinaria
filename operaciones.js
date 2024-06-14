const fs = require(`fs`)

//Función para registrar nueva cita
const createRegistration = (nombre, edad, animal, color, enfermedad) => {

    try{
        // Leer las citas ya registradas
        const dataAppointments = fs.readFileSync('citas.json', 'utf8');
        const registeredAppointments = JSON.parse(dataAppointments);

        // Crear una nuevo registro de cita
        const NewRegistration = {
            nombre,
            edad,
            animal,
            color,
            enfermedad
        };

        // Insertar nuevo registro al arreglo del archivo citas.json
        registeredAppointments.push(NewRegistration);
        fs.writeFileSync('citas.json', JSON.stringify(registeredAppointments, null, 2), 'utf8');

        //Mensaje de registro exitoso o de error al registrar
        console.log('Registro realizado');
} catch (error){
    console.error('Ocurrió un error al registrar la cita', error.message)
}
}

//Función para leer el contenido del archivo citas.json
const readRegistration = () => {
    try{
        const dataAppointments = fs.readFileSync('citas.json', 'utf8');
        const registeredAppointments = JSON.parse(dataAppointments);

        // Mostrar las citas en la consola o mostrar error al mostrar las citas
        console.log(registeredAppointments);
}catch (error){
    console.error('Ocurrió un error al leer las citas', error.message)
}
}

module.exports = {
    createRegistration,
    readRegistration
}
