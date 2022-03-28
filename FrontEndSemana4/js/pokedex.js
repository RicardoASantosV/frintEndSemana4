const fetchPokemon = () => {
    const pokeNameInput = document.getElementById("pokeName");
    let pokeName = pokeNameInput.value;
    pokeName = pokeName.toLowerCase();
    const url = `https://pokeapi.co/api/v2/pokemon/${pokeName}`;
    fetch(url).then((res) => {
        if (res.status != "200") {
            console.log(res);
            pokeImage("./pokemon-sad.gif")
          pokeAbilities(null)
          pokName(null)
        }
        else {
            return res.json();
        }
    }).then((data) => {
        if (data) {
          console.log(data);
            let pokeImg = data.sprites.front_default;
            let pokeName = pokeNameInput.value;
            pokeName = pokeName.toUpperCase();
            pokeImage(pokeImg);
            let abilityArray=data.abilities;
            pokeAbilities(abilityArray);
          console.log(pokeName);
            pokName(pokeName)
        }
    });
}

const pokeImage = (url) => { document.getElementById("apiImg").style.backgroundImage = "url('"+url+"')";
}

const pokeAbilities = (arrAbil) => {
  if(arrAbil==null){
    console.log("nullo");
      document.getElementById("moviPok").innerHTML ="";
     document.getElementById("movTitle").style.visibility = "hidden";
  }else{
  console.log('Si');
  var listAbi= "";
  for (var ability in arrAbil) {
    listAbi+="<li>" + (arrAbil.[ability].ability.name).toUpperCase()+ "</li>";
            }
  console.log(listAbi);
  document.getElementById("moviPok").innerHTML = listAbi;
    document.getElementById("movTitle").style.visibility = "visible";
    }
}

const pokName = (name) => {
  console.log("pokeName");
  if(name==null){
    console.log("nullo");
      document.getElementById("namePok").innerHTML ="";}else{
        console.log("pokeName2");
          document.getElementById("namePok").innerHTML = name;
      }
  }