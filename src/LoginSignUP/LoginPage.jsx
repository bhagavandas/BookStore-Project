import { Card } from '@material-ui/core'
import React, { Component } from 'react'
import "./login.css";


export class LoginPage extends Component {
 


  render() {
    return (
      <div className='form'>
        <Card className='card'>
        <h1 className='login'>Login</h1>
        <div>
        <label className='emp-name-field' > UserName </label><input></input>
        <div>
        <label className='emp-name-field' > Password </label><input></input></div>
        <div>
        <h5>Forgot Password</h5><button className='emp-name-field' > Login </button></div>
        </div>
        </Card>
      </div>
    )
  }
}
