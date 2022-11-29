import axios from 'axios';

export const loginUser = async(data) => {
   
        await axios.get("http://localhost:8080/User/login", data)
        .then((response) => {
            console.log(response);
        })
        .catch((error) =>{
            // console.log(error);
        })
    
}