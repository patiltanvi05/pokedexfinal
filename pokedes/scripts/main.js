const starters = {
  grass: ["bulbasaur","chikorita","treecko","turtwig","snivy","chespin","rowlet","grookey","sprigatito"],
  fire: ["charmander","cyndaquil","torchic","chimchar","tepig","fennekin","litten","scorbunny","fuecoco"],
  water: ["squirtle","totodile","mudkip","piplup","oshawott","froakie","popplio","sobble","quaxly"]
};

function loadStarters() {
  for (const type in starters) {
    const list = document.getElementById(`${type}-list`);
    starters[type].forEach(name => {
      const card = document.createElement("div");
      card.className = "pokemon-card";
      card.innerHTML = `
        <img src="https://img.pokemondb.net/artwork/large/${name}.jpg" alt="${name}">
        <h3>${name.charAt(0).toUpperCase() + name.slice(1)}</h3>
      `;
      list.appendChild(card);
    });
  }
}

loadStarters();
