/*
  Alambrito Compiler - Proyecto de compiladores académicos
  Flujo permitido: Programa Fuente -> Lexer -> Parser -> Semántico -> Síntesis directa.
  Restricción: no existe generación de código intermedio ni optimización de código.
*/

const dictionary = {
  en: {
    "the": { t: "ARTICLE", cat: "Artículo definido", es: "el", gender: "any", number: "any" },
    "a": { t: "ARTICLE", cat: "Artículo indefinido", es: "un", gender: "any", number: "singular" },
    "an": { t: "ARTICLE", cat: "Artículo indefinido", es: "un", gender: "any", number: "singular" },
    "this": { t: "DEMONSTRATIVE", cat: "Demostrativo", es: "este", number: "singular" },
    "that": { t: "DEMONSTRATIVE", cat: "Demostrativo", es: "ese", number: "singular" },
    "these": { t: "DEMONSTRATIVE", cat: "Demostrativo", es: "estos", number: "plural" },
    "those": { t: "DEMONSTRATIVE", cat: "Demostrativo", es: "esos", number: "plural" },
    "my": { t: "POSSESSIVE", cat: "Posesivo", es: "mi" },
    "your": { t: "POSSESSIVE", cat: "Posesivo", es: "tu" },
    "his": { t: "POSSESSIVE", cat: "Posesivo", es: "su" },
    "her": { t: "POSSESSIVE", cat: "Posesivo", es: "su" },
    "our": { t: "POSSESSIVE", cat: "Posesivo", es: "nuestro" },
    "their": { t: "POSSESSIVE", cat: "Posesivo", es: "su" },
    "i": { t: "PRONOUN", cat: "Pronombre personal", es: "yo", person: 1, number: "singular" },
    "you": { t: "PRONOUN", cat: "Pronombre personal", es: "tú", person: 2, number: "singular" },
    "he": { t: "PRONOUN", cat: "Pronombre personal", es: "él", person: 3, number: "singular" },
    "she": { t: "PRONOUN", cat: "Pronombre personal", es: "ella", person: 3, number: "singular" },
    "we": { t: "PRONOUN", cat: "Pronombre personal", es: "nosotros", person: 1, number: "plural" },
    "they": { t: "PRONOUN", cat: "Pronombre personal", es: "ellos", person: 3, number: "plural" },
    "who": { t: "INTERROGATIVE", cat: "Pronombre interrogativo", es: "quién" },
    "what": { t: "INTERROGATIVE", cat: "Pronombre interrogativo", es: "qué" },
    "where": { t: "INTERROGATIVE", cat: "Pronombre interrogativo", es: "dónde" },
    "when": { t: "INTERROGATIVE", cat: "Pronombre interrogativo", es: "cuándo" },
    "why": { t: "INTERROGATIVE", cat: "Pronombre interrogativo", es: "por qué" },
    "and": { t: "CONJUNCTION", cat: "Conjunción coordinante", es: "y" },
    "or": { t: "CONJUNCTION", cat: "Conjunción coordinante", es: "o" },
    "but": { t: "CONJUNCTION", cat: "Conjunción coordinante", es: "pero" },
    "because": { t: "CONJUNCTION", cat: "Conjunción subordinante", es: "porque" },
    "if": { t: "CONJUNCTION", cat: "Conjunción subordinante", es: "si" },
    "although": { t: "CONJUNCTION", cat: "Conjunción subordinante", es: "aunque" },
    "in": { t: "PREPOSITION", cat: "Preposición", es: "en" },
    "on": { t: "PREPOSITION", cat: "Preposición", es: "sobre" },
    "under": { t: "PREPOSITION", cat: "Preposición", es: "debajo" },
    "with": { t: "PREPOSITION", cat: "Preposición", es: "con" },
    "without": { t: "PREPOSITION", cat: "Preposición", es: "sin" },
    "for": { t: "PREPOSITION", cat: "Preposición", es: "para" },
    "from": { t: "PREPOSITION", cat: "Preposición", es: "de" },
    "to": { t: "PREPOSITION", cat: "Preposición", es: "a" },
    "of": { t: "PREPOSITION", cat: "Preposición", es: "de" },
    "one": { t: "NUMERAL", cat: "Numeral cardinal", es: "uno", number: "singular" },
    "two": { t: "NUMERAL", cat: "Numeral cardinal", es: "dos", number: "plural" },
    "three": { t: "NUMERAL", cat: "Numeral cardinal", es: "tres", number: "plural" },
    "first": { t: "NUMERAL", cat: "Numeral ordinal", es: "primero" },
    "second": { t: "NUMERAL", cat: "Numeral ordinal", es: "segundo" },
    "third": { t: "NUMERAL", cat: "Numeral ordinal", es: "tercero" },
    "some": { t: "INDEFINITE", cat: "Indefinido", es: "algunos" },
    "many": { t: "INDEFINITE", cat: "Indefinido", es: "muchos" },
    "few": { t: "INDEFINITE", cat: "Indefinido", es: "pocos" },
    "all": { t: "INDEFINITE", cat: "Indefinido", es: "todos" },
    "no": { t: "ADVERB", cat: "Adverbio de negación", es: "no" },

    "cat": { t: "NOUN", cat: "Sustantivo común", es: "gato", gender: "masculine", number: "singular" },
    "cats": { t: "NOUN", cat: "Sustantivo común", es: "gatos", gender: "masculine", number: "plural" },
    "dog": { t: "NOUN", cat: "Sustantivo común", es: "perro", gender: "masculine", number: "singular" },
    "dogs": { t: "NOUN", cat: "Sustantivo común", es: "perros", gender: "masculine", number: "plural" },
    "house": { t: "NOUN", cat: "Sustantivo común", es: "casa", gender: "feminine", number: "singular" },
    "houses": { t: "NOUN", cat: "Sustantivo común", es: "casas", gender: "feminine", number: "plural" },
    "student": { t: "NOUN", cat: "Sustantivo común", es: "estudiante", gender: "any", number: "singular" },
    "students": { t: "NOUN", cat: "Sustantivo común", es: "estudiantes", gender: "any", number: "plural" },
    "teacher": { t: "NOUN", cat: "Sustantivo común", es: "maestro", gender: "masculine", number: "singular" },
    "school": { t: "NOUN", cat: "Sustantivo común", es: "escuela", gender: "feminine", number: "singular" },
    "book": { t: "NOUN", cat: "Sustantivo común", es: "libro", gender: "masculine", number: "singular" },
    "books": { t: "NOUN", cat: "Sustantivo común", es: "libros", gender: "masculine", number: "plural" },
    "city": { t: "NOUN", cat: "Sustantivo común", es: "ciudad", gender: "feminine", number: "singular" },
    "computer": { t: "NOUN", cat: "Sustantivo común", es: "computadora", gender: "feminine", number: "singular" },
    "program": { t: "NOUN", cat: "Sustantivo común", es: "programa", gender: "masculine", number: "singular" },
    "language": { t: "NOUN", cat: "Sustantivo común", es: "idioma", gender: "masculine", number: "singular" },
    "compiler": { t: "NOUN", cat: "Sustantivo común", es: "compilador", gender: "masculine", number: "singular" },
    "translation": { t: "NOUN", cat: "Sustantivo común", es: "traducción", gender: "feminine", number: "singular" },
    "sky": { t: "NOUN", cat: "Sustantivo común", es: "cielo", gender: "masculine", number: "singular" },
    "water": { t: "NOUN", cat: "Sustantivo común", es: "agua", gender: "feminine", number: "singular" },
    "food": { t: "NOUN", cat: "Sustantivo común", es: "comida", gender: "feminine", number: "singular" },
    "family": { t: "NOUN", cat: "Sustantivo común", es: "familia", gender: "feminine", number: "singular" },
    "friend": { t: "NOUN", cat: "Sustantivo común", es: "amigo", gender: "masculine", number: "singular" },
    "market": { t: "NOUN", cat: "Sustantivo común", es: "mercado", gender: "masculine", number: "singular" },
    "road": { t: "NOUN", cat: "Sustantivo común", es: "camino", gender: "masculine", number: "singular" },
    "garden": { t: "NOUN", cat: "Sustantivo común", es: "jardín", gender: "masculine", number: "singular" },
    "flower": { t: "NOUN", cat: "Sustantivo común", es: "flor", gender: "feminine", number: "singular" },
    "flowers": { t: "NOUN", cat: "Sustantivo común", es: "flores", gender: "feminine", number: "plural" },
    "car": { t: "NOUN", cat: "Sustantivo común", es: "carro", gender: "masculine", number: "singular" },
    "time": { t: "NOUN", cat: "Sustantivo común", es: "tiempo", gender: "masculine", number: "singular" },
    "day": { t: "NOUN", cat: "Sustantivo común", es: "día", gender: "masculine", number: "singular" },
    "night": { t: "NOUN", cat: "Sustantivo común", es: "noche", gender: "feminine", number: "singular" },
    "sun": { t: "NOUN", cat: "Sustantivo común", es: "sol", gender: "masculine", number: "singular" },
    "moon": { t: "NOUN", cat: "Sustantivo común", es: "luna", gender: "feminine", number: "singular" },
    "girl": { t: "NOUN", cat: "Sustantivo común", es: "niña", gender: "feminine", number: "singular" },
    "boy": { t: "NOUN", cat: "Sustantivo común", es: "niño", gender: "masculine", number: "singular" },
    "woman": { t: "NOUN", cat: "Sustantivo común", es: "mujer", gender: "feminine", number: "singular" },
    "man": { t: "NOUN", cat: "Sustantivo común", es: "hombre", gender: "masculine", number: "singular" },
    "idea": { t: "NOUN", cat: "Sustantivo común", es: "idea", gender: "feminine", number: "singular" },
    "project": { t: "NOUN", cat: "Sustantivo común", es: "proyecto", gender: "masculine", number: "singular" },

    "blue": { t: "ADJECTIVE", cat: "Adjetivo calificativo", es: "azul", gender: "any", number: "any" },
    "red": { t: "ADJECTIVE", cat: "Adjetivo calificativo", es: "rojo", gender: "masculine", number: "singular" },
    "green": { t: "ADJECTIVE", cat: "Adjetivo calificativo", es: "verde", gender: "any", number: "any" },
    "black": { t: "ADJECTIVE", cat: "Adjetivo calificativo", es: "negro", gender: "masculine", number: "singular" },
    "white": { t: "ADJECTIVE", cat: "Adjetivo calificativo", es: "blanco", gender: "masculine", number: "singular" },
    "big": { t: "ADJECTIVE", cat: "Adjetivo calificativo", es: "grande", gender: "any", number: "any" },
    "small": { t: "ADJECTIVE", cat: "Adjetivo calificativo", es: "pequeño", gender: "masculine", number: "singular" },
    "good": { t: "ADJECTIVE", cat: "Adjetivo calificativo", es: "bueno", gender: "masculine", number: "singular" },
    "bad": { t: "ADJECTIVE", cat: "Adjetivo calificativo", es: "malo", gender: "masculine", number: "singular" },
    "new": { t: "ADJECTIVE", cat: "Adjetivo calificativo", es: "nuevo", gender: "masculine", number: "singular" },
    "old": { t: "ADJECTIVE", cat: "Adjetivo calificativo", es: "viejo", gender: "masculine", number: "singular" },
    "fast": { t: "ADJECTIVE", cat: "Adjetivo calificativo", es: "rápido", gender: "masculine", number: "singular" },
    "slow": { t: "ADJECTIVE", cat: "Adjetivo calificativo", es: "lento", gender: "masculine", number: "singular" },
    "happy": { t: "ADJECTIVE", cat: "Adjetivo calificativo", es: "feliz", gender: "any", number: "any" },
    "sad": { t: "ADJECTIVE", cat: "Adjetivo calificativo", es: "triste", gender: "any", number: "any" },
    "beautiful": { t: "ADJECTIVE", cat: "Adjetivo calificativo", es: "hermoso", gender: "masculine", number: "singular" },
    "important": { t: "ADJECTIVE", cat: "Adjetivo calificativo", es: "importante", gender: "any", number: "any" },
    "strong": { t: "ADJECTIVE", cat: "Adjetivo calificativo", es: "fuerte", gender: "any", number: "any" },
    "clean": { t: "ADJECTIVE", cat: "Adjetivo calificativo", es: "limpio", gender: "masculine", number: "singular" },
    "modern": { t: "ADJECTIVE", cat: "Adjetivo calificativo", es: "moderno", gender: "masculine", number: "singular" },

    "is": { t: "VERB", cat: "Verbo conjugado", es: "es", person: 3, number: "singular" },
    "are": { t: "VERB", cat: "Verbo conjugado", es: "son", number: "plural" },
    "am": { t: "VERB", cat: "Verbo conjugado", es: "soy", person: 1, number: "singular" },
    "run": { t: "VERB", cat: "Verbo infinitivo/conjugado", es: "corre" },
    "runs": { t: "VERB", cat: "Verbo conjugado", es: "corre", person: 3, number: "singular" },
    "walk": { t: "VERB", cat: "Verbo conjugado", es: "camina" },
    "walks": { t: "VERB", cat: "Verbo conjugado", es: "camina", person: 3, number: "singular" },
    "eat": { t: "VERB", cat: "Verbo conjugado", es: "come" },
    "eats": { t: "VERB", cat: "Verbo conjugado", es: "come", person: 3, number: "singular" },
    "drink": { t: "VERB", cat: "Verbo conjugado", es: "bebe" },
    "drinks": { t: "VERB", cat: "Verbo conjugado", es: "bebe", person: 3, number: "singular" },
    "read": { t: "VERB", cat: "Verbo conjugado", es: "lee" },
    "reads": { t: "VERB", cat: "Verbo conjugado", es: "lee", person: 3, number: "singular" },
    "write": { t: "VERB", cat: "Verbo conjugado", es: "escribe" },
    "writes": { t: "VERB", cat: "Verbo conjugado", es: "escribe", person: 3, number: "singular" },
    "study": { t: "VERB", cat: "Verbo conjugado", es: "estudia" },
    "studies": { t: "VERB", cat: "Verbo conjugado", es: "estudia", person: 3, number: "singular" },
    "learn": { t: "VERB", cat: "Verbo conjugado", es: "aprende" },
    "teaches": { t: "VERB", cat: "Verbo conjugado", es: "enseña", person: 3, number: "singular" },
    "builds": { t: "VERB", cat: "Verbo conjugado", es: "construye", person: 3, number: "singular" },
    "creates": { t: "VERB", cat: "Verbo conjugado", es: "crea", person: 3, number: "singular" },
    "shines": { t: "VERB", cat: "Verbo conjugado", es: "brilla", person: 3, number: "singular" },
    "works": { t: "VERB", cat: "Verbo conjugado", es: "trabaja", person: 3, number: "singular" },
    "speaks": { t: "VERB", cat: "Verbo conjugado", es: "habla", person: 3, number: "singular" },
    "translates": { t: "VERB", cat: "Verbo conjugado", es: "traduce", person: 3, number: "singular" },

    "today": { t: "ADVERB", cat: "Adverbio de tiempo", es: "hoy" },
    "tomorrow": { t: "ADVERB", cat: "Adverbio de tiempo", es: "mañana" },
    "yesterday": { t: "ADVERB", cat: "Adverbio de tiempo", es: "ayer" },
    "here": { t: "ADVERB", cat: "Adverbio de lugar", es: "aquí" },
    "there": { t: "ADVERB", cat: "Adverbio de lugar", es: "allí" },
    "very": { t: "ADVERB", cat: "Adverbio de cantidad", es: "muy" },
    "much": { t: "ADVERB", cat: "Adverbio de cantidad", es: "mucho" },
    "quickly": { t: "ADVERB", cat: "Adverbio de modo", es: "rápidamente" },
    "slowly": { t: "ADVERB", cat: "Adverbio de modo", es: "lentamente" },
    "yes": { t: "ADVERB", cat: "Adverbio de afirmación", es: "sí" },
    "maybe": { t: "ADVERB", cat: "Adverbio de duda", es: "quizá" },
    "always": { t: "ADVERB", cat: "Adverbio de tiempo", es: "siempre" },
    "never": { t: "ADVERB", cat: "Adverbio de negación", es: "nunca" }
  },
  es: {}
};

const spanishEntries = {
  "el": { t: "ARTICLE", cat: "Artículo definido", en: "the", gender: "masculine", number: "singular" },
  "la": { t: "ARTICLE", cat: "Artículo definido", en: "the", gender: "feminine", number: "singular" },
  "los": { t: "ARTICLE", cat: "Artículo definido", en: "the", gender: "masculine", number: "plural" },
  "las": { t: "ARTICLE", cat: "Artículo definido", en: "the", gender: "feminine", number: "plural" },
  "un": { t: "ARTICLE", cat: "Artículo indefinido", en: "a", gender: "masculine", number: "singular" },
  "una": { t: "ARTICLE", cat: "Artículo indefinido", en: "a", gender: "feminine", number: "singular" },
  "unos": { t: "ARTICLE", cat: "Artículo indefinido", en: "some", gender: "masculine", number: "plural" },
  "unas": { t: "ARTICLE", cat: "Artículo indefinido", en: "some", gender: "feminine", number: "plural" },
  "al": { t: "CONTRACTION", cat: "Contracción", en: "to the", gender: "masculine", number: "singular" },
  "del": { t: "CONTRACTION", cat: "Contracción", en: "of the", gender: "masculine", number: "singular" },
  "este": { t: "DEMONSTRATIVE", cat: "Demostrativo", en: "this", gender: "masculine", number: "singular" },
  "esta": { t: "DEMONSTRATIVE", cat: "Demostrativo", en: "this", gender: "feminine", number: "singular" },
  "estos": { t: "DEMONSTRATIVE", cat: "Demostrativo", en: "these", gender: "masculine", number: "plural" },
  "estas": { t: "DEMONSTRATIVE", cat: "Demostrativo", en: "these", gender: "feminine", number: "plural" },
  "mi": { t: "POSSESSIVE", cat: "Posesivo", en: "my" }, "tu": { t: "POSSESSIVE", cat: "Posesivo", en: "your" },
  "su": { t: "POSSESSIVE", cat: "Posesivo", en: "his/her/their" }, "nuestro": { t: "POSSESSIVE", cat: "Posesivo", en: "our", gender: "masculine", number: "singular" },
  "nuestra": { t: "POSSESSIVE", cat: "Posesivo", en: "our", gender: "feminine", number: "singular" },
  "yo": { t: "PRONOUN", cat: "Pronombre personal", en: "I", person: 1, number: "singular" }, "tú": { t: "PRONOUN", cat: "Pronombre personal", en: "you", person: 2, number: "singular" },
  "él": { t: "PRONOUN", cat: "Pronombre personal", en: "he", person: 3, number: "singular" }, "ella": { t: "PRONOUN", cat: "Pronombre personal", en: "she", person: 3, number: "singular" },
  "nosotros": { t: "PRONOUN", cat: "Pronombre personal", en: "we", person: 1, number: "plural" }, "ellos": { t: "PRONOUN", cat: "Pronombre personal", en: "they", person: 3, number: "plural" },
  "quién": { t: "INTERROGATIVE", cat: "Pronombre interrogativo", en: "who" }, "qué": { t: "INTERROGATIVE", cat: "Pronombre interrogativo", en: "what" },
  "dónde": { t: "INTERROGATIVE", cat: "Pronombre interrogativo", en: "where" }, "cuándo": { t: "INTERROGATIVE", cat: "Pronombre interrogativo", en: "when" },
  "y": { t: "CONJUNCTION", cat: "Conjunción coordinante", en: "and" }, "o": { t: "CONJUNCTION", cat: "Conjunción coordinante", en: "or" },
  "pero": { t: "CONJUNCTION", cat: "Conjunción coordinante", en: "but" }, "porque": { t: "CONJUNCTION", cat: "Conjunción subordinante", en: "because" },
  "aunque": { t: "CONJUNCTION", cat: "Conjunción subordinante", en: "although" }, "si": { t: "CONJUNCTION", cat: "Conjunción subordinante", en: "if" },
  "en": { t: "PREPOSITION", cat: "Preposición", en: "in" }, "sobre": { t: "PREPOSITION", cat: "Preposición", en: "on" }, "debajo": { t: "PREPOSITION", cat: "Preposición", en: "under" },
  "con": { t: "PREPOSITION", cat: "Preposición", en: "with" }, "sin": { t: "PREPOSITION", cat: "Preposición", en: "without" }, "para": { t: "PREPOSITION", cat: "Preposición", en: "for" },
  "de": { t: "PREPOSITION", cat: "Preposición", en: "of" }, "a": { t: "PREPOSITION", cat: "Preposición", en: "to" },
  "uno": { t: "NUMERAL", cat: "Numeral cardinal", en: "one", number: "singular" }, "dos": { t: "NUMERAL", cat: "Numeral cardinal", en: "two", number: "plural" },
  "tres": { t: "NUMERAL", cat: "Numeral cardinal", en: "three", number: "plural" }, "primero": { t: "NUMERAL", cat: "Numeral ordinal", en: "first" },
  "segundo": { t: "NUMERAL", cat: "Numeral ordinal", en: "second" }, "tercero": { t: "NUMERAL", cat: "Numeral ordinal", en: "third" },
  "algunos": { t: "INDEFINITE", cat: "Indefinido", en: "some", gender: "masculine", number: "plural" }, "muchos": { t: "INDEFINITE", cat: "Indefinido", en: "many", gender: "masculine", number: "plural" },
  "pocos": { t: "INDEFINITE", cat: "Indefinido", en: "few", gender: "masculine", number: "plural" }, "todos": { t: "INDEFINITE", cat: "Indefinido", en: "all", gender: "masculine", number: "plural" },

  "gato": { t: "NOUN", cat: "Sustantivo común", en: "cat", gender: "masculine", number: "singular" }, "gatos": { t: "NOUN", cat: "Sustantivo común", en: "cats", gender: "masculine", number: "plural" },
  "perro": { t: "NOUN", cat: "Sustantivo común", en: "dog", gender: "masculine", number: "singular" }, "perros": { t: "NOUN", cat: "Sustantivo común", en: "dogs", gender: "masculine", number: "plural" },
  "casa": { t: "NOUN", cat: "Sustantivo común", en: "house", gender: "feminine", number: "singular" }, "casas": { t: "NOUN", cat: "Sustantivo común", en: "houses", gender: "feminine", number: "plural" },
  "estudiante": { t: "NOUN", cat: "Sustantivo común", en: "student", gender: "any", number: "singular" }, "estudiantes": { t: "NOUN", cat: "Sustantivo común", en: "students", gender: "any", number: "plural" },
  "maestro": { t: "NOUN", cat: "Sustantivo común", en: "teacher", gender: "masculine", number: "singular" }, "escuela": { t: "NOUN", cat: "Sustantivo común", en: "school", gender: "feminine", number: "singular" },
  "libro": { t: "NOUN", cat: "Sustantivo común", en: "book", gender: "masculine", number: "singular" }, "libros": { t: "NOUN", cat: "Sustantivo común", en: "books", gender: "masculine", number: "plural" },
  "ciudad": { t: "NOUN", cat: "Sustantivo común", en: "city", gender: "feminine", number: "singular" }, "computadora": { t: "NOUN", cat: "Sustantivo común", en: "computer", gender: "feminine", number: "singular" },
  "programa": { t: "NOUN", cat: "Sustantivo común", en: "program", gender: "masculine", number: "singular" }, "idioma": { t: "NOUN", cat: "Sustantivo común", en: "language", gender: "masculine", number: "singular" },
  "compilador": { t: "NOUN", cat: "Sustantivo común", en: "compiler", gender: "masculine", number: "singular" }, "traducción": { t: "NOUN", cat: "Sustantivo común", en: "translation", gender: "feminine", number: "singular" },
  "cielo": { t: "NOUN", cat: "Sustantivo común", en: "sky", gender: "masculine", number: "singular" }, "agua": { t: "NOUN", cat: "Sustantivo común", en: "water", gender: "feminine", number: "singular" },
  "comida": { t: "NOUN", cat: "Sustantivo común", en: "food", gender: "feminine", number: "singular" }, "familia": { t: "NOUN", cat: "Sustantivo común", en: "family", gender: "feminine", number: "singular" },
  "amigo": { t: "NOUN", cat: "Sustantivo común", en: "friend", gender: "masculine", number: "singular" }, "mercado": { t: "NOUN", cat: "Sustantivo común", en: "market", gender: "masculine", number: "singular" },
  "camino": { t: "NOUN", cat: "Sustantivo común", en: "road", gender: "masculine", number: "singular" }, "jardín": { t: "NOUN", cat: "Sustantivo común", en: "garden", gender: "masculine", number: "singular" },
  "flor": { t: "NOUN", cat: "Sustantivo común", en: "flower", gender: "feminine", number: "singular" }, "flores": { t: "NOUN", cat: "Sustantivo común", en: "flowers", gender: "feminine", number: "plural" },
  "carro": { t: "NOUN", cat: "Sustantivo común", en: "car", gender: "masculine", number: "singular" }, "tiempo": { t: "NOUN", cat: "Sustantivo común", en: "time", gender: "masculine", number: "singular" },
  "día": { t: "NOUN", cat: "Sustantivo común", en: "day", gender: "masculine", number: "singular" }, "noche": { t: "NOUN", cat: "Sustantivo común", en: "night", gender: "feminine", number: "singular" },
  "sol": { t: "NOUN", cat: "Sustantivo común", en: "sun", gender: "masculine", number: "singular" }, "luna": { t: "NOUN", cat: "Sustantivo común", en: "moon", gender: "feminine", number: "singular" },
  "niña": { t: "NOUN", cat: "Sustantivo común", en: "girl", gender: "feminine", number: "singular" }, "niño": { t: "NOUN", cat: "Sustantivo común", en: "boy", gender: "masculine", number: "singular" },
  "mujer": { t: "NOUN", cat: "Sustantivo común", en: "woman", gender: "feminine", number: "singular" }, "hombre": { t: "NOUN", cat: "Sustantivo común", en: "man", gender: "masculine", number: "singular" },
  "idea": { t: "NOUN", cat: "Sustantivo común", en: "idea", gender: "feminine", number: "singular" }, "proyecto": { t: "NOUN", cat: "Sustantivo común", en: "project", gender: "masculine", number: "singular" },

  "azul": { t: "ADJECTIVE", cat: "Adjetivo calificativo", en: "blue", gender: "any", number: "any" }, "rojo": { t: "ADJECTIVE", cat: "Adjetivo calificativo", en: "red", gender: "masculine", number: "singular" },
  "roja": { t: "ADJECTIVE", cat: "Adjetivo calificativo", en: "red", gender: "feminine", number: "singular" }, "rojos": { t: "ADJECTIVE", cat: "Adjetivo calificativo", en: "red", gender: "masculine", number: "plural" },
  "rojas": { t: "ADJECTIVE", cat: "Adjetivo calificativo", en: "red", gender: "feminine", number: "plural" }, "verde": { t: "ADJECTIVE", cat: "Adjetivo calificativo", en: "green", gender: "any", number: "any" },
  "negro": { t: "ADJECTIVE", cat: "Adjetivo calificativo", en: "black", gender: "masculine", number: "singular" }, "negra": { t: "ADJECTIVE", cat: "Adjetivo calificativo", en: "black", gender: "feminine", number: "singular" },
  "negros": { t: "ADJECTIVE", cat: "Adjetivo calificativo", en: "black", gender: "masculine", number: "plural" }, "negras": { t: "ADJECTIVE", cat: "Adjetivo calificativo", en: "black", gender: "feminine", number: "plural" },
  "blanco": { t: "ADJECTIVE", cat: "Adjetivo calificativo", en: "white", gender: "masculine", number: "singular" }, "blanca": { t: "ADJECTIVE", cat: "Adjetivo calificativo", en: "white", gender: "feminine", number: "singular" },
  "grande": { t: "ADJECTIVE", cat: "Adjetivo calificativo", en: "big", gender: "any", number: "any" }, "pequeño": { t: "ADJECTIVE", cat: "Adjetivo calificativo", en: "small", gender: "masculine", number: "singular" },
  "pequeña": { t: "ADJECTIVE", cat: "Adjetivo calificativo", en: "small", gender: "feminine", number: "singular" }, "bueno": { t: "ADJECTIVE", cat: "Adjetivo calificativo", en: "good", gender: "masculine", number: "singular" },
  "buena": { t: "ADJECTIVE", cat: "Adjetivo calificativo", en: "good", gender: "feminine", number: "singular" }, "malo": { t: "ADJECTIVE", cat: "Adjetivo calificativo", en: "bad", gender: "masculine", number: "singular" },
  "nuevo": { t: "ADJECTIVE", cat: "Adjetivo calificativo", en: "new", gender: "masculine", number: "singular" }, "nueva": { t: "ADJECTIVE", cat: "Adjetivo calificativo", en: "new", gender: "feminine", number: "singular" },
  "viejo": { t: "ADJECTIVE", cat: "Adjetivo calificativo", en: "old", gender: "masculine", number: "singular" }, "rápido": { t: "ADJECTIVE", cat: "Adjetivo calificativo", en: "fast", gender: "masculine", number: "singular" },
  "lento": { t: "ADJECTIVE", cat: "Adjetivo calificativo", en: "slow", gender: "masculine", number: "singular" }, "feliz": { t: "ADJECTIVE", cat: "Adjetivo calificativo", en: "happy", gender: "any", number: "any" },
  "triste": { t: "ADJECTIVE", cat: "Adjetivo calificativo", en: "sad", gender: "any", number: "any" }, "hermoso": { t: "ADJECTIVE", cat: "Adjetivo calificativo", en: "beautiful", gender: "masculine", number: "singular" },
  "importante": { t: "ADJECTIVE", cat: "Adjetivo calificativo", en: "important", gender: "any", number: "any" }, "fuerte": { t: "ADJECTIVE", cat: "Adjetivo calificativo", en: "strong", gender: "any", number: "any" },
  "limpio": { t: "ADJECTIVE", cat: "Adjetivo calificativo", en: "clean", gender: "masculine", number: "singular" }, "moderno": { t: "ADJECTIVE", cat: "Adjetivo calificativo", en: "modern", gender: "masculine", number: "singular" },

  "es": { t: "VERB", cat: "Verbo conjugado", en: "is", person: 3, number: "singular" }, "son": { t: "VERB", cat: "Verbo conjugado", en: "are", person: 3, number: "plural" },
  "soy": { t: "VERB", cat: "Verbo conjugado", en: "am", person: 1, number: "singular" }, "corre": { t: "VERB", cat: "Verbo conjugado", en: "runs", person: 3, number: "singular" },
  "camina": { t: "VERB", cat: "Verbo conjugado", en: "walks", person: 3, number: "singular" }, "come": { t: "VERB", cat: "Verbo conjugado", en: "eats", person: 3, number: "singular" },
  "bebe": { t: "VERB", cat: "Verbo conjugado", en: "drinks", person: 3, number: "singular" }, "lee": { t: "VERB", cat: "Verbo conjugado", en: "reads", person: 3, number: "singular" },
  "escribe": { t: "VERB", cat: "Verbo conjugado", en: "writes", person: 3, number: "singular" }, "estudia": { t: "VERB", cat: "Verbo conjugado", en: "studies", person: 3, number: "singular" },
  "aprende": { t: "VERB", cat: "Verbo conjugado", en: "learns", person: 3, number: "singular" }, "enseña": { t: "VERB", cat: "Verbo conjugado", en: "teaches", person: 3, number: "singular" },
  "construye": { t: "VERB", cat: "Verbo conjugado", en: "builds", person: 3, number: "singular" }, "crea": { t: "VERB", cat: "Verbo conjugado", en: "creates", person: 3, number: "singular" },
  "brilla": { t: "VERB", cat: "Verbo conjugado", en: "shines", person: 3, number: "singular" }, "trabaja": { t: "VERB", cat: "Verbo conjugado", en: "works", person: 3, number: "singular" },
  "habla": { t: "VERB", cat: "Verbo conjugado", en: "speaks", person: 3, number: "singular" }, "traduce": { t: "VERB", cat: "Verbo conjugado", en: "translates", person: 3, number: "singular" },

  "hoy": { t: "ADVERB", cat: "Adverbio de tiempo", en: "today" }, "mañana": { t: "ADVERB", cat: "Adverbio de tiempo", en: "tomorrow" }, "ayer": { t: "ADVERB", cat: "Adverbio de tiempo", en: "yesterday" },
  "aquí": { t: "ADVERB", cat: "Adverbio de lugar", en: "here" }, "allí": { t: "ADVERB", cat: "Adverbio de lugar", en: "there" }, "muy": { t: "ADVERB", cat: "Adverbio de cantidad", en: "very" },
  "mucho": { t: "ADVERB", cat: "Adverbio de cantidad", en: "much" }, "rápidamente": { t: "ADVERB", cat: "Adverbio de modo", en: "quickly" }, "lentamente": { t: "ADVERB", cat: "Adverbio de modo", en: "slowly" },
  "sí": { t: "ADVERB", cat: "Adverbio de afirmación", en: "yes" }, "no": { t: "ADVERB", cat: "Adverbio de negación", en: "no" }, "quizá": { t: "ADVERB", cat: "Adverbio de duda", en: "maybe" },
  "siempre": { t: "ADVERB", cat: "Adverbio de tiempo", en: "always" }, "nunca": { t: "ADVERB", cat: "Adverbio de negación", en: "never" }
};



Object.assign(dictionary.en, {
  "projects": { t: "NOUN", cat: "Sustantivo común", es: "proyectos", gender: "masculine", number: "plural" },
  "teachers": { t: "NOUN", cat: "Sustantivo común", es: "maestros", gender: "masculine", number: "plural" },
  "class": { t: "NOUN", cat: "Sustantivo común", es: "clase", gender: "feminine", number: "singular" },
  "classes": { t: "NOUN", cat: "Sustantivo común", es: "clases", gender: "feminine", number: "plural" },
  "university": { t: "NOUN", cat: "Sustantivo común", es: "universidad", gender: "feminine", number: "singular" },
  "universities": { t: "NOUN", cat: "Sustantivo común", es: "universidades", gender: "feminine", number: "plural" },
  "notebook": { t: "NOUN", cat: "Sustantivo común", es: "cuaderno", gender: "masculine", number: "singular" },
  "notebooks": { t: "NOUN", cat: "Sustantivo común", es: "cuadernos", gender: "masculine", number: "plural" },
  "pencil": { t: "NOUN", cat: "Sustantivo común", es: "lápiz", gender: "masculine", number: "singular" },
  "pencils": { t: "NOUN", cat: "Sustantivo común", es: "lápices", gender: "masculine", number: "plural" },
  "table": { t: "NOUN", cat: "Sustantivo común", es: "mesa", gender: "feminine", number: "singular" },
  "tables": { t: "NOUN", cat: "Sustantivo común", es: "mesas", gender: "feminine", number: "plural" },
  "chair": { t: "NOUN", cat: "Sustantivo común", es: "silla", gender: "feminine", number: "singular" },
  "chairs": { t: "NOUN", cat: "Sustantivo común", es: "sillas", gender: "feminine", number: "plural" },
  "door": { t: "NOUN", cat: "Sustantivo común", es: "puerta", gender: "feminine", number: "singular" },
  "doors": { t: "NOUN", cat: "Sustantivo común", es: "puertas", gender: "feminine", number: "plural" },
  "window": { t: "NOUN", cat: "Sustantivo común", es: "ventana", gender: "feminine", number: "singular" },
  "windows": { t: "NOUN", cat: "Sustantivo común", es: "ventanas", gender: "feminine", number: "plural" },
  "mother": { t: "NOUN", cat: "Sustantivo común", es: "madre", gender: "feminine", number: "singular" },
  "mothers": { t: "NOUN", cat: "Sustantivo común", es: "madres", gender: "feminine", number: "plural" },
  "father": { t: "NOUN", cat: "Sustantivo común", es: "padre", gender: "masculine", number: "singular" },
  "fathers": { t: "NOUN", cat: "Sustantivo común", es: "padres", gender: "masculine", number: "plural" },
  "brother": { t: "NOUN", cat: "Sustantivo común", es: "hermano", gender: "masculine", number: "singular" },
  "brothers": { t: "NOUN", cat: "Sustantivo común", es: "hermanos", gender: "masculine", number: "plural" },
  "sister": { t: "NOUN", cat: "Sustantivo común", es: "hermana", gender: "feminine", number: "singular" },
  "sisters": { t: "NOUN", cat: "Sustantivo común", es: "hermanas", gender: "feminine", number: "plural" },
  "jobs": { t: "NOUN", cat: "Sustantivo común", es: "trabajos", gender: "masculine", number: "plural" },
  "office": { t: "NOUN", cat: "Sustantivo común", es: "oficina", gender: "feminine", number: "singular" },
  "offices": { t: "NOUN", cat: "Sustantivo común", es: "oficinas", gender: "feminine", number: "plural" },
  "company": { t: "NOUN", cat: "Sustantivo común", es: "empresa", gender: "feminine", number: "singular" },
  "companies": { t: "NOUN", cat: "Sustantivo común", es: "empresas", gender: "feminine", number: "plural" },
  "phone": { t: "NOUN", cat: "Sustantivo común", es: "teléfono", gender: "masculine", number: "singular" },
  "phones": { t: "NOUN", cat: "Sustantivo común", es: "teléfonos", gender: "masculine", number: "plural" },
  "system": { t: "NOUN", cat: "Sustantivo común", es: "sistema", gender: "masculine", number: "singular" },
  "systems": { t: "NOUN", cat: "Sustantivo común", es: "sistemas", gender: "masculine", number: "plural" },
  "database": { t: "NOUN", cat: "Sustantivo común", es: "base", gender: "feminine", number: "singular" },
  "databases": { t: "NOUN", cat: "Sustantivo común", es: "bases", gender: "feminine", number: "plural" },
  "server": { t: "NOUN", cat: "Sustantivo común", es: "servidor", gender: "masculine", number: "singular" },
  "servers": { t: "NOUN", cat: "Sustantivo común", es: "servidores", gender: "masculine", number: "plural" },
  "network": { t: "NOUN", cat: "Sustantivo común", es: "red", gender: "feminine", number: "singular" },
  "networks": { t: "NOUN", cat: "Sustantivo común", es: "redes", gender: "feminine", number: "plural" },
  "file": { t: "NOUN", cat: "Sustantivo común", es: "archivo", gender: "masculine", number: "singular" },
  "files": { t: "NOUN", cat: "Sustantivo común", es: "archivos", gender: "masculine", number: "plural" },
  "folder": { t: "NOUN", cat: "Sustantivo común", es: "carpeta", gender: "feminine", number: "singular" },
  "folders": { t: "NOUN", cat: "Sustantivo común", es: "carpetas", gender: "feminine", number: "plural" },
  "user": { t: "NOUN", cat: "Sustantivo común", es: "usuario", gender: "masculine", number: "singular" },
  "users": { t: "NOUN", cat: "Sustantivo común", es: "usuarios", gender: "masculine", number: "plural" },
  "client": { t: "NOUN", cat: "Sustantivo común", es: "cliente", gender: "masculine", number: "singular" },
  "clients": { t: "NOUN", cat: "Sustantivo común", es: "clientes", gender: "masculine", number: "plural" },
  "product": { t: "NOUN", cat: "Sustantivo común", es: "producto", gender: "masculine", number: "singular" },
  "products": { t: "NOUN", cat: "Sustantivo común", es: "productos", gender: "masculine", number: "plural" },
  "inventory": { t: "NOUN", cat: "Sustantivo común", es: "inventario", gender: "masculine", number: "singular" },
  "inventories": { t: "NOUN", cat: "Sustantivo común", es: "inventarios", gender: "masculine", number: "plural" },
  "sale": { t: "NOUN", cat: "Sustantivo común", es: "venta", gender: "feminine", number: "singular" },
  "sales": { t: "NOUN", cat: "Sustantivo común", es: "ventas", gender: "feminine", number: "plural" },
  "report": { t: "NOUN", cat: "Sustantivo común", es: "reporte", gender: "masculine", number: "singular" },
  "reports": { t: "NOUN", cat: "Sustantivo común", es: "reportes", gender: "masculine", number: "plural" },
  "teach": { t: "VERB", cat: "Verbo conjugado", es: "enseña" }, "build": { t: "VERB", cat: "Verbo conjugado", es: "construye" }, "create": { t: "VERB", cat: "Verbo conjugado", es: "crea" },
  "work": { t: "VERB", cat: "Verbo conjugado", es: "trabaja" }, "speak": { t: "VERB", cat: "Verbo conjugado", es: "habla" }, "translate": { t: "VERB", cat: "Verbo conjugado", es: "traduce" },
  "open": { t: "VERB", cat: "Verbo conjugado", es: "abre" }, "opens": { t: "VERB", cat: "Verbo conjugado", es: "abre", person: 3, number: "singular" },
  "close": { t: "VERB", cat: "Verbo conjugado", es: "cierra" }, "closes": { t: "VERB", cat: "Verbo conjugado", es: "cierra", person: 3, number: "singular" },
  "use": { t: "VERB", cat: "Verbo conjugado", es: "usa" }, "uses": { t: "VERB", cat: "Verbo conjugado", es: "usa", person: 3, number: "singular" },
  "need": { t: "VERB", cat: "Verbo conjugado", es: "necesita" }, "needs": { t: "VERB", cat: "Verbo conjugado", es: "necesita", person: 3, number: "singular" },
  "want": { t: "VERB", cat: "Verbo conjugado", es: "quiere" }, "wants": { t: "VERB", cat: "Verbo conjugado", es: "quiere", person: 3, number: "singular" },
  "have": { t: "VERB", cat: "Verbo conjugado", es: "tiene" }, "has": { t: "VERB", cat: "Verbo conjugado", es: "tiene", person: 3, number: "singular" },
  "make": { t: "VERB", cat: "Verbo conjugado", es: "hace" }, "makes": { t: "VERB", cat: "Verbo conjugado", es: "hace", person: 3, number: "singular" },
  "save": { t: "VERB", cat: "Verbo conjugado", es: "guarda" }, "saves": { t: "VERB", cat: "Verbo conjugado", es: "guarda", person: 3, number: "singular" },
  "send": { t: "VERB", cat: "Verbo conjugado", es: "envía" }, "sends": { t: "VERB", cat: "Verbo conjugado", es: "envía", person: 3, number: "singular" },
  "buy": { t: "VERB", cat: "Verbo conjugado", es: "compra" }, "buys": { t: "VERB", cat: "Verbo conjugado", es: "compra", person: 3, number: "singular" },
  "sell": { t: "VERB", cat: "Verbo conjugado", es: "vende" }, "sells": { t: "VERB", cat: "Verbo conjugado", es: "vende", person: 3, number: "singular" },
  "register": { t: "VERB", cat: "Verbo conjugado", es: "registra" }, "registers": { t: "VERB", cat: "Verbo conjugado", es: "registra", person: 3, number: "singular" },
  "manage": { t: "VERB", cat: "Verbo conjugado", es: "gestiona" }, "manages": { t: "VERB", cat: "Verbo conjugado", es: "gestiona", person: 3, number: "singular" },
  "analyze": { t: "VERB", cat: "Verbo conjugado", es: "analiza" }, "analyzes": { t: "VERB", cat: "Verbo conjugado", es: "analiza", person: 3, number: "singular" },
  "design": { t: "VERB", cat: "Verbo conjugado", es: "diseña" }, "designs": { t: "VERB", cat: "Verbo conjugado", es: "diseña", person: 3, number: "singular" },
  "develop": { t: "VERB", cat: "Verbo conjugado", es: "desarrolla" }, "develops": { t: "VERB", cat: "Verbo conjugado", es: "desarrolla", person: 3, number: "singular" },
  "easy": { t: "ADJECTIVE", cat: "Adjetivo calificativo", es: "fácil", gender: "any", number: "any" },
  "difficult": { t: "ADJECTIVE", cat: "Adjetivo calificativo", es: "difícil", gender: "any", number: "any" },
  "useful": { t: "ADJECTIVE", cat: "Adjetivo calificativo", es: "útil", gender: "any", number: "any" },
  "interesting": { t: "ADJECTIVE", cat: "Adjetivo calificativo", es: "interesante", gender: "any", number: "any" },
  "necessary": { t: "ADJECTIVE", cat: "Adjetivo calificativo", es: "necesario", gender: "masculine", number: "singular" },
  "complete": { t: "ADJECTIVE", cat: "Adjetivo calificativo", es: "completo", gender: "masculine", number: "singular" },
  "correct": { t: "ADJECTIVE", cat: "Adjetivo calificativo", es: "correcto", gender: "masculine", number: "singular" },
  "wrong": { t: "ADJECTIVE", cat: "Adjetivo calificativo", es: "incorrecto", gender: "masculine", number: "singular" },
  "simple": { t: "ADJECTIVE", cat: "Adjetivo calificativo", es: "simple", gender: "any", number: "any" },
  "complex": { t: "ADJECTIVE", cat: "Adjetivo calificativo", es: "complejo", gender: "masculine", number: "singular" },
  "public": { t: "ADJECTIVE", cat: "Adjetivo calificativo", es: "público", gender: "masculine", number: "singular" },
  "private": { t: "ADJECTIVE", cat: "Adjetivo calificativo", es: "privado", gender: "masculine", number: "singular" },
  "secure": { t: "ADJECTIVE", cat: "Adjetivo calificativo", es: "seguro", gender: "masculine", number: "singular" },
  "intelligent": { t: "ADJECTIVE", cat: "Adjetivo calificativo", es: "inteligente", gender: "any", number: "any" },
  "young": { t: "ADJECTIVE", cat: "Adjetivo calificativo", es: "joven", gender: "any", number: "any" },
  "hardworking": { t: "ADJECTIVE", cat: "Adjetivo calificativo", es: "trabajador", gender: "masculine", number: "singular" },
  "organized": { t: "ADJECTIVE", cat: "Adjetivo calificativo", es: "organizado", gender: "masculine", number: "singular" },
  "digital": { t: "ADJECTIVE", cat: "Adjetivo calificativo", es: "digital", gender: "any", number: "any" },
  "academic": { t: "ADJECTIVE", cat: "Adjetivo calificativo", es: "académico", gender: "masculine", number: "singular" },
  "professional": { t: "ADJECTIVE", cat: "Adjetivo calificativo", es: "profesional", gender: "any", number: "any" },
  "functional": { t: "ADJECTIVE", cat: "Adjetivo calificativo", es: "funcional", gender: "any", number: "any" },
  "efficient": { t: "ADJECTIVE", cat: "Adjetivo calificativo", es: "eficiente", gender: "any", number: "any" },
  "available": { t: "ADJECTIVE", cat: "Adjetivo calificativo", es: "disponible", gender: "any", number: "any" }
});

Object.assign(spanishEntries, {
  "algunas": { t: "INDEFINITE", cat: "Indefinido", en: "some", gender: "feminine", number: "plural" },
  "muchas": { t: "INDEFINITE", cat: "Indefinido", en: "many", gender: "feminine", number: "plural" },
  "pocas": { t: "INDEFINITE", cat: "Indefinido", en: "few", gender: "feminine", number: "plural" },
  "todas": { t: "INDEFINITE", cat: "Indefinido", en: "all", gender: "feminine", number: "plural" },
  "ese": { t: "DEMONSTRATIVE", cat: "Demostrativo", en: "that", gender: "masculine", number: "singular" },
  "esa": { t: "DEMONSTRATIVE", cat: "Demostrativo", en: "that", gender: "feminine", number: "singular" },
  "esos": { t: "DEMONSTRATIVE", cat: "Demostrativo", en: "those", gender: "masculine", number: "plural" },
  "esas": { t: "DEMONSTRATIVE", cat: "Demostrativo", en: "those", gender: "feminine", number: "plural" },
  "proyectos": { t: "NOUN", cat: "Sustantivo común", en: "projects", gender: "masculine", number: "plural" },
  "maestros": { t: "NOUN", cat: "Sustantivo común", en: "teachers", gender: "masculine", number: "plural" },
  "clase": { t: "NOUN", cat: "Sustantivo común", en: "class", gender: "feminine", number: "singular" },
  "clases": { t: "NOUN", cat: "Sustantivo común", en: "classes", gender: "feminine", number: "plural" },
  "universidad": { t: "NOUN", cat: "Sustantivo común", en: "university", gender: "feminine", number: "singular" },
  "universidades": { t: "NOUN", cat: "Sustantivo común", en: "universities", gender: "feminine", number: "plural" },
  "cuaderno": { t: "NOUN", cat: "Sustantivo común", en: "notebook", gender: "masculine", number: "singular" },
  "cuadernos": { t: "NOUN", cat: "Sustantivo común", en: "notebooks", gender: "masculine", number: "plural" },
  "lápiz": { t: "NOUN", cat: "Sustantivo común", en: "pencil", gender: "masculine", number: "singular" },
  "lápices": { t: "NOUN", cat: "Sustantivo común", en: "pencils", gender: "masculine", number: "plural" },
  "mesa": { t: "NOUN", cat: "Sustantivo común", en: "table", gender: "feminine", number: "singular" }, "mesas": { t: "NOUN", cat: "Sustantivo común", en: "tables", gender: "feminine", number: "plural" },
  "silla": { t: "NOUN", cat: "Sustantivo común", en: "chair", gender: "feminine", number: "singular" }, "sillas": { t: "NOUN", cat: "Sustantivo común", en: "chairs", gender: "feminine", number: "plural" },
  "puerta": { t: "NOUN", cat: "Sustantivo común", en: "door", gender: "feminine", number: "singular" }, "puertas": { t: "NOUN", cat: "Sustantivo común", en: "doors", gender: "feminine", number: "plural" },
  "ventana": { t: "NOUN", cat: "Sustantivo común", en: "window", gender: "feminine", number: "singular" }, "ventanas": { t: "NOUN", cat: "Sustantivo común", en: "windows", gender: "feminine", number: "plural" },
  "madre": { t: "NOUN", cat: "Sustantivo común", en: "mother", gender: "feminine", number: "singular" }, "madres": { t: "NOUN", cat: "Sustantivo común", en: "mothers", gender: "feminine", number: "plural" },
  "padre": { t: "NOUN", cat: "Sustantivo común", en: "father", gender: "masculine", number: "singular" }, "padres": { t: "NOUN", cat: "Sustantivo común", en: "fathers", gender: "masculine", number: "plural" },
  "hermano": { t: "NOUN", cat: "Sustantivo común", en: "brother", gender: "masculine", number: "singular" }, "hermanos": { t: "NOUN", cat: "Sustantivo común", en: "brothers", gender: "masculine", number: "plural" },
  "hermana": { t: "NOUN", cat: "Sustantivo común", en: "sister", gender: "feminine", number: "singular" }, "hermanas": { t: "NOUN", cat: "Sustantivo común", en: "sisters", gender: "feminine", number: "plural" },
  "trabajos": { t: "NOUN", cat: "Sustantivo común", en: "jobs", gender: "masculine", number: "plural" },
  "oficina": { t: "NOUN", cat: "Sustantivo común", en: "office", gender: "feminine", number: "singular" }, "oficinas": { t: "NOUN", cat: "Sustantivo común", en: "offices", gender: "feminine", number: "plural" },
  "empresa": { t: "NOUN", cat: "Sustantivo común", en: "company", gender: "feminine", number: "singular" }, "empresas": { t: "NOUN", cat: "Sustantivo común", en: "companies", gender: "feminine", number: "plural" },
  "teléfono": { t: "NOUN", cat: "Sustantivo común", en: "phone", gender: "masculine", number: "singular" }, "teléfonos": { t: "NOUN", cat: "Sustantivo común", en: "phones", gender: "masculine", number: "plural" },
  "sistema": { t: "NOUN", cat: "Sustantivo común", en: "system", gender: "masculine", number: "singular" }, "sistemas": { t: "NOUN", cat: "Sustantivo común", en: "systems", gender: "masculine", number: "plural" },
  "base": { t: "NOUN", cat: "Sustantivo común", en: "database", gender: "feminine", number: "singular" }, "bases": { t: "NOUN", cat: "Sustantivo común", en: "databases", gender: "feminine", number: "plural" },
  "servidor": { t: "NOUN", cat: "Sustantivo común", en: "server", gender: "masculine", number: "singular" }, "servidores": { t: "NOUN", cat: "Sustantivo común", en: "servers", gender: "masculine", number: "plural" },
  "red": { t: "NOUN", cat: "Sustantivo común", en: "network", gender: "feminine", number: "singular" }, "redes": { t: "NOUN", cat: "Sustantivo común", en: "networks", gender: "feminine", number: "plural" },
  "archivo": { t: "NOUN", cat: "Sustantivo común", en: "file", gender: "masculine", number: "singular" }, "archivos": { t: "NOUN", cat: "Sustantivo común", en: "files", gender: "masculine", number: "plural" },
  "carpeta": { t: "NOUN", cat: "Sustantivo común", en: "folder", gender: "feminine", number: "singular" }, "carpetas": { t: "NOUN", cat: "Sustantivo común", en: "folders", gender: "feminine", number: "plural" },
  "usuario": { t: "NOUN", cat: "Sustantivo común", en: "user", gender: "masculine", number: "singular" }, "usuarios": { t: "NOUN", cat: "Sustantivo común", en: "users", gender: "masculine", number: "plural" },
  "cliente": { t: "NOUN", cat: "Sustantivo común", en: "client", gender: "masculine", number: "singular" }, "clientes": { t: "NOUN", cat: "Sustantivo común", en: "clients", gender: "masculine", number: "plural" },
  "producto": { t: "NOUN", cat: "Sustantivo común", en: "product", gender: "masculine", number: "singular" }, "productos": { t: "NOUN", cat: "Sustantivo común", en: "products", gender: "masculine", number: "plural" },
  "inventario": { t: "NOUN", cat: "Sustantivo común", en: "inventory", gender: "masculine", number: "singular" }, "inventarios": { t: "NOUN", cat: "Sustantivo común", en: "inventories", gender: "masculine", number: "plural" },
  "venta": { t: "NOUN", cat: "Sustantivo común", en: "sale", gender: "feminine", number: "singular" }, "ventas": { t: "NOUN", cat: "Sustantivo común", en: "sales", gender: "feminine", number: "plural" },
  "reporte": { t: "NOUN", cat: "Sustantivo común", en: "report", gender: "masculine", number: "singular" }, "reportes": { t: "NOUN", cat: "Sustantivo común", en: "reports", gender: "masculine", number: "plural" },
  "abre": { t: "VERB", cat: "Verbo conjugado", en: "opens", person: 3, number: "singular" }, "abren": { t: "VERB", cat: "Verbo conjugado", en: "open", person: 3, number: "plural" },
  "cierra": { t: "VERB", cat: "Verbo conjugado", en: "closes", person: 3, number: "singular" }, "cierran": { t: "VERB", cat: "Verbo conjugado", en: "close", person: 3, number: "plural" },
  "usa": { t: "VERB", cat: "Verbo conjugado", en: "uses", person: 3, number: "singular" }, "usan": { t: "VERB", cat: "Verbo conjugado", en: "use", person: 3, number: "plural" },
  "necesita": { t: "VERB", cat: "Verbo conjugado", en: "needs", person: 3, number: "singular" }, "necesitan": { t: "VERB", cat: "Verbo conjugado", en: "need", person: 3, number: "plural" },
  "quiere": { t: "VERB", cat: "Verbo conjugado", en: "wants", person: 3, number: "singular" }, "tiene": { t: "VERB", cat: "Verbo conjugado", en: "has", person: 3, number: "singular" }, "hace": { t: "VERB", cat: "Verbo conjugado", en: "makes", person: 3, number: "singular" },
  "guarda": { t: "VERB", cat: "Verbo conjugado", en: "saves", person: 3, number: "singular" }, "envía": { t: "VERB", cat: "Verbo conjugado", en: "sends", person: 3, number: "singular" },
  "compra": { t: "VERB", cat: "Verbo conjugado", en: "buys", person: 3, number: "singular" }, "compran": { t: "VERB", cat: "Verbo conjugado", en: "buy", person: 3, number: "plural" },
  "vende": { t: "VERB", cat: "Verbo conjugado", en: "sells", person: 3, number: "singular" }, "venden": { t: "VERB", cat: "Verbo conjugado", en: "sell", person: 3, number: "plural" },
  "registra": { t: "VERB", cat: "Verbo conjugado", en: "registers", person: 3, number: "singular" }, "registran": { t: "VERB", cat: "Verbo conjugado", en: "register", person: 3, number: "plural" },
  "gestiona": { t: "VERB", cat: "Verbo conjugado", en: "manages", person: 3, number: "singular" }, "gestionan": { t: "VERB", cat: "Verbo conjugado", en: "manage", person: 3, number: "plural" },
  "analiza": { t: "VERB", cat: "Verbo conjugado", en: "analyzes", person: 3, number: "singular" }, "analizan": { t: "VERB", cat: "Verbo conjugado", en: "analyze", person: 3, number: "plural" },
  "diseña": { t: "VERB", cat: "Verbo conjugado", en: "designs", person: 3, number: "singular" }, "diseñan": { t: "VERB", cat: "Verbo conjugado", en: "design", person: 3, number: "plural" },
  "desarrolla": { t: "VERB", cat: "Verbo conjugado", en: "develops", person: 3, number: "singular" }, "desarrollan": { t: "VERB", cat: "Verbo conjugado", en: "develop", person: 3, number: "plural" },
  "fácil": { t: "ADJECTIVE", cat: "Adjetivo calificativo", en: "easy", gender: "any", number: "singular" }, "fáciles": { t: "ADJECTIVE", cat: "Adjetivo calificativo", en: "easy", gender: "any", number: "plural" },
  "difícil": { t: "ADJECTIVE", cat: "Adjetivo calificativo", en: "difficult", gender: "any", number: "singular" }, "difíciles": { t: "ADJECTIVE", cat: "Adjetivo calificativo", en: "difficult", gender: "any", number: "plural" },
  "útil": { t: "ADJECTIVE", cat: "Adjetivo calificativo", en: "useful", gender: "any", number: "singular" }, "útiles": { t: "ADJECTIVE", cat: "Adjetivo calificativo", en: "useful", gender: "any", number: "plural" },
  "interesante": { t: "ADJECTIVE", cat: "Adjetivo calificativo", en: "interesting", gender: "any", number: "singular" }, "interesantes": { t: "ADJECTIVE", cat: "Adjetivo calificativo", en: "interesting", gender: "any", number: "plural" },
  "necesario": { t: "ADJECTIVE", cat: "Adjetivo calificativo", en: "necessary", gender: "masculine", number: "singular" }, "necesaria": { t: "ADJECTIVE", cat: "Adjetivo calificativo", en: "necessary", gender: "feminine", number: "singular" }, "necesarios": { t: "ADJECTIVE", cat: "Adjetivo calificativo", en: "necessary", gender: "masculine", number: "plural" }, "necesarias": { t: "ADJECTIVE", cat: "Adjetivo calificativo", en: "necessary", gender: "feminine", number: "plural" },
  "completo": { t: "ADJECTIVE", cat: "Adjetivo calificativo", en: "complete", gender: "masculine", number: "singular" }, "completa": { t: "ADJECTIVE", cat: "Adjetivo calificativo", en: "complete", gender: "feminine", number: "singular" }, "completos": { t: "ADJECTIVE", cat: "Adjetivo calificativo", en: "complete", gender: "masculine", number: "plural" }, "completas": { t: "ADJECTIVE", cat: "Adjetivo calificativo", en: "complete", gender: "feminine", number: "plural" },
  "correcto": { t: "ADJECTIVE", cat: "Adjetivo calificativo", en: "correct", gender: "masculine", number: "singular" }, "correcta": { t: "ADJECTIVE", cat: "Adjetivo calificativo", en: "correct", gender: "feminine", number: "singular" }, "correctos": { t: "ADJECTIVE", cat: "Adjetivo calificativo", en: "correct", gender: "masculine", number: "plural" }, "correctas": { t: "ADJECTIVE", cat: "Adjetivo calificativo", en: "correct", gender: "feminine", number: "plural" },
  "incorrecto": { t: "ADJECTIVE", cat: "Adjetivo calificativo", en: "wrong", gender: "masculine", number: "singular" }, "incorrecta": { t: "ADJECTIVE", cat: "Adjetivo calificativo", en: "wrong", gender: "feminine", number: "singular" }, "incorrectos": { t: "ADJECTIVE", cat: "Adjetivo calificativo", en: "wrong", gender: "masculine", number: "plural" }, "incorrectas": { t: "ADJECTIVE", cat: "Adjetivo calificativo", en: "wrong", gender: "feminine", number: "plural" },
  "simple": { t: "ADJECTIVE", cat: "Adjetivo calificativo", en: "simple", gender: "any", number: "singular" }, "simples": { t: "ADJECTIVE", cat: "Adjetivo calificativo", en: "simple", gender: "any", number: "plural" },
  "complejo": { t: "ADJECTIVE", cat: "Adjetivo calificativo", en: "complex", gender: "masculine", number: "singular" }, "compleja": { t: "ADJECTIVE", cat: "Adjetivo calificativo", en: "complex", gender: "feminine", number: "singular" }, "complejos": { t: "ADJECTIVE", cat: "Adjetivo calificativo", en: "complex", gender: "masculine", number: "plural" }, "complejas": { t: "ADJECTIVE", cat: "Adjetivo calificativo", en: "complex", gender: "feminine", number: "plural" },
  "público": { t: "ADJECTIVE", cat: "Adjetivo calificativo", en: "public", gender: "masculine", number: "singular" }, "pública": { t: "ADJECTIVE", cat: "Adjetivo calificativo", en: "public", gender: "feminine", number: "singular" }, "públicos": { t: "ADJECTIVE", cat: "Adjetivo calificativo", en: "public", gender: "masculine", number: "plural" }, "públicas": { t: "ADJECTIVE", cat: "Adjetivo calificativo", en: "public", gender: "feminine", number: "plural" },
  "privado": { t: "ADJECTIVE", cat: "Adjetivo calificativo", en: "private", gender: "masculine", number: "singular" }, "privada": { t: "ADJECTIVE", cat: "Adjetivo calificativo", en: "private", gender: "feminine", number: "singular" }, "privados": { t: "ADJECTIVE", cat: "Adjetivo calificativo", en: "private", gender: "masculine", number: "plural" }, "privadas": { t: "ADJECTIVE", cat: "Adjetivo calificativo", en: "private", gender: "feminine", number: "plural" },
  "seguro": { t: "ADJECTIVE", cat: "Adjetivo calificativo", en: "secure", gender: "masculine", number: "singular" }, "segura": { t: "ADJECTIVE", cat: "Adjetivo calificativo", en: "secure", gender: "feminine", number: "singular" }, "seguros": { t: "ADJECTIVE", cat: "Adjetivo calificativo", en: "secure", gender: "masculine", number: "plural" }, "seguras": { t: "ADJECTIVE", cat: "Adjetivo calificativo", en: "secure", gender: "feminine", number: "plural" },
  "inteligente": { t: "ADJECTIVE", cat: "Adjetivo calificativo", en: "intelligent", gender: "any", number: "singular" }, "inteligentes": { t: "ADJECTIVE", cat: "Adjetivo calificativo", en: "intelligent", gender: "any", number: "plural" },
  "joven": { t: "ADJECTIVE", cat: "Adjetivo calificativo", en: "young", gender: "any", number: "singular" }, "jóvenes": { t: "ADJECTIVE", cat: "Adjetivo calificativo", en: "young", gender: "any", number: "plural" },
  "trabajador": { t: "ADJECTIVE", cat: "Adjetivo calificativo", en: "hardworking", gender: "masculine", number: "singular" }, "trabajadora": { t: "ADJECTIVE", cat: "Adjetivo calificativo", en: "hardworking", gender: "feminine", number: "singular" }, "trabajadores": { t: "ADJECTIVE", cat: "Adjetivo calificativo", en: "hardworking", gender: "masculine", number: "plural" }, "trabajadoras": { t: "ADJECTIVE", cat: "Adjetivo calificativo", en: "hardworking", gender: "feminine", number: "plural" },
  "organizado": { t: "ADJECTIVE", cat: "Adjetivo calificativo", en: "organized", gender: "masculine", number: "singular" }, "organizada": { t: "ADJECTIVE", cat: "Adjetivo calificativo", en: "organized", gender: "feminine", number: "singular" }, "organizados": { t: "ADJECTIVE", cat: "Adjetivo calificativo", en: "organized", gender: "masculine", number: "plural" }, "organizadas": { t: "ADJECTIVE", cat: "Adjetivo calificativo", en: "organized", gender: "feminine", number: "plural" },
  "digital": { t: "ADJECTIVE", cat: "Adjetivo calificativo", en: "digital", gender: "any", number: "singular" }, "digitales": { t: "ADJECTIVE", cat: "Adjetivo calificativo", en: "digital", gender: "any", number: "plural" },
  "académico": { t: "ADJECTIVE", cat: "Adjetivo calificativo", en: "academic", gender: "masculine", number: "singular" }, "académica": { t: "ADJECTIVE", cat: "Adjetivo calificativo", en: "academic", gender: "feminine", number: "singular" }, "académicos": { t: "ADJECTIVE", cat: "Adjetivo calificativo", en: "academic", gender: "masculine", number: "plural" }, "académicas": { t: "ADJECTIVE", cat: "Adjetivo calificativo", en: "academic", gender: "feminine", number: "plural" },
  "profesional": { t: "ADJECTIVE", cat: "Adjetivo calificativo", en: "professional", gender: "any", number: "singular" }, "profesionales": { t: "ADJECTIVE", cat: "Adjetivo calificativo", en: "professional", gender: "any", number: "plural" },
  "funcional": { t: "ADJECTIVE", cat: "Adjetivo calificativo", en: "functional", gender: "any", number: "singular" }, "funcionales": { t: "ADJECTIVE", cat: "Adjetivo calificativo", en: "functional", gender: "any", number: "plural" },
  "eficiente": { t: "ADJECTIVE", cat: "Adjetivo calificativo", en: "efficient", gender: "any", number: "singular" }, "eficientes": { t: "ADJECTIVE", cat: "Adjetivo calificativo", en: "efficient", gender: "any", number: "plural" },
  "disponible": { t: "ADJECTIVE", cat: "Adjetivo calificativo", en: "available", gender: "any", number: "singular" }, "disponibles": { t: "ADJECTIVE", cat: "Adjetivo calificativo", en: "available", gender: "any", number: "plural" },
  "moderna": { t: "ADJECTIVE", cat: "Adjetivo calificativo", en: "modern", gender: "feminine", number: "singular" }, "modernos": { t: "ADJECTIVE", cat: "Adjetivo calificativo", en: "modern", gender: "masculine", number: "plural" }, "modernas": { t: "ADJECTIVE", cat: "Adjetivo calificativo", en: "modern", gender: "feminine", number: "plural" },
  "limpia": { t: "ADJECTIVE", cat: "Adjetivo calificativo", en: "clean", gender: "feminine", number: "singular" }, "limpios": { t: "ADJECTIVE", cat: "Adjetivo calificativo", en: "clean", gender: "masculine", number: "plural" }, "limpias": { t: "ADJECTIVE", cat: "Adjetivo calificativo", en: "clean", gender: "feminine", number: "plural" }
});

dictionary.es = spanishEntries;



Object.assign(dictionary.en, {
  "cars": { t: "NOUN", cat: "Sustantivo común", es: "carros", gender: "masculine", number: "plural" }
});
Object.assign(spanishEntries, {
  "hermosa": { t: "ADJECTIVE", cat: "Adjetivo calificativo", en: "beautiful", gender: "feminine", number: "singular" },
  "carros": { t: "NOUN", cat: "Sustantivo común", en: "cars", gender: "masculine", number: "plural" },
  "importantes": { t: "ADJECTIVE", cat: "Adjetivo calificativo", en: "important", gender: "any", number: "plural" },
  "estudian": { t: "VERB", cat: "Verbo conjugado", en: "study", person: 3, number: "plural" },
  "trabajan": { t: "VERB", cat: "Verbo conjugado", en: "work", person: 3, number: "plural" },
  "rápidos": { t: "ADJECTIVE", cat: "Adjetivo calificativo", en: "fast", gender: "masculine", number: "plural" }
});



Object.assign(dictionary.en, {
  "room": { t: "NOUN", cat: "Sustantivo común", es: "cuarto", gender: "masculine", number: "singular" },
  "rooms": { t: "NOUN", cat: "Sustantivo común", es: "cuartos", gender: "masculine", number: "plural" },
  "kitchen": { t: "NOUN", cat: "Sustantivo común", es: "cocina", gender: "feminine", number: "singular" },
  "kitchens": { t: "NOUN", cat: "Sustantivo común", es: "cocinas", gender: "feminine", number: "plural" },
  "bathroom": { t: "NOUN", cat: "Sustantivo común", es: "baño", gender: "masculine", number: "singular" },
  "bathrooms": { t: "NOUN", cat: "Sustantivo común", es: "baños", gender: "masculine", number: "plural" },
  "bed": { t: "NOUN", cat: "Sustantivo común", es: "cama", gender: "feminine", number: "singular" },
  "beds": { t: "NOUN", cat: "Sustantivo común", es: "camas", gender: "feminine", number: "plural" },
  "wall": { t: "NOUN", cat: "Sustantivo común", es: "pared", gender: "feminine", number: "singular" },
  "walls": { t: "NOUN", cat: "Sustantivo común", es: "paredes", gender: "feminine", number: "plural" },
  "floor": { t: "NOUN", cat: "Sustantivo común", es: "piso", gender: "masculine", number: "singular" },
  "floors": { t: "NOUN", cat: "Sustantivo común", es: "pisos", gender: "masculine", number: "plural" },
  "light": { t: "NOUN", cat: "Sustantivo común", es: "luz", gender: "feminine", number: "singular" },
  "lights": { t: "NOUN", cat: "Sustantivo común", es: "luces", gender: "feminine", number: "plural" },
  "person": { t: "NOUN", cat: "Sustantivo común", es: "persona", gender: "feminine", number: "singular" },
  "people": { t: "NOUN", cat: "Sustantivo común", es: "personas", gender: "feminine", number: "plural" },
  "child": { t: "NOUN", cat: "Sustantivo común", es: "niño", gender: "masculine", number: "singular" },
  "children": { t: "NOUN", cat: "Sustantivo común", es: "niños", gender: "masculine", number: "plural" },
  "girls": { t: "NOUN", cat: "Sustantivo común", es: "niñas", gender: "feminine", number: "plural" },
  "boys": { t: "NOUN", cat: "Sustantivo común", es: "niños", gender: "masculine", number: "plural" },
  "women": { t: "NOUN", cat: "Sustantivo común", es: "mujeres", gender: "feminine", number: "plural" },
  "men": { t: "NOUN", cat: "Sustantivo común", es: "hombres", gender: "masculine", number: "plural" },
  "friends": { t: "NOUN", cat: "Sustantivo común", es: "amigos", gender: "masculine", number: "plural" },
  "course": { t: "NOUN", cat: "Sustantivo común", es: "curso", gender: "masculine", number: "singular" },
  "courses": { t: "NOUN", cat: "Sustantivo común", es: "cursos", gender: "masculine", number: "plural" },
  "exam": { t: "NOUN", cat: "Sustantivo común", es: "examen", gender: "masculine", number: "singular" },
  "exams": { t: "NOUN", cat: "Sustantivo común", es: "exámenes", gender: "masculine", number: "plural" },
  "homework": { t: "NOUN", cat: "Sustantivo común", es: "tarea", gender: "feminine", number: "singular" },
  "task": { t: "NOUN", cat: "Sustantivo común", es: "tarea", gender: "feminine", number: "singular" },
  "tasks": { t: "NOUN", cat: "Sustantivo común", es: "tareas", gender: "feminine", number: "plural" },
  "computers": { t: "NOUN", cat: "Sustantivo común", es: "computadoras", gender: "feminine", number: "plural" },
  "keyboard": { t: "NOUN", cat: "Sustantivo común", es: "teclado", gender: "masculine", number: "singular" },
  "keyboards": { t: "NOUN", cat: "Sustantivo común", es: "teclados", gender: "masculine", number: "plural" },
  "mouse": { t: "NOUN", cat: "Sustantivo común", es: "ratón", gender: "masculine", number: "singular" },
  "mice": { t: "NOUN", cat: "Sustantivo común", es: "ratones", gender: "masculine", number: "plural" },
  "screen": { t: "NOUN", cat: "Sustantivo común", es: "pantalla", gender: "feminine", number: "singular" },
  "screens": { t: "NOUN", cat: "Sustantivo común", es: "pantallas", gender: "feminine", number: "plural" },
  "thing": { t: "NOUN", cat: "Sustantivo común", es: "cosa", gender: "feminine", number: "singular" },
  "things": { t: "NOUN", cat: "Sustantivo común", es: "cosas", gender: "feminine", number: "plural" },
  "place": { t: "NOUN", cat: "Sustantivo común", es: "lugar", gender: "masculine", number: "singular" },
  "places": { t: "NOUN", cat: "Sustantivo común", es: "lugares", gender: "masculine", number: "plural" },
  "problem": { t: "NOUN", cat: "Sustantivo común", es: "problema", gender: "masculine", number: "singular" },
  "problems": { t: "NOUN", cat: "Sustantivo común", es: "problemas", gender: "masculine", number: "plural" },
  "solution": { t: "NOUN", cat: "Sustantivo común", es: "solución", gender: "feminine", number: "singular" },
  "solutions": { t: "NOUN", cat: "Sustantivo común", es: "soluciones", gender: "feminine", number: "plural" },
  "question": { t: "NOUN", cat: "Sustantivo común", es: "pregunta", gender: "feminine", number: "singular" },
  "questions": { t: "NOUN", cat: "Sustantivo común", es: "preguntas", gender: "feminine", number: "plural" },
  "answer": { t: "NOUN", cat: "Sustantivo común", es: "respuesta", gender: "feminine", number: "singular" },
  "answers": { t: "NOUN", cat: "Sustantivo común", es: "respuestas", gender: "feminine", number: "plural" },
  "ideas": { t: "NOUN", cat: "Sustantivo común", es: "ideas", gender: "feminine", number: "plural" },
  "message": { t: "NOUN", cat: "Sustantivo común", es: "mensaje", gender: "masculine", number: "singular" },
  "messages": { t: "NOUN", cat: "Sustantivo común", es: "mensajes", gender: "masculine", number: "plural" },
  "document": { t: "NOUN", cat: "Sustantivo común", es: "documento", gender: "masculine", number: "singular" },
  "documents": { t: "NOUN", cat: "Sustantivo común", es: "documentos", gender: "masculine", number: "plural" },
  "days": { t: "NOUN", cat: "Sustantivo común", es: "días", gender: "masculine", number: "plural" },
  "nights": { t: "NOUN", cat: "Sustantivo común", es: "noches", gender: "feminine", number: "plural" },
  "mornings": { t: "NOUN", cat: "Sustantivo común", es: "mañanas", gender: "feminine", number: "plural" },
  "afternoon": { t: "NOUN", cat: "Sustantivo común", es: "tarde", gender: "feminine", number: "singular" },
  "afternoons": { t: "NOUN", cat: "Sustantivo común", es: "tardes", gender: "feminine", number: "plural" },
  "pretty": { t: "ADJECTIVE", cat: "Adjetivo calificativo", es: "lindo", gender: "masculine", number: "singular" },
  "nice": { t: "ADJECTIVE", cat: "Adjetivo calificativo", es: "bonito", gender: "masculine", number: "singular" },
  "cute": { t: "ADJECTIVE", cat: "Adjetivo calificativo", es: "lindo", gender: "masculine", number: "singular" },
  "ugly": { t: "ADJECTIVE", cat: "Adjetivo calificativo", es: "feo", gender: "masculine", number: "singular" },
  "yellow": { t: "ADJECTIVE", cat: "Adjetivo calificativo", es: "amarillo", gender: "masculine", number: "singular" },
  "dirty": { t: "ADJECTIVE", cat: "Adjetivo calificativo", es: "sucio", gender: "masculine", number: "singular" },
  "receive": { t: "VERB", cat: "Verbo conjugado", es: "recibe" }, "receives": { t: "VERB", cat: "Verbo conjugado", es: "recibe", person: 3, number: "singular" },
  "see": { t: "VERB", cat: "Verbo conjugado", es: "ve" }, "sees": { t: "VERB", cat: "Verbo conjugado", es: "ve", person: 3, number: "singular" },
  "look": { t: "VERB", cat: "Verbo conjugado", es: "mira" }, "looks": { t: "VERB", cat: "Verbo conjugado", es: "mira", person: 3, number: "singular" },
  "understand": { t: "VERB", cat: "Verbo conjugado", es: "entiende" }, "understands": { t: "VERB", cat: "Verbo conjugado", es: "entiende", person: 3, number: "singular" },
  "now": { t: "ADVERB", cat: "Adverbio de tiempo", es: "ahora" },
  "later": { t: "ADVERB", cat: "Adverbio de tiempo", es: "después" }
});

Object.assign(spanishEntries, {
  "cuarto": { t: "NOUN", cat: "Sustantivo común", en: "room", gender: "masculine", number: "singular" }, "cuartos": { t: "NOUN", cat: "Sustantivo común", en: "rooms", gender: "masculine", number: "plural" },
  "cocina": { t: "NOUN", cat: "Sustantivo común", en: "kitchen", gender: "feminine", number: "singular" }, "cocinas": { t: "NOUN", cat: "Sustantivo común", en: "kitchens", gender: "feminine", number: "plural" },
  "baño": { t: "NOUN", cat: "Sustantivo común", en: "bathroom", gender: "masculine", number: "singular" }, "baños": { t: "NOUN", cat: "Sustantivo común", en: "bathrooms", gender: "masculine", number: "plural" },
  "cama": { t: "NOUN", cat: "Sustantivo común", en: "bed", gender: "feminine", number: "singular" }, "camas": { t: "NOUN", cat: "Sustantivo común", en: "beds", gender: "feminine", number: "plural" },
  "pared": { t: "NOUN", cat: "Sustantivo común", en: "wall", gender: "feminine", number: "singular" }, "paredes": { t: "NOUN", cat: "Sustantivo común", en: "walls", gender: "feminine", number: "plural" },
  "piso": { t: "NOUN", cat: "Sustantivo común", en: "floor", gender: "masculine", number: "singular" }, "pisos": { t: "NOUN", cat: "Sustantivo común", en: "floors", gender: "masculine", number: "plural" },
  "luz": { t: "NOUN", cat: "Sustantivo común", en: "light", gender: "feminine", number: "singular" }, "luces": { t: "NOUN", cat: "Sustantivo común", en: "lights", gender: "feminine", number: "plural" },
  "persona": { t: "NOUN", cat: "Sustantivo común", en: "person", gender: "feminine", number: "singular" }, "personas": { t: "NOUN", cat: "Sustantivo común", en: "people", gender: "feminine", number: "plural" },
  "niñas": { t: "NOUN", cat: "Sustantivo común", en: "girls", gender: "feminine", number: "plural" }, "niños": { t: "NOUN", cat: "Sustantivo común", en: "boys", gender: "masculine", number: "plural" },
  "mujeres": { t: "NOUN", cat: "Sustantivo común", en: "women", gender: "feminine", number: "plural" }, "hombres": { t: "NOUN", cat: "Sustantivo común", en: "men", gender: "masculine", number: "plural" },
  "amigos": { t: "NOUN", cat: "Sustantivo común", en: "friends", gender: "masculine", number: "plural" },
  "curso": { t: "NOUN", cat: "Sustantivo común", en: "course", gender: "masculine", number: "singular" }, "cursos": { t: "NOUN", cat: "Sustantivo común", en: "courses", gender: "masculine", number: "plural" },
  "examen": { t: "NOUN", cat: "Sustantivo común", en: "exam", gender: "masculine", number: "singular" }, "exámenes": { t: "NOUN", cat: "Sustantivo común", en: "exams", gender: "masculine", number: "plural" },
  "tarea": { t: "NOUN", cat: "Sustantivo común", en: "task", gender: "feminine", number: "singular" }, "tareas": { t: "NOUN", cat: "Sustantivo común", en: "tasks", gender: "feminine", number: "plural" },
  "computadoras": { t: "NOUN", cat: "Sustantivo común", en: "computers", gender: "feminine", number: "plural" },
  "teclado": { t: "NOUN", cat: "Sustantivo común", en: "keyboard", gender: "masculine", number: "singular" }, "teclados": { t: "NOUN", cat: "Sustantivo común", en: "keyboards", gender: "masculine", number: "plural" },
  "ratón": { t: "NOUN", cat: "Sustantivo común", en: "mouse", gender: "masculine", number: "singular" }, "ratones": { t: "NOUN", cat: "Sustantivo común", en: "mice", gender: "masculine", number: "plural" },
  "pantalla": { t: "NOUN", cat: "Sustantivo común", en: "screen", gender: "feminine", number: "singular" }, "pantallas": { t: "NOUN", cat: "Sustantivo común", en: "screens", gender: "feminine", number: "plural" },
  "cosa": { t: "NOUN", cat: "Sustantivo común", en: "thing", gender: "feminine", number: "singular" }, "cosas": { t: "NOUN", cat: "Sustantivo común", en: "things", gender: "feminine", number: "plural" },
  "lugar": { t: "NOUN", cat: "Sustantivo común", en: "place", gender: "masculine", number: "singular" }, "lugares": { t: "NOUN", cat: "Sustantivo común", en: "places", gender: "masculine", number: "plural" },
  "problema": { t: "NOUN", cat: "Sustantivo común", en: "problem", gender: "masculine", number: "singular" }, "problemas": { t: "NOUN", cat: "Sustantivo común", en: "problems", gender: "masculine", number: "plural" },
  "solución": { t: "NOUN", cat: "Sustantivo común", en: "solution", gender: "feminine", number: "singular" }, "soluciones": { t: "NOUN", cat: "Sustantivo común", en: "solutions", gender: "feminine", number: "plural" },
  "pregunta": { t: "NOUN", cat: "Sustantivo común", en: "question", gender: "feminine", number: "singular" }, "preguntas": { t: "NOUN", cat: "Sustantivo común", en: "questions", gender: "feminine", number: "plural" },
  "respuesta": { t: "NOUN", cat: "Sustantivo común", en: "answer", gender: "feminine", number: "singular" }, "respuestas": { t: "NOUN", cat: "Sustantivo común", en: "answers", gender: "feminine", number: "plural" },
  "ideas": { t: "NOUN", cat: "Sustantivo común", en: "ideas", gender: "feminine", number: "plural" },
  "mensaje": { t: "NOUN", cat: "Sustantivo común", en: "message", gender: "masculine", number: "singular" }, "mensajes": { t: "NOUN", cat: "Sustantivo común", en: "messages", gender: "masculine", number: "plural" },
  "documento": { t: "NOUN", cat: "Sustantivo común", en: "document", gender: "masculine", number: "singular" }, "documentos": { t: "NOUN", cat: "Sustantivo común", en: "documents", gender: "masculine", number: "plural" },
  "días": { t: "NOUN", cat: "Sustantivo común", en: "days", gender: "masculine", number: "plural" }, "noches": { t: "NOUN", cat: "Sustantivo común", en: "nights", gender: "feminine", number: "plural" }, "mañanas": { t: "NOUN", cat: "Sustantivo común", en: "mornings", gender: "feminine", number: "plural" },
  "tarde": { t: "NOUN", cat: "Sustantivo común", en: "afternoon", gender: "feminine", number: "singular" }, "tardes": { t: "NOUN", cat: "Sustantivo común", en: "afternoons", gender: "feminine", number: "plural" },
  "lindo": { t: "ADJECTIVE", cat: "Adjetivo calificativo", en: "pretty", gender: "masculine", number: "singular" }, "linda": { t: "ADJECTIVE", cat: "Adjetivo calificativo", en: "pretty", gender: "feminine", number: "singular" }, "lindos": { t: "ADJECTIVE", cat: "Adjetivo calificativo", en: "pretty", gender: "masculine", number: "plural" }, "lindas": { t: "ADJECTIVE", cat: "Adjetivo calificativo", en: "pretty", gender: "feminine", number: "plural" },
  "bonito": { t: "ADJECTIVE", cat: "Adjetivo calificativo", en: "nice", gender: "masculine", number: "singular" }, "bonita": { t: "ADJECTIVE", cat: "Adjetivo calificativo", en: "nice", gender: "feminine", number: "singular" }, "bonitos": { t: "ADJECTIVE", cat: "Adjetivo calificativo", en: "nice", gender: "masculine", number: "plural" }, "bonitas": { t: "ADJECTIVE", cat: "Adjetivo calificativo", en: "nice", gender: "feminine", number: "plural" },
  "feo": { t: "ADJECTIVE", cat: "Adjetivo calificativo", en: "ugly", gender: "masculine", number: "singular" }, "fea": { t: "ADJECTIVE", cat: "Adjetivo calificativo", en: "ugly", gender: "feminine", number: "singular" }, "feos": { t: "ADJECTIVE", cat: "Adjetivo calificativo", en: "ugly", gender: "masculine", number: "plural" }, "feas": { t: "ADJECTIVE", cat: "Adjetivo calificativo", en: "ugly", gender: "feminine", number: "plural" },
  "azules": { t: "ADJECTIVE", cat: "Adjetivo calificativo", en: "blue", gender: "any", number: "plural" }, "verdes": { t: "ADJECTIVE", cat: "Adjetivo calificativo", en: "green", gender: "any", number: "plural" },
  "amarillo": { t: "ADJECTIVE", cat: "Adjetivo calificativo", en: "yellow", gender: "masculine", number: "singular" }, "amarilla": { t: "ADJECTIVE", cat: "Adjetivo calificativo", en: "yellow", gender: "feminine", number: "singular" }, "amarillos": { t: "ADJECTIVE", cat: "Adjetivo calificativo", en: "yellow", gender: "masculine", number: "plural" }, "amarillas": { t: "ADJECTIVE", cat: "Adjetivo calificativo", en: "yellow", gender: "feminine", number: "plural" },
  "sucio": { t: "ADJECTIVE", cat: "Adjetivo calificativo", en: "dirty", gender: "masculine", number: "singular" }, "sucia": { t: "ADJECTIVE", cat: "Adjetivo calificativo", en: "dirty", gender: "feminine", number: "singular" }, "sucios": { t: "ADJECTIVE", cat: "Adjetivo calificativo", en: "dirty", gender: "masculine", number: "plural" }, "sucias": { t: "ADJECTIVE", cat: "Adjetivo calificativo", en: "dirty", gender: "feminine", number: "plural" },
  "tristes": { t: "ADJECTIVE", cat: "Adjetivo calificativo", en: "sad", gender: "any", number: "plural" },
  "vieja": { t: "ADJECTIVE", cat: "Adjetivo calificativo", en: "old", gender: "feminine", number: "singular" }, "viejos": { t: "ADJECTIVE", cat: "Adjetivo calificativo", en: "old", gender: "masculine", number: "plural" }, "viejas": { t: "ADJECTIVE", cat: "Adjetivo calificativo", en: "old", gender: "feminine", number: "plural" },
  "buenos": { t: "ADJECTIVE", cat: "Adjetivo calificativo", en: "good", gender: "masculine", number: "plural" }, "buenas": { t: "ADJECTIVE", cat: "Adjetivo calificativo", en: "good", gender: "feminine", number: "plural" },
  "mala": { t: "ADJECTIVE", cat: "Adjetivo calificativo", en: "bad", gender: "feminine", number: "singular" }, "malos": { t: "ADJECTIVE", cat: "Adjetivo calificativo", en: "bad", gender: "masculine", number: "plural" }, "malas": { t: "ADJECTIVE", cat: "Adjetivo calificativo", en: "bad", gender: "feminine", number: "plural" },
  "tienen": { t: "VERB", cat: "Verbo conjugado", en: "have", person: 3, number: "plural" }, "quieren": { t: "VERB", cat: "Verbo conjugado", en: "want", person: 3, number: "plural" },
  "leen": { t: "VERB", cat: "Verbo conjugado", en: "read", person: 3, number: "plural" }, "escriben": { t: "VERB", cat: "Verbo conjugado", en: "write", person: 3, number: "plural" },
  "envían": { t: "VERB", cat: "Verbo conjugado", en: "send", person: 3, number: "plural" }, "recibe": { t: "VERB", cat: "Verbo conjugado", en: "receives", person: 3, number: "singular" }, "reciben": { t: "VERB", cat: "Verbo conjugado", en: "receive", person: 3, number: "plural" },
  "crean": { t: "VERB", cat: "Verbo conjugado", en: "create", person: 3, number: "plural" }, "hacen": { t: "VERB", cat: "Verbo conjugado", en: "make", person: 3, number: "plural" },
  "ve": { t: "VERB", cat: "Verbo conjugado", en: "sees", person: 3, number: "singular" }, "ven": { t: "VERB", cat: "Verbo conjugado", en: "see", person: 3, number: "plural" },
  "mira": { t: "VERB", cat: "Verbo conjugado", en: "looks", person: 3, number: "singular" }, "miran": { t: "VERB", cat: "Verbo conjugado", en: "look", person: 3, number: "plural" },
  "hablan": { t: "VERB", cat: "Verbo conjugado", en: "speak", person: 3, number: "plural" }, "aprenden": { t: "VERB", cat: "Verbo conjugado", en: "learn", person: 3, number: "plural" },
  "enseñan": { t: "VERB", cat: "Verbo conjugado", en: "teach", person: 3, number: "plural" }, "entiende": { t: "VERB", cat: "Verbo conjugado", en: "understands", person: 3, number: "singular" }, "entienden": { t: "VERB", cat: "Verbo conjugado", en: "understand", person: 3, number: "plural" },
  "traducen": { t: "VERB", cat: "Verbo conjugado", en: "translate", person: 3, number: "plural" },
  "ahora": { t: "ADVERB", cat: "Adverbio de tiempo", en: "now" }, "después": { t: "ADVERB", cat: "Adverbio de tiempo", en: "later" }
});

dictionary.es = spanishEntries;

const phraseDictionary = {
  es: {
    "buenos días": "good morning",
    "buenas tardes": "good afternoon",
    "buenas noches": "good night",
    "muchas gracias": "thank you very much",
    "gracias": "thank you",
    "por favor": "please",
    "de nada": "you are welcome",
    "hasta luego": "see you later",
    "hasta mañana": "see you tomorrow",
    "cómo estás": "how are you",
    "estoy bien": "i am fine",
    "mi nombre es": "my name is"
  },
  en: {
    "good morning": "buenos días",
    "good afternoon": "buenas tardes",
    "good night": "buenas noches",
    "thank you very much": "muchas gracias",
    "thank you": "gracias",
    "please": "por favor",
    "you are welcome": "de nada",
    "see you later": "hasta luego",
    "see you tomorrow": "hasta mañana",
    "how are you": "cómo estás",
    "i am fine": "estoy bien",
    "my name is": "mi nombre es"
  }
};

Object.assign(dictionary.en, {
  "bag": { t: "NOUN", cat: "Sustantivo común", es: "bolsa", gender: "feminine", number: "singular" },
  "bags": { t: "NOUN", cat: "Sustantivo común", es: "bolsas", gender: "feminine", number: "plural" },
  "box": { t: "NOUN", cat: "Sustantivo común", es: "caja", gender: "feminine", number: "singular" },
  "boxes": { t: "NOUN", cat: "Sustantivo común", es: "cajas", gender: "feminine", number: "plural" },
  "key": { t: "NOUN", cat: "Sustantivo común", es: "llave", gender: "feminine", number: "singular" },
  "keys": { t: "NOUN", cat: "Sustantivo común", es: "llaves", gender: "feminine", number: "plural" },
  "clock": { t: "NOUN", cat: "Sustantivo común", es: "reloj", gender: "masculine", number: "singular" },
  "clocks": { t: "NOUN", cat: "Sustantivo común", es: "relojes", gender: "masculine", number: "plural" },
  "watch": { t: "NOUN", cat: "Sustantivo común", es: "reloj", gender: "masculine", number: "singular" },
  "watches": { t: "NOUN", cat: "Sustantivo común", es: "relojes", gender: "masculine", number: "plural" },
  "paper": { t: "NOUN", cat: "Sustantivo común", es: "papel", gender: "masculine", number: "singular" },
  "papers": { t: "NOUN", cat: "Sustantivo común", es: "papeles", gender: "masculine", number: "plural" },
  "pen": { t: "NOUN", cat: "Sustantivo común", es: "lapicero", gender: "masculine", number: "singular" },
  "pens": { t: "NOUN", cat: "Sustantivo común", es: "lapiceros", gender: "masculine", number: "plural" },
  "desk": { t: "NOUN", cat: "Sustantivo común", es: "escritorio", gender: "masculine", number: "singular" },
  "desks": { t: "NOUN", cat: "Sustantivo común", es: "escritorios", gender: "masculine", number: "plural" },
  "board": { t: "NOUN", cat: "Sustantivo común", es: "pizarra", gender: "feminine", number: "singular" },
  "boards": { t: "NOUN", cat: "Sustantivo común", es: "pizarras", gender: "feminine", number: "plural" },
  "bottle": { t: "NOUN", cat: "Sustantivo común", es: "botella", gender: "feminine", number: "singular" },
  "bottles": { t: "NOUN", cat: "Sustantivo común", es: "botellas", gender: "feminine", number: "plural" },
  "glass": { t: "NOUN", cat: "Sustantivo común", es: "vaso", gender: "masculine", number: "singular" },
  "glasses": { t: "NOUN", cat: "Sustantivo común", es: "vasos", gender: "masculine", number: "plural" },
  "plate": { t: "NOUN", cat: "Sustantivo común", es: "plato", gender: "masculine", number: "singular" },
  "plates": { t: "NOUN", cat: "Sustantivo común", es: "platos", gender: "masculine", number: "plural" },
  "cup": { t: "NOUN", cat: "Sustantivo común", es: "taza", gender: "feminine", number: "singular" },
  "cups": { t: "NOUN", cat: "Sustantivo común", es: "tazas", gender: "feminine", number: "plural" },
  "spoon": { t: "NOUN", cat: "Sustantivo común", es: "cuchara", gender: "feminine", number: "singular" },
  "spoons": { t: "NOUN", cat: "Sustantivo común", es: "cucharas", gender: "feminine", number: "plural" },
  "fork": { t: "NOUN", cat: "Sustantivo común", es: "tenedor", gender: "masculine", number: "singular" },
  "forks": { t: "NOUN", cat: "Sustantivo común", es: "tenedores", gender: "masculine", number: "plural" },
  "knife": { t: "NOUN", cat: "Sustantivo común", es: "cuchillo", gender: "masculine", number: "singular" },
  "knives": { t: "NOUN", cat: "Sustantivo común", es: "cuchillos", gender: "masculine", number: "plural" },
  "home": { t: "NOUN", cat: "Sustantivo común", es: "hogar", gender: "masculine", number: "singular" },
  "homes": { t: "NOUN", cat: "Sustantivo común", es: "hogares", gender: "masculine", number: "plural" },
  "store": { t: "NOUN", cat: "Sustantivo común", es: "tienda", gender: "feminine", number: "singular" },
  "stores": { t: "NOUN", cat: "Sustantivo común", es: "tiendas", gender: "feminine", number: "plural" },
  "hospitals": { t: "NOUN", cat: "Sustantivo común", es: "hospitales", gender: "masculine", number: "plural" },
  "bank": { t: "NOUN", cat: "Sustantivo común", es: "banco", gender: "masculine", number: "singular" },
  "banks": { t: "NOUN", cat: "Sustantivo común", es: "bancos", gender: "masculine", number: "plural" },
  "parks": { t: "NOUN", cat: "Sustantivo común", es: "parques", gender: "masculine", number: "plural" },
  "street": { t: "NOUN", cat: "Sustantivo común", es: "calle", gender: "feminine", number: "singular" },
  "streets": { t: "NOUN", cat: "Sustantivo común", es: "calles", gender: "feminine", number: "plural" },
  "classroom": { t: "NOUN", cat: "Sustantivo común", es: "aula", gender: "feminine", number: "singular" },
  "classrooms": { t: "NOUN", cat: "Sustantivo común", es: "aulas", gender: "feminine", number: "plural" },
  "library": { t: "NOUN", cat: "Sustantivo común", es: "biblioteca", gender: "feminine", number: "singular" },
  "libraries": { t: "NOUN", cat: "Sustantivo común", es: "bibliotecas", gender: "feminine", number: "plural" },
  "laboratory": { t: "NOUN", cat: "Sustantivo común", es: "laboratorio", gender: "masculine", number: "singular" },
  "laboratories": { t: "NOUN", cat: "Sustantivo común", es: "laboratorios", gender: "masculine", number: "plural" },
  "restaurant": { t: "NOUN", cat: "Sustantivo común", es: "restaurante", gender: "masculine", number: "singular" },
  "restaurants": { t: "NOUN", cat: "Sustantivo común", es: "restaurantes", gender: "masculine", number: "plural" },
  "hotels": { t: "NOUN", cat: "Sustantivo común", es: "hoteles", gender: "masculine", number: "plural" },
  "town": { t: "NOUN", cat: "Sustantivo común", es: "pueblo", gender: "masculine", number: "singular" },
  "towns": { t: "NOUN", cat: "Sustantivo común", es: "pueblos", gender: "masculine", number: "plural" },
  "country": { t: "NOUN", cat: "Sustantivo común", es: "país", gender: "masculine", number: "singular" },
  "countries": { t: "NOUN", cat: "Sustantivo común", es: "países", gender: "masculine", number: "plural" },
  "apple": { t: "NOUN", cat: "Sustantivo común", es: "manzana", gender: "feminine", number: "singular" },
  "apples": { t: "NOUN", cat: "Sustantivo común", es: "manzanas", gender: "feminine", number: "plural" },
  "banana": { t: "NOUN", cat: "Sustantivo común", es: "banano", gender: "masculine", number: "singular" },
  "bananas": { t: "NOUN", cat: "Sustantivo común", es: "bananos", gender: "masculine", number: "plural" },
  "orange": { t: "NOUN", cat: "Sustantivo común", es: "naranja", gender: "feminine", number: "singular" },
  "oranges": { t: "NOUN", cat: "Sustantivo común", es: "naranjas", gender: "feminine", number: "plural" },
  "bread": { t: "NOUN", cat: "Sustantivo común", es: "pan", gender: "masculine", number: "singular" },
  "rice": { t: "NOUN", cat: "Sustantivo común", es: "arroz", gender: "masculine", number: "singular" },
  "meat": { t: "NOUN", cat: "Sustantivo común", es: "carne", gender: "feminine", number: "singular" },
  "egg": { t: "NOUN", cat: "Sustantivo común", es: "huevo", gender: "masculine", number: "singular" },
  "eggs": { t: "NOUN", cat: "Sustantivo común", es: "huevos", gender: "masculine", number: "plural" },
  "milk": { t: "NOUN", cat: "Sustantivo común", es: "leche", gender: "feminine", number: "singular" },
  "coffee": { t: "NOUN", cat: "Sustantivo común", es: "café", gender: "masculine", number: "singular" },
  "tea": { t: "NOUN", cat: "Sustantivo común", es: "té", gender: "masculine", number: "singular" },
  "juice": { t: "NOUN", cat: "Sustantivo común", es: "jugo", gender: "masculine", number: "singular" },
  "juices": { t: "NOUN", cat: "Sustantivo común", es: "jugos", gender: "masculine", number: "plural" },
  "soup": { t: "NOUN", cat: "Sustantivo común", es: "sopa", gender: "feminine", number: "singular" },
  "soups": { t: "NOUN", cat: "Sustantivo común", es: "sopas", gender: "feminine", number: "plural" },
  "cake": { t: "NOUN", cat: "Sustantivo común", es: "pastel", gender: "masculine", number: "singular" },
  "cakes": { t: "NOUN", cat: "Sustantivo común", es: "pasteles", gender: "masculine", number: "plural" },
  "cookie": { t: "NOUN", cat: "Sustantivo común", es: "galleta", gender: "feminine", number: "singular" },
  "cookies": { t: "NOUN", cat: "Sustantivo común", es: "galletas", gender: "feminine", number: "plural" },
  "bird": { t: "NOUN", cat: "Sustantivo común", es: "pájaro", gender: "masculine", number: "singular" }, "birds": { t: "NOUN", cat: "Sustantivo común", es: "pájaros", gender: "masculine", number: "plural" },
  "horse": { t: "NOUN", cat: "Sustantivo común", es: "caballo", gender: "masculine", number: "singular" }, "horses": { t: "NOUN", cat: "Sustantivo común", es: "caballos", gender: "masculine", number: "plural" },
  "cow": { t: "NOUN", cat: "Sustantivo común", es: "vaca", gender: "feminine", number: "singular" }, "cows": { t: "NOUN", cat: "Sustantivo común", es: "vacas", gender: "feminine", number: "plural" },
  "pig": { t: "NOUN", cat: "Sustantivo común", es: "cerdo", gender: "masculine", number: "singular" }, "pigs": { t: "NOUN", cat: "Sustantivo común", es: "cerdos", gender: "masculine", number: "plural" },
  "chickens": { t: "NOUN", cat: "Sustantivo común", es: "gallinas", gender: "feminine", number: "plural" },
  "duck": { t: "NOUN", cat: "Sustantivo común", es: "pato", gender: "masculine", number: "singular" }, "ducks": { t: "NOUN", cat: "Sustantivo común", es: "patos", gender: "masculine", number: "plural" },
  "rabbit": { t: "NOUN", cat: "Sustantivo común", es: "conejo", gender: "masculine", number: "singular" }, "rabbits": { t: "NOUN", cat: "Sustantivo común", es: "conejos", gender: "masculine", number: "plural" },
  "lion": { t: "NOUN", cat: "Sustantivo común", es: "león", gender: "masculine", number: "singular" }, "lions": { t: "NOUN", cat: "Sustantivo común", es: "leones", gender: "masculine", number: "plural" },
  "tiger": { t: "NOUN", cat: "Sustantivo común", es: "tigre", gender: "masculine", number: "singular" }, "tigers": { t: "NOUN", cat: "Sustantivo común", es: "tigres", gender: "masculine", number: "plural" },
  "bear": { t: "NOUN", cat: "Sustantivo común", es: "oso", gender: "masculine", number: "singular" }, "bears": { t: "NOUN", cat: "Sustantivo común", es: "osos", gender: "masculine", number: "plural" },
  "elephant": { t: "NOUN", cat: "Sustantivo común", es: "elefante", gender: "masculine", number: "singular" }, "elephants": { t: "NOUN", cat: "Sustantivo común", es: "elefantes", gender: "masculine", number: "plural" },
  "monkey": { t: "NOUN", cat: "Sustantivo común", es: "mono", gender: "masculine", number: "singular" }, "monkeys": { t: "NOUN", cat: "Sustantivo común", es: "monos", gender: "masculine", number: "plural" },
  "code": { t: "NOUN", cat: "Sustantivo común", es: "código", gender: "masculine", number: "singular" }, "codes": { t: "NOUN", cat: "Sustantivo común", es: "códigos", gender: "masculine", number: "plural" },
  "function": { t: "NOUN", cat: "Sustantivo común", es: "función", gender: "feminine", number: "singular" }, "functions": { t: "NOUN", cat: "Sustantivo común", es: "funciones", gender: "feminine", number: "plural" },
  "variable": { t: "NOUN", cat: "Sustantivo común", es: "variable", gender: "feminine", number: "singular" }, "variables": { t: "NOUN", cat: "Sustantivo común", es: "variables", gender: "feminine", number: "plural" },
  "object": { t: "NOUN", cat: "Sustantivo común", es: "objeto", gender: "masculine", number: "singular" }, "objects": { t: "NOUN", cat: "Sustantivo común", es: "objetos", gender: "masculine", number: "plural" },
  "method": { t: "NOUN", cat: "Sustantivo común", es: "método", gender: "masculine", number: "singular" }, "methods": { t: "NOUN", cat: "Sustantivo común", es: "métodos", gender: "masculine", number: "plural" },
  "error": { t: "NOUN", cat: "Sustantivo común", es: "error", gender: "masculine", number: "singular" }, "errors": { t: "NOUN", cat: "Sustantivo común", es: "errores", gender: "masculine", number: "plural" },
  "row": { t: "NOUN", cat: "Sustantivo común", es: "fila", gender: "feminine", number: "singular" }, "rows": { t: "NOUN", cat: "Sustantivo común", es: "filas", gender: "feminine", number: "plural" },
  "column": { t: "NOUN", cat: "Sustantivo común", es: "columna", gender: "feminine", number: "singular" }, "columns": { t: "NOUN", cat: "Sustantivo común", es: "columnas", gender: "feminine", number: "plural" },
  "query": { t: "NOUN", cat: "Sustantivo común", es: "consulta", gender: "feminine", number: "singular" }, "queries": { t: "NOUN", cat: "Sustantivo común", es: "consultas", gender: "feminine", number: "plural" },
  "record": { t: "NOUN", cat: "Sustantivo común", es: "registro", gender: "masculine", number: "singular" }, "records": { t: "NOUN", cat: "Sustantivo común", es: "registros", gender: "masculine", number: "plural" },
  "form": { t: "NOUN", cat: "Sustantivo común", es: "formulario", gender: "masculine", number: "singular" }, "forms": { t: "NOUN", cat: "Sustantivo común", es: "formularios", gender: "masculine", number: "plural" },
  "button": { t: "NOUN", cat: "Sustantivo común", es: "botón", gender: "masculine", number: "singular" }, "buttons": { t: "NOUN", cat: "Sustantivo común", es: "botones", gender: "masculine", number: "plural" },
  "page": { t: "NOUN", cat: "Sustantivo común", es: "página", gender: "feminine", number: "singular" }, "pages": { t: "NOUN", cat: "Sustantivo común", es: "páginas", gender: "feminine", number: "plural" },
  "application": { t: "NOUN", cat: "Sustantivo común", es: "aplicación", gender: "feminine", number: "singular" }, "applications": { t: "NOUN", cat: "Sustantivo común", es: "aplicaciones", gender: "feminine", number: "plural" },
  "website": { t: "NOUN", cat: "Sustantivo común", es: "sitio", gender: "masculine", number: "singular" }, "websites": { t: "NOUN", cat: "Sustantivo común", es: "sitios", gender: "masculine", number: "plural" },
  "interface": { t: "NOUN", cat: "Sustantivo común", es: "interfaz", gender: "feminine", number: "singular" }, "interfaces": { t: "NOUN", cat: "Sustantivo común", es: "interfaces", gender: "feminine", number: "plural" },
  "data": { t: "NOUN", cat: "Sustantivo común", es: "datos", gender: "masculine", number: "plural" },
  "information": { t: "NOUN", cat: "Sustantivo común", es: "información", gender: "feminine", number: "singular" },
  "hour": { t: "NOUN", cat: "Sustantivo común", es: "hora", gender: "feminine", number: "singular" }, "hours": { t: "NOUN", cat: "Sustantivo común", es: "horas", gender: "feminine", number: "plural" },
  "minute": { t: "NOUN", cat: "Sustantivo común", es: "minuto", gender: "masculine", number: "singular" }, "minutes": { t: "NOUN", cat: "Sustantivo común", es: "minutos", gender: "masculine", number: "plural" },
  "second": { t: "NOUN", cat: "Sustantivo común", es: "segundo", gender: "masculine", number: "singular" }, "seconds": { t: "NOUN", cat: "Sustantivo común", es: "segundos", gender: "masculine", number: "plural" },
  "week": { t: "NOUN", cat: "Sustantivo común", es: "semana", gender: "feminine", number: "singular" }, "weeks": { t: "NOUN", cat: "Sustantivo común", es: "semanas", gender: "feminine", number: "plural" },
  "month": { t: "NOUN", cat: "Sustantivo común", es: "mes", gender: "masculine", number: "singular" }, "months": { t: "NOUN", cat: "Sustantivo común", es: "meses", gender: "masculine", number: "plural" },
  "year": { t: "NOUN", cat: "Sustantivo común", es: "año", gender: "masculine", number: "singular" }, "years": { t: "NOUN", cat: "Sustantivo común", es: "años", gender: "masculine", number: "plural" },
  "evening": { t: "NOUN", cat: "Sustantivo común", es: "tarde", gender: "feminine", number: "singular" }, "evenings": { t: "NOUN", cat: "Sustantivo común", es: "tardes", gender: "feminine", number: "plural" },
  "tall": { t: "ADJECTIVE", cat: "Adjetivo calificativo", es: "alto", gender: "masculine", number: "singular" },
  "short": { t: "ADJECTIVE", cat: "Adjetivo calificativo", es: "corto", gender: "masculine", number: "singular" },
  "long": { t: "ADJECTIVE", cat: "Adjetivo calificativo", es: "largo", gender: "masculine", number: "singular" },
  "cold": { t: "ADJECTIVE", cat: "Adjetivo calificativo", es: "frío", gender: "masculine", number: "singular" },
  "hot": { t: "ADJECTIVE", cat: "Adjetivo calificativo", es: "caliente", gender: "any", number: "any" },
  "warm": { t: "ADJECTIVE", cat: "Adjetivo calificativo", es: "cálido", gender: "masculine", number: "singular" },
  "cool": { t: "ADJECTIVE", cat: "Adjetivo calificativo", es: "fresco", gender: "masculine", number: "singular" },
  "dark": { t: "ADJECTIVE", cat: "Adjetivo calificativo", es: "oscuro", gender: "masculine", number: "singular" },
  "clear": { t: "ADJECTIVE", cat: "Adjetivo calificativo", es: "claro", gender: "masculine", number: "singular" },
  "weak": { t: "ADJECTIVE", cat: "Adjetivo calificativo", es: "débil", gender: "any", number: "any" },
  "expensive": { t: "ADJECTIVE", cat: "Adjetivo calificativo", es: "caro", gender: "masculine", number: "singular" },
  "cheap": { t: "ADJECTIVE", cat: "Adjetivo calificativo", es: "barato", gender: "masculine", number: "singular" },
  "rich": { t: "ADJECTIVE", cat: "Adjetivo calificativo", es: "rico", gender: "masculine", number: "singular" },
  "poor": { t: "ADJECTIVE", cat: "Adjetivo calificativo", es: "pobre", gender: "any", number: "any" },
  "full": { t: "ADJECTIVE", cat: "Adjetivo calificativo", es: "lleno", gender: "masculine", number: "singular" },
  "empty": { t: "ADJECTIVE", cat: "Adjetivo calificativo", es: "vacío", gender: "masculine", number: "singular" },
  "ready": { t: "ADJECTIVE", cat: "Adjetivo calificativo", es: "listo", gender: "masculine", number: "singular" },
  "tired": { t: "ADJECTIVE", cat: "Adjetivo calificativo", es: "cansado", gender: "masculine", number: "singular" },
  "busy": { t: "ADJECTIVE", cat: "Adjetivo calificativo", es: "ocupado", gender: "masculine", number: "singular" },
  "free": { t: "ADJECTIVE", cat: "Adjetivo calificativo", es: "libre", gender: "any", number: "any" },
  "safe": { t: "ADJECTIVE", cat: "Adjetivo calificativo", es: "seguro", gender: "masculine", number: "singular" },
  "dangerous": { t: "ADJECTIVE", cat: "Adjetivo calificativo", es: "peligroso", gender: "masculine", number: "singular" },
  "go": { t: "VERB", cat: "Verbo conjugado", es: "va" }, "goes": { t: "VERB", cat: "Verbo conjugado", es: "va", person: 3, number: "singular" },
  "come": { t: "VERB", cat: "Verbo conjugado", es: "viene" }, "comes": { t: "VERB", cat: "Verbo conjugado", es: "viene", person: 3, number: "singular" },
  "arrive": { t: "VERB", cat: "Verbo conjugado", es: "llega" }, "arrives": { t: "VERB", cat: "Verbo conjugado", es: "llega", person: 3, number: "singular" },
  "leave": { t: "VERB", cat: "Verbo conjugado", es: "sale" }, "leaves": { t: "VERB", cat: "Verbo conjugado", es: "sale", person: 3, number: "singular" },
  "enter": { t: "VERB", cat: "Verbo conjugado", es: "entra" }, "enters": { t: "VERB", cat: "Verbo conjugado", es: "entra", person: 3, number: "singular" },
  "cook": { t: "VERB", cat: "Verbo conjugado", es: "cocina" }, "cooks": { t: "VERB", cat: "Verbo conjugado", es: "cocina", person: 3, number: "singular" },
  "wash": { t: "VERB", cat: "Verbo conjugado", es: "lava" }, "washes": { t: "VERB", cat: "Verbo conjugado", es: "lava", person: 3, number: "singular" },
  "play": { t: "VERB", cat: "Verbo conjugado", es: "juega" }, "plays": { t: "VERB", cat: "Verbo conjugado", es: "juega", person: 3, number: "singular" },
  "help": { t: "VERB", cat: "Verbo conjugado", es: "ayuda" }, "helps": { t: "VERB", cat: "Verbo conjugado", es: "ayuda", person: 3, number: "singular" },
  "call": { t: "VERB", cat: "Verbo conjugado", es: "llama" }, "calls": { t: "VERB", cat: "Verbo conjugado", es: "llama", person: 3, number: "singular" },
  "answer": { t: "VERB", cat: "Verbo conjugado", es: "responde" }, "answers": { t: "VERB", cat: "Verbo conjugado", es: "responde", person: 3, number: "singular" },
  "ask": { t: "VERB", cat: "Verbo conjugado", es: "pregunta" }, "asks": { t: "VERB", cat: "Verbo conjugado", es: "pregunta", person: 3, number: "singular" },
  "explain": { t: "VERB", cat: "Verbo conjugado", es: "explica" }, "explains": { t: "VERB", cat: "Verbo conjugado", es: "explica", person: 3, number: "singular" },
  "listen": { t: "VERB", cat: "Verbo conjugado", es: "escucha" }, "listens": { t: "VERB", cat: "Verbo conjugado", es: "escucha", person: 3, number: "singular" },
  "hear": { t: "VERB", cat: "Verbo conjugado", es: "oye" }, "hears": { t: "VERB", cat: "Verbo conjugado", es: "oye", person: 3, number: "singular" },
  "think": { t: "VERB", cat: "Verbo conjugado", es: "piensa" }, "thinks": { t: "VERB", cat: "Verbo conjugado", es: "piensa", person: 3, number: "singular" },
  "know": { t: "VERB", cat: "Verbo conjugado", es: "sabe" }, "knows": { t: "VERB", cat: "Verbo conjugado", es: "sabe", person: 3, number: "singular" },
  "find": { t: "VERB", cat: "Verbo conjugado", es: "encuentra" }, "finds": { t: "VERB", cat: "Verbo conjugado", es: "encuentra", person: 3, number: "singular" },
  "search": { t: "VERB", cat: "Verbo conjugado", es: "busca" }, "searches": { t: "VERB", cat: "Verbo conjugado", es: "busca", person: 3, number: "singular" },
  "wait": { t: "VERB", cat: "Verbo conjugado", es: "espera" }, "waits": { t: "VERB", cat: "Verbo conjugado", es: "espera", person: 3, number: "singular" },
  "finish": { t: "VERB", cat: "Verbo conjugado", es: "termina" }, "finishes": { t: "VERB", cat: "Verbo conjugado", es: "termina", person: 3, number: "singular" },
  "start": { t: "VERB", cat: "Verbo conjugado", es: "empieza" }, "starts": { t: "VERB", cat: "Verbo conjugado", es: "empieza", person: 3, number: "singular" },
  "change": { t: "VERB", cat: "Verbo conjugado", es: "cambia" }, "changes": { t: "VERB", cat: "Verbo conjugado", es: "cambia", person: 3, number: "singular" },
  "choose": { t: "VERB", cat: "Verbo conjugado", es: "elige" }, "chooses": { t: "VERB", cat: "Verbo conjugado", es: "elige", person: 3, number: "singular" },
  "me": { t: "PRONOUN", cat: "Pronombre personal", es: "me" }, "him": { t: "PRONOUN", cat: "Pronombre personal", es: "él" }, "her": { t: "PRONOUN", cat: "Pronombre personal", es: "ella" }, "us": { t: "PRONOUN", cat: "Pronombre personal", es: "nosotros" }, "them": { t: "PRONOUN", cat: "Pronombre personal", es: "ellos" },
  "mine": { t: "POSSESSIVE", cat: "Posesivo", es: "mío" }, "yours": { t: "POSSESSIVE", cat: "Posesivo", es: "tuyo" }, "ours": { t: "POSSESSIVE", cat: "Posesivo", es: "nuestro" }, "theirs": { t: "POSSESSIVE", cat: "Posesivo", es: "suyo" },
  "well": { t: "ADVERB", cat: "Adverbio", es: "bien" }, "badly": { t: "ADVERB", cat: "Adverbio", es: "mal" }, "early": { t: "ADVERB", cat: "Adverbio", es: "temprano" }, "late": { t: "ADVERB", cat: "Adverbio", es: "tarde" },
  "soon": { t: "ADVERB", cat: "Adverbio", es: "pronto" }, "far": { t: "ADVERB", cat: "Adverbio", es: "lejos" }, "near": { t: "ADVERB", cat: "Adverbio", es: "cerca" }, "inside": { t: "ADVERB", cat: "Adverbio", es: "adentro" },
  "outside": { t: "ADVERB", cat: "Adverbio", es: "afuera" }, "above": { t: "ADVERB", cat: "Adverbio", es: "arriba" }, "below": { t: "ADVERB", cat: "Adverbio", es: "abajo" }, "before": { t: "ADVERB", cat: "Adverbio", es: "antes" },
  "after": { t: "ADVERB", cat: "Adverbio", es: "después" }, "almost": { t: "ADVERB", cat: "Adverbio", es: "casi" }, "only": { t: "ADVERB", cat: "Adverbio", es: "solo" }, "also": { t: "ADVERB", cat: "Adverbio", es: "también" }, "too": { t: "ADVERB", cat: "Adverbio", es: "también" },
  "i": { t: "PRONOUN", cat: "Pronombre personal", es: "yo", person: 1, number: "singular" }, "do": { t: "VERB", cat: "Verbo auxiliar", es: "hace" }, "not": { t: "ADVERB", cat: "Adverbio de negación", es: "no" }, "a": { t: "ARTICLE", cat: "Artículo indefinido", es: "un", gender: "any", number: "singular" }
});

Object.assign(spanishEntries, {
  "bolsa": { t: "NOUN", cat: "Sustantivo común", en: "bag", gender: "feminine", number: "singular" }, "bolsas": { t: "NOUN", cat: "Sustantivo común", en: "bags", gender: "feminine", number: "plural" },
  "caja": { t: "NOUN", cat: "Sustantivo común", en: "box", gender: "feminine", number: "singular" }, "cajas": { t: "NOUN", cat: "Sustantivo común", en: "boxes", gender: "feminine", number: "plural" },
  "llave": { t: "NOUN", cat: "Sustantivo común", en: "key", gender: "feminine", number: "singular" }, "llaves": { t: "NOUN", cat: "Sustantivo común", en: "keys", gender: "feminine", number: "plural" },
  "reloj": { t: "NOUN", cat: "Sustantivo común", en: "clock", gender: "masculine", number: "singular" }, "relojes": { t: "NOUN", cat: "Sustantivo común", en: "clocks", gender: "masculine", number: "plural" },
  "papel": { t: "NOUN", cat: "Sustantivo común", en: "paper", gender: "masculine", number: "singular" }, "papeles": { t: "NOUN", cat: "Sustantivo común", en: "papers", gender: "masculine", number: "plural" },
  "lapicero": { t: "NOUN", cat: "Sustantivo común", en: "pen", gender: "masculine", number: "singular" }, "lapiceros": { t: "NOUN", cat: "Sustantivo común", en: "pens", gender: "masculine", number: "plural" },
  "escritorio": { t: "NOUN", cat: "Sustantivo común", en: "desk", gender: "masculine", number: "singular" }, "escritorios": { t: "NOUN", cat: "Sustantivo común", en: "desks", gender: "masculine", number: "plural" },
  "pizarra": { t: "NOUN", cat: "Sustantivo común", en: "board", gender: "feminine", number: "singular" }, "pizarras": { t: "NOUN", cat: "Sustantivo común", en: "boards", gender: "feminine", number: "plural" },
  "botella": { t: "NOUN", cat: "Sustantivo común", en: "bottle", gender: "feminine", number: "singular" }, "botellas": { t: "NOUN", cat: "Sustantivo común", en: "bottles", gender: "feminine", number: "plural" },
  "vaso": { t: "NOUN", cat: "Sustantivo común", en: "glass", gender: "masculine", number: "singular" }, "vasos": { t: "NOUN", cat: "Sustantivo común", en: "glasses", gender: "masculine", number: "plural" },
  "plato": { t: "NOUN", cat: "Sustantivo común", en: "plate", gender: "masculine", number: "singular" }, "platos": { t: "NOUN", cat: "Sustantivo común", en: "plates", gender: "masculine", number: "plural" },
  "taza": { t: "NOUN", cat: "Sustantivo común", en: "cup", gender: "feminine", number: "singular" }, "tazas": { t: "NOUN", cat: "Sustantivo común", en: "cups", gender: "feminine", number: "plural" },
  "cuchara": { t: "NOUN", cat: "Sustantivo común", en: "spoon", gender: "feminine", number: "singular" }, "cucharas": { t: "NOUN", cat: "Sustantivo común", en: "spoons", gender: "feminine", number: "plural" },
  "tenedor": { t: "NOUN", cat: "Sustantivo común", en: "fork", gender: "masculine", number: "singular" }, "tenedores": { t: "NOUN", cat: "Sustantivo común", en: "forks", gender: "masculine", number: "plural" },
  "cuchillo": { t: "NOUN", cat: "Sustantivo común", en: "knife", gender: "masculine", number: "singular" }, "cuchillos": { t: "NOUN", cat: "Sustantivo común", en: "knives", gender: "masculine", number: "plural" },
  "hogar": { t: "NOUN", cat: "Sustantivo común", en: "home", gender: "masculine", number: "singular" }, "hogares": { t: "NOUN", cat: "Sustantivo común", en: "homes", gender: "masculine", number: "plural" },
  "tienda": { t: "NOUN", cat: "Sustantivo común", en: "store", gender: "feminine", number: "singular" }, "tiendas": { t: "NOUN", cat: "Sustantivo común", en: "stores", gender: "feminine", number: "plural" },
  "hospitales": { t: "NOUN", cat: "Sustantivo común", en: "hospitals", gender: "masculine", number: "plural" },
  "banco": { t: "NOUN", cat: "Sustantivo común", en: "bank", gender: "masculine", number: "singular" }, "bancos": { t: "NOUN", cat: "Sustantivo común", en: "banks", gender: "masculine", number: "plural" },
  "parques": { t: "NOUN", cat: "Sustantivo común", en: "parks", gender: "masculine", number: "plural" },
  "calle": { t: "NOUN", cat: "Sustantivo común", en: "street", gender: "feminine", number: "singular" }, "calles": { t: "NOUN", cat: "Sustantivo común", en: "streets", gender: "feminine", number: "plural" },
  "aula": { t: "NOUN", cat: "Sustantivo común", en: "classroom", gender: "feminine", number: "singular" }, "aulas": { t: "NOUN", cat: "Sustantivo común", en: "classrooms", gender: "feminine", number: "plural" },
  "biblioteca": { t: "NOUN", cat: "Sustantivo común", en: "library", gender: "feminine", number: "singular" }, "bibliotecas": { t: "NOUN", cat: "Sustantivo común", en: "libraries", gender: "feminine", number: "plural" },
  "laboratorio": { t: "NOUN", cat: "Sustantivo común", en: "laboratory", gender: "masculine", number: "singular" }, "laboratorios": { t: "NOUN", cat: "Sustantivo común", en: "laboratories", gender: "masculine", number: "plural" },
  "restaurante": { t: "NOUN", cat: "Sustantivo común", en: "restaurant", gender: "masculine", number: "singular" }, "restaurantes": { t: "NOUN", cat: "Sustantivo común", en: "restaurants", gender: "masculine", number: "plural" },
  "hoteles": { t: "NOUN", cat: "Sustantivo común", en: "hotels", gender: "masculine", number: "plural" },
  "pueblo": { t: "NOUN", cat: "Sustantivo común", en: "town", gender: "masculine", number: "singular" }, "pueblos": { t: "NOUN", cat: "Sustantivo común", en: "towns", gender: "masculine", number: "plural" },
  "país": { t: "NOUN", cat: "Sustantivo común", en: "country", gender: "masculine", number: "singular" }, "países": { t: "NOUN", cat: "Sustantivo común", en: "countries", gender: "masculine", number: "plural" },
  "manzana": { t: "NOUN", cat: "Sustantivo común", en: "apple", gender: "feminine", number: "singular" }, "manzanas": { t: "NOUN", cat: "Sustantivo común", en: "apples", gender: "feminine", number: "plural" },
  "banano": { t: "NOUN", cat: "Sustantivo común", en: "banana", gender: "masculine", number: "singular" }, "bananos": { t: "NOUN", cat: "Sustantivo común", en: "bananas", gender: "masculine", number: "plural" },
  "naranja": { t: "NOUN", cat: "Sustantivo común", en: "orange", gender: "feminine", number: "singular" }, "naranjas": { t: "NOUN", cat: "Sustantivo común", en: "oranges", gender: "feminine", number: "plural" },
  "pan": { t: "NOUN", cat: "Sustantivo común", en: "bread", gender: "masculine", number: "singular" }, "arroz": { t: "NOUN", cat: "Sustantivo común", en: "rice", gender: "masculine", number: "singular" },
  "carne": { t: "NOUN", cat: "Sustantivo común", en: "meat", gender: "feminine", number: "singular" }, "huevo": { t: "NOUN", cat: "Sustantivo común", en: "egg", gender: "masculine", number: "singular" }, "huevos": { t: "NOUN", cat: "Sustantivo común", en: "eggs", gender: "masculine", number: "plural" },
  "leche": { t: "NOUN", cat: "Sustantivo común", en: "milk", gender: "feminine", number: "singular" }, "café": { t: "NOUN", cat: "Sustantivo común", en: "coffee", gender: "masculine", number: "singular" }, "té": { t: "NOUN", cat: "Sustantivo común", en: "tea", gender: "masculine", number: "singular" },
  "jugo": { t: "NOUN", cat: "Sustantivo común", en: "juice", gender: "masculine", number: "singular" }, "jugos": { t: "NOUN", cat: "Sustantivo común", en: "juices", gender: "masculine", number: "plural" },
  "sopa": { t: "NOUN", cat: "Sustantivo común", en: "soup", gender: "feminine", number: "singular" }, "sopas": { t: "NOUN", cat: "Sustantivo común", en: "soups", gender: "feminine", number: "plural" },
  "pastel": { t: "NOUN", cat: "Sustantivo común", en: "cake", gender: "masculine", number: "singular" }, "pasteles": { t: "NOUN", cat: "Sustantivo común", en: "cakes", gender: "masculine", number: "plural" },
  "galleta": { t: "NOUN", cat: "Sustantivo común", en: "cookie", gender: "feminine", number: "singular" }, "galletas": { t: "NOUN", cat: "Sustantivo común", en: "cookies", gender: "feminine", number: "plural" },
  "pájaro": { t: "NOUN", cat: "Sustantivo común", en: "bird", gender: "masculine", number: "singular" }, "pájaros": { t: "NOUN", cat: "Sustantivo común", en: "birds", gender: "masculine", number: "plural" },
  "caballo": { t: "NOUN", cat: "Sustantivo común", en: "horse", gender: "masculine", number: "singular" }, "caballos": { t: "NOUN", cat: "Sustantivo común", en: "horses", gender: "masculine", number: "plural" },
  "vaca": { t: "NOUN", cat: "Sustantivo común", en: "cow", gender: "feminine", number: "singular" }, "vacas": { t: "NOUN", cat: "Sustantivo común", en: "cows", gender: "feminine", number: "plural" },
  "cerdo": { t: "NOUN", cat: "Sustantivo común", en: "pig", gender: "masculine", number: "singular" }, "cerdos": { t: "NOUN", cat: "Sustantivo común", en: "pigs", gender: "masculine", number: "plural" },
  "gallina": { t: "NOUN", cat: "Sustantivo común", en: "chicken", gender: "feminine", number: "singular" }, "gallinas": { t: "NOUN", cat: "Sustantivo común", en: "chickens", gender: "feminine", number: "plural" },
  "pato": { t: "NOUN", cat: "Sustantivo común", en: "duck", gender: "masculine", number: "singular" }, "patos": { t: "NOUN", cat: "Sustantivo común", en: "ducks", gender: "masculine", number: "plural" },
  "conejo": { t: "NOUN", cat: "Sustantivo común", en: "rabbit", gender: "masculine", number: "singular" }, "conejos": { t: "NOUN", cat: "Sustantivo común", en: "rabbits", gender: "masculine", number: "plural" },
  "pez": { t: "NOUN", cat: "Sustantivo común", en: "fish", gender: "masculine", number: "singular" }, "peces": { t: "NOUN", cat: "Sustantivo común", en: "fish", gender: "masculine", number: "plural" },
  "león": { t: "NOUN", cat: "Sustantivo común", en: "lion", gender: "masculine", number: "singular" }, "leones": { t: "NOUN", cat: "Sustantivo común", en: "lions", gender: "masculine", number: "plural" },
  "tigre": { t: "NOUN", cat: "Sustantivo común", en: "tiger", gender: "masculine", number: "singular" }, "tigres": { t: "NOUN", cat: "Sustantivo común", en: "tigers", gender: "masculine", number: "plural" },
  "oso": { t: "NOUN", cat: "Sustantivo común", en: "bear", gender: "masculine", number: "singular" }, "osos": { t: "NOUN", cat: "Sustantivo común", en: "bears", gender: "masculine", number: "plural" },
  "elefante": { t: "NOUN", cat: "Sustantivo común", en: "elephant", gender: "masculine", number: "singular" }, "elefantes": { t: "NOUN", cat: "Sustantivo común", en: "elephants", gender: "masculine", number: "plural" },
  "mono": { t: "NOUN", cat: "Sustantivo común", en: "monkey", gender: "masculine", number: "singular" }, "monos": { t: "NOUN", cat: "Sustantivo común", en: "monkeys", gender: "masculine", number: "plural" },
  "código": { t: "NOUN", cat: "Sustantivo común", en: "code", gender: "masculine", number: "singular" }, "códigos": { t: "NOUN", cat: "Sustantivo común", en: "codes", gender: "masculine", number: "plural" },
  "función": { t: "NOUN", cat: "Sustantivo común", en: "function", gender: "feminine", number: "singular" }, "funciones": { t: "NOUN", cat: "Sustantivo común", en: "functions", gender: "feminine", number: "plural" },
  "objeto": { t: "NOUN", cat: "Sustantivo común", en: "object", gender: "masculine", number: "singular" }, "objetos": { t: "NOUN", cat: "Sustantivo común", en: "objects", gender: "masculine", number: "plural" },
  "método": { t: "NOUN", cat: "Sustantivo común", en: "method", gender: "masculine", number: "singular" }, "métodos": { t: "NOUN", cat: "Sustantivo común", en: "methods", gender: "masculine", number: "plural" },
  "errores": { t: "NOUN", cat: "Sustantivo común", en: "errors", gender: "masculine", number: "plural" },
  "tabla": { t: "NOUN", cat: "Sustantivo común", en: "table", gender: "feminine", number: "singular" }, "tablas": { t: "NOUN", cat: "Sustantivo común", en: "tables", gender: "feminine", number: "plural" },
  "fila": { t: "NOUN", cat: "Sustantivo común", en: "row", gender: "feminine", number: "singular" }, "filas": { t: "NOUN", cat: "Sustantivo común", en: "rows", gender: "feminine", number: "plural" },
  "columna": { t: "NOUN", cat: "Sustantivo común", en: "column", gender: "feminine", number: "singular" }, "columnas": { t: "NOUN", cat: "Sustantivo común", en: "columns", gender: "feminine", number: "plural" },
  "consulta": { t: "NOUN", cat: "Sustantivo común", en: "query", gender: "feminine", number: "singular" }, "consultas": { t: "NOUN", cat: "Sustantivo común", en: "queries", gender: "feminine", number: "plural" },
  "registro": { t: "NOUN", cat: "Sustantivo común", en: "record", gender: "masculine", number: "singular" }, "registros": { t: "NOUN", cat: "Sustantivo común", en: "records", gender: "masculine", number: "plural" },
  "formulario": { t: "NOUN", cat: "Sustantivo común", en: "form", gender: "masculine", number: "singular" }, "formularios": { t: "NOUN", cat: "Sustantivo común", en: "forms", gender: "masculine", number: "plural" },
  "botón": { t: "NOUN", cat: "Sustantivo común", en: "button", gender: "masculine", number: "singular" }, "botones": { t: "NOUN", cat: "Sustantivo común", en: "buttons", gender: "masculine", number: "plural" },
  "página": { t: "NOUN", cat: "Sustantivo común", en: "page", gender: "feminine", number: "singular" }, "páginas": { t: "NOUN", cat: "Sustantivo común", en: "pages", gender: "feminine", number: "plural" },
  "aplicación": { t: "NOUN", cat: "Sustantivo común", en: "application", gender: "feminine", number: "singular" }, "aplicaciones": { t: "NOUN", cat: "Sustantivo común", en: "applications", gender: "feminine", number: "plural" },
  "sitio": { t: "NOUN", cat: "Sustantivo común", en: "website", gender: "masculine", number: "singular" }, "sitios": { t: "NOUN", cat: "Sustantivo común", en: "websites", gender: "masculine", number: "plural" },
  "interfaz": { t: "NOUN", cat: "Sustantivo común", en: "interface", gender: "feminine", number: "singular" }, "interfaces": { t: "NOUN", cat: "Sustantivo común", en: "interfaces", gender: "feminine", number: "plural" },
  "datos": { t: "NOUN", cat: "Sustantivo común", en: "data", gender: "masculine", number: "plural" }, "información": { t: "NOUN", cat: "Sustantivo común", en: "information", gender: "feminine", number: "singular" },
  "hora": { t: "NOUN", cat: "Sustantivo común", en: "hour", gender: "feminine", number: "singular" }, "horas": { t: "NOUN", cat: "Sustantivo común", en: "hours", gender: "feminine", number: "plural" },
  "minuto": { t: "NOUN", cat: "Sustantivo común", en: "minute", gender: "masculine", number: "singular" }, "minutos": { t: "NOUN", cat: "Sustantivo común", en: "minutes", gender: "masculine", number: "plural" },
  "segundo": { t: "NOUN", cat: "Sustantivo común", en: "second", gender: "masculine", number: "singular" }, "segundos": { t: "NOUN", cat: "Sustantivo común", en: "seconds", gender: "masculine", number: "plural" },
  "semana": { t: "NOUN", cat: "Sustantivo común", en: "week", gender: "feminine", number: "singular" }, "semanas": { t: "NOUN", cat: "Sustantivo común", en: "weeks", gender: "feminine", number: "plural" },
  "mes": { t: "NOUN", cat: "Sustantivo común", en: "month", gender: "masculine", number: "singular" }, "meses": { t: "NOUN", cat: "Sustantivo común", en: "months", gender: "masculine", number: "plural" },
  "año": { t: "NOUN", cat: "Sustantivo común", en: "year", gender: "masculine", number: "singular" }, "años": { t: "NOUN", cat: "Sustantivo común", en: "years", gender: "masculine", number: "plural" },
  "alto": { t: "ADJECTIVE", cat: "Adjetivo calificativo", en: "tall", gender: "masculine", number: "singular" }, "alta": { t: "ADJECTIVE", cat: "Adjetivo calificativo", en: "tall", gender: "feminine", number: "singular" }, "altos": { t: "ADJECTIVE", cat: "Adjetivo calificativo", en: "tall", gender: "masculine", number: "plural" }, "altas": { t: "ADJECTIVE", cat: "Adjetivo calificativo", en: "tall", gender: "feminine", number: "plural" },
  "bajo": { t: "ADJECTIVE", cat: "Adjetivo calificativo", en: "short", gender: "masculine", number: "singular" }, "baja": { t: "ADJECTIVE", cat: "Adjetivo calificativo", en: "short", gender: "feminine", number: "singular" }, "bajos": { t: "ADJECTIVE", cat: "Adjetivo calificativo", en: "short", gender: "masculine", number: "plural" }, "bajas": { t: "ADJECTIVE", cat: "Adjetivo calificativo", en: "short", gender: "feminine", number: "plural" },
  "corto": { t: "ADJECTIVE", cat: "Adjetivo calificativo", en: "short", gender: "masculine", number: "singular" }, "corta": { t: "ADJECTIVE", cat: "Adjetivo calificativo", en: "short", gender: "feminine", number: "singular" }, "cortos": { t: "ADJECTIVE", cat: "Adjetivo calificativo", en: "short", gender: "masculine", number: "plural" }, "cortas": { t: "ADJECTIVE", cat: "Adjetivo calificativo", en: "short", gender: "feminine", number: "plural" },
  "largo": { t: "ADJECTIVE", cat: "Adjetivo calificativo", en: "long", gender: "masculine", number: "singular" }, "larga": { t: "ADJECTIVE", cat: "Adjetivo calificativo", en: "long", gender: "feminine", number: "singular" }, "largos": { t: "ADJECTIVE", cat: "Adjetivo calificativo", en: "long", gender: "masculine", number: "plural" }, "largas": { t: "ADJECTIVE", cat: "Adjetivo calificativo", en: "long", gender: "feminine", number: "plural" },
  "frío": { t: "ADJECTIVE", cat: "Adjetivo calificativo", en: "cold", gender: "masculine", number: "singular" }, "fría": { t: "ADJECTIVE", cat: "Adjetivo calificativo", en: "cold", gender: "feminine", number: "singular" }, "fríos": { t: "ADJECTIVE", cat: "Adjetivo calificativo", en: "cold", gender: "masculine", number: "plural" }, "frías": { t: "ADJECTIVE", cat: "Adjetivo calificativo", en: "cold", gender: "feminine", number: "plural" },
  "caliente": { t: "ADJECTIVE", cat: "Adjetivo calificativo", en: "hot", gender: "any", number: "singular" }, "calientes": { t: "ADJECTIVE", cat: "Adjetivo calificativo", en: "hot", gender: "any", number: "plural" },
  "cálido": { t: "ADJECTIVE", cat: "Adjetivo calificativo", en: "warm", gender: "masculine", number: "singular" }, "cálida": { t: "ADJECTIVE", cat: "Adjetivo calificativo", en: "warm", gender: "feminine", number: "singular" }, "cálidos": { t: "ADJECTIVE", cat: "Adjetivo calificativo", en: "warm", gender: "masculine", number: "plural" }, "cálidas": { t: "ADJECTIVE", cat: "Adjetivo calificativo", en: "warm", gender: "feminine", number: "plural" },
  "fresco": { t: "ADJECTIVE", cat: "Adjetivo calificativo", en: "cool", gender: "masculine", number: "singular" }, "fresca": { t: "ADJECTIVE", cat: "Adjetivo calificativo", en: "cool", gender: "feminine", number: "singular" }, "frescos": { t: "ADJECTIVE", cat: "Adjetivo calificativo", en: "cool", gender: "masculine", number: "plural" }, "frescas": { t: "ADJECTIVE", cat: "Adjetivo calificativo", en: "cool", gender: "feminine", number: "plural" },
  "oscuro": { t: "ADJECTIVE", cat: "Adjetivo calificativo", en: "dark", gender: "masculine", number: "singular" }, "oscura": { t: "ADJECTIVE", cat: "Adjetivo calificativo", en: "dark", gender: "feminine", number: "singular" }, "oscuros": { t: "ADJECTIVE", cat: "Adjetivo calificativo", en: "dark", gender: "masculine", number: "plural" }, "oscuras": { t: "ADJECTIVE", cat: "Adjetivo calificativo", en: "dark", gender: "feminine", number: "plural" },
  "claro": { t: "ADJECTIVE", cat: "Adjetivo calificativo", en: "clear", gender: "masculine", number: "singular" }, "clara": { t: "ADJECTIVE", cat: "Adjetivo calificativo", en: "clear", gender: "feminine", number: "singular" }, "claros": { t: "ADJECTIVE", cat: "Adjetivo calificativo", en: "clear", gender: "masculine", number: "plural" }, "claras": { t: "ADJECTIVE", cat: "Adjetivo calificativo", en: "clear", gender: "feminine", number: "plural" },
  "débil": { t: "ADJECTIVE", cat: "Adjetivo calificativo", en: "weak", gender: "any", number: "singular" }, "débiles": { t: "ADJECTIVE", cat: "Adjetivo calificativo", en: "weak", gender: "any", number: "plural" },
  "caro": { t: "ADJECTIVE", cat: "Adjetivo calificativo", en: "expensive", gender: "masculine", number: "singular" }, "cara": { t: "ADJECTIVE", cat: "Adjetivo calificativo", en: "expensive", gender: "feminine", number: "singular" }, "caros": { t: "ADJECTIVE", cat: "Adjetivo calificativo", en: "expensive", gender: "masculine", number: "plural" }, "caras": { t: "ADJECTIVE", cat: "Adjetivo calificativo", en: "expensive", gender: "feminine", number: "plural" },
  "barato": { t: "ADJECTIVE", cat: "Adjetivo calificativo", en: "cheap", gender: "masculine", number: "singular" }, "barata": { t: "ADJECTIVE", cat: "Adjetivo calificativo", en: "cheap", gender: "feminine", number: "singular" }, "baratos": { t: "ADJECTIVE", cat: "Adjetivo calificativo", en: "cheap", gender: "masculine", number: "plural" }, "baratas": { t: "ADJECTIVE", cat: "Adjetivo calificativo", en: "cheap", gender: "feminine", number: "plural" },
  "rico": { t: "ADJECTIVE", cat: "Adjetivo calificativo", en: "rich", gender: "masculine", number: "singular" }, "rica": { t: "ADJECTIVE", cat: "Adjetivo calificativo", en: "rich", gender: "feminine", number: "singular" }, "ricos": { t: "ADJECTIVE", cat: "Adjetivo calificativo", en: "rich", gender: "masculine", number: "plural" }, "ricas": { t: "ADJECTIVE", cat: "Adjetivo calificativo", en: "rich", gender: "feminine", number: "plural" },
  "pobre": { t: "ADJECTIVE", cat: "Adjetivo calificativo", en: "poor", gender: "any", number: "singular" }, "pobres": { t: "ADJECTIVE", cat: "Adjetivo calificativo", en: "poor", gender: "any", number: "plural" },
  "lleno": { t: "ADJECTIVE", cat: "Adjetivo calificativo", en: "full", gender: "masculine", number: "singular" }, "llena": { t: "ADJECTIVE", cat: "Adjetivo calificativo", en: "full", gender: "feminine", number: "singular" }, "llenos": { t: "ADJECTIVE", cat: "Adjetivo calificativo", en: "full", gender: "masculine", number: "plural" }, "llenas": { t: "ADJECTIVE", cat: "Adjetivo calificativo", en: "full", gender: "feminine", number: "plural" },
  "vacío": { t: "ADJECTIVE", cat: "Adjetivo calificativo", en: "empty", gender: "masculine", number: "singular" }, "vacía": { t: "ADJECTIVE", cat: "Adjetivo calificativo", en: "empty", gender: "feminine", number: "singular" }, "vacíos": { t: "ADJECTIVE", cat: "Adjetivo calificativo", en: "empty", gender: "masculine", number: "plural" }, "vacías": { t: "ADJECTIVE", cat: "Adjetivo calificativo", en: "empty", gender: "feminine", number: "plural" },
  "listo": { t: "ADJECTIVE", cat: "Adjetivo calificativo", en: "ready", gender: "masculine", number: "singular" }, "lista": { t: "ADJECTIVE", cat: "Adjetivo calificativo", en: "ready", gender: "feminine", number: "singular" }, "listos": { t: "ADJECTIVE", cat: "Adjetivo calificativo", en: "ready", gender: "masculine", number: "plural" }, "listas": { t: "ADJECTIVE", cat: "Adjetivo calificativo", en: "ready", gender: "feminine", number: "plural" },
  "cansado": { t: "ADJECTIVE", cat: "Adjetivo calificativo", en: "tired", gender: "masculine", number: "singular" }, "cansada": { t: "ADJECTIVE", cat: "Adjetivo calificativo", en: "tired", gender: "feminine", number: "singular" }, "cansados": { t: "ADJECTIVE", cat: "Adjetivo calificativo", en: "tired", gender: "masculine", number: "plural" }, "cansadas": { t: "ADJECTIVE", cat: "Adjetivo calificativo", en: "tired", gender: "feminine", number: "plural" },
  "ocupado": { t: "ADJECTIVE", cat: "Adjetivo calificativo", en: "busy", gender: "masculine", number: "singular" }, "ocupada": { t: "ADJECTIVE", cat: "Adjetivo calificativo", en: "busy", gender: "feminine", number: "singular" }, "ocupados": { t: "ADJECTIVE", cat: "Adjetivo calificativo", en: "busy", gender: "masculine", number: "plural" }, "ocupadas": { t: "ADJECTIVE", cat: "Adjetivo calificativo", en: "busy", gender: "feminine", number: "plural" },
  "libre": { t: "ADJECTIVE", cat: "Adjetivo calificativo", en: "free", gender: "any", number: "singular" }, "libres": { t: "ADJECTIVE", cat: "Adjetivo calificativo", en: "free", gender: "any", number: "plural" },
  "peligroso": { t: "ADJECTIVE", cat: "Adjetivo calificativo", en: "dangerous", gender: "masculine", number: "singular" }, "peligrosa": { t: "ADJECTIVE", cat: "Adjetivo calificativo", en: "dangerous", gender: "feminine", number: "singular" }, "peligrosos": { t: "ADJECTIVE", cat: "Adjetivo calificativo", en: "dangerous", gender: "masculine", number: "plural" }, "peligrosas": { t: "ADJECTIVE", cat: "Adjetivo calificativo", en: "dangerous", gender: "feminine", number: "plural" },
  "va": { t: "VERB", cat: "Verbo conjugado", en: "goes", person: 3, number: "singular" }, "van": { t: "VERB", cat: "Verbo conjugado", en: "go", person: 3, number: "plural" },
  "viene": { t: "VERB", cat: "Verbo conjugado", en: "comes", person: 3, number: "singular" }, "vienen": { t: "VERB", cat: "Verbo conjugado", en: "come", person: 3, number: "plural" },
  "llega": { t: "VERB", cat: "Verbo conjugado", en: "arrives", person: 3, number: "singular" }, "llegan": { t: "VERB", cat: "Verbo conjugado", en: "arrive", person: 3, number: "plural" },
  "sale": { t: "VERB", cat: "Verbo conjugado", en: "leaves", person: 3, number: "singular" }, "salen": { t: "VERB", cat: "Verbo conjugado", en: "leave", person: 3, number: "plural" },
  "entra": { t: "VERB", cat: "Verbo conjugado", en: "enters", person: 3, number: "singular" }, "entran": { t: "VERB", cat: "Verbo conjugado", en: "enter", person: 3, number: "plural" },
  "caminan": { t: "VERB", cat: "Verbo conjugado", en: "walk", person: 3, number: "plural" }, "corren": { t: "VERB", cat: "Verbo conjugado", en: "run", person: 3, number: "plural" }, "comen": { t: "VERB", cat: "Verbo conjugado", en: "eat", person: 3, number: "plural" }, "beben": { t: "VERB", cat: "Verbo conjugado", en: "drink", person: 3, number: "plural" },
  "cocinan": { t: "VERB", cat: "Verbo conjugado", en: "cook", person: 3, number: "plural" }, "limpian": { t: "VERB", cat: "Verbo conjugado", en: "clean", person: 3, number: "plural" }, "lava": { t: "VERB", cat: "Verbo conjugado", en: "washes", person: 3, number: "singular" }, "lavan": { t: "VERB", cat: "Verbo conjugado", en: "wash", person: 3, number: "plural" },
  "juega": { t: "VERB", cat: "Verbo conjugado", en: "plays", person: 3, number: "singular" }, "juegan": { t: "VERB", cat: "Verbo conjugado", en: "play", person: 3, number: "plural" },
  "ayuda": { t: "VERB", cat: "Verbo conjugado", en: "helps", person: 3, number: "singular" }, "ayudan": { t: "VERB", cat: "Verbo conjugado", en: "help", person: 3, number: "plural" },
  "llama": { t: "VERB", cat: "Verbo conjugado", en: "calls", person: 3, number: "singular" }, "llaman": { t: "VERB", cat: "Verbo conjugado", en: "call", person: 3, number: "plural" },
  "responde": { t: "VERB", cat: "Verbo conjugado", en: "answers", person: 3, number: "singular" }, "responden": { t: "VERB", cat: "Verbo conjugado", en: "answer", person: 3, number: "plural" },
  "preguntan": { t: "VERB", cat: "Verbo conjugado", en: "ask", person: 3, number: "plural" }, "explica": { t: "VERB", cat: "Verbo conjugado", en: "explains", person: 3, number: "singular" }, "explican": { t: "VERB", cat: "Verbo conjugado", en: "explain", person: 3, number: "plural" },
  "escucha": { t: "VERB", cat: "Verbo conjugado", en: "listens", person: 3, number: "singular" }, "escuchan": { t: "VERB", cat: "Verbo conjugado", en: "listen", person: 3, number: "plural" },
  "oye": { t: "VERB", cat: "Verbo conjugado", en: "hears", person: 3, number: "singular" }, "oyen": { t: "VERB", cat: "Verbo conjugado", en: "hear", person: 3, number: "plural" },
  "piensa": { t: "VERB", cat: "Verbo conjugado", en: "thinks", person: 3, number: "singular" }, "piensan": { t: "VERB", cat: "Verbo conjugado", en: "think", person: 3, number: "plural" },
  "sabe": { t: "VERB", cat: "Verbo conjugado", en: "knows", person: 3, number: "singular" }, "saben": { t: "VERB", cat: "Verbo conjugado", en: "know", person: 3, number: "plural" },
  "encuentra": { t: "VERB", cat: "Verbo conjugado", en: "finds", person: 3, number: "singular" }, "encuentran": { t: "VERB", cat: "Verbo conjugado", en: "find", person: 3, number: "plural" },
  "busca": { t: "VERB", cat: "Verbo conjugado", en: "searches", person: 3, number: "singular" }, "buscan": { t: "VERB", cat: "Verbo conjugado", en: "search", person: 3, number: "plural" },
  "espera": { t: "VERB", cat: "Verbo conjugado", en: "waits", person: 3, number: "singular" }, "esperan": { t: "VERB", cat: "Verbo conjugado", en: "wait", person: 3, number: "plural" },
  "termina": { t: "VERB", cat: "Verbo conjugado", en: "finishes", person: 3, number: "singular" }, "terminan": { t: "VERB", cat: "Verbo conjugado", en: "finish", person: 3, number: "plural" },
  "empieza": { t: "VERB", cat: "Verbo conjugado", en: "starts", person: 3, number: "singular" }, "empiezan": { t: "VERB", cat: "Verbo conjugado", en: "start", person: 3, number: "plural" },
  "cambia": { t: "VERB", cat: "Verbo conjugado", en: "changes", person: 3, number: "singular" }, "cambian": { t: "VERB", cat: "Verbo conjugado", en: "change", person: 3, number: "plural" },
  "elige": { t: "VERB", cat: "Verbo conjugado", en: "chooses", person: 3, number: "singular" }, "eligen": { t: "VERB", cat: "Verbo conjugado", en: "choose", person: 3, number: "plural" },
  "me": { t: "PRONOUN", cat: "Pronombre", en: "me" }, "nos": { t: "PRONOUN", cat: "Pronombre", en: "us" }, "les": { t: "PRONOUN", cat: "Pronombre", en: "them" },
  "mío": { t: "POSSESSIVE", cat: "Posesivo", en: "mine" }, "mía": { t: "POSSESSIVE", cat: "Posesivo", en: "mine" }, "míos": { t: "POSSESSIVE", cat: "Posesivo", en: "mine" }, "mías": { t: "POSSESSIVE", cat: "Posesivo", en: "mine" },
  "tuyo": { t: "POSSESSIVE", cat: "Posesivo", en: "yours" }, "tuya": { t: "POSSESSIVE", cat: "Posesivo", en: "yours" }, "tuyos": { t: "POSSESSIVE", cat: "Posesivo", en: "yours" }, "tuyas": { t: "POSSESSIVE", cat: "Posesivo", en: "yours" },
  "suyo": { t: "POSSESSIVE", cat: "Posesivo", en: "theirs" }, "suya": { t: "POSSESSIVE", cat: "Posesivo", en: "theirs" }, "suyos": { t: "POSSESSIVE", cat: "Posesivo", en: "theirs" }, "suyas": { t: "POSSESSIVE", cat: "Posesivo", en: "theirs" },
  "bien": { t: "ADVERB", cat: "Adverbio", en: "well" }, "mal": { t: "ADVERB", cat: "Adverbio", en: "badly" }, "temprano": { t: "ADVERB", cat: "Adverbio", en: "early" }, "pronto": { t: "ADVERB", cat: "Adverbio", en: "soon" }, "lejos": { t: "ADVERB", cat: "Adverbio", en: "far" }, "cerca": { t: "ADVERB", cat: "Adverbio", en: "near" }, "adentro": { t: "ADVERB", cat: "Adverbio", en: "inside" }, "afuera": { t: "ADVERB", cat: "Adverbio", en: "outside" }, "arriba": { t: "ADVERB", cat: "Adverbio", en: "above" }, "abajo": { t: "ADVERB", cat: "Adverbio", en: "below" }, "antes": { t: "ADVERB", cat: "Adverbio", en: "before" }, "casi": { t: "ADVERB", cat: "Adverbio", en: "almost" }, "solo": { t: "ADVERB", cat: "Adverbio", en: "only" }, "también": { t: "ADVERB", cat: "Adverbio", en: "also" },
  "rápidas": { t: "ADJECTIVE", cat: "Adjetivo calificativo", en: "fast", gender: "feminine", number: "plural" }, "está": { t: "VERB", cat: "Verbo conjugado", en: "is", person: 3, number: "singular" }
});

Object.assign(phraseDictionary.es, {
  "buen día": "good day",
  "hasta pronto": "see you soon",
  "nos vemos": "see you",
  "te quiero": "i love you",
  "lo siento": "i am sorry",
  "perdón": "sorry",
  "no entiendo": "i do not understand",
  "entiendo": "i understand",
  "tengo una pregunta": "i have a question",
  "necesito ayuda": "i need help",
  "estoy cansada": "i am tired",
  "estoy ocupada": "i am busy",
  "estoy lista": "i am ready",
  "muy bien": "very well",
  "gracias por tu ayuda": "thank you for your help"
});

Object.assign(phraseDictionary.en, {
  "good day": "buen día",
  "see you soon": "hasta pronto",
  "see you": "nos vemos",
  "i love you": "te quiero",
  "i am sorry": "lo siento",
  "sorry": "perdón",
  "i do not understand": "no entiendo",
  "i understand": "entiendo",
  "i have a question": "tengo una pregunta",
  "i need help": "necesito ayuda",
  "i am tired": "estoy cansada",
  "i am busy": "estoy ocupada",
  "i am ready": "estoy lista",
  "very well": "muy bien",
  "thank you for your help": "gracias por tu ayuda"
});

const dom = {
  sourceInput: document.getElementById("sourceInput"),
  languageMode: document.getElementById("languageMode"),
  compileButton: document.getElementById("compileButton"),
  clearButton: document.getElementById("clearButton"),
  fileInput: document.getElementById("fileInput"),
  micButton: document.getElementById("micButton"),
  translationOutput: document.getElementById("translationOutput"),
  tokensBody: document.getElementById("tokensBody"),
  errorsBody: document.getElementById("errorsBody"),
  syntaxTree: document.getElementById("syntaxTree"),
  statusPill: document.getElementById("statusPill")
};

let recognition = null;
let isListening = false;

function getDirection() {
  const mode = dom.languageMode.value;
  return mode === "en-es" ? { from: "en", to: "es" } : { from: "es", to: "en" };
}

function normalizeLexeme(value) {
  return value.toLowerCase().trim();
}

function lexer(sourceText, fromLanguage) {
  const errors = [];
  const tokens = [];
  const tokenRegex = /[A-Za-zÁÉÍÓÚÜÑáéíóúüñ]+|[¿?¡!.;,]/gu;
  const allowedFullText = /^([A-Za-zÁÉÍÓÚÜÑáéíóúüñ]+|[¿?¡!.;,]|\s)+$/u;

  if (!sourceText.trim()) {
    errors.push({ type: "Léxico", location: "Línea 1 / Palabra 0", description: "El programa fuente está vacío." });
    return { tokens, errors };
  }

  if (!allowedFullText.test(sourceText)) {
    errors.push({ type: "Léxico", location: "Entrada general", description: "El texto contiene caracteres no permitidos. Solo se aceptan letras, espacios y signos básicos de puntuación." });
  }

  const lines = sourceText.split(/\n/);
  lines.forEach((line, lineIndex) => {
    const matches = [...line.matchAll(tokenRegex)];
    matches.forEach((match, wordIndex) => {
      const raw = match[0];
      const lexeme = normalizeLexeme(raw);
      const position = `Línea ${lineIndex + 1} / Palabra ${wordIndex + 1}`;

      if (/^[¿?¡!.;,]$/u.test(lexeme)) {
        tokens.push({ lexeme: raw, token: "PUNCTUATION", category: "Signo de puntuación", translation: raw, line: lineIndex + 1, word: wordIndex + 1 });
        return;
      }

      const entry = dictionary[fromLanguage][lexeme];
      if (!entry) {
        errors.push({ type: "Léxico", location: position, description: `El lexema "${raw}" no existe en el diccionario bilingüe precargado.` });
        tokens.push({ lexeme: raw, token: "UNKNOWN", category: "No reconocido", translation: "—", line: lineIndex + 1, word: wordIndex + 1, failed: true });
        return;
      }

      tokens.push({
        lexeme: raw,
        key: lexeme,
        token: entry.t,
        category: entry.cat,
        translation: entry[fromLanguage === "en" ? "es" : "en"],
        meta: entry,
        line: lineIndex + 1,
        word: wordIndex + 1
      });
    });
  });

  return { tokens, errors };
}

function splitSentences(tokens) {
  const sentences = [];
  let current = [];
  tokens.forEach(token => {
    current.push(token);
    if ([".", "?", "!"].includes(token.lexeme) && current.length > 0) {
      sentences.push(current);
      current = [];
    }
  });
  if (current.length) sentences.push(current);
  return sentences;
}

function makeNode(label, children = [], failed = false) {
  return { label, children, failed };
}

function parser(tokens) {
  const errors = [];
  const root = makeNode("Programa", []);
  const sentences = splitSentences(tokens.filter(t => t.token !== "UNKNOWN"));

  if (!sentences.length) {
    errors.push({ type: "Sintáctico", location: "Entrada general", description: "No se encontró ninguna entrada válida para analizar." });
    return { tree: root, errors, sentences: [] };
  }

  sentences.forEach((sentence, sentenceIndex) => {
    const sentenceNode = makeNode(`Oración ${sentenceIndex + 1}`, []);
    root.children.push(sentenceNode);
    const words = sentence.filter(t => t.token !== "PUNCTUATION");
    const punctuation = sentence.filter(t => t.token === "PUNCTUATION");
    const verbIndex = words.findIndex(t => t.token === "VERB");

    if (verbIndex === -1) {
      sentenceNode.children.push(makeNode("Término Simple / Frase Aislada", words.map(t => makeNode(`${t.token}: ${t.lexeme}`))));
      punctuation.forEach(p => sentenceNode.children.push(makeNode(`Puntuación: ${p.lexeme}`)));
      return;
    }

    if (!punctuation.length || ![".", "?", "!"].includes(punctuation[punctuation.length - 1].lexeme)) {
      errors.push({ type: "Sintáctico", location: `Oración ${sentenceIndex + 1}`, description: "La oración debe finalizar con punto, signo de interrogación o signo de exclamación." });
      sentenceNode.children.push(makeNode("Falla: falta puntuación final", [], true));
    }

    const subjectTokens = words.slice(0, verbIndex);
    const predicateTokens = words.slice(verbIndex);

    if (!subjectTokens.length) {
      errors.push({ type: "Sintáctico", location: `Línea ${words[verbIndex].line} / Palabra ${words[verbIndex].word}`, description: "La oración inicia con verbo y carece de sujeto explícito." });
      sentenceNode.children.push(makeNode("Falla: sujeto ausente", [], true));
      sentenceNode.children.push(makeVerbPhraseNode(predicateTokens));
      return;
    }

    const subjectValidation = validateNounPhrase(subjectTokens);
    if (!subjectValidation.ok) {
      errors.push({ type: "Sintáctico", location: subjectValidation.location, description: subjectValidation.message });
      sentenceNode.children.push(makePartialPhraseNode("Sintagma nominal con falla", subjectTokens, true));
    } else {
      sentenceNode.children.push(makeNounPhraseNode(subjectTokens));
    }

    sentenceNode.children.push(makeVerbPhraseNode(predicateTokens));
    punctuation.forEach(p => sentenceNode.children.push(makeNode(`Puntuación: ${p.lexeme}`)));
  });

  return { tree: root, errors, sentences };
}

function validateNounPhrase(tokens) {
  const allowedBeforeNoun = ["ARTICLE", "DEMONSTRATIVE", "POSSESSIVE", "INDEFINITE", "NUMERAL", "ADJECTIVE", "PRONOUN"];
  const nounIndex = tokens.findIndex(t => t.token === "NOUN" || t.token === "PRONOUN");
  if (nounIndex === -1) {
    return { ok: false, location: `Línea ${tokens[0]?.line || 1} / Palabra ${tokens[0]?.word || 1}`, message: "El sintagma nominal debe contener un sustantivo o pronombre." };
  }
  for (let i = 0; i < nounIndex; i++) {
    if (!allowedBeforeNoun.includes(tokens[i].token)) {
      return { ok: false, location: `Línea ${tokens[i].line} / Palabra ${tokens[i].word}`, message: `El token ${tokens[i].token} no puede aparecer antes del núcleo nominal.` };
    }
  }
  return { ok: true };
}

function makeNounPhraseNode(tokens) {
  return makeNode("Sintagma nominal", tokens.map(t => makeNode(`${t.token}: ${t.lexeme}`)));
}

function makeVerbPhraseNode(tokens) {
  return makeNode("Sintagma verbal", tokens.map(t => makeNode(`${t.token}: ${t.lexeme}`)));
}

function makePartialPhraseNode(label, tokens, failed) {
  return makeNode(label, tokens.map(t => makeNode(`${t.token}: ${t.lexeme}`, [], Boolean(t.failed))), failed);
}

function semanticAnalysis(sentences, fromLanguage) {
  const errors = [];
  if (fromLanguage !== "es") return errors;

  sentences.forEach((sentence, sentenceIndex) => {
    const words = sentence.filter(t => t.token !== "PUNCTUATION");
    const verbIndex = words.findIndex(t => t.token === "VERB");
    const subjectTokens = verbIndex === -1 ? words : words.slice(0, verbIndex);
    const noun = subjectTokens.find(t => t.token === "NOUN");
    if (!noun) return;
    if (!words.some(t => t.token === "VERB")) return;

    const modifiers = subjectTokens.filter(t => ["ARTICLE", "DEMONSTRATIVE", "POSSESSIVE", "INDEFINITE", "ADJECTIVE"].includes(t.token));
    modifiers.forEach(modifier => {
      const compatibleGender = modifier.meta.gender === "any" || noun.meta.gender === "any" || modifier.meta.gender === noun.meta.gender || modifier.meta.gender === undefined;
      const compatibleNumber = modifier.meta.number === "any" || noun.meta.number === "any" || modifier.meta.number === noun.meta.number || modifier.meta.number === undefined;
      if (!compatibleGender || !compatibleNumber) {
        errors.push({
          type: "Semántico",
          location: `Línea ${modifier.line} / Palabra ${modifier.word}`,
          description: `Falla de concordancia en la oración ${sentenceIndex + 1}: "${modifier.lexeme}" no concuerda con "${noun.lexeme}" en género o número.`
        });
      }
    });
  });

  return errors;
}

function translate(tokens, fromLanguage) {
  const sentences = splitSentences(tokens.filter(t => t.token !== "UNKNOWN"));
  const targetKey = fromLanguage === "en" ? "es" : "en";

  return sentences.map(sentence => {
    const punctuation = sentence.findLast ? sentence.findLast(t => t.token === "PUNCTUATION") : [...sentence].reverse().find(t => t.token === "PUNCTUATION");
    const words = sentence.filter(t => t.token !== "PUNCTUATION");
    const translated = fromLanguage === "en" ? translateEnglishSentence(words, targetKey) : translateSpanishSentence(words, targetKey);
    return restorePunctuation(translated, punctuation?.lexeme || ".");
  }).join("\n");
}

function inflectSpanishAdjective(adjective, nounMeta = {}) {
  if (!adjective) return adjective;
  const base = adjective.toLowerCase();
  const nounGender = nounMeta.gender || "masculine";
  const nounNumber = nounMeta.number || "singular";
  const invariantGender = new Set(["azul", "verde", "grande", "feliz", "triste", "importante", "fuerte", "fácil", "difícil", "útil", "interesante", "simple", "joven", "inteligente", "digital", "profesional", "funcional", "eficiente", "disponible"]);

  let inflected = base;
  if (nounGender === "feminine" && !invariantGender.has(inflected)) {
    if (inflected.endsWith("o")) inflected = inflected.slice(0, -1) + "a";
    else if (inflected.endsWith("or")) inflected = inflected + "a";
    else if (/(án|ón|ín)$/u.test(inflected)) inflected = inflected + "a";
  }

  if (nounNumber === "plural") {
    if (inflected.endsWith("z")) inflected = inflected.slice(0, -1) + "ces";
    else if (/[aeiouáéíóú]$/u.test(inflected)) inflected = inflected + "s";
    else inflected = inflected + "es";
  }
  return inflected;
}

function adaptSpanishDeterminer(determinerToken, nounToken) {
  if (!determinerToken || !nounToken) return determinerToken?.translation || determinerToken?.lexeme || "";
  const key = determinerToken.key || determinerToken.lexeme?.toLowerCase();
  const gender = nounToken.meta?.gender === "feminine" ? "feminine" : "masculine";
  const number = nounToken.meta?.number === "plural" ? "plural" : "singular";
  const map = {
    the: { masculine: { singular: "el", plural: "los" }, feminine: { singular: "la", plural: "las" } },
    a: { masculine: { singular: "un" }, feminine: { singular: "una" } },
    an: { masculine: { singular: "un" }, feminine: { singular: "una" } },
    this: { masculine: { singular: "este" }, feminine: { singular: "esta" } },
    that: { masculine: { singular: "ese" }, feminine: { singular: "esa" } },
    these: { masculine: { plural: "estos" }, feminine: { plural: "estas" } },
    those: { masculine: { plural: "esos" }, feminine: { plural: "esas" } },
    some: { masculine: { plural: "algunos" }, feminine: { plural: "algunas" } },
    many: { masculine: { plural: "muchos" }, feminine: { plural: "muchas" } },
    few: { masculine: { plural: "pocos" }, feminine: { plural: "pocas" } },
    all: { masculine: { plural: "todos" }, feminine: { plural: "todas" } }
  };
  return map[key]?.[gender]?.[number] || determinerToken.translation || determinerToken.lexeme;
}

function adaptSpanishVerb(verbToken, subjectMeta = {}) {
  const baseVerb = (verbToken?.translation || verbToken?.lexeme || "").toLowerCase();
  const subjectNumber = subjectMeta?.number || "singular";
  if (!baseVerb || subjectNumber !== "plural") return baseVerb;

  const irregularPluralMap = {
    "es": "son",
    "está": "están",
    "estudia": "estudian",
    "trabaja": "trabajan",
    "usa": "usan",
    "necesita": "necesitan",
    "gestiona": "gestionan",
    "registra": "registran",
    "lee": "leen",
    "escribe": "escriben",
    "abre": "abren",
    "cierra": "cierran",
    "compra": "compran",
    "vende": "venden",
    "analiza": "analizan",
    "diseña": "diseñan",
    "desarrolla": "desarrollan",
    "crea": "crean",
    "construye": "construyen",
    "traduce": "traducen",
    "habla": "hablan",
    "aprende": "aprenden",
    "enseña": "enseñan"
  };

  if (irregularPluralMap[baseVerb]) return irregularPluralMap[baseVerb];
  if (baseVerb.endsWith("a")) return baseVerb.slice(0, -1) + "an";
  if (baseVerb.endsWith("e")) return baseVerb.slice(0, -1) + "en";
  return baseVerb;
}

function translateEnglishSentence(words, targetKey) {
  const result = [];
  let lastSubjectNounMeta = null;
  for (let i = 0; i < words.length; i++) {
    const current = words[i];
    const next = words[i + 1];
    const next2 = words[i + 2];

    if (["ARTICLE", "DEMONSTRATIVE", "INDEFINITE"].includes(current.token) && next?.token === "ADJECTIVE" && next2?.token === "NOUN") {
      result.push(adaptSpanishDeterminer(current, next2));
      result.push(next2.translation || next2.meta[targetKey] || next2.lexeme);
      result.push(inflectSpanishAdjective(next.translation || next.meta[targetKey] || next.lexeme, next2.meta || {}));
      lastSubjectNounMeta = next2.meta || null;
      i += 2;
      continue;
    }

    if (["ARTICLE", "DEMONSTRATIVE", "INDEFINITE"].includes(current.token) && next?.token === "NOUN") {
      result.push(adaptSpanishDeterminer(current, next));
      lastSubjectNounMeta = next.meta || null;
      continue;
    }

    if (current.token === "ADJECTIVE" && next?.token === "NOUN") {
      const nounTranslation = next.translation || next.meta[targetKey] || next.lexeme;
      const adjectiveTranslation = inflectSpanishAdjective(current.translation || current.meta[targetKey] || current.lexeme, next.meta || {});
      result.push(nounTranslation, adjectiveTranslation);
      lastSubjectNounMeta = next.meta || null;
      i++;
      continue;
    }

    if (current.token === "ADJECTIVE" && i > 0 && words[i - 1].token === "VERB" && lastSubjectNounMeta) {
      result.push(inflectSpanishAdjective(current.translation || current.meta[targetKey] || current.lexeme, lastSubjectNounMeta));
      continue;
    }

    if (current.token === "VERB") {
      result.push(adaptSpanishVerb(current, lastSubjectNounMeta));
      continue;
    }

    result.push(current.translation || current.meta[targetKey] || current.lexeme);
  }
  return result;
}

function translateSpanishSentence(words) {
  const result = [];
  for (let i = 0; i < words.length; i++) {
    const current = words[i];
    const next = words[i + 1];
    if (current.token === "NOUN" && next?.token === "ADJECTIVE") {
      result.push(next.translation, current.translation);
      i++;
    } else {
      let translated = current.translation || current.lexeme;
      if (translated === "a" && next) {
        const nextWord = (next.translation || next.lexeme || "").toLowerCase();
        if (/^[aeiou]/.test(nextWord)) translated = "an";
      }
      result.push(translated);
    }
  }
  return result;
}

function restorePunctuation(words, punctuation) {
  const sentence = words.join(" ").replace(/\s+/g, " ").trim();
  return sentence.charAt(0).toUpperCase() + sentence.slice(1) + punctuation;
}

function restorePhrasePunctuation(translatedText, originalText, targetLanguage) {
  const end = String(originalText || "").trim().match(/[?!\.]\s*$/u)?.[0]?.trim() || ".";
  const core = translatedText.charAt(0).toUpperCase() + translatedText.slice(1);
  if (targetLanguage === "es") {
    if (end === "?") return `¿${core}?`;
    if (end === "!") return `¡${core}!`;
  }
  return `${core}${end}`;
}

function translateKnownPhrase(sourceText, fromLanguage) {
  const raw = String(sourceText || "").trim();
  if (!raw) return null;
  const normalized = raw
    .toLowerCase()
    .replace(/^[¿¡\s]+/u, "")
    .replace(/[?¡!.,;:]+$/u, "")
    .trim();
  const translated = phraseDictionary[fromLanguage]?.[normalized];
  if (!translated) return null;
  const targetLanguage = fromLanguage === "en" ? "es" : "en";
  return restorePhrasePunctuation(translated, raw, targetLanguage);
}

function compileSource() {
  const { from } = getDirection();
  const sourceText = dom.sourceInput.value;

  const phraseTranslation = translateKnownPhrase(sourceText, from);
  if (phraseTranslation) {
    renderTokens([{ lexeme: sourceText.trim(), token: "PHRASE", category: "Frase reconocida", translation: phraseTranslation }]);
    renderErrors([]);
    renderSyntaxTree(makeNode("Programa", [makeNode("Frase reconocida", [makeNode(phraseTranslation)])]));
    dom.translationOutput.textContent = phraseTranslation;
    dom.translationOutput.className = "translation-box";
    updateStatus("Frase reconocida y traducida", "ok");
    return;
  }

  const lexResult = lexer(sourceText, from);
  let allErrors = [...lexResult.errors];
  let parseResult = { tree: makeNode("Programa", []), errors: [], sentences: [] };

  if (!lexResult.errors.length) {
    parseResult = parser(lexResult.tokens);
    allErrors = allErrors.concat(parseResult.errors);
  } else {
    parseResult.tree.children.push(makePartialPhraseNode("Análisis detenido por error léxico", lexResult.tokens, true));
  }

  if (!allErrors.length) {
    allErrors = allErrors.concat(semanticAnalysis(parseResult.sentences, from));
  }

  renderTokens(lexResult.tokens);
  renderErrors(allErrors);
  renderSyntaxTree(parseResult.tree);

  if (allErrors.length) {
    dom.translationOutput.textContent = "Síntesis bloqueada: corrija los errores registrados antes de traducir.";
    dom.translationOutput.className = "translation-box blocked";
    updateStatus(`${allErrors.length} error(es) detectado(s)`, "error");
    return;
  }

  dom.translationOutput.textContent = translate(lexResult.tokens, from);
  dom.translationOutput.className = "translation-box";
  updateStatus("Compilación exitosa", "ok");
}

function renderTokens(tokens) {
  if (!tokens.length) {
    dom.tokensBody.innerHTML = `<tr><td colspan="4" class="empty-cell">Sin tokens todavía.</td></tr>`;
    return;
  }
  dom.tokensBody.innerHTML = tokens.map(token => `
    <tr>
      <td>${escapeHtml(token.lexeme)}</td>
      <td>${escapeHtml(token.token)}</td>
      <td>${escapeHtml(token.category)}</td>
      <td>${escapeHtml(token.translation || "—")}</td>
    </tr>
  `).join("");
}

function renderErrors(errors) {
  if (!errors.length) {
    dom.errorsBody.innerHTML = `<tr><td colspan="3" class="empty-cell">Sin errores registrados.</td></tr>`;
    return;
  }
  dom.errorsBody.innerHTML = errors.map(error => `
    <tr>
      <td class="error-type">${escapeHtml(error.type)}</td>
      <td>${escapeHtml(error.location)}</td>
      <td>${escapeHtml(error.description)}</td>
    </tr>
  `).join("");
}

function renderSyntaxTree(tree) {
  const levels = [];
  function traverse(node, depth = 0, parentId = null) {
    const id = Math.random().toString(36).slice(2);
    if (!levels[depth]) levels[depth] = [];
    const record = { ...node, id, parentId, depth, x: 0, y: 0 };
    levels[depth].push(record);
    node.children.forEach(child => traverse(child, depth + 1, id));
  }
  traverse(tree);

  const width = Math.max(980, Math.max(...levels.map(level => level.length)) * 180);
  const height = Math.max(360, levels.length * 110);
  const nodes = levels.flatMap((level, depth) => level.map((node, index) => {
    const gap = width / (level.length + 1);
    return { ...node, x: gap * (index + 1), y: 54 + depth * 100 };
  }));

  const nodeMap = Object.fromEntries(nodes.map(n => [n.id, n]));
  const links = nodes.filter(n => n.parentId).map(n => {
    const parent = nodeMap[n.parentId];
    return `<line class="tree-link" x1="${parent.x}" y1="${parent.y + 20}" x2="${n.x}" y2="${n.y - 20}" />`;
  }).join("");

  const renderedNodes = nodes.map(n => `
    <g class="tree-node ${n.failed ? "failed" : ""}">
      <rect x="${n.x - 74}" y="${n.y - 22}" width="148" height="44"></rect>
      <text x="${n.x}" y="${n.y}">${escapeHtml(shorten(n.label, 20))}</text>
    </g>
  `).join("");

  dom.syntaxTree.className = "tree-canvas";
  dom.syntaxTree.innerHTML = `<svg class="syntax-svg" viewBox="0 0 ${width} ${height}" role="img" aria-label="Árbol sintáctico top-down">${links}${renderedNodes}</svg>`;
}

function shorten(text, max) {
  return text.length > max ? text.slice(0, max - 1) + "…" : text;
}

function updateStatus(message, mode) {
  dom.statusPill.textContent = message;
  dom.statusPill.className = `status-pill ${mode || ""}`;
}

function escapeHtml(value) {
  return String(value).replace(/[&<>'"]/g, char => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", "'": "&#39;", '"': "&quot;" }[char]));
}

function setupTabs() {
  document.querySelectorAll(".tab").forEach(tab => {
    tab.addEventListener("click", () => {
      document.querySelectorAll(".tab").forEach(t => t.classList.remove("active"));
      document.querySelectorAll(".tab-content").forEach(content => content.classList.remove("active"));
      tab.classList.add("active");
      document.getElementById(tab.dataset.tab).classList.add("active");
    });
  });
}

function setupFileLoader() {
  dom.fileInput.addEventListener("change", event => {
    const file = event.target.files[0];
    if (!file) return;
    if (!file.name.toLowerCase().endsWith(".txt")) {
      renderErrors([{ type: "Léxico", location: "Archivo", description: "Solo se aceptan archivos con extensión .txt." }]);
      updateStatus("Archivo no permitido", "error");
      return;
    }
    const reader = new FileReader();
    reader.onload = () => {
      dom.sourceInput.value = reader.result;
      compileSource();
    };
    reader.readAsText(file, "UTF-8");
  });
}

function setupSpeechRecognition() {
  const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
  if (!SpeechRecognition) {
    dom.micButton.disabled = true;
    dom.micButton.textContent = "🎙️ No soportado";
    return;
  }

  recognition = new SpeechRecognition();
  recognition.continuous = false;
  recognition.interimResults = true;

  recognition.onresult = event => {
    let transcript = "";
    for (let i = event.resultIndex; i < event.results.length; i++) {
      transcript += event.results[i][0].transcript;
    }
    dom.sourceInput.value = transcript.trim();
    compileSource();
  };

  recognition.onend = () => {
    isListening = false;
    dom.micButton.classList.remove("listening");
    dom.micButton.textContent = "🎙️ Micrófono";
  };

  recognition.onerror = event => {
    renderErrors([{ type: "Léxico", location: "Micrófono", description: `Error del reconocimiento de voz: ${event.error}` }]);
    updateStatus("Error de micrófono", "error");
  };

  dom.micButton.addEventListener("click", () => {
    if (isListening) {
      recognition.stop();
      return;
    }
    const { from } = getDirection();
    recognition.lang = from === "en" ? "en-US" : "es-GT";
    recognition.start();
    isListening = true;
    dom.micButton.classList.add("listening");
    dom.micButton.textContent = "🎙️ Escuchando...";
    updateStatus("Capturando voz", "");
  });
}

dom.compileButton.addEventListener("click", compileSource);
dom.sourceInput.addEventListener("input", () => {
  window.clearTimeout(dom.sourceInput.dataset.timer);
  dom.sourceInput.dataset.timer = window.setTimeout(compileSource, 450);
});
dom.clearButton.addEventListener("click", () => {
  dom.sourceInput.value = "";
  dom.translationOutput.textContent = "La traducción aparecerá aquí cuando no existan errores.";
  dom.translationOutput.className = "translation-box empty";
  dom.tokensBody.innerHTML = `<tr><td colspan="4" class="empty-cell">Sin tokens todavía.</td></tr>`;
  dom.errorsBody.innerHTML = `<tr><td colspan="3" class="empty-cell">Sin errores registrados.</td></tr>`;
  dom.syntaxTree.textContent = "El árbol se dibujará después del análisis sintáctico.";
  dom.syntaxTree.className = "tree-canvas empty-tree";
  updateStatus("Esperando entrada", "");
});
dom.languageMode.addEventListener("change", compileSource);

setupTabs();
setupFileLoader();
setupSpeechRecognition();
