
export class Hero {
  _nom;

  constructor(nom, arme) {
    this.nom = nom;
    this.pdv = 100;
  }

  attaque(heroEnnemi) {
    const n = Math.random() * 1000;
    const degats = Math.floor(Math.random() * 30) + 10;
    const fail = (Math.random() < 0.1);

    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (!fail) {
          heroEnnemi.subirDegats(degats);
          console.log(`${this.nom} a fait subir ${degats} points de dégats à ${heroEnnemi.nom}`);
        } else {
          console.log(`${this.nom} a raté son coup !`);
        }

        resolve();
      }, n)
    });
  }

  subirDegats(degats) {
    this.pdv = this.pdv - degats;
  }

  /* GETTERS - SETTERS */
  get nom() {
    return this._nom;
  }

  set nom(newNom) {
    this._nom = newNom;
  }

  get pdv() {
    return this._pdv;
  }

  set pdv(newPdv) {
    this._pdv = newPdv;
  }
}
