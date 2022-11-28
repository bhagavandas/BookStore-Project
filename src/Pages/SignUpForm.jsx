import React, { Component } from 'react'
import { BookBar } from '../Components/BookBar'
import SignUpPage from '../LoginSignUP/SignUpPage'


export default class SignUpForm extends Component {
  render() {
    return (
      <div>
         <BookBar/>
        <SignUpPage/>
      </div>
    )
  }
}
