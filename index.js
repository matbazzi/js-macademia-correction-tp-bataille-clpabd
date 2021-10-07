import { Hero } from './hero';

const hercule = new Hero('Hercule', 'glaive');
const poseidon = new Hero('Poséidon', 'trident');

function bataille() {
  const attaquant = hercule;
  const defenseur = poseidon;

  attaquant.attaque(defenseur)
        .then(() => {
          return defenseur.attaque(attaquant);
        })
        .then(() => {
          console.log(`
            ${attaquant.nom}: ${attaquant.pdv}
            ${defenseur.nom}: ${defenseur.pdv}
          `)
          if(attaquant.pdv > 0 && defenseur.pdv > 0) {
            bataille();
          }
        });
}

bataille();