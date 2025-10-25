
const legendaryPokemon = [
  "articuno", "zapdos", "moltres",
  "mewtwo", "raikou", "entei", "suicune",
  "lugia", "ho-oh",
  "regirock", "regice", "registeel",
  "kyogre", "groudon", "rayquaza",
  "uxie", "mesprit", "azelf",
  "dialga", "palkia", "giratina",
  "heatran", "regigigas",
  "cresselia", "tornadus", "thundurus", "landorus",
  "xerneas", "yveltal", "zygarde",
  "solgaleo", "lunala", "necrozma",
  "zacian", "zamazenta", "eternatus",
  "koraidon", "miraidon"
];
function createLegendaryCard(name) {
  const div = document.createElement("div");
  div.className = "pokemon-card";
  div.innerHTML = `
    <img src="https://img.pokemondb.net/artwork/large/${name}.jpg" alt="${name}">
    <h3>${name.charAt(0).toUpperCase() + name.slice(1)}</h3>
  `;
  return div;
}
function loadLegendaryPokemon() {
  const container = document.getElementById("legendary-list");
  legendaryPokemon.forEach(name => {
    const card = createLegendaryCard(name);
    container.appendChild(card);
  });
}

document.addEventListener("DOMContentLoaded", loadLegendaryPokemon);
