class TablaError {
  constructor() { this.errores = []; }
  agregar(type, location, description) { this.errores.push({ type, location, description }); }
  extender(lista = []) { this.errores.push(...lista); }
  hayErrores() { return this.errores.length > 0; }
  limpiar() { this.errores = []; }
  obtener() { return [...this.errores]; }
}
module.exports = TablaError;
