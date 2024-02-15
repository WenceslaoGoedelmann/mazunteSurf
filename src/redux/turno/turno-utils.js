export const newID = (e) => e+1

export const removeItemTurno = (turnos, id) => {
  console.log (turnos)
  const turnoToRemove = turnos.find(item => item.id === id); /* buscamos el producto pasado como parametro */

  return turnos.filter(item => item.id !== turnoToRemove?.id);/* si tiene una sola unidad lo eliminamos haciendo un filter que deje solo los items cuyo id no coincidan con el pasado */
};

