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
          '<input type="button" name="submit" value="Add ' + pokemon[i].name + '" class="btn-xs btn-success add-pokemon-to-team" id="' + pokemon[i].id + '">' +
        '</div>'
      )
    } else {
      $('#pokemon-list').find('.row').append(
        '<div class="col-xs-3 pokemon-info" id="' + pokemon[i].id + '">' +
          '<img class="pokemon-image" src="' + pokemon[i].image + '">' +
          '<h6 class="pokemon-number">' + pokemon[i].number + '</h6>' +
          '<h4 class="pokemon-name">' + pokemon[i].name + '</h4>' +
          '<p class="pokemon-types">' + pokemon[i].type1 + '/' + pokemon[i].type2 + '</p>' +
          '<input type="button" name="submit" value="Add ' + pokemon[i].name + '" class="btn-xs btn-success add-pokemon-to-team" id="' + pokemon[i].id + '">' +
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
        '<input type="button" name="submit" value="Delete Team" class="btn btn-default delete-team" id="' + teams[i].id + '">' +
      '</div>'
    )
  }
}

const loopPokemonOnTeam = function (pokemonTeams) {
  $('#pokemon-team-list').find('.row').empty()
  $('#pokemon-team-list').find('.row').append(
    '<div class="team-name-header">' +
      '<h4>' + pokemonTeams[0].team.name + '</h4>' +
    '</div>'
  )
  for (let i = 0; i < pokemonTeams.length; i++) {
    const team = pokemonTeams[i]
    console.log(team.pokemon.name)
    $('#pokemon-team-list').find('.row').append(
      '<div class="team-pokemon-names">' +
        '<h5>' + team.pokemon.name + '</h5>' +
      '</div>'
    )
  }
}

const noPokemonError = function () {
  $('#pokemon-team-list').find('.row').empty()
  $('#pokemon-team-list').find('.row').append(
    '<div class="no-pokemon-error">' +
      '<h4>Sorry, there are no pokemon in this team!</h4>' +
    '</div>'
  )
}

const printTeamName = function (data) {
  const team = data.team
  $('#team-name').append(
    '<h2 id="' + team.id + '">' + team.name + '</h2>'
  )
}

module.exports = {
  loopPokemon,
  addPokemon,
  loopTeams,
  loopPokemonOnTeam,
  noPokemonError,
  printTeamName
}
