/* 
  Importante: 
  No modificar ni el nombre ni los argumetos que reciben las funciones, sólo deben escribir
  código dentro de las funciones ya definidas. 
  No comentar la funcion 
*/

function mayorMenosMenor(arr) {
  // Obtener del array "arr" el número mayor y el menor. Devuelve la resta entre los mismos
  // NOTA: No utilizar los métodos "min" y "max" de "Math".
  //
  // Tu código:
  let min = arr[0]
  let max = [0]

  for (let i = 0; i < arr.length; i++) {
    if (min > arr[i]) {
      min = arr[i]
    }
    if (max < arr[i]) {
      max = arr[i]
    }

  }
  return (max,min)
};
mayorMenosMenor([23, 56, 100, 5, 8, 7, 99]);

// No modifiques nada debajo de esta linea //

module.exports = mayorMenosMenor