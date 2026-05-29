class ASTNode {
  constructor(type, props = {}) { this.type = type; Object.assign(this, props); }
}
const Program = (sentences = []) => new ASTNode('Program', { sentences });
const Sentence = (subject, predicate, punctuation) => new ASTNode('Sentence', { subject, predicate, punctuation });
const Phrase = (kind, tokens = [], failed = false) => new ASTNode('Phrase', { kind, tokens, failed });
module.exports = { ASTNode, Program, Sentence, Phrase };
