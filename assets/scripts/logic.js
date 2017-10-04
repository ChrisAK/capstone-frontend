'use strict'

const loopPokemon = function (data) {
  const pokemon = data.pokemons
  for (let i = 0; i < pokemon.length; i++) {
    if (pokemon[i].type2 === null) {
      $('#pokemon-list').find('.row').append(
        '<div class="col-xs-3 pokemon-info" id="' + pokemon[i].id + '">' +
          '<img class="pokemon-image" src="' + pokemon[i].image + '">' +
          '<h6 class="pokemon-number">' + pokemon[i].number + '</h6>' +
          '<h4 class="pokemon-name">' + pokemon[i].name + '</h4>' +
          '<p class="pokemon-types">' + pokemon[i].type1 + '</p>' +
        '</div>'
      )
    } else {
      $('#pokemon-list').find('.row').append(
        '<div class="col-xs-3 pokemon-info" id="' + pokemon[i].id + '">' +
          '<img class="pokemon-image" src="' + pokemon[i].image + '">' +
          '<h6 class="pokemon-number">' + pokemon[i].number + '</h6>' +
          '<h4 class="pokemon-name">' + pokemon[i].name + '</h4>' +
          '<p class="pokemon-types">' + pokemon[i].type1 + '/' + pokemon[i].type2 + '</p>' +
        '</div>'
      )
    }
  }
}

const addPokemon = function (event) {
  console.log(event)
}

const loopTeams = function (data) {
  const teams = data.teams
  $('#teams-list').find('.row').empty()
  for (let i = 0; i < teams.length; i++) {
    $('#teams-list').find('.row').append(
      '<div class="col-xs-3 team-info" id="' + teams[i].id + '">' +
        '<h4 class="team-name">' + teams[i].name + '</h4>' +
        '<input type="button" name="submit" value="Get Team" class="btn btn-default get-pokemon-on-team" id="' + teams[i].id + '">' +
      '</div>'
    )
  }
}

module.exports = {
  loopPokemon,
  addPokemon,
  loopTeams
}
