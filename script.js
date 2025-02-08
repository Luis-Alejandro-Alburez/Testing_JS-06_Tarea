function lanzarDados() {
  // Obtener el nombre del usuario
  const userName = document.getElementById("userName").value;

  // Mensaje de bienvenida usando una expresión ternaria
  const bienvenida = userName ? `¡Bienvenido, ${userName}!` : "¡Bienvenido!";
  document.getElementById("bienvenida").textContent = bienvenida;

  // Generar dos números aleatorios entre 1 y 6 (simulando dos dados)
  const dice1 = Math.floor(Math.random() * 6) + 1;
  const dice2 = Math.floor(Math.random() * 6) + 1;

  // Sumar los valores de los dados
  const sum = dice1 + dice2;

  // Determinar el resultado del lanzamiento
  let resultado;
  if (sum === 2) {
    resultado = "¡Doble uno! Mala suerte.";
  } else if (sum === 7 || sum === 11) {
    resultado = "¡Suerte! Has ganado esta ronda.";
  } else if (dice1 === dice2) {
    resultado = "¡Doble! Tienes un turno extra.";
  } else {
    resultado = "Nada especial, ¡intenta de nuevo!";
  }

  // Mostrar los valores de los dados y el resultado del lanzamiento
  document.getElementById(
    "resultadoDados"
  ).textContent = `Dados: ${dice1} y ${dice2}`;
  document.getElementById(
    "resultadoLanzamiento"
  ).textContent = `Resultado: ${resultado}`;
}
