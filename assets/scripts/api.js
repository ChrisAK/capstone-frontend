'use strict'

const app = require('./app')

const signUp = function (data) {
  console.log(data)
  return $.ajax({
    url: app.host + '/sign-up/',
    method: 'POST',
    data
  })
}

const signIn = function (data) {
  console.log(data)
  return $.ajax({
    url: app.host + '/sign-in/',
    method: 'POST',
    data
  })
}

const signOut = function () {
  return $.ajax({
    method: 'DELETE',
    url: app.host + '/sign-out/' + app.user.id,
    headers: {
      Authorization: 'Token token=' + app.user.token
    }
  })
}

const changePassword = function (data) {
  return $.ajax({
    method: 'PATCH',
    url: app.host + '/change-password/' + app.user.id,
    headers: {
      Authorization: 'Token token=' + app.user.token
    },
    data: data
  })
}

const getPokemon = function () {
  return $.ajax({
    method: 'GET',
    url: app.host + '/pokemons',
    headers: {
      Authorization: 'Token token=' + app.user.token
    }
  })
}

const createTeam = function (teamName) {
  return $.ajax({
    method: 'POST',
    url: app.host + '/teams',
    headers: {
      Authorization: 'Token token=' + app.user.token
    },
    data: {
      'team': {
        'name': teamName,
        'user_id': app.user.id
      }
    }
  })
}

module.exports = {
  signUp,
  signIn,
  signOut,
  changePassword,
  getPokemon,
  createTeam
}
