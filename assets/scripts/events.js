const ui = require('./ui')
const api = require('./api')
const getFormFields = require('../../lib/get-form-fields.js')

const onSignUp = function (event) {
  event.preventDefault()
  // console.log(event)
  const data = getFormFields(event.target)
  // console.log(data)
  api.signUp(data)
    .done(ui.signUpSuccess)
    .fail(ui.signUpError)
}

const onSignIn = function (event) {
  event.preventDefault()
  const data = getFormFields(event.target)
  api.signIn(data)
    .done(ui.signInSuccess)
    .fail(ui.signInError)
}

const onSignOut = function (event) {
  event.preventDefault()
  const data = getFormFields(event.target)
  api.signOut(data)
    .done(ui.signOutSuccess)
    .fail(ui.failure)
}

const onChangePassword = function (event) {
  event.preventDefault()
  const data = getFormFields(event.target)
  api.changePassword(data)
    .done(ui.changePasswordSuccess)
    .fail(ui.changePasswordError)
}

const onCreateTeam = function (event) {
  event.preventDefault()
  // console.log(event)
  const data = getFormFields(event.target)
  const teamName = data.team.name
  // const teamName = $('#create-team-name').val()
  // console.log(teamName)
  api.createTeam(teamName)
    .done(ui.createTeamSuccess)
    .fail(ui.failure)
}

const onDeleteTeam = function (id) {
  api.deleteTeam(id)
    .done(ui.deleteTeamSuccess)
    .fail(ui.failure)
}

const onGetTeams = function (event) {
  event.preventDefault()
  api.getTeams()
    .done(ui.getTeamsSuccess)
    .fail(ui.failure)
}

const onGetPokemonOnTeam = function (id) {
  console.log(id)
  api.getPokemonOnTeam(id)
    .done(ui.getPokemonOnTeamSuccess)
    .fail(ui.failure)
}

const onAddPokemonToTeam = function (teamId, pokemonId) {
  if ($('.roster').children().length < 6) {
    api.addPokemonToTeam(teamId, pokemonId)
      .then(ui.addPokemonToTeamSuccess)
      .fail(ui.addPokemonToTeamFailure)
  } else {
    ui.tooManyPokemon()
  }
}

const onEditTeamName = function (data, id) {
  api.editTeamName(data, id)
    .then(ui.editTeamNameSuccess)
    .fail(ui.failure)
}

const addHandlers = () => {
  $('#sign-up').on('submit', onSignUp)
  $('#sign-in').on('submit', onSignIn)
  $('#sign-out').on('submit', onSignOut)
  $('#change-password').on('submit', onChangePassword)
  $('#oldUser').on('click', ui.hideSignUp)
  $('#newUser').on('click', ui.hideSignIn)
  $('#chngPwd').on('click', ui.showChngPwd)
  $('#create-team').on('submit', onCreateTeam)
  $('#crtTm').on('click', ui.showCrtTeam)
  $('#getTm').on('click', onGetTeams)
  $(document).on('click', '.get-pokemon-on-team', function () {
    const id = $(this).attr('id')
    onGetPokemonOnTeam(id)
  })
  $(document).on('click', '.add-pokemon-to-team', function () {
    const pokemonId = $(this).attr('id')
    const teamId = $('#team-name').find('h2').attr('id')
    console.log(pokemonId)
    console.log(teamId)
    onAddPokemonToTeam(teamId, pokemonId)
  })
  $(document).on('click', '.delete-team', function () {
    const id = $(this).attr('id')
    onDeleteTeam(id)
  })
  $(document).on('submit', '.change-team-name-form', function (event) {
    event.preventDefault()
    const data = getFormFields(event.target)
    const id = $(this).attr('id')
    console.log(data.team.name)
    onEditTeamName(data.team.name, id)
  })
}

module.exports = {
  addHandlers
}
