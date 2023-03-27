/* 
  Importante: 
  No modificar ni el nombre ni los argumetos que reciben las funciones, sólo deben escribir
  código dentro de las funciones ya definidas. 
  No comentar la funcion 
*/
const menuDelDia = {
  raviolesConSalsa: ["Harina", "Sal", "Huevos", "Aceite", "Peceto", "Ricota"],
  bagnaCauda: ["Ajo", "Anchoas", "Aceite", "Crema", "Papas", "Zanahorias"],
  tallarines: ["Harina", "Pollo", "Aceite", "Huevos", "Tomates", "Cebolla"],
};

function ingredienteEnMalEstado(menu, comida, ingrediente) {
  //const { comida } = menu;
  //const Menu = menu.comida;
  /*
  comida.map(function (ravioles) {
    return console.log(ravioles[i]);
  });
  for (let x = 0; x < ingredientes.length; x++) {
        const pos = ingredientes[x];
        if (pos == ingrediente) {
          return "hola";
        } else {
          return "El menu esta perfecto";
        }
      }
**/

  // El ingrediente de cierta comida está en mal estado. Hay que sacar los ingredientes próximos a éste,
  // ya que deben estar contaminados también.
  // La funcion recibe un objeto "menu" que contiene las comidas del día. "comida" es un array de ingredientes.
  // Si "ingrediente" está en el array, devolver un array con el ingrediente y los elementos en un índice de
  // diferencia.
  // Ej:

  // ingredienteEnMalEstado(menuDelDia, "raviolesConSalsa", "Peceto") devuelve => ["Aceite", "Peceto", "Ricota"];
  // ingredienteEnMalEstado(menuDelDia, "tallarines", "Aceite") devuelve => ["Pollo", "Aceite", "Huevos"];
  // En caso de no encontrarse el ingrediente en la comida, devolver "El menú está perfecto".
  // NOTA: No utilizar el método "includes".
  //
  // Tu código:
  let platos = Object.keys(menu);
  let platos2 = Object.values(menu);

  for (let i = 0; i < platos.length; i++) {
    const element = platos[i];
    if (element == comida) {
      let ingredientes = platos2[i];
      let pos = ingredientes.indexOf(ingrediente);
      if (pos == -1) {
        return "El menu esta perfecto";
      } else {
        return ingredientes.slice(pos - 1, pos + 2);
      }
    }
  }
}
ingredienteEnMalEstado(menuDelDia, "raviolesConSalsa", "Peceto");

// No modifiques nada debajo de esta linea //

module.exports = ingredienteEnMalEstado;
