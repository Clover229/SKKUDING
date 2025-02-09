const pokemon = JSON.parse(window.localStorage.getItem("pokemon")!);
console.log(pokemon);


const contentCard2=document.querySelector(".content")!;

const imgbox=document.createElement("div");
imgbox.classList.add("imgbox");
const profile=document.createElement("img");
profile.src = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${pokemon.id}.png`;
profile.alt = pokemon.name;
imgbox.append(profile); 


const table = document.createElement("table");
const tbody = document.createElement("tbody");
table.appendChild(tbody);

Object.keys(pokemon).forEach((key) => {
    const tr = document.createElement("tr");
    const td = document.createElement("td");
    td.innerText = key;
    const tdValue = document.createElement("td");
    tdValue.innerText = pokemon[key];
    tr.append(td, tdValue);
    tbody.appendChild(tr);
});
contentCard2.append(imgbox);
contentCard2.append(table);
