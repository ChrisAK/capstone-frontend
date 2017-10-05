'use strict'

const app = require('./app')
const api = require('./api')
const logic = require('./logic')

const signUpSuccess = (data) => {
  // console.log(data)
  $('#sign-up').addClass('hidden')
  $('#sign-in').removeClass('hidden')
  $('#sign-up-error').addClass('hidden')
  $('#sign-up-email').val('')
  $('#sign-up-password').val('')
  $('#sign-up-password-confirmation').val('')
}

const signUpError = (error) => {
  console.error(error)
  $('#sign-up-error').removeClass('hidden')
  $('#sign-up-email').val('')
  $('#sign-up-password').val('')
  $('#sign-up-password-confirmation').val('')
}

const signInSuccess = (data) => {
  app.user = data.user
  // console.log(app)
  $('#sign-in').addClass('hidden')
  $('#sign-out').removeClass('hidden')
  $('#sign-in-error').addClass('hidden')
  $('#sign-in-email').val('')
  $('#sign-in-password').val('')
  $('#buttons-for-stuff').toggleClass('hidden')
}

const signInError = (error) => {
  console.error(error)
  $('#sign-in-error').removeClass('hidden')
  $('#sign-in-password').val('')
}

const signOutSuccess = () => {
  app.user = null
  // console.log(app)
  $('#sign-out').addClass('hidden')
  $('#sign-up').removeClass('hidden')
  $('#buttons-for-stuff').toggleClass('hidden')
  $('#team-builder').find('.roster').empty()
  $('#pokemon-team-list').find('.pokemon-team-roster').empty()
  $('#team-name').empty()
  $('#pokemon-list').find('.row').empty()
  $('.pokemon-container').addClass('hidden')
  $('#teams-list').find('.row').empty()
  $('#team-builder').addClass('hidden')
}

const changePasswordSuccess = () => {
  // console.log(app)
  $('.pswd-change-message').removeClass('hidden')
  $('.changed').removeClass('hidden')
  $('#change-password-failure').addClass('hidden')
  $('#change-password').addClass('hidden')
  $('#change-pswd-old').val('')
  $('#change-pswd-new').val('')
}

const changePasswordError = (error) => {
  console.error(error)
  $('#change-password-failure').removeClass('hidden')
  $('#change-pswd-old').val('')
  $('#change-pswd-new').val('')
}

const failure = (error) => {
  console.error(error)
}

const hideSignUp = () => {
  $('#sign-up').addClass('hidden')
  $('#sign-in').removeClass('hidden')
  $('#sign-up-error').addClass('hidden')
}

const hideSignIn = () => {
  $('#sign-in').addClass('hidden')
  $('#sign-up').removeClass('hidden')
  $('#sign-in-error').addClass('hidden')
}

const showChngPwd = () => {
  $('#change-password').toggleClass('hidden')
}

const getPokemonSuccess = (data) => {
  $('.pokemon-container').removeClass('hidden')
  logic.loopPokemon(data)
}

const getPokemonFailure = (error) => {
  console.error(error)
}

const createTeamSuccess = (data) => {
  // console.log(data)
  // console.log(data.team)
  // console.log(data.team.name)
  $('#create-team').toggleClass('hidden')
  $('#create-team-name').val('')
  logic.printTeamName(data)
  api.getPokemon()
    .done(getPokemonSuccess)
    .fail(getPokemonFailure)
}

const getTeamsSuccess = (data) => {
  // console.table(data.teams)
  logic.loopTeams(data)
  $('#create-team').addClass('hidden')
  $('#team-name').empty()
  $('#pokemon-team-list').find('.pokemon-team-roster').empty()
  $('#team-builder').find('.roster').empty()
  $('#pokemon-list').find('.row').empty()
  $('.pokemon-container').addClass('hidden')
  $('#team-builder').addClass('hidden')
}

const showCrtTeam = () => {
  $('#create-team').toggleClass('hidden')
  $('#pokemon-team-list').find('.pokemon-team-roster').empty()
  $('#teams-list').find('.row').empty()
  $('#team-name').empty()
  $('#team-builder').find('.roster').empty()
  $('#pokemon-list').find('.row').empty()
  $('.pokemon-container').addClass('hidden')
  $('#team-builder').addClass('hidden')
}

const getPokemonOnTeamSuccess = (data) => {
  // console.table(data)
  const pokemonTeams = data.pokemon_teams
  // console.log(pokemonTeams.length)
  $('#pokemon-team-list').find('.pokemon-team-roster').empty()
  if (pokemonTeams.length > 0) {
    logic.loopPokemonOnTeam(pokemonTeams)
  } else {
    logic.noPokemonError()
  }
}

const deleteTeamSuccess = () => {
  // console.log('Deleted Successfully')
  $('#pokemon-team-list').find('.pokemon-team-roster').empty()
  api.getTeams()
    .done(getTeamsSuccess)
    .fail(failure)
}

const addPokemonToTeamSuccess = (data) => {
  // console.log(data)
  const teamId = data.pokemon_team.team.id
  $('#team-builder').removeClass('hidden')
  api.getPokemonOnTeam(teamId)
    .done(logic.loopCurrentRoster)
    .fail(failure)
}

const addPokemonToTeamFailure = (error) => {
  console.error(error)
}

const editTeamNameSuccess = (data) => {
  // console.log(data)
  $('#pokemon-team-list').find('.pokemon-team-roster').empty()
  api.getTeams()
    .done(getTeamsSuccess)
    .fail(failure)
}

const tooManyPokemon = () => {
  $('#too-many-pokemon').removeClass('hidden').delay(1500).queue(function () {
    $(this).addClass('hidden').dequeue()
  })
}

module.exports = {
  signUpSuccess,
  signUpError,
  signInSuccess,
  signInError,
  signOutSuccess,
  changePasswordSuccess,
  changePasswordError,
  failure,
  hideSignIn,
  hideSignUp,
  showChngPwd,
  createTeamSuccess,
  showCrtTeam,
  getTeamsSuccess,
  getPokemonOnTeamSuccess,
  deleteTeamSuccess,
  addPokemonToTeamFailure,
  addPokemonToTeamSuccess,
  editTeamNameSuccess,
  tooManyPokemon
}
