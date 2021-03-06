var path  = require('path');
var http  = require('http');
var fs    = require('fs');

/**
 * Actually performs the image's download
 * @param  {[String]} name Image name
 * @return {}              Nothing
 */
function downloadImage(name, index) {
  var file = fs.createWriteStream(path.join(__dirname, '../front/images', name.toLowerCase() + '.png'));
  var url = 'http://www.pokexperto.net/nds/artwork/dreamworld/' + index + '.png';

  var request = http.get(url, function(response) {
    response.pipe(file);
  });
}

/**
 * Format pokemon name to get image name
 * TODO handle Mr. Mime and similar
 * @param  {[String]} name Pokemon name
 * @return {[String]}      Image name from pokemondb
 */
function getImageName(name) {
  return name.toLowerCase();
}

/**
 * Loop over pokemon names and fetch their image
 * @param  {[Array]} pokemonNames Array of pokemon names to get images for
 * @return {}                     Nothing
 */
function fetchArtworks(pokemonNames) {
  pokemonNames.forEach(function (name, index) {
    downloadImage(getImageName(name), index+1);
  });
}

// Let's start!
var pokemons = ["Bulbasaur","Ivysaur","Venusaur","Charmander","Charmeleon","Charizard","Squirtle","Wartortle","Blastoise","Caterpie","Metapod","Butterfree","Weedle","Kakuna","Beedrill","Pidgey","Pidgeotto","Pidgeot","Rattata","Raticate","Spearow","Fearow","Ekans","Arbok","Pikachu","Raichu","Sandshrew","Sandslash","Nidoran_f","Nidorina","Nidoqueen","Nidoran_m","Nidorino","Nidoking","Clefairy","Clefable","Vulpix","Ninetales","Jigglypuff","Wigglytuff","Zubat","Golbat","Oddish","Gloom","Vileplume","Paras","Parasect","Venonat","Venomoth","Diglett","Dugtrio","Meowth","Persian","Psyduck","Golduck","Mankey","Primeape","Growlithe","Arcanine","Poliwag","Poliwhirl","Poliwrath","Abra","Kadabra","Alakazam","Machop","Machoke","Machamp","Bellsprout","Weepinbell","Victreebel","Tentacool","Tentacruel","Geodude","Graveler","Golem","Ponyta","Rapidash","Slowpoke","Slowbro","Magnemite","Magneton","Farfetchd","Doduo","Dodrio","Seel","Dewgong","Grimer","Muk","Shellder","Cloyster","Gastly","Haunter","Gengar","Onix","Drowzee","Hypno","Krabby","Kingler","Voltorb","Electrode","Exeggcute","Exeggutor","Cubone","Marowak","Hitmonlee","Hitmonchan","Lickitung","Koffing","Weezing","Rhyhorn","Rhydon","Chansey","Tangela","Kangaskhan","Horsea","Seadra","Goldeen","Seaking","Staryu","Starmie","Mr_mime","Scyther","Jynx","Electabuzz","Magmar","Pinsir","Tauros","Magikarp","Gyarados","Lapras","Ditto","Eevee","Vaporeon","Jolteon","Flareon","Porygon","Omanyte","Omastar","Kabuto","Kabutops","Aerodactyl","Snorlax","Articuno","Zapdos","Moltres","Dratini","Dragonair","Dragonite","Mewtwo","Mew"];
fetchArtworks(pokemons);