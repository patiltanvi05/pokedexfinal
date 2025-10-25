
const mythicalPokemon = [
  "mew",
  "celebi",
  "jirachi",
  "deoxys",
  "manaphy",
  "darkrai",
  "shaymin",
  "victini",
  "genesect",
  "diancie",
  "hoopa",
  "volcanion",
  "magearna",
  "marshadow",
  "zeraora",
  "meltan",
  "melmetal",
  "zarude"
]
function createMythicalCard(name) {
  const div = document.createElement("div");
  div.className = "pokemon-card";
  div.innerHTML = `
    <img src="https://img.pokemondb.net/artwork/large/${name}.jpg" alt="${name}">
    <h3>${name.charAt(0).toUpperCase() + name.slice(1)}</h3>
  `;
  return div;
}
function loadMythicalPokemon() {
  const container = document.getElementById("mythical-list");
  mythicalPokemon.forEach(name => {
    const card = createMythicalCard(name);
    container.appendChild(card);
  });
}

document.addEventListener("DOMContentLoaded", loadMythicalPokemon);
