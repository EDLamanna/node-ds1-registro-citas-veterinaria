const { createRegistration, readRegistration } = require(`./operaciones`);

// Obtener los argumentos de la línea de comandos
const data = process.argv.slice(2);
const operacion = data[0];

// En caso de que el comando sea un registro de nueva cita
if (operacion === "registrar") {
    // Verificar que se proporcionaron exactamente 5 argumentos para registrar
    if (data.length !== 6) {
        console.error('Todos los campos (nombre, edad, tipo, color, enfermedad) son obligatorios.');
    } else {
        const [nombre, edad, tipo, color, enfermedad] = data.slice(1);
        createRegistration(nombre, edad, tipo, color, enfermedad);}

// En caso de que el comando sea leer el contenido de citas.json
} else if (operacion === "leer") {
  readRegistration();

} else {
  console.log('Operación no reconocida. Usa "registrar" o "leer".');
}
