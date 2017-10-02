'use strict'

const app = require('./app')

const signUpSuccess = (data) => {
  console.log(data)
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
  console.log(app)
  $('#sign-in').addClass('hidden')
  $('#sign-out').removeClass('hidden')
  $('#sign-in-error').addClass('hidden')
  $('#sign-in-email').val('')
  $('#sign-in-password').val('')
}

const signInError = (error) => {
  console.error(error)
  $('#sign-in-error').removeClass('hidden')
  $('#sign-in-password').val('')
}

const signOutSuccess = () => {
  app.user = null
  console.log(app)
  $('#sign-out').addClass('hidden')
  $('#sign-up').removeClass('hidden')
}

const changePasswordSuccess = () => {
  console.log(app)
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
  showChngPwd
}
