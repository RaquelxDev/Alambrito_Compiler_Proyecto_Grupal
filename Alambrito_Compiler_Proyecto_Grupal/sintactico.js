const { Program, Sentence, Phrase } = require('./arbol');

function splitSentences(tokens) {
  const sentences = []; let current = [];
  tokens.forEach((t) => {
    current.push(t);
    if (['.', '?', '!'].includes(t.lexeme)) { sentences.push(current); current = []; }
  });
  if (current.length) sentences.push(current);
  return sentences;
}

function parseToAST(tokens, tablaError) {
  const root = Program([]);
  const sentences = splitSentences(tokens.filter((t) => t.token !== 'UNKNOWN'));
  if (!sentences.length) {
    tablaError.agregar('Sintáctico', 'Entrada general', 'No se encontró ninguna entrada válida para analizar.');
    return { ast: root, sentences };
  }

  sentences.forEach((sentence, idx) => {
    const words = sentence.filter((t) => t.token !== 'PUNCTUATION');
    const punctuation = sentence.filter((t) => t.token === 'PUNCTUATION');
    const verbIndex = words.findIndex((t) => t.token === 'VERB');

    if (verbIndex === -1) {
      const simple = Phrase('Término Simple / Frase Aislada', words, false);
      root.sentences.push(Sentence(simple, Phrase('VP', [], false), punctuation.at(-1)?.lexeme || '.'));
      return;
    }

    if (!punctuation.length) tablaError.agregar('Sintáctico', `Oración ${idx + 1}`, 'La oración debe finalizar con puntuación.');
    const subjectTokens = words.slice(0, verbIndex);
    const predicateTokens = words.slice(verbIndex);
    if (!subjectTokens.length) tablaError.agregar('Sintáctico', `Oración ${idx + 1}`, 'La oración inicia con verbo y carece de sujeto explícito.');

    const subject = Phrase('NP', subjectTokens, !subjectTokens.length);
    const predicate = Phrase('VP', predicateTokens, false);
    root.sentences.push(Sentence(subject, predicate, punctuation.at(-1)?.lexeme || '.'));
  });

  return { ast: root, sentences };
}

module.exports = { parseToAST };
