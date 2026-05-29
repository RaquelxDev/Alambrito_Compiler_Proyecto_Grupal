const dictionary = {
  en: {
    the: { t: 'ARTICLE', cat: 'Artículo definido', es: 'el' },
    blue: { t: 'ADJECTIVE', cat: 'Adjetivo calificativo', es: 'azul' },
    sky: { t: 'NOUN', cat: 'Sustantivo común', es: 'cielo', gender: 'masculine', number: 'singular' },
    shines: { t: 'VERB', cat: 'Verbo conjugado', es: 'brilla', person: 3, number: 'singular' }
  },
  es: {
    el: { t: 'ARTICLE', cat: 'Artículo definido', en: 'the', gender: 'masculine', number: 'singular' },
    azul: { t: 'ADJECTIVE', cat: 'Adjetivo calificativo', en: 'blue', gender: 'any', number: 'any' },
    cielo: { t: 'NOUN', cat: 'Sustantivo común', en: 'sky', gender: 'masculine', number: 'singular' },
    brilla: { t: 'VERB', cat: 'Verbo conjugado', en: 'shines', person: 3, number: 'singular' }
  }
};

function lexer(sourceText, fromLanguage, tablaError) {
  const tokens = [];
  const tokenRegex = /[A-Za-zÁÉÍÓÚÜÑáéíóúüñ]+|[¿?¡!.;,]/gu;
  const allowedFullText = /^([A-Za-zÁÉÍÓÚÜÑáéíóúüñ]+|[¿?¡!.;,]|\s)+$/u;
  if (!sourceText.trim()) {
    tablaError.agregar('Léxico', 'Línea 1 / Palabra 0', 'El programa fuente está vacío.');
    return { tokens, dictionary };
  }
  if (!allowedFullText.test(sourceText)) {
    tablaError.agregar('Léxico', 'Entrada general', 'El texto contiene caracteres no permitidos.');
  }
  sourceText.split(/\n/).forEach((line, lineIndex) => {
    [...line.matchAll(tokenRegex)].forEach((match, wordIndex) => {
      const raw = match[0];
      const lexeme = raw.toLowerCase().trim();
      const position = `Línea ${lineIndex + 1} / Palabra ${wordIndex + 1}`;
      if (/^[¿?¡!.;,]$/u.test(lexeme)) {
        tokens.push({ lexeme: raw, token: 'PUNCTUATION', category: 'Signo de puntuación', translation: raw, line: lineIndex + 1, word: wordIndex + 1 });
        return;
      }
      const entry = dictionary[fromLanguage][lexeme];
      if (!entry) {
        tablaError.agregar('Léxico', position, `El lexema "${raw}" no existe en el diccionario bilingüe precargado.`);
        tokens.push({ lexeme: raw, token: 'UNKNOWN', category: 'No reconocido', translation: '—', line: lineIndex + 1, word: wordIndex + 1, failed: true });
        return;
      }
      tokens.push({ lexeme: raw, key: lexeme, token: entry.t, category: entry.cat, translation: entry[fromLanguage === 'en' ? 'es' : 'en'], meta: entry, line: lineIndex + 1, word: wordIndex + 1 });
    });
  });
  return { tokens, dictionary };
}

module.exports = { lexer, dictionary };
