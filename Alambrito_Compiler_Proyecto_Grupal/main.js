const TablaError = require('./tabla_error');
const { lexer } = require('./lexico');
const { parseToAST } = require('./sintactico');
const { analizarSemantico } = require('./semantico');

function compilar(sourceText, direction = 'en-es') {
  const from = direction === 'en-es' ? 'en' : 'es';
  const tablaError = new TablaError();
  const { tokens } = lexer(sourceText, from, tablaError);
  const { ast } = parseToAST(tokens, tablaError);
  if (!tablaError.hayErrores()) analizarSemantico(ast, tablaError);
  return { tokens, ast, errores: tablaError.obtener() };
}

module.exports = { compilar };
