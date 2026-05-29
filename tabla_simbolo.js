class TablaSimbolo {
  constructor() { this.scopes = [new Map()]; }
  entrarAmbito() { this.scopes.push(new Map()); }
  salirAmbito() { if (this.scopes.length > 1) this.scopes.pop(); }
  declarar(id, info) {
    const actual = this.scopes[this.scopes.length - 1];
    if (actual.has(id)) return false;
    actual.set(id, info);
    return true;
  }
  resolver(id) {
    for (let i = this.scopes.length - 1; i >= 0; i--) {
      if (this.scopes[i].has(id)) return this.scopes[i].get(id);
    }
    return null;
  }
}
module.exports = TablaSimbolo;
