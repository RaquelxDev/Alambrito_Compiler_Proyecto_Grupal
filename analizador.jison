%{
function classifyWord(yytext, yy) {
  const lexeme = yytext.toLowerCase();
  const from = yy.fromLanguage || 'en';
  const dict = (yy.dictionary && yy.dictionary[from]) || {};
  const entry = dict[lexeme];
  if (!entry) {
    if (yy.tablaError) yy.tablaError.agregar('Léxico', 'Analizador Jison', `Lexema no reconocido: ${yytext}`);
    return 'UNKNOWN';
  }
  this.yytext = lexeme;
  this.yylval = { lexeme, token: entry.t, meta: entry };
  return entry.t;
}
%}

%lex
%%
\s+                           /* skip */
[¿?¡!.;,]                     return 'PUNCTUATION';
[A-Za-zÁÉÍÓÚÜÑáéíóúüñ]+       return classifyWord.call(this, yytext, yy);
<<EOF>>                       return 'EOF';
.                             return 'INVALID';
/lex

%start programa

%token ARTICLE DEMONSTRATIVE POSSESSIVE PRONOUN INTERROGATIVE CONJUNCTION PREPOSITION NUMERAL INDEFINITE NOUN ADJECTIVE VERB ADVERB CONTRACTION UNKNOWN PUNCTUATION EOF
%%
programa
  : entrada EOF { return $1; }
  ;

entrada
  : oracion_completa { $$ = { mode: 'SENTENCE', node: $1 }; }
  | termino_simple { $$ = { mode: 'SIMPLE_TERM', node: $1 }; }
  ;

oracion_completa
  : sintagma_nominal sintagma_verbal PUNCTUATION { $$ = { type: 'Sentence', subject: $1, predicate: $2, punctuation: $3 }; }
  ;

termino_simple
  : termino_lista PUNCTUATION { $$ = { type: 'SimpleTerm', tokens: $1, punctuation: $2 }; }
  | termino_lista { $$ = { type: 'SimpleTerm', tokens: $1, punctuation: '.' }; }
  ;

termino_lista
  : termino { $$ = [$1]; }
  | termino_lista termino { $1.push($2); $$ = $1; }
  ;

sintagma_nominal
  : termino_lista { $$ = $1; }
  ;

sintagma_verbal
  : VERB termino_lista { $$ = [$1].concat($2); }
  | VERB { $$ = [$1]; }
  ;

termino
  : ARTICLE | DEMONSTRATIVE | POSSESSIVE | PRONOUN | INTERROGATIVE | CONJUNCTION | PREPOSITION | NUMERAL | INDEFINITE | NOUN | ADJECTIVE | VERB | ADVERB | CONTRACTION
  ;
