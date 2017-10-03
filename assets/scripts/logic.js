'use strict'

const loopPokemon = function (data) {
  const pokemon = data.pokemons
  for (let i = 0; i < pokemon.length; i++) {
    $('#pokemon-list').find('.row').append(
      '<div class="col-xs-3">' +
        '<img id="pokemon-img" class="pokemon-image" src="' + pokemon[i].image + '">' +
        '<h5 class="pokemon-name">' + pokemon[i].name + '</h4>' +
        '<p class="pokemon-number">#:' + pokemon[i].number + '</p>' +
      '</div>'
    )
  }
}

module.exports = {
  loopPokemon
}
