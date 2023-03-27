/* 
  Importante: 
  No modificar ni el nombre ni los argumetos que reciben las funciones, sólo deben escribir
  código dentro de las funciones ya definidas. 
  No comentar la funcion 
*/
function bienvenidoSr(persona) {
  // La funcion recibe un objeto "persona".
  // de la forma:
  // {
  //  nombre: 'Lionel
  //  apellido: 'Messi',
  //  invitado: true
  //  }
  // Si tiene la propiedad "invitado" y, además, tiene las propiedades "nombre" y "apellido", tomar esos valores y retorna:
  // "Lionel Messi, un gusto tenerlo nuevamente! Bienvenido".
  // Si tiene la propiedad "invitado" y solo tiene la propiedad "apellido", retornar:
  // "Bienvenido Sr. Messi".
  // Si tiene la propiedad "invitado" y solo tiene la propiedad "nombre", retornar:
  // "Hola Lionel, tu mesa está lista".
  // En caso de que no tenga la propiedad "invitado" retornar:
  // "Disculpe señor, no está invitado a la fiesta".
  //
  // Tu código:
  let propiedades = Object.keys(persona);
  //let valores = Object.values(persona);

  if (
    propiedades[0] == "nombre" &&
    propiedades[1] == "apellido" &&
    propiedades[2]
  ) {
    return `${persona.nombre} ${persona.apellido}, un gusto tenerlo nuevamente! Bienvenido`;
  } else if (
    propiedades.includes("apellido" && "invitado") == true &&
    propiedades.includes("nombre") == false
  ) {
    return `Bienvenido Sr. ${persona.apellido}`;
  } else if (
    propiedades.includes("nombre" && "invitado") == true &&
    propiedades.includes("apellido") == false
  ) {
    return `Hola ${persona.nombre}, tu mesa está lista`;
  } else {
    return "Disculpe señor, no está invitado a la fiesta";
  }
}

bienvenidoSr({ nombre: "Lionel", apellido: "Messi", invitado: true });

// No modifiques nada debajo de esta linea //

module.exports = bienvenidoSr;
