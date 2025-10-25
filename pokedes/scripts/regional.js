const regionalPokemon = [
 "raichu-alola",
  "ninetales-alola",
  "marowak-alola",
  "exeggutor-alola",

  
  "meowth-galar",
  "zigzagoon-galar",
  "ponyta-galar",
  "slowbro-galar",
  "weezing-galar",

  "growlithe-hisui",
  "zorua-hisui",
  "zoroark-hisui",
  "braviary-hisui",
  "lilligant-hisui",
  "sneasel-hisui",
  "samurott-hisui",
  "avalugg-hisui"
];
const pokemonIDs = {
  
  "raichu-alola": 10100,
  "ninetales-alola": 10103,
  "marowak-alola": 10105,
  "exeggutor-alola": 10107,

  
  "meowth-galar": 10158,
  "zigzagoon-galar": 10161,
  "ponyta-galar": 10163,
  "slowbro-galar": 10165,
  "weezing-galar": 10167,

  
  "growlithe-hisui": 10229,
  "zorua-hisui": 10231,
  "zoroark-hisui": 10232,
  "braviary-hisui": 10233,
  "lilligant-hisui": 10234,
  "sneasel-hisui": 10236,
  "samurott-hisui": 10237,
  "avalugg-hisui": 10238
};
function getPokemonId(name) {
  return pokemonIDs[name] || 1;
}
function formatName(name) {
  return name
    .split("-")
    .map(part => part.charAt(0).toUpperCase() + part.slice(1))
    .join(" ");
}
function createRegionalCard(name) {
  const id = getPokemonId(name);
  const div = document.createElement("div");
  div.className = "pokemon-card";
  div.innerHTML = `
    <img 
      src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${id}.png" 
      alt="${name}">
    <h3>${formatName(name)}</h3>
  `;
  return div;
}

function loadRegionalPokemon() {
  const container = document.getElementById("regional-list");
  regionalPokemon.forEach(name => {
    const card = createRegionalCard(name);
    container.appendChild(card);
  });
}
document.addEventListener("DOMContentLoaded", loadRegionalPokemon);
