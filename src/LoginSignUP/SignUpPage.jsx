import React, { Component } from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Radio from '@mui/material/Radio';
import Checkbox from '@mui/material/Checkbox';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import TextareaAutosize from '@mui/material/TextareaAutosize';
import Avatar from '@mui/material/Avatar';
import './SignUpPage.css';

import axios from 'axios';


class SignUpPage extends Component {

    constructor(props) {
        super(props);
        this.state = {
            firstName: '',
            lastName: '',
            address: '',
            phoneNumber: '',
            email: '',
            password: ''
            
        }
    }

    handleFirstName = (event) => {
        this.setState({
            firstName: event.target.value
        })
    }


    handleLastName= (event) => {
        this.setState({
            lastName: event.target.value
        })
    }

    handleAddress = (event) => {
        this.setState({
            address: event.target.value
        })
    }

    handlePhoneNumber = (event) => {
        this.setState({
            phoneNumber: event.target.value
        })
    }

    handleEmail= (event) => {
        this.setState({
            email: event.target.value
        })
    }

    handlePassword = (event) => {
        this.setState({
            password: event.target.value
        })
    }

    handleSubmit = async (e) => {

        // console.log(this.state);
        
        await axios.post("http://localhost:8080/User/addUser", this.state).then((response)=>{
            console.log(response.data)}).catch((error)=>{

           console.log(error.response.data.message);
           alert("User already exists")
        })
       
        alert("User Added")
    }

    
  
    render() {
        return(
            <div>
                <Card className='Card'>
           
                <CardContent>
                <Typography className="TableTitle" variant="h5" component="div">
                    Registration Form
                </Typography>
                <form className='form'>
                <div className='field_container'>
                
                    <div>
                        <label className='emp-name-field' > First Name </label>
                         <div >
                            <TextField required className='name-box' variant="outlined" onChange={(event)=>this.handleFirstName(event)} value={this.state.firstName} />
                        </div> 
                
                    </div> 
                
                    </div>
                    <div className='field_container'>
                <div>
                <label className='emp-name-field'>Last Name</label>
                <div >
                    <TextField required className='name-box' variant="outlined" onChange={(event)=>this.handleLastName(event)} value={this.state.lastName} />
                 </div> 
               </div></div>
               <div className='field_container'>
               <div>
                <label className='emp-name-field'>Address</label>
                <div >
                    <TextField required className='name-box' variant="outlined" onChange={(event)=>this.handleAddress(event)} value={this.state.address} />
                 </div> 
               </div></div>
               <div className='field_container'>
               <div>
                <label className='emp-name-field'>Phone Number</label>
                <div >
                    <TextField required className='name-box' variant="outlined" onChange={(event)=>this.handlePhoneNumber(event)} value={this.state.phoneNumber} />
                 </div> 
               </div></div>
               <div className='field_container'>
               <div>
                <label className='emp-name-field'>Email</label>
                <div >
                    <TextField required className='name-box' variant="outlined" onChange={(event)=>this.handleEmail(event)} value={this.state.email} />
                 </div> 
               </div></div>
               <div className='field_container'>
               <div>
                <label className='emp-name-field'>Password</label>
                <div >
                    <TextField required className='name-box' variant="outlined" onChange={(event)=>this.handlePassword(event)} value={this.state.password} />
                 </div> 
               </div></div>
               
                

                
                <CardActions className="action_container">
                    <div><Button variant="outlined" className="action_button">Cancel</Button></div>
                    <div>
                    <Button variant="contained" className="submit" onClick={this.handleSubmit}>Submit</Button>
                        <Button variant="outlined" type="reset" className="action_button" onClick={this.reset}>Reset</Button>
                    </div>
                   
                
                </CardActions>
                </form>
                </CardContent>
                </Card>
           
            </div> 
        )
    }
}

export default SignUpPage;