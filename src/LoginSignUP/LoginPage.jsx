import { Card } from '@material-ui/core'
import React, { Component } from 'react'
import { loginUser } from '../Services/bookstore';
import "./login.css";
import axios from 'axios';



export class LoginPage extends Component {
 
  constructor(props) {
    super(props);
    this.state = {
        
        email: '',
        password: ''
        
    }
}

handleEmail = (event) => {
    this.setState({
      email: event.target.value
    })
}


handlePassword= (event) => {
    this.setState({
      password: event.target.value
    })
}

handleLogin = async (e) => {
  let data = {
    email : this.state.email,
    password : this.state.password,
  };
  
  // await loginUser(data).then((res) => {
  //   let message = "";
  //   // if(res.data.statusCode === 200){
  //   // message = "Sign in successfully"
  //   // console.log("response" + res);
  //   localStorage.setItem('token', res);
  //   console.log("working........")
  //   localStorage.getItem('token'+ res)
  //   console.log("not working.......")
  //   console.log("token");
  // })
  console.log("still working........")
  await axios.post("http://localhost:8080/User/login",data).then((response)=>{
    console.log("waiting....." + response.data.obj)
    localStorage.setItem('token',response.data.obj)
      console.log(response.data)}).catch((error)=>{

    //  console.log(error.response.data.message);
  })
 
  alert("Login Successfully")
  
   console.log("token:" + localStorage.getItem('token'))
 }


  render() {
    return (
      <div className='form'>
        <Card className='card'>
        <h1 className='login'>Login to Bookstore</h1>
        <div>
        <label className='emp-name-field' > Email </label><input className='input'  onChange={(event)=>this.handleEmail(event)} value={this.state.email}></input>
        <div>
        <label className='emp-name-field' > Password </label><input className='Pwdinput' onChange={(event)=>this.handlePassword(event)} value={this.state.password}></input></div>
        <div>
        <h5 className='text'>Forgot Password</h5><button className='loginBtn' onClick={this.handleLogin}> Login </button></div>
        </div>
        </Card>
      </div>
    )
  }
}
