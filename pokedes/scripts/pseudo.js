
const pseudoLegendaryPokemon = [
  "dragonite",
  "tyranitar",
  "salamence",
  "metagross",
  "garchomp",
  "hydreigon",
  "goodra",
  "kommo-o",
  "dragapult",
  "baxcalibur"
];
function createPseudoCard(name) {
  const div = document.createElement("div");
  div.className = "pokemon-card";
  div.innerHTML = `
    <img src="https://img.pokemondb.net/artwork/large/${name}.jpg" alt="${name}">
    <h3>${name.charAt(0).toUpperCase() + name.slice(1)}</h3>
  `;
  return div;
}
function loadPseudoLegendary() {
  const container = document.getElementById("pseudo-list");
  pseudoLegendaryPokemon.forEach(name => {
    const card = createPseudoCard(name);
    container.appendChild(card);
  });
}

document.addEventListener("DOMContentLoaded", loadPseudoLegendary);
