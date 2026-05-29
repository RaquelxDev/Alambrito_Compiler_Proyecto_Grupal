const TablaSimbolo = require('./tabla_simbolo');

function analizarSemantico(ast, tablaError) {
  const tabla = new TablaSimbolo();
  ast.sentences.forEach((sentence, i) => {
    if (sentence.subject?.kind === 'Término Simple / Frase Aislada') return;

    tabla.entrarAmbito();
    const np = sentence.subject.tokens || [];
    const noun = np.find((t) => t.token === 'NOUN');
    if (noun) {
      tabla.declarar(noun.key || noun.lexeme.toLowerCase(), { type: noun.token, meta: noun.meta });
      np.filter((t) => ['ARTICLE', 'DEMONSTRATIVE', 'POSSESSIVE', 'INDEFINITE', 'ADJECTIVE'].includes(t.token)).forEach((m) => {
        const compatibleGender = !m.meta?.gender || m.meta.gender === 'any' || m.meta.gender === noun.meta?.gender;
        const compatibleNumber = !m.meta?.number || m.meta.number === 'any' || m.meta.number === noun.meta?.number;
        if (!compatibleGender || !compatibleNumber) tablaError.agregar('Semántico', `Línea ${m.line} / Palabra ${m.word}`, `Falla de concordancia en oración ${i + 1}.`);
      });
    }
    sentence.predicate.tokens.forEach((t) => {
      if (t.token === 'PRONOUN' && !tabla.resolver(t.key || t.lexeme.toLowerCase())) {
        tablaError.agregar('Semántico', `Línea ${t.line} / Palabra ${t.word}`, `Identificador no declarado en ámbito: ${t.lexeme}`);
      }
    });
    tabla.salirAmbito();
  });
}

module.exports = { analizarSemantico };
