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
          '<input type="button" name="submit" value="Add ' + pokemon[i].name + '" class="btn-xs btn-default add-pokemon-to-team" id="' + pokemon[i].id + '">' +
        '</div>'
      )
    } else {
      $('#pokemon-list').find('.row').append(
        '<div class="col-xs-3 pokemon-info" id="' + pokemon[i].id + '">' +
          '<img class="pokemon-image" src="' + pokemon[i].image + '">' +
          '<h6 class="pokemon-number">' + pokemon[i].number + '</h6>' +
          '<h4 class="pokemon-name">' + pokemon[i].name + '</h4>' +
          '<p class="pokemon-types">' + pokemon[i].type1 + '/' + pokemon[i].type2 + '</p>' +
          '<input type="button" name="submit" value="Add ' + pokemon[i].name + '" class="btn-xs btn-default add-pokemon-to-team" id="' + pokemon[i].id + '">' +
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
        '<form class="change-team-name-form" id="' + teams[i].id + '">' +
          '<div class="form-group">' +
            '<label>Edit Name</label>' +
            '<input type="text" name="team[name]" value="" placeholder="New Name" id="change-team-new-name">' +
            '<input type="submit" name="submit" value="Edit!" class="btn btn-default" id="' + teams[i].id + '">' +
          '</div>' +
        '</form>' +
      '</div>'
    )
  }
}

const loopPokemonOnTeam = function (pokemonTeams) {
  $('#pokemon-team-list').find('.pokemon-team-roster').empty()
  $('#pokemon-team-list').find('.pokemon-team-roster').append(
    '<div class="team-name-header">' +
      '<h4>' + pokemonTeams[0].team.name + '</h4>' +
    '</div>'
  )
  for (let i = 0; i < pokemonTeams.length; i++) {
    const team = pokemonTeams[i]
    console.log(team.pokemon.name)
    $('#pokemon-team-list').find('.pokemon-team-roster').append(
      '<li class="list-inline-item" id="' + team.pokemon.id + '">' +
        '<img class="roster-image" src="' + team.pokemon.image + '">' +
        '<h4>' + team.pokemon.name + '</h4>' +
      '</li>'
    )
  }
}

const noPokemonError = function () {
  $('#pokemon-team-list').find('.pokemon-team-roster').empty()
  $('#pokemon-team-list').find('.pokemon-team-roster').append(
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

const loopCurrentRoster = function (data) {
  console.log(data.pokemon_teams)
  const pokemonTeams = data.pokemon_teams
  $('#team-builder').find('.roster').empty()
  for (let i = 0; i < pokemonTeams.length; i++) {
    const team = pokemonTeams[i]
    console.log(team.pokemon.name)
    $('#team-builder').find('.roster').append(
      '<li class="list-inline-item" id="' + team.pokemon.id + '">' +
        '<img class="roster-image" src="' + team.pokemon.image + '">' +
        '<h4>' + team.pokemon.name + '</h4>' +
      '</li>'
    )
  }
}

module.exports = {
  loopPokemon,
  addPokemon,
  loopTeams,
  loopPokemonOnTeam,
  noPokemonError,
  printTeamName,
  loopCurrentRoster
}
