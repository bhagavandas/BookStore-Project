import React, { Component } from 'react'
import { BookBar } from '../Components/BookBar'
import { LoginPage } from '../LoginSignUP/LoginPage'

export class LoginForm extends Component {
  render() {
    return (
      <div>
        <BookBar/>
        <LoginPage/>
      </div>
    )
  }
}

